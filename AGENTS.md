# Portfolio (PengfanZ.github.io) — Agent Guide

Shared instructions for coding agents (Codex reads this file; Claude Code reads it through `CLAUDE.md`). Keep project knowledge here so both stay in sync.

Personal portfolio site: React 19 + TypeScript + Vite + Mantine, CSS modules. Deployed by `.github/workflows/deploy-pages.yml` to GitHub Pages on every push to `main`. Cloudflare Web Analytics beacon is initialized once after mount (`src/analytics.ts`) so it never blocks first render.

## Layout

- `src/data.ts` — all site content (projects, experience, education). Edit content here, not in section components.
- `src/sections/` — one component + CSS module per page section (Hero, About, Work, Experience, Education, Skills, Running/Strava, Contact).
- `src/components/`, `src/layout/`, `src/hooks/useHashNavigation.ts` — shared UI, header/footer, hash navigation.
- `public/images`, `public/resources` — static assets.

## Checks

```bash
npm run build   # tsc -b && vite build
npm run lint
```

## Rules

- Content must be factual and supplied or confirmed by the site owner. Do not inflate impact or invent metrics.
- Work on a feature branch and open a PR; pushing to `main` deploys publicly, so do that only when the owner asks.
- Check both desktop and mobile layouts for visible changes.
