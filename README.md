# Bhushan Ravikumar — Portfolio

A fast, dark-themed personal portfolio, rebuilt on **Next.js (App Router) +
TypeScript + Tailwind CSS v4**, with a **shadcn**-style project structure. The
hero sits over an animated Three.js dot-grid background (`DottedSurface`).

## Stack

- **Next.js 15** (App Router) — static-exported (`output: "export"`) for GitHub Pages
- **TypeScript**
- **Tailwind CSS v4** — utility classes (theme + utilities layers; the portfolio's
  hand-tuned CSS lives in `app/globals.css`)
- **shadcn structure** — `components.json`, `@/lib/utils` (`cn`), `@/components/ui`
- **three** + **next-themes** — power the `DottedSurface` background
- **lucide-react** — icons
- **GitHub Actions** — builds and deploys on every push to `main`

## Prerequisites

This project now requires **Node.js 18.18+ (20 LTS recommended)** and npm, which
were **not installed** on the original authoring machine. Install Node first:

- Download from <https://nodejs.org> (LTS), or
- Windows (winget): `winget install OpenJS.NodeJS.LTS`

Verify:

```bash
node --version
npm --version
```

## Local development

```bash
npm install      # install dependencies (generates package-lock.json)
npm run dev      # start the dev server at http://localhost:3000
npm run build    # produce the static site in ./out
```

> Tip: after the first `npm install`, commit the generated `package-lock.json`,
> then you can switch the CI install step from `npm install` to `npm ci`.

## Project structure

```
app/
  layout.tsx        # fonts, metadata, ThemeProvider, globals.css
  page.tsx          # assembles the page + DottedSurface background
  globals.css       # Tailwind import + ported portfolio styles + theme tokens
components/
  theme-provider.tsx
  ui/
    dotted-surface.tsx       # the integrated component (three + next-themes)
    dotted-surface-demo.tsx  # standalone demo from the component source
  site/                      # portfolio sections (nav, hero, projects, …)
lib/
  utils.ts          # cn() helper
  portfolio-data.tsx# experience + project content (cards + modal details)
public/
  assets/           # images, videos, logos, resume (served from /assets/…)
legacy/             # original static HTML/CSS/JS, kept for reference
```

## The DottedSurface component

Integrated per the shadcn flow at `@/components/ui/dotted-surface.tsx`. It renders
a `fixed inset-0 -z-1` Three.js point field that animates with layered sine waves
and recolors based on the active `next-themes` theme (light dots on the dark
theme). It's mounted once in `app/page.tsx` as the page background.

Dependencies it pulls in: `three`, `@types/three`, `next-themes`, plus the shadcn
essentials (`clsx`, `tailwind-merge` for `cn`).

## Editing content

| What | Where |
| ---- | ----- |
| Experience cards + modal detail | `lib/portfolio-data.tsx` (`experiences`) |
| Project cards + modal detail | `lib/portfolio-data.tsx` (`featuredProjects`, `otherProjects`) |
| Hero copy / stats | `components/site/hero.tsx` |
| Marquee terms | `components/site/marquee.tsx` |
| Social / resume links | `components/site/actions.tsx`, `components/site/footer.tsx` |
| Contact form endpoint | `components/site/contact.tsx` (`FORM_ACTION`) |
| Color tokens / design | `app/globals.css` (`:root`) |
| Images / videos / resume | `public/assets/` |

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which runs
`npm install`, `npm run build` (static export to `./out`), and publishes to
GitHub Pages. In the repo: **Settings → Pages → Source → GitHub Actions**.

## License

Personal portfolio code — feel free to fork and adapt for your own use.
