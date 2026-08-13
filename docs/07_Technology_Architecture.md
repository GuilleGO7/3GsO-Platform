---
Document Version: 2.0
Status: Approved
Purpose: Define the confirmed technology stack, engineering principles and long-term technical direction of the 3G'sO platform.
Last Updated: 2026-08-13
---

# Technology Architecture

This document owns **technology choices and their reasons**. The repository layout that follows from them is owned by `08_Project_Structure.md`.

---

## Confirmed Stack

These decisions are made. They are not open questions.

| Concern | Decision |
|---|---|
| Framework | **Astro 7**, static output (`output: 'static'`) |
| Language | **TypeScript**, strict (`astro/tsconfigs/strict`) |
| UI runtime | **None.** `.astro` components only — no React, Vue or Svelte |
| Interactivity | Vanilla TypeScript, used sparingly |
| Styling | Global CSS custom properties + Astro scoped `<style>` |
| Content | Astro Content Collections, validated with Zod |
| Authoring format | Markdown |
| Images | `astro:assets` |
| Fonts | Self-hosted `woff2`, latin subset |
| SEO | Hand-written metadata component + `@astrojs/sitemap` |
| Backend | **None** |
| Database | **None** |
| Hosting | **Cloudflare Pages**, free tier, `*.pages.dev` |
| Analytics | **None** |
| Recurring cost | **€0** |

Total production dependencies: **Astro, TypeScript and `@astrojs/sitemap`.** Anything beyond these three requires a recorded justification in `12_Decision_Record.md`.

### Why Astro

The platform is content-first, largely static, and its quality bar is set by typography, reading experience and load speed. Astro ships zero JavaScript by default, treats Markdown content as a first-class typed source, and produces a plain static directory that can be hosted anywhere for nothing.

The alternatives were rejected on the same criterion: a general-purpose application framework would introduce a client runtime, a build pipeline and a hosting model that this platform's requirements do not justify.

### Why No UI Framework

No island in v1 earns a framework runtime. The only interactive elements are a mobile navigation toggle and small progressive enhancements, which vanilla TypeScript handles in a few lines.

Astro supports adding a framework later, per component, without restructuring the project. This is a deferral, not an exclusion.

### Why Plain CSS

Design tokens are defined once as CSS custom properties in `src/styles/tokens.css`. Astro scopes component styles natively, which removes the problem that CSS frameworks and CSS-in-JS libraries exist to solve.

This resolves the styling approach definitively: **global tokens, component-scoped styles, no utility framework, no build-time styling dependency.**

### Why Content Collections

Content lives as Markdown with typed, Zod-validated frontmatter. Invalid or incomplete content fails the build rather than reaching production, which is the cheapest possible quality gate and requires no additional tooling.

---

## Technology Principles

**Simplicity first** — solve the platform's actual problems, nothing more.

**Build for evolution** — new capability should not require a rewrite.

**Avoid premature complexity** — future possibilities inform decisions; they do not justify building infrastructure now.

**Use technology deliberately** — every choice has a stated reason, recorded in `12_Decision_Record.md`.

**Maintainability** — clear structure over clever implementation.

**Performance by default** — considered during implementation, not optimized afterwards.

**Security by design** — built into decisions from the start.

**Cost awareness** — zero recurring cost is a design constraint, not an aspiration.

**Simplest appropriate implementation** — quality targets are met through the simplest mechanism that meets them. A tool is not added to satisfy a requirement that plain implementation already satisfies.

---

## Cost Constraints

**The platform has zero recurring software or infrastructure cost.**

Hosting, HTTPS, builds and preview deployments are all covered by the Cloudflare Pages free tier. No domain is registered in v1; the platform launches on its `*.pages.dev` URL. No analytics service is used. No paid font, asset or service is used.

The only development tool paid for by the creator is Claude Pro, which is an existing resource and not a platform dependency.

Paid services may be introduced later when they provide clear, justified value — a custom domain being the most likely first candidate. Any such cost must be a deliberate decision recorded in `12_Decision_Record.md`, never an accidental dependency.

---

## Platform Architecture

A single static site, built at deploy time, served from a CDN.

Responsibilities remain separated even though they are not separately deployed:

- **Presentation** — Astro components and layouts.
- **Content** — Markdown collections, independent of presentation.
- **Configuration and data** — typed modules in `src/data/`.
- **Infrastructure** — Cloudflare Pages, configured through the repository.

There are no services, no runtime server, no database and no API in v1. If a real requirement emerges, Astro's server adapters offer a path to server-rendered routes without abandoning the existing codebase.

