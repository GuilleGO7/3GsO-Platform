---
Document Version: 2.0
Status: Approved
Purpose: Define the Astro repository structure, content model and naming conventions of the 3G'sO platform.
Last Updated: 2026-08-12
---

# Project Structure

This document owns the **repository layout, content model and naming conventions**, expressed for the confirmed Astro + TypeScript stack (`07_Technology_Architecture.md`).

The structure follows Astro's conventions rather than a generic framework layout. Where a generic structure and an Astro convention disagree, the Astro convention wins.

---

## Repository

The project identity is **`3GsO-Platform`**. The word "portfolio" is not used.

`3GsO-Platform` is an **independent Git repository**. It is not nested inside any other repository.

---

## Structure

```
3GsO-Platform/
├── docs/                       Project documentation (source of truth)
├── public/                     Served verbatim, referenced by absolute URL
│   ├── fonts/                  Self-hosted woff2
│   ├── og/                     Static social preview images
│   ├── favicon.svg
│   └── robots.txt
├── src/
│   ├── assets/                 Processed and optimized by Astro
│   │   ├── images/
│   │   └── icons/
│   ├── components/             Reusable interface elements
│   │   └── sections/           Page-level composed blocks
│   ├── layouts/                BaseLayout, ProjectLayout, ArticleLayout
│   ├── pages/                  File-based routes
│   ├── content/                Markdown collections
│   │   ├── projects/
│   │   ├── thinking/
│   │   └── journey/
│   ├── data/                   Typed singletons and UI strings
│   ├── lib/                    Shared helpers
│   ├── styles/                 tokens.css, base.css, prose.css
│   └── content.config.ts       Collection schemas
├── astro.config.mjs
├── tsconfig.json
├── package.json
├── .gitignore
├── .env.example
└── README.md
```

### `public/` vs `src/assets/`

This distinction is binding, because getting it wrong silently forfeits image optimization.

- **`public/`** — files served exactly as they are, referenced by absolute path: fonts, favicon, `robots.txt`, static social images.
- **`src/assets/`** — anything Astro should process: all project imagery and photography, imported into components and rendered through `astro:assets`.

Project images always live in `src/assets/images/`. They are never placed in `public/`.

### Routes

`src/pages/` maps directly to the information architecture in `02_Experience_Architecture.md`:

```
src/pages/
├── index.astro                 /
├── work/
│   ├── index.astro             /work
│   └── [slug].astro            /work/[slug]
├── thinking/
│   ├── index.astro             /thinking
│   └── [slug].astro            /thinking/[slug]
├── journey.astro               /journey
├── connect.astro               /connect
└── 404.astro
```

Seven routes plus a designed `404` — eight page files over three layouts (`BaseLayout`, `ProjectLayout`, `ArticleLayout`). No route exists that is not in this list.

### Directories Deliberately Absent

Each of these is created when its first real occupant exists, and not before:

| Absent | Why | Created when |
|---|---|---|
| `src/features/` | No feature is complex enough to isolate | A feature outgrows a component |
| `src/services/` | No external service is integrated | An integration exists |
| `src/types/` | Zod infers content types; other types live beside their use | Shared types exist that belong nowhere else |
| `tests/` | Nothing beyond presentation to test | Real logic or an e2e journey earns it |
| `scripts/` | No automation needed | A real script exists |
| `.github/` | Cloudflare builds on push; a failed build blocks deploy | A check is needed that the build does not perform |

`src/lib/` is created with its first genuinely shared helper, not preemptively.

---

## Content Model

Three collections, defined and validated in `src/content.config.ts`. Invalid content fails the build.

### `projects`

```
title            string
summary          string, max 160
role             string
period           { start: date, end?: date }
depth            'brief' | 'full'
featured         boolean
order            number
tech             string[]
links            { live?, repo?, doc? }
cover            image()          — required
coverAlt         string           — required
ogImage          string?
draft            boolean
updated          date?
```

The body follows the canonical narrative in `05_Content_Strategy.md`: Context, Problem, Role, Approach, Key Decisions, Outcome, Learnings. `depth: 'full'` includes all seven; `depth: 'brief'` includes the first five.

**`depth` is the only difference between a project page and a case study.** There is no case-study collection, route or layout.

`coverAlt` is required by the schema, which makes missing alt text a build failure rather than an audit finding.

