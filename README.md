# Bhushan Ravikumar — Portfolio

A fast, dark-themed personal portfolio inspired by the Sawad Framer template.
Built with hand-crafted **HTML / CSS / JavaScript** — zero build step,
zero runtime dependencies.

## Stack

- **HTML5** — semantic, accessible markup
- **CSS3** — custom properties, grid, container queries, scroll-driven reveals
- **Vanilla JS** — IntersectionObserver-driven reveals, animated counters,
  scrollspy, mobile nav, marquee duplication, contact-form validation
- **Google Fonts** — Inter + Space Grotesk
- **GitHub Actions** — auto-deploys on every push to `main`

## Sections

1. Sticky pill navigation with scrollspy
2. Hero with animated profile, headline reveal, and live stat counters
3. Dual-direction marquee (specialties + frameworks)
4. Experience timeline (3 entries)
5. Recent Projects (3 cards, replace with real work)
6. Core Skills grid (6 cards, inline SVG icons)
7. Let's-work-together contact form (client-side validated)
8. Footer with links + socials

## Local preview

Just open `index.html` in a browser. Or, for a quick local server:

```bash
# any one of these works
python -m http.server 8080
npx serve .
```

Then visit <http://localhost:8080>.

## Replacing placeholder content

| What                     | Where                              |
| ------------------------ | ---------------------------------- |
| Name / role / blurb      | `index.html` — hero section        |
| Stats (years/projects)   | `index.html` — `data-count` attrs  |
| Project cards            | `index.html` — `#projects` section |
| Experience summary cards | `index.html` — `#experience` list  |
| Experience modal content | `index.html` — `<template data-exp-template="…">` blocks |
| Company logos            | `assets/` folder — referenced by `<img class="exp-logo">` |
| Skills                   | `index.html` — `#skills` grid      |
| Social / footer links    | `index.html` — `<footer>`          |
| Color tokens / accents   | `styles.css` — `:root`             |

## Deployment

Pushing to `main` automatically publishes via GitHub Actions
(`.github/workflows/deploy.yml`). To enable:

1. In the repo on GitHub, go to **Settings → Pages**.
2. Set **Source** to **GitHub Actions**.
3. Push to `main` — the workflow handles the rest.

## License

Personal portfolio code — feel free to fork and adapt for your own use.
