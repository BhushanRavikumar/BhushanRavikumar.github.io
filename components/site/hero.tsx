"use client";

import * as React from "react";
import { Reveal } from "@/components/site/reveal";
import { StatCounter } from "@/components/site/stat-counter";

export function Hero() {
  const heroRef = React.useRef<HTMLElement>(null);

  React.useEffect(() => {
    const hero = heroRef.current;
    if (!hero || !window.matchMedia("(pointer: fine)").matches) return;
    const onMove = (e: MouseEvent) => {
      const rect = hero.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      hero.style.setProperty("--mx", `${x * 20}px`);
      hero.style.setProperty("--my", `${y * 20}px`);
    };
    hero.addEventListener("mousemove", onMove);
    return () => hero.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <section id="home" className="hero" ref={heroRef}>
      <div className="container">
        <Reveal className="hero-intro">
          <div className="avatar">
            <div className="avatar-ring" />
            <div className="avatar-inner">BR</div>
          </div>
          <div>
            <p className="hero-name">Bhushan Ravikumar</p>
            <p className="hero-sub">
              Bracco Medical Technologies · MS Robotics, University of Minnesota.
            </p>
          </div>
        </Reveal>

        <Reveal as="h1" className="hero-title" aria-label="System Test Engineer">
          <span className="line">
            <span className="line-inner">SYSTEM</span>
          </span>
          <span className="line">
            <span className="line-inner">TEST</span>
          </span>
          <span className="line">
            <span className="line-inner">ENGINEER</span>
          </span>
        </Reveal>

        <div className="hero-meta">
          <Reveal as="p" className="hero-blurb">
            I&rsquo;m a robotics-trained test and R&amp;D engineer who likes
            turning messy electromechanical problems into reliable systems.
            I&rsquo;ve built test rigs, automation GUIs, firmware tools, and
            sensor-based healthcare devices, with measurable wins in test time,
            validation, and performance. Basically, I&rsquo;m strongest where
            hardware, software, data, and &ldquo;why is this not working?&rdquo;
            all collide.
          </Reveal>

          <Reveal as="ul" className="stats" role="list">
            <li className="stat">
              <a
                className="stat-link"
                href="#experience"
                aria-label="Years of experience — jump to Experience section"
              >
                <StatCounter target={3} />
                <span className="stat-label">
                  Years of
                  <br />
                  experience
                </span>
              </a>
            </li>
            <li className="stat">
              <a
                className="stat-link"
                href="#projects"
                aria-label="Featured projects — jump to Projects section"
              >
                <StatCounter target={3} />
                <span className="stat-label">
                  Featured
                  <br />
                  projects
                </span>
              </a>
            </li>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
