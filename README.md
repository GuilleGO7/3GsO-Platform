# 3G'sO Platform

The digital identity of Guillermo Guzmán González Ortiz — a long-term professional platform built to show how he thinks, decides and builds.

It is not a portfolio and not a static snapshot of a career. See `docs/00_Project_Vision.md`.

## Stack

Astro 7 with static output, TypeScript in strict mode, plain CSS custom properties, and Markdown content validated with Zod through Astro Content Collections. No UI framework, no backend, no database, no analytics.

Three production dependencies: Astro, TypeScript and `@astrojs/sitemap`. Adding a fourth requires a recorded justification.

Deployed on Cloudflare Pages. Zero recurring cost is a design constraint.

## Commands

| Command | Action |
|---|---|
| `npm install` | Install dependencies |
| `npm run dev` | Start the dev server at `localhost:4321` |
| `npm run build` | Build the production site to `./dist/` |
| `npm run preview` | Preview the production build locally |

## Documentation

`docs/` is the source of truth. Implementation follows it rather than the other way around; when a decision recorded there becomes untrue, the document is corrected in the same change that made it untrue.

Start with `00_Project_Vision.md` for what the platform is, `07_Technology_Architecture.md` for the confirmed stack, `08_Project_Structure.md` for the repository layout and content model, and `12_Decision_Record.md` for why any of it was decided.