### `thinking`

```
title            string
description      string
publishDate      date
updated          date?
tags             string[]
draft            boolean
```

### `journey`

```
title            string
kind             'education' | 'experience' | 'project' | 'milestone' | 'turning-point'
organization     string?
start            date
end              date?
summary          string
order            number
relatedProjects  string[]         — project slugs
```

`relatedProjects` powers contextual navigation as data rather than hardcoded links.

### `src/data/`

Typed singletons — not collections, because there is exactly one of each:

- **`profile.ts`** — name, headline, short bio (Home), long bio (Journey), location, email. The single source for identity copy across both surfaces.
- **`links.ts`** — external profiles.
- **`nav.ts`** — navigation structure.
- **`ui.ts`** — user-facing interface strings, kept out of components so the platform stays i18n-ready at no cost.

### Absent Content Types

`experience/` and `about/` do not exist. Experience and education are `journey` entries distinguished by `kind`; the About narrative lives in `profile.ts`. This resolves the taxonomy definitively — see `02_Experience_Architecture.md`.

---

## Naming Conventions

| Kind | Convention | Example |
|---|---|---|
| Components, layouts | PascalCase `.astro` | `ProjectCard.astro` |
| Routes | lowercase, kebab-case | `src/pages/work/[slug].astro` |
| Content entries | kebab-case `.md`, filename = URL slug | `unitogether.md` → `/work/unitogether` |
| Data, helpers | camelCase `.ts` | `profile.ts`, `formatPeriod.ts` |
| CSS custom properties | kebab-case, role-named | `--color-text-muted` |

Component names describe responsibility: `ProjectCard`, not `Card`. Folder names describe responsibility, not implementation.

One convention per category, applied consistently.

---

## Component Structure

Astro components are single-file: markup, scoped `<style>` and any component script live together. **No separate stylesheet file per component** — this resolves the previous ambiguity between global and co-located styles.

Global tokens and base styles live in `src/styles/`. Everything else is scoped to its component.

A component gets its own directory only if it genuinely splits into multiple files. Most will not.

### Component Rules

- One clear responsibility.
- Consume tokens; never define raw visual values.
- Accessible by construction.
- No unrelated data access or business logic.
- Reusable where reuse is real, not anticipated.

---

## File Organization

Files are organized by responsibility, not convenience.

**Locality** — strongly coupled code stays together. Code is promoted to a shared location when it is genuinely reused, not when it might be.

**Duplication** — duplication is not automatically removed. An abstraction must earn its existence through real reuse or real consistency benefit.

---

## Separation of Concerns

The repository maintains clear separation between presentation, content, configuration and infrastructure.

A component does not reach into content directly when a layout or page can pass it. Content carries no presentation markup. Configuration stays out of components.

This separation is pragmatic. It is not an architectural constraint for its own sake.

---

## Configuration

`astro.config.mjs`, `tsconfig.json` and `package.json` live at the repository root.

Secrets are never committed. `.env` is gitignored and `.env.example` documents shape only. No secret exists in v1.

---

## Documentation

Project documentation lives in `docs/` and is version-controlled with the project:

```
docs/
├── 00_Project_Vision.md
├── 01_Brand_Identity.md
├── 02_Experience_Architecture.md
├── 03_User_Journey.md
├── 04_Visual_System.md
├── 05_Content_Strategy.md
├── 06_Design_System.md
├── 07_Technology_Architecture.md
├── 08_Project_Structure.md
├── 09_Feature_Specification.md
├── 10_Implementation_Roadmap.md
├── 11_Technical_Standards.md
└── 12_Decision_Record.md
```

Working material that is not documentation — source PDFs, the CV, raw screenshots, visual references — stays outside the repository or is gitignored. It is not part of the platform.

---

## Structure Rules

- `3GsO-Platform` is the project identity; "portfolio" is not used.
- The repository is independent and standalone.
- Application code lives in `src/`.
- Content lives in `src/content/` as Markdown, separate from presentation.
- Optimized assets in `src/assets/`; verbatim files in `public/`.
- Follow Astro conventions rather than generic framework conventions.
- One naming convention per category.
- Create a directory when a real responsibility arrives, never in advance.
- Avoid unnecessary nesting and unnecessary abstraction.
- Never commit secrets.
- Let the structure evolve as the platform grows.
