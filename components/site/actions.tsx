import { Github, Linkedin, Mail, Download } from "lucide-react";

export function Actions() {
  return (
    <div className="actions" aria-label="Quick links">
      <a
        className="action-btn"
        href="https://github.com/BhushanRavikumar"
        aria-label="GitHub"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Github aria-hidden="true" />
      </a>
      <a
        className="action-btn"
        href="https://linkedin.com/in/bhushanrk"
        aria-label="LinkedIn"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Linkedin aria-hidden="true" />
      </a>
      <a
        className="action-btn"
        href="mailto:bhushan.rk26@gmail.com"
        aria-label="Email Bhushan"
      >
        <Mail aria-hidden="true" />
      </a>
      <a
        className="action-btn action-btn--primary"
        href="/assets/Bhushan_Ravikumar_Resume.pdf"
        download="Bhushan_Ravikumar_Resume.pdf"
        aria-label="Download resume (PDF)"
      >
        <Download aria-hidden="true" />
        <span>Resume</span>
      </a>
    </div>
  );
}
