"use client";

import { Reveal } from "@/components/site/reveal";
import { useDialog } from "@/components/site/dialog-provider";
import {
  featuredProjects,
  otherProjects,
  type Project,
} from "@/lib/portfolio-data";

function ProjectCard({ project }: { project: Project }) {
  const { openDialog } = useDialog();
  return (
    <Reveal
      as="button"
      className="project-card project-trigger"
      type="button"
      aria-haspopup="dialog"
      onClick={() => openDialog(project.detail)}
    >
      <div
        className={`project-thumb thumb-${project.thumbVariant}${
          project.image ? " has-image" : ""
        }`}
      >
        {project.image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            className="thumb-image"
            src={project.image.src}
            alt={project.image.alt}
            loading="lazy"
          />
        ) : null}
        <div className="thumb-glow" />
        <div className="thumb-grid" />
        <div className="thumb-label">{project.number}</div>
      </div>
      <div className="project-body">
        <div className="project-meta">
          {project.tags.map((t) => (
            <span className="tag" key={t}>
              {t}
            </span>
          ))}
        </div>
        <h3 className="project-title">{project.title}</h3>
        <p className="project-desc">{project.summary}</p>
        <span className="project-cue">View details →</span>
      </div>
    </Reveal>
  );
}

export function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <Reveal as="header" className="section-header">
          <span className="eyebrow">
            <i className="dot-mark" /> Selected work
          </span>
          <h2 className="section-title">
            Featured <br />
            <span className="title-accent">Projects</span>
          </h2>
        </Reveal>

        <div className="project-grid">
          {featuredProjects.map((p) => (
            <ProjectCard project={p} key={p.id} />
          ))}
        </div>

        <Reveal as="header" className="subsection-header">
          <span className="eyebrow">
            <i className="dot-mark" /> More work
          </span>
          <h3 className="subsection-title">
            Other <span className="title-accent">Projects</span>
          </h3>
        </Reveal>

        <div className="project-grid">
          {otherProjects.map((p) => (
            <ProjectCard project={p} key={p.id} />
          ))}
        </div>
      </div>
    </section>
  );
}
