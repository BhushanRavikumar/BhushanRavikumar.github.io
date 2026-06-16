"use client";

import * as React from "react";
import { ChevronLeft, ChevronRight, Github, ArrowUpRight } from "lucide-react";

/* ---------- Dialog header variants ---------- */

export function DialogHeadLogo({
  logo,
  title,
  role,
  dates,
}: {
  logo: string;
  title: string;
  role: string;
  dates: string;
}) {
  return (
    <header className="dialog-head">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={logo} alt="" className="dialog-logo" />
      <div>
        <h2 id="exp-dialog-title">{title}</h2>
        <p className="dialog-role">{role}</p>
        <p className="dialog-dates">{dates}</p>
      </div>
    </header>
  );
}

export function DialogHeadThumb({
  variant,
  label,
  title,
  tags,
}: {
  variant: 1 | 2 | 3;
  label: string;
  title: string;
  tags: string[];
}) {
  return (
    <header className="dialog-head">
      <div className={`dialog-thumb thumb-${variant}`} aria-hidden="true">
        <div className="thumb-glow" />
        <div className="thumb-grid" />
        <span className="dialog-thumb-label">{label}</span>
      </div>
      <div>
        <h2 id="exp-dialog-title">{title}</h2>
        <ul className="dialog-tags">
          {tags.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
      </div>
    </header>
  );
}

/* ---------- Sections / chips / links ---------- */

export function Section({
  title,
  children,
  className,
}: {
  title: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section className="dialog-section">
      <h3>{title}</h3>
      {className ? <ul className={className}>{children}</ul> : children}
    </section>
  );
}

export function Bullets({ children }: { children: React.ReactNode }) {
  return <ul>{children}</ul>;
}

export function Chips({ items }: { items: string[] }) {
  return (
    <ul className="dialog-chips">
      {items.map((i) => (
        <li key={i}>{i}</li>
      ))}
    </ul>
  );
}

export function GithubLink({ href, label }: { href: string; label: string }) {
  return (
    <section className="dialog-section">
      <h3>Links</h3>
      <ul className="dialog-links">
        <li>
          <a href={href} target="_blank" rel="noopener noreferrer">
            <Github aria-hidden="true" />
            <span>{label}</span>
            <span className="dialog-link-arrow" aria-hidden="true">
              <ArrowUpRight size={14} />
            </span>
          </a>
        </li>
      </ul>
    </section>
  );
}

/* ---------- Hero media ---------- */

export function DialogHero({ src, alt }: { src: string; alt: string }) {
  return (
    <figure className="dialog-hero">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt={alt} />
    </figure>
  );
}

type Slide =
  | { type: "image"; src: string; alt: string }
  | { type: "video"; src: string; label: string };

export function Carousel({ slides }: { slides: Slide[] }) {
  const [index, setIndex] = React.useState(0);
  const trackRef = React.useRef<HTMLUListElement>(null);
  const videoRefs = React.useRef<Array<HTMLVideoElement | null>>([]);
  const touchStartX = React.useRef<number | null>(null);
  const max = slides.length;

  const go = React.useCallback(
    (delta: number) => setIndex((i) => (i + delta + max) % max),
    [max],
  );

  React.useEffect(() => {
    // Pause any non-active videos when the active slide changes.
    videoRefs.current.forEach((v, i) => {
      if (v && i !== index && !v.paused) v.pause();
    });
  }, [index]);

  return (
    <figure
      className="dialog-hero dialog-hero--carousel"
      onKeyDown={(e) => {
        if (e.key === "ArrowLeft") {
          e.preventDefault();
          go(-1);
        } else if (e.key === "ArrowRight") {
          e.preventDefault();
          go(1);
        }
      }}
    >
      <ul
        ref={trackRef}
        className="carousel-slides"
        role="list"
        style={{ transform: `translateX(-${index * 100}%)` }}
        onTouchStart={(e) => {
          touchStartX.current = e.touches[0].clientX;
        }}
        onTouchEnd={(e) => {
          if (touchStartX.current == null) return;
          const dx = e.changedTouches[0].clientX - touchStartX.current;
          if (Math.abs(dx) > 40) go(dx > 0 ? -1 : 1);
          touchStartX.current = null;
        }}
      >
        {slides.map((s, i) => (
          <li className="carousel-slide" key={i}>
            {s.type === "image" ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={s.src} alt={s.alt} />
            ) : (
              <video
                ref={(el) => {
                  videoRefs.current[i] = el;
                }}
                src={s.src}
                controls
                preload="metadata"
                muted
                playsInline
                aria-label={s.label}
              />
            )}
          </li>
        ))}
      </ul>

      <button
        type="button"
        className="carousel-nav carousel-prev"
        aria-label="Previous slide"
        onClick={() => go(-1)}
      >
        <ChevronLeft aria-hidden="true" />
      </button>
      <button
        type="button"
        className="carousel-nav carousel-next"
        aria-label="Next slide"
        onClick={() => go(1)}
      >
        <ChevronRight aria-hidden="true" />
      </button>

      <ol className="carousel-dots" aria-label="Slide selector">
        {slides.map((_, i) => (
          <li key={i}>
            <button
              type="button"
              className={i === index ? "is-active" : undefined}
              aria-label={`Slide ${i + 1}`}
              onClick={() => setIndex(i)}
            />
          </li>
        ))}
      </ol>
    </figure>
  );
}
