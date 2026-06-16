"use client";

import * as React from "react";
import { motion, useReducedMotion, type HTMLMotionProps } from "framer-motion";

const LINKS = [
  { id: "home", label: "Home" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
];

export function Nav() {
  const [open, setOpen] = React.useState(false);
  const [active, setActive] = React.useState("home");
  const shouldReduceMotion = useReducedMotion();

  const intro: HTMLMotionProps<"header"> = shouldReduceMotion
    ? {}
    : {
        initial: { opacity: 0, y: -16 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.5, ease: "easeOut", delay: 0.1 },
      };

  React.useEffect(() => {
    if (!("IntersectionObserver" in window)) return;
    const sections = LINKS.map((l) => document.getElementById(l.id)).filter(
      (el): el is HTMLElement => Boolean(el),
    );
    if (!sections.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: [0, 0.25, 0.5, 0.75] },
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  return (
    <motion.header className="nav-wrap" {...intro}>
      <nav className="nav" aria-label="Primary">
        <a href="#home" className="nav-logo" aria-label="Home">
          <span className="nav-logo-mark">B</span>
          <span className="nav-logo-dot" />
        </a>
        <ul className={`nav-links${open ? " open" : ""}`} id="nav-links">
          {LINKS.map((l) => (
            <li key={l.id}>
              <a
                href={`#${l.id}`}
                className={`nav-link${active === l.id ? " is-active" : ""}`}
                onClick={() => setOpen(false)}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <button
          className="nav-toggle"
          aria-controls="nav-links"
          aria-expanded={open}
          aria-label="Toggle menu"
          onClick={() => setOpen((o) => !o)}
        >
          <span />
          <span />
          <span />
        </button>
      </nav>
    </motion.header>
  );
}
