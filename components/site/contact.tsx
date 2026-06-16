"use client";

import * as React from "react";
import { Reveal } from "@/components/site/reveal";

const FORM_ACTION = "https://formspree.io/f/YOUR_FORM_ID";
const FALLBACK_EMAIL = "bhushravikumar@gmail.com";

export function Contact() {
  const [status, setStatus] = React.useState("");
  const [isError, setIsError] = React.useState(false);
  const [busy, setBusy] = React.useState(false);

  const isFormspreeReady =
    /^https?:\/\//i.test(FORM_ACTION) && !/YOUR_FORM_ID/i.test(FORM_ACTION);

  const setMessage = (msg: string, error = false) => {
    setStatus(msg);
    setIsError(error);
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    // Honeypot — silently drop bot submissions.
    if ((data.get("_gotcha") || "").toString().trim() !== "") return;

    const name = (data.get("name") || "").toString().trim();
    const email = (data.get("email") || "").toString().trim();
    const topic = (data.get("topic") || "").toString().trim();
    const message = (data.get("message") || "").toString().trim();

    if (!name || !email || !message) {
      setMessage("Please fill out name, email, and a short message.", true);
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setMessage(
        "That email address doesn't look right — mind double-checking?",
        true,
      );
      return;
    }

    if (!isFormspreeReady) {
      const subject = `Portfolio inquiry from ${name}`;
      const bodyLines = [
        `Name: ${name}`,
        `Email: ${email}`,
        topic ? `Inquiry type: ${topic}` : null,
        "",
        message,
      ].filter((l): l is string => l !== null);
      window.location.href =
        `mailto:${FALLBACK_EMAIL}` +
        `?subject=${encodeURIComponent(subject)}` +
        `&body=${encodeURIComponent(bodyLines.join("\n"))}`;
      setMessage(
        `Opening your email app… If nothing happens, send a note to ${FALLBACK_EMAIL}.`,
      );
      return;
    }

    setMessage("Sending…");
    setBusy(true);
    try {
      const res = await fetch(FORM_ACTION, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setMessage("Thanks! Your message is on its way — I'll be in touch soon.");
        form.reset();
      } else {
        let msg = "Something went wrong sending the message.";
        try {
          const j = await res.json();
          if (j && Array.isArray(j.errors) && j.errors[0]?.message)
            msg = j.errors[0].message;
        } catch {
          /* ignore */
        }
        setMessage(`${msg} You can email me directly at ${FALLBACK_EMAIL}.`, true);
      }
    } catch {
      setMessage(
        `Network issue — please try again in a moment. You can email me directly at ${FALLBACK_EMAIL}.`,
        true,
      );
    } finally {
      setBusy(false);
    }
  };

  return (
    <section id="contact" className="section section--contact">
      <div className="container">
        <Reveal as="header" className="section-header section-header--center">
          <span className="eyebrow">
            <i className="dot-mark" /> Contact
          </span>
          <h2 className="section-title section-title--xl">
            Let&rsquo;s work <br />
            <span className="title-accent">together</span>
          </h2>
          <p className="contact-sub">
            Hiring for a robotics, embedded, or test-engineering role — or just
            want to chat about an interesting problem? Drop a message and I&rsquo;ll
            get back to you within a couple of days. Prefer email? Reach me at{" "}
            <a className="contact-mail" href={`mailto:${FALLBACK_EMAIL}`}>
              {FALLBACK_EMAIL}
            </a>
            .
          </p>
        </Reveal>

        <Reveal as="form" className="contact-form" onSubmit={onSubmit} noValidate>
          <div className="field-row">
            <div className="field">
              <label htmlFor="f-name">Name</label>
              <input id="f-name" name="name" type="text" placeholder="Jane Doe" required />
            </div>
            <div className="field">
              <label htmlFor="f-email">Email</label>
              <input id="f-email" name="email" type="email" placeholder="jane@email.com" required />
            </div>
          </div>

          <div className="field">
            <label htmlFor="f-topic">Inquiry type</label>
            <select id="f-topic" name="topic" defaultValue="">
              <option value="">Select…</option>
              <option>Full-time role</option>
              <option>Internship / co-op</option>
              <option>Contract or consulting</option>
              <option>Research collaboration</option>
              <option>Just saying hi</option>
            </select>
          </div>

          <div className="field">
            <label htmlFor="f-msg">Message</label>
            <textarea
              id="f-msg"
              name="message"
              rows={5}
              placeholder="Tell me about your project…"
              required
            />
          </div>

          <input type="hidden" name="_subject" value="New message from your portfolio site" />
          <input
            type="text"
            name="_gotcha"
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
            style={{
              position: "absolute",
              left: "-9999px",
              opacity: 0,
              pointerEvents: "none",
            }}
          />

          <button className="btn btn-primary" type="submit" disabled={busy}>
            <span className="btn-label">{busy ? "Sending…" : "Send message"}</span>
            <span className="btn-arrow">→</span>
          </button>
          <p
            className="form-status"
            id="form-status"
            role="status"
            aria-live="polite"
            style={isError ? { color: "#ff8a8a" } : undefined}
          >
            {status}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
