# AGENTS.md

## Build & Dev

- `npm run dev` — runs `generate:stories` then `next dev`
- `npm run build` — runs `generate:stories` then `next build` (SSG export)
- `npm run lint` — runs `next lint`
- No test suite, no typecheck npm script, no formatter.
- `tsconfig.json` has `strict: true`; use `npx tsc --noEmit` if you need typechecking.

## Generated stories

`scripts/generate-pdf-index.mjs` scans `public/pdfs/stories/` for PDFs, extracts cover images via `mupdf`, and writes `src/data/generated-stories.ts`. This file is **gitignored** and **auto-regenerated** on every `dev`/`build`. The homepage (`app/page.tsx`) imports it and will error if missing. PDF naming: `YYYY-MM-DD-slug-name.pdf`.

## Data split

| Directory | Contents | Tracked |
|---|---|---|
| `data/` | Static example data (books, music, timeline, sample stories) | Yes |
| `src/data/` | Auto-generated story data from PDFs | **No** (gitignored) |

## Import paths

`@/*` maps to project root (`./*`), not `src/`. Generated stories are `@/src/data/generated-stories`.

## Architecture

- Next.js 14 App Router, SSG — `generateStaticParams` in `app/stories/[slug]/page.tsx`
- `'use client'` only in `TtsPlayer` and `AnimationPlayer`
- TTS uses browser `SpeechSynthesis` API, English only (`en-US`), rate 0.85
- Vercel auto-deploys `main` branch; GH Actions validates build on push/PR (no deploy)

## Tailwind

Custom color tokens: `sky`, `warm`, `coral`, `blush`, `grass` — each with `light`, `DEFAULT`, `dark`. Custom classes: `card-shadow`, `card-hover` (defined in `app/globals.css`). Font: `Noto Sans SC` (Chinese).

## Avoid

`npm run commit` — stages all files, commits "update", force-pushes to main. Personal convenience script; do not use in automated workflows.
