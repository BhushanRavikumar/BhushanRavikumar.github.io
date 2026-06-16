"use client";

import { Reveal } from "@/components/site/reveal";
import { useDialog } from "@/components/site/dialog-provider";
import { experiences } from "@/lib/portfolio-data";

export function Experience() {
  const { openDialog } = useDialog();

  return (
    <section id="experience" className="section">
      <div className="container">
        <Reveal as="header" className="section-header">
          <span className="eyebrow">
            <i className="dot-mark" /> Career
          </span>
          <h2 className="section-title">
            Engineering <br />
            <span className="title-accent">Experience</span>
          </h2>
        </Reveal>

        <ol className="timeline" role="list">
          {experiences.map((exp, i) => (
            <Reveal as="li" className="exp" key={exp.id} delay={i * 0.06}>

              <button
                className="exp-trigger"
                type="button"
                aria-haspopup="dialog"
                onClick={() => openDialog(exp.detail)}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  className="exp-logo"
                  src={exp.logo}
                  alt={`${exp.company} logo`}
                  loading="lazy"
                />
                <div className="exp-body">
                  <div className="exp-head">
                    <div>
                      <h3 className="exp-company">{exp.company}</h3>
                      <p className="exp-role">{exp.role}</p>
                    </div>
                    <span className="exp-dates">{exp.dates}</span>
                  </div>
                  <p className="exp-desc">{exp.summary}</p>
                </div>
                <span className="exp-cue" aria-hidden="true">
                  View details →
                </span>
              </button>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
