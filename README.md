# Recaply Marketing Site

Next.js App Router marketing site for [getrecaply.com](https://getrecaply.com).

## Stack

- Next.js 16 with App Router
- TypeScript
- Tailwind CSS
- Static export via `output: 'export'`
- DM Sans (body), DM Serif Display (headings / gold italic accents), JetBrains Mono (eyebrow labels) via `next/font/google`

## Scripts

```bash
npm run dev
npm run build
npm run lint
```

This repo runs ESLint via `eslint.config.mjs` and `eslint-config-next` (`npm run lint`).

## Structure

- `app/layout.tsx` — metadata, fonts, and global shell
- `app/page.tsx` — single-page landing page composition and JSON-LD
- `app/components/` — `Nav`, `Hero`, `ProblemSection`, `HowItWorks`, `WhyAudio`, `Outcomes`, `FounderQuote`, `CTA`, `Footer`, `PhoneShell`
- `app/globals.css` — Tailwind entrypoint and Recaply design system
- `app/robots.ts` — static robots metadata route
- `app/sitemap.ts` — static sitemap metadata route
- `next.config.js` — static export configuration
