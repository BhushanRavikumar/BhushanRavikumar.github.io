/* =========================================================
   Bhushan Ravikumar — Portfolio interactions
   ========================================================= */

(() => {
  "use strict";

  // ---------- Footer year ----------
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // ---------- Mobile nav toggle ----------
  const navToggle = document.querySelector(".nav-toggle");
  const navLinks = document.getElementById("nav-links");
  if (navToggle && navLinks) {
    navToggle.addEventListener("click", () => {
      const open = navLinks.classList.toggle("open");
      navToggle.setAttribute("aria-expanded", String(open));
    });
    navLinks.addEventListener("click", (e) => {
      if (e.target.matches("a")) {
        navLinks.classList.remove("open");
        navToggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  // ---------- Reveal on scroll ----------
  const revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && revealEls.length) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    revealEls.forEach((el) => io.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add("is-visible"));
  }

  // ---------- Animated stat counters ----------
  const counters = document.querySelectorAll(".stat-num");
  const animateCounter = (el) => {
    const target = parseInt(el.dataset.count, 10) || 0;
    const duration = 1400;
    const start = performance.now();
    const tick = (now) => {
      const t = Math.min((now - start) / duration, 1);
      // ease-out cubic
      const eased = 1 - Math.pow(1 - t, 3);
      const value = Math.round(target * eased);
      el.textContent = `+${value}`;
      if (t < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  };
  if ("IntersectionObserver" in window && counters.length) {
    const cio = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateCounter(entry.target);
            cio.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );
    counters.forEach((el) => cio.observe(el));
  } else {
    counters.forEach(animateCounter);
  }

  // ---------- Marquee: duplicate content for seamless loop ----------
  document.querySelectorAll(".marquee-track").forEach((track) => {
    track.innerHTML += track.innerHTML;
  });

  // ---------- Scrollspy: active nav link ----------
  const sections = ["home", "experience", "projects", "skills"]
    .map((id) => document.getElementById(id))
    .filter(Boolean);
  const linkMap = new Map();
  document.querySelectorAll(".nav-link").forEach((link) => {
    const href = link.getAttribute("href");
    if (href && href.startsWith("#")) linkMap.set(href.slice(1), link);
  });

  const setActive = (id) => {
    linkMap.forEach((link, key) => {
      link.classList.toggle("is-active", key === id);
    });
  };

  if ("IntersectionObserver" in window && sections.length) {
    const sio = new IntersectionObserver(
      (entries) => {
        // pick the entry most in-view
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: [0, 0.25, 0.5, 0.75] }
    );
    sections.forEach((s) => sio.observe(s));
  }

  // ---------- Contact form ----------
  const form = document.getElementById("contact-form");
  const status = document.getElementById("form-status");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const data = new FormData(form);
      const name = (data.get("name") || "").toString().trim();
      const email = (data.get("email") || "").toString().trim();
      const message = (data.get("message") || "").toString().trim();

      if (!name || !email || !message) {
        status.textContent = "Please fill out the required fields.";
        status.style.color = "#ff8a8a";
        return;
      }
      const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
      if (!emailOk) {
        status.textContent = "Please enter a valid email address.";
        status.style.color = "#ff8a8a";
        return;
      }

      status.style.color = "";
      status.textContent = "Thanks! Your message has been queued — I'll be in touch soon.";
      form.reset();
    });
  }

  // ---------- Detail modal dialog (shared by experience + projects) ----------
  const dialog = document.getElementById("exp-dialog");
  const dialogContent = dialog ? dialog.querySelector(".dialog-content") : null;
  const dialogClose = dialog ? dialog.querySelector(".dialog-close") : null;

  // Initialize a carousel inside the freshly-cloned dialog content.
  const initCarousel = (root) => {
    const track = root.querySelector(".carousel-slides");
    const slides = Array.from(root.querySelectorAll(".carousel-slide"));
    const prev = root.querySelector(".carousel-prev");
    const next = root.querySelector(".carousel-next");
    const dotButtons = Array.from(root.querySelectorAll(".carousel-dots button"));
    if (!track || slides.length === 0) return;
    let index = 0;
    const max = slides.length;

    const update = () => {
      track.style.transform = `translateX(-${index * 100}%)`;
      dotButtons.forEach((d, i) => d.classList.toggle("is-active", i === index));
      // pause any non-active video
      slides.forEach((s, i) => {
        const v = s.querySelector("video");
        if (v && i !== index && !v.paused) v.pause();
      });
    };

    const go = (delta) => {
      index = (index + delta + max) % max;
      update();
    };

    if (prev) prev.addEventListener("click", () => go(-1));
    if (next) next.addEventListener("click", () => go(1));
    dotButtons.forEach((d, i) =>
      d.addEventListener("click", () => {
        index = i;
        update();
      })
    );
    root.addEventListener("keydown", (e) => {
      if (e.key === "ArrowLeft") { e.preventDefault(); go(-1); }
      else if (e.key === "ArrowRight") { e.preventDefault(); go(1); }
    });
    // simple touch swipe
    let touchStartX = null;
    track.addEventListener("touchstart", (e) => { touchStartX = e.touches[0].clientX; }, { passive: true });
    track.addEventListener("touchend", (e) => {
      if (touchStartX == null) return;
      const dx = e.changedTouches[0].clientX - touchStartX;
      if (Math.abs(dx) > 40) go(dx > 0 ? -1 : 1);
      touchStartX = null;
    });

    update();
  };

  const openDialogFromTemplate = (selector) => {
    if (!dialog || !dialogContent) return;
    const tpl = document.querySelector(selector);
    if (!tpl) return;
    dialogContent.replaceChildren(tpl.content.cloneNode(true));
    dialogContent.scrollTop = 0;
    // Initialize any carousels in the freshly-cloned content
    dialogContent.querySelectorAll("[data-carousel]").forEach(initCarousel);
    dialog.showModal();
    document.body.classList.add("dialog-open");
    requestAnimationFrame(() => dialog.classList.add("is-open"));
  };

  const closeDialog = () => {
    if (!dialog || !dialog.open) return;
    // Pause any playing videos so audio stops as the dialog closes
    dialog.querySelectorAll("video").forEach((v) => v.pause());
    dialog.classList.remove("is-open");
    const onEnd = () => {
      dialog.removeEventListener("transitionend", onEnd);
      dialog.close();
      document.body.classList.remove("dialog-open");
    };
    dialog.addEventListener("transitionend", onEnd);
    // safety fallback if transitionend doesn't fire
    setTimeout(() => {
      if (dialog.open) {
        dialog.close();
        document.body.classList.remove("dialog-open");
      }
    }, 400);
  };

  document.querySelectorAll(".exp-trigger").forEach((btn) => {
    btn.addEventListener("click", () => {
      const id = btn.getAttribute("data-exp");
      if (id) openDialogFromTemplate(`template[data-exp-template="${id}"]`);
    });
  });

  document.querySelectorAll(".project-trigger").forEach((btn) => {
    btn.addEventListener("click", () => {
      const id = btn.getAttribute("data-project");
      if (id) openDialogFromTemplate(`template[data-project-template="${id}"]`);
    });
  });

  if (dialog) {
    if (dialogClose) dialogClose.addEventListener("click", closeDialog);
    // click outside the content (i.e. on the backdrop area inside the dialog box) closes it
    dialog.addEventListener("click", (e) => {
      if (e.target === dialog) closeDialog();
    });
    // intercept native ESC close so we can run our exit animation
    dialog.addEventListener("cancel", (e) => {
      e.preventDefault();
      closeDialog();
    });
  }

  // ---------- Subtle parallax on hero glow (mouse) ----------
  const hero = document.querySelector(".hero");
  if (hero && window.matchMedia("(pointer: fine)").matches) {
    hero.addEventListener("mousemove", (e) => {
      const rect = hero.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      hero.style.setProperty("--mx", `${x * 20}px`);
      hero.style.setProperty("--my", `${y * 20}px`);
    });
  }
})();
