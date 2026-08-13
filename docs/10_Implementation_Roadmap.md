---
Document Version: 2.0
Status: Approved
Purpose: Define the implementation phases, their order and the exit criteria that move the 3G'sO platform from an empty repository to a public v1.
Last Updated: 2026-08-12
---

# Implementation Roadmap

This document owns the **build sequence**. What gets built is owned by `09_Feature_Specification.md`.

The roadmap establishes order, dependencies and exit criteria. It does not set dates.

---

## Development Philosophy

3G'sO is built incrementally. Each phase produces something real and establishes the foundation for the next.

Priorities:

- Foundation before complexity.
- **Deployed before elaborate** — the platform is live from Phase 0, so deployment is never a late-stage risk.
- **Real content before finished templates** — one real project exists before the templates that display it are considered done.
- Experience before decoration.
- Quality before quantity.

No phase is complete until its exit criterion is met. Exit criteria are objective.

---

## Phase 0 — Repository and Deployment

**Objective:** a live, empty, correctly configured platform.

- Create `3GsO-Platform` as an **independent Git repository** with `.gitignore`.
- Move the existing documentation into it; nothing else is committed until the repository is standalone.
- Scaffold Astro with the TypeScript strict template.
- Establish the structure in `08_Project_Structure.md` — only the directories that have occupants.
- Add `@astrojs/sitemap`. Nothing else.
- Add `astro check` as a script.
- Connect the repository to Cloudflare Pages and deploy.

**Exit criterion:** a push to `main` produces a successful build and a publicly reachable `*.pages.dev` URL.

---

## Phase 1 — Foundation and Design Tokens

**Objective:** the shell every page is built from.

- Implement all tokens from `06_Design_System.md` in `src/styles/tokens.css`.
- Base styles and prose styles.
- Self-host and preload Fraunces and IBM Plex Sans, latin subset.
- `BaseLayout` and a metadata component covering title, description, canonical, Open Graph and Twitter.
- Navigation (four destinations + Connect) and footer.
- Designed `404`.
- Accessibility foundations: skip link, landmarks, focus-visible ring, reduced-motion handling.

Metadata is built here rather than at the end, because the project-driven journey depends on it.

**Exit criterion:** the empty shell passes the full performance and accessibility budget in `11_Technical_Standards.md`, and a shared link previews correctly.

---

## Phase 2 — Content Model and First Real Project

**Objective:** prove the content model against reality before building on it.

- Define the three collections and their Zod schemas in `src/content.config.ts`.
- Create `src/data/` singletons: `profile.ts`, `links.ts`, `nav.ts`, `ui.ts`.
- **Author one real project end to end**, at full depth, with real imagery.
- Render it through a first pass of `ProjectLayout`.

**Exit criterion:** invalid content fails the build, and one genuine project renders entirely from real content with no placeholder text.

---

## Phase 3 — Core Pages

**Objective:** the complete navigational experience.

- Home.
- Work index.
- Project page, finalized against the real project from Phase 2.
- Journey.
- Connect.
- Thinking index and article layout.
- Contextual linking between projects, journey entries and thinking.
- Per-page metadata and static social images.

**Exit criterion:** all seven routes render, no page is a dead end, and every internal link resolves.

---

## Phase 4 — Content

**Objective:** replace structure with substance.

- Remaining projects (total 2–3, at least one at full depth).
- Journey entries: education, experience, milestones, direction.
- Profile copy for Home and Journey.
- Project imagery and supporting media.
- Thinking pieces, if the two-piece standard is met.
- Review every page against `05_Content_Strategy.md` and the tone in `01_Brand_Identity.md`.

Content is written progressively. A small amount of strong, authentic content beats a large amount of unfinished material.

**Exit criterion:** no placeholder text remains anywhere, and the Thinking decision — publish or omit — is made and applied.

---

## Phase 5 — Motion and Refinement

**Objective:** the interaction layer.

- Hover, focus and active feedback.
- Restrained entrance and scroll-triggered motion where it aids orientation.
- Navigation transitions.
- `prefers-reduced-motion` verified across every animated element.

Motion supports orientation, feedback, continuity, hierarchy and discovery. Never decoration.

**Exit criterion:** motion is present, the JavaScript budget still passes, and the platform is fully usable with motion disabled.

---

## Phase 6 — Optimization and Quality

**Objective:** meet every stated target.

- Image formats and dimensions verified through `astro:assets`.
- Font loading and subsetting verified.
- Responsive review at all three breakpoints and between them.
- Full accessibility pass: keyboard, screen reader, contrast, focus order.
- Semantic structure and heading order.
- Metadata, sitemap, `robots.txt`, social previews.
- Broken link check, internal and external.
- Security headers.
- Remove unused code and any dependency that has not justified itself.

**Exit criterion:** every target in `11_Technical_Standards.md` passes on a production build.

---

## Phase 7 — Launch

**Objective:** publish v1.

- Final production build review.
- Verify the eight-point completion list in `09_Feature_Specification.md`.
- Confirm the `mailto:` link and every external profile.
- Publish.

**Exit criterion:** the completion list is fully satisfied and the platform is publicly reachable.

The first release does not need to contain everything 3G'sO could become. It needs to communicate the platform's identity convincingly and provide a foundation for what follows.

---

## After Launch

Development is driven by real observation rather than assumption.

Likely next steps, in no fixed order: additional projects, deeper project narratives, more thinking, a custom domain, and any deferred item from `09_Feature_Specification.md` whose condition has been met.

Every future addition is evaluated against `01_Brand_Identity.md`, `02_Experience_Architecture.md`, `07_Technology_Architecture.md` and `09_Feature_Specification.md`, and recorded in `12_Decision_Record.md`.

---

## Prioritization

When choosing what to build next, weigh **impact**, **alignment**, **effort**, **dependency** and **risk of postponing**.

High impact, high alignment and low-to-moderate effort goes first. Low impact and high complexity is postponed or rejected.

---

## Definition of Done

A piece of work is complete when it:

- Works as intended.
- Follows the architecture and the design system.
- Works at all three breakpoints.
- Meets the accessibility and performance targets in `11_Technical_Standards.md`.
- Handles errors where relevant.
- Introduces no unnecessary dependency, technical debt or recurring cost.
- Uses real content rather than placeholders.
- Is consistent with the 3G'sO identity.

Working locally is not done.

---

## Roadmap Rules

- No fixed deadlines without a real external requirement.
- Complete a phase's exit criterion before starting the next.
- The platform stays deployed and building from Phase 0 onward.
- Real content precedes finalized templates.
- Avoid premature optimization and premature complexity.
- Keep v1 focused; deferred means deferred.
- Prefer incremental improvement over rewrites.
- Do not confuse technical progress with product progress.
- Build only what the current stage needs.
