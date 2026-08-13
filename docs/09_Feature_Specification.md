---
Document Version: 2.0
Status: Approved
Purpose: Define the functional scope of the 3G'sO platform and the exact boundaries of v1.
Last Updated: 2026-08-12
---

# Feature Specification

This document owns **what the platform does in v1 and what it deliberately does not**.

The destinations are defined in `02_Experience_Architecture.md`. The build sequence is defined in `10_Implementation_Roadmap.md`.

---

## Product Scope

3G'sO is a long-term professional platform and digital identity. Its first version:

- Presents Guillermo's professional identity.
- Communicates his journey and evolution.
- Shows meaningful projects with real depth.
- Shares ideas and perspectives.
- Provides a clear path to a professional conversation.
- Establishes a foundation that can evolve.

Depth and clarity, not feature quantity.

---

## v1 Scope

Everything listed here ships in the first public version.

### Routes

All seven routes in `02_Experience_Architecture.md`: `/`, `/work`, `/work/[slug]`, `/journey`, `/thinking`, `/thinking/[slug]`, `/connect`, and a designed `404`.

### Content at Launch

- **2–3 projects**, at least one written at full depth.
- **Journey** populated with real education, experience and milestones, closing with direction.
- **Profile** copy written for both Home and Journey.
- **Thinking** — conditional, see below.

### Home

Establishes identity, positioning, personality and current direction; presents selected work; gives a reason to continue. It does not attempt to contain the platform.

Priorities in order: strong introduction → clear identity → meaningful selected work → evidence of growth and thinking → clear next steps.

### Work

A curated index of projects, and a project page that works with no prior context — because most visitors will arrive at one directly (`03_User_Journey.md`).

Each project follows the canonical narrative in `05_Content_Strategy.md` at either brief or full depth.

### Journey

The personal narrative, then education, experience and milestones presented as an evolution rather than a résumé, closing with direction.

### Thinking — Conditional

Routes, index and article layout are **built in v1**. The cost is content, not code.

**Publication gate: at least two genuinely strong pieces.** If that bar is not met at launch, the collection is empty, the route is not generated, and the destination is omitted from navigation. Nothing else changes. Thinking then appears in a later release with no redesign and no architectural change.

This is a content standard, not a technical limitation. An empty or thin Thinking section damages the platform more than its absence.

### Connect

Email and external professional profiles, with enough context on what is worth reaching out about.

**No contact form.** A form would require a backend, spam handling and an email service to do less than a direct email link already does. This is settled, not deferred pending review.

### Cross-Cutting

- **Responsive** across three breakpoints, adapt-by-default per `02_Experience_Architecture.md`.
- **Accessible** to WCAG 2.2 AA, verified per `11_Technical_Standards.md`.
- **Fast**, against the measured budget in `11_Technical_Standards.md`.
- **Discoverable** — per-page title, description, canonical URL, Open Graph and Twitter tags, static social preview images, `sitemap.xml`, `robots.txt`.

Metadata is foundational, not an optimization step: the project-driven journey depends entirely on how a shared link previews.

### Motion

Subtle transitions, hover and focus feedback, and restrained entrance motion, all honouring `prefers-reduced-motion`. Motion never carries information.

---

## Not in v1

Removed or deferred, each with the condition that would bring it back.

| Not built | Revisit when |
|---|---|
| Search | Content exceeds roughly 20 entries |
| Tag or filter pages | More than 10 projects or 15 articles |
| Contact form | A direct email link demonstrably loses contacts |
| Analytics | A specific question needs measuring; must remain free and cookieless |
| Custom domain | Worth the recurring cost; no code impact |
| Dark mode | The light theme proves limiting |
| Spanish / i18n | The audience proves ES-primary; strings already externalized |
| RSS | Ships alongside Thinking if Thinking ships |
| MDX | A project page genuinely needs components inline |
| UI framework islands | A genuinely interactive feature appears |
| View transitions | Phase 5, only if it fits the JavaScript budget |
| Automated tests, CI | Real logic or a critical journey earns it |
| Dynamic OG image generation | More than ~10 pages make static images tedious |
| CMS | Content becomes hard to manage manually, publishing frequency rises, non-technical editing matters, or contributors join |
| Semantic colour tokens | A component consumes one |
| Loading / success / error states | Asynchronous UI exists |
| Authentication, accounts, community, APIs | A real product requirement emerges |

**A future possibility does not create an obligation to build it.**

---

## Content Management

The repository is the content system. Content is written as Markdown and committed.

This costs nothing, keeps content portable, versions every change, and validates structure at build time. It is sufficient for the volume v1 will hold.

---

## Accessibility

Accessibility is a functional requirement: keyboard navigation, semantic HTML, visible focus, sufficient contrast, accessible labels, adequate touch targets, reduced-motion support and screen-reader compatibility.

Considered from the first component. Verified against `11_Technical_Standards.md` before launch.

---

## Performance

Performance is part of the product: fast loading, optimized images, efficient assets, minimal JavaScript, stable layout.

The stack makes this the default rather than a project. Visual effects never justify degrading it.

---

## Feature Prioritization

Every proposed feature is evaluated on:

**Value** — does it meaningfully serve the visitor or 3G'sO?
**Alignment** — does it reinforce the platform's purpose and identity?
**Complexity** — what does it cost to build and maintain?
**Necessity** — is it needed at this stage?

High value and low complexity is built. Low value and high complexity is rejected. Everything else is postponed with a condition attached.

---

## Definition of v1 Complete

v1 is complete when **all** of the following are true:

1. All seven routes render with real content — no placeholder text anywhere.
2. At least two projects are published, at least one at full depth.
3. Journey is populated with real entries and closes with direction.
4. Thinking either has two strong pieces published, or is cleanly absent.
5. Every performance and accessibility target in `11_Technical_Standards.md` passes on a production build.
6. Every internal and external link resolves.
7. Every page has complete, correct metadata and a working social preview.
8. The platform is deployed and publicly reachable.

This replaces any judgement-based completion criterion. v1 is done when the list is done.

---

## Feature Rules

- Every feature must have a clear purpose.
- Do not add functionality because it is common elsewhere.
- Prefer the simplest implementation that meets the requirement.
- Prioritize meaningful content over technical novelty.
- Keep recurring cost at zero.
- Do not add a dependency or service to satisfy a theoretical requirement.
- Do not build future functionality prematurely.
- Features are accessible and performant by default.
- Anything deferred carries the condition that would bring it back.
