"use client";

import { Github, Linkedin, Mail, Download } from "lucide-react";
import { motion, useReducedMotion, type HTMLMotionProps } from "framer-motion";

export function Actions() {
  const shouldReduceMotion = useReducedMotion();
  const intro: HTMLMotionProps<"div"> = shouldReduceMotion
    ? {}
    : {
        initial: { opacity: 0, y: -16 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.5, ease: "easeOut", delay: 0.18 },
      };

  return (
    <motion.div className="actions" aria-label="Quick links" {...intro}>
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
    </motion.div>
  );
}