---

## Frontend Architecture

The frontend is the platform. It is responsible for rendering content, navigation, responsive behaviour, presentation and accessibility.

**Components** are reusable, focused, accessible and represent meaningful interface patterns rather than arbitrary fragments.

**Layouts** define the recurring page structures: base, project and article.

**Pages** compose sections and components; page-specific composition stays out of reusable components.

**State** is local and minimal. There is no global state and no state management library. Client-side JavaScript is the exception, not the default.

---

## Content Architecture

Content is authored as Markdown in `src/content/` and validated by schemas defined in `src/content.config.ts`.

Three collections — `projects`, `thinking`, `journey` — plus typed singletons in `src/data/`. The full content model is specified in `08_Project_Structure.md`.

**Content independence** — content carries no presentation markup. A project's narrative structure is editorial (`05_Content_Strategy.md`), and the template renders whatever sections exist.

**Content management** — the repository is the CMS. Content is written in an editor and committed. A dedicated CMS is introduced only under the conditions in `09_Feature_Specification.md`.

**Portability** — content is plain Markdown with plain frontmatter. It can move to any other system without extraction work.

---

## Internationalization

The platform is **English-only** in v1. No i18n framework, routing strategy or translation layer is implemented.

The architecture stays i18n-ready at negligible cost through one rule: **user-facing interface strings live in `src/data/`, not hardcoded in components.** Content itself remains in Markdown.

This is the only concession made to a deferred capability, and it costs nothing today.

---

## Infrastructure

**Hosting** — Cloudflare Pages. Chosen for a genuinely free tier with custom domains and unlimited bandwidth, automatic HTTPS, per-branch preview deployments, and a free path to server rendering if the platform ever needs it. The build output is a static directory, so migration cost is near zero.

**Builds** — Cloudflare builds on push to `main`. A failing build blocks the deployment, which makes a separate CI pipeline unnecessary in v1.

**Environments** — local development and production. Branch previews cover everything a staging environment would.

**Domain** — none in v1. The site URL is read from configuration, so registering a domain later is a configuration change and a DNS record, with no code impact.

---

## Security

Static output removes most of the attack surface: no server, no database, no user input, no authentication, no session handling.

What remains applies:

- **Secrets** — none exist in v1. If one is ever needed, it lives in an environment variable and never in the repository. `.env` is gitignored; `.env.example` documents shape only.
- **Dependencies** — three of them, kept current and reviewed before every addition.
- **External input** — none is accepted. Should that change, it is untrusted by default.
- **Headers** — a minimal security header set is configured at the hosting layer.
- **External links** — `rel="noopener"` on any `target="_blank"`.

---

## Performance

Performance is part of the experience, and the stack makes it the default rather than a project.

Priorities: fast first load, zero unnecessary JavaScript, optimized images through `astro:assets`, self-hosted subset fonts with preloading, stable layout, and efficient navigation.

Measurable targets and their verification are defined in `11_Technical_Standards.md`.

---

## Scalability

The current architecture handles substantially more content than v1 will contain, because build-time rendering scales with content volume rather than with traffic.

Real future requirements — higher traffic, interactive products, APIs, additional applications — are addressed when they arrive. Astro's adapters, islands and content layer each provide a path forward without a rewrite.

---

## Maintainability

The codebase prioritizes clear naming, logical organization, small focused modules, reusable components, consistent patterns and predictable behaviour.

**Technical debt** is acceptable when intentional and understood. Shortcuts that become long-term dependencies are recorded and revisited.

**Documentation** explains why decisions were made. `12_Decision_Record.md` is the log; this document holds the reasoning behind the current architecture.

---

## Technology Evolution

Revisit technology decisions when requirements change, current tools become limiting, costs become significant, or the platform becomes substantially more complex.

Do not migrate because something newer exists. Migrate when the benefit justifies the cost, risk and complexity.

The long-term architecture stays open to 3G'sO becoming more than a professional platform, without compromising the simplicity of the first version.

---

## Technology Rules

- The confirmed stack is Astro + TypeScript. Do not introduce another framework.
- Three production dependencies. A fourth requires a recorded justification.
- No paid or recurring-cost service.
- No backend, database, CMS or authentication until a real requirement exists.
- No client-side JavaScript unless the interaction genuinely requires it.
- No tool added to satisfy a theoretical requirement.
- Keep content portable and presentation-independent.
- Never commit secrets.
- Prefer maintainable solutions over clever ones.
- Record meaningful architectural decisions.
- Introduce complexity only when the platform has earned it.
