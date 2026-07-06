# AGENTS.md

## Build & Dev

- `npm run dev` — always runs `generate:stories` first, then starts Next.js dev server
- `npm run build` — runs `generate:stories` then `next build` (SSG export)
- `npm run lint` — runs `next lint`

There is no typecheck script, no test suite, no formatter config.

## Code generation: stories from PDFs

`scripts/generate-pdf-index.mjs` scans `public/pdfs/stories/` for PDFs, extracts covers via `mupdf`, and writes `src/data/generated-stories.ts`. This file is **gitignored** and **auto-regenerated** on every `dev`/`build`.

PDF naming: `YYYY-MM-DD-slug-name.pdf` (date + hyphen + slug, lowercase, hyphen-separated).

After adding PDFs, either run `npm run generate:stories` manually or rely on `dev`/`build`.

## Directory conventions

| Directory | Purpose | Git-tracked |
|---|---|---|
| `data/` | Static example data (stories, music, books, timeline) | Yes |
| `src/data/` | Auto-generated story data | **No** (gitignored) |
| `app/` | Next.js App Router pages | Yes |
| `components/` | Shared React components | Yes |
| `scripts/` | Build scripts (.mjs) | Yes |
| `public/pdfs/stories/` | Source PDFs | Yes |
| `public/images/covers/` | Story cover images (manual + auto-generated) | Yes |
| `public/movies/` | HTML animation files (iframe embed) | Yes |

## Import paths

`@/*` maps to `./*` (project root). Generated stories are imported as `@/src/data/generated-stories`.

## Architecture notes

- Next.js 14 App Router with **SSG** — `generateStaticParams` in `app/stories/[slug]/page.tsx` uses the generated stories array
- `app/page.tsx` imports from **both** `data/` (static) and `src/data/` (generated) — the homepage will error if `src/data/generated-stories.ts` doesn't exist
- Components use `'use client'` only where needed (TtsPlayer, AnimationPlayer)
- TTS uses browser `SpeechSynthesis` API, English only, rate 0.85

## Tailwind conventions

Custom color tokens: `sky`, `warm`, `coral`, `blush`, `grass` — each with `light`, `DEFAULT`, `dark` (`bg-sky-light`, `text-warm-dark`, etc.).

Custom CSS classes: `card-shadow`, `card-hover` (defined in `app/globals.css`).

## CI

`.github/workflows/validate-build.yml` runs `npm ci && npm run generate:stories && npm run build` on push/PR to `main`. Does NOT deploy — Vercel handles deployment automatically.

## npm scripts caveat

The `commit` script (`npm run commit`) auto-generates stories, stages **all** files, commits with message "update", and force-pushes to main. Avoid using this in automated workflows — it's a personal convenience script.
