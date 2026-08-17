---
Document Version: 1.0
Status: Living document
Purpose: Record meaningful decisions made about the 3G'sO platform, with the reasoning behind them.
Last Updated: 2026-08-13
---

# Decision Record

A log of decisions that shaped the platform. Each entry states what was decided, why, and what would justify revisiting it.

This exists so that a decision is made once. When a document and this record disagree, this record is the history and the document is the current state — both should be corrected together.

**Add an entry when:** the stack changes, a dependency or service is added, a design token or breakpoint is added, a route or destination is added, a deferred item is activated, or a recurring cost is accepted.

---

## Format

**ID · Date · Decision** — what was decided. **Why** — the reasoning. **Revisit if** — what would change it.

---

## 2026-08-12 — Foundation

**D-001 · Stack: Astro + TypeScript, static output**
The platform is content-first and largely static; its quality bar is typography, reading experience and load speed. Astro ships zero JavaScript by default, treats Markdown as a typed first-class source, and produces a plain static directory hostable anywhere for nothing. A general-purpose application framework would add a client runtime and hosting model the requirements do not justify.
*Revisit if* the platform requires server-rendered or authenticated functionality that Astro adapters cannot serve.
*Amended 2026-08-13:* this entry originally specified Astro 5. The major version is now Astro 7 — see D-031. The reasoning above is version-independent and stands unchanged.

**D-002 · No UI framework**
No island in v1 earns a framework runtime. The only interactivity is a mobile navigation toggle and small progressive enhancements. Astro allows adding a framework per component later without restructuring.
*Revisit if* a genuinely interactive feature appears.

**D-003 · Plain CSS with custom properties; no utility framework, no CSS-in-JS**
Tokens are defined once in `src/styles/tokens.css`; Astro scopes component styles natively, which removes the problem CSS frameworks exist to solve. Zero dependencies, zero build cost.
*Revisit if* the component count makes scoped styles genuinely unmanageable.

**D-004 · Content as Markdown in Astro Content Collections, validated with Zod**
Typed frontmatter means invalid content fails the build rather than reaching production — the cheapest possible quality gate, requiring no extra tooling. Content stays portable plain Markdown.
*Revisit if* content volume or non-technical editing makes a CMS worthwhile (conditions in `09_Feature_Specification.md`).

**D-005 · Three production dependencies: Astro, TypeScript, `@astrojs/sitemap`**
Every dependency is a maintenance and security surface. Three is what the platform needs.
*Revisit* per dependency, with an entry here justifying the fourth.

---

## 2026-08-12 — Information Architecture

**D-006 · Four destinations: Home, Work, Thinking, Journey — plus a persistent Connect action**
Resolves four competing taxonomies that previously existed across documents. Seven routes plus a 404, three layouts, one model.
*Revisit if* content emerges that genuinely cannot live in an existing destination. A fifth destination is a significant architectural change.

**D-007 · About is not a destination**
The personal narrative opens `/journey` and, condensed, anchors `/`. Both read from `src/data/profile.ts`, so they cannot drift apart. A standalone About page would fragment the narrative and duplicate its source.
*Revisit if* the personal narrative grows beyond what Journey can hold.

**D-008 · Experience is not a separate section**
Jobs, education and milestones are all journey entries distinguished by a `kind` field. They are the same kind of thing — moments in an evolution — and separating them would reproduce the résumé the platform explicitly rejects.

**D-009 · Future is a thread, not a section**
Direction and ambition close `/journey` and recur as a lens in Thinking. A dedicated Future section would be a container with no content of its own.

**D-010 · "Connect", not "Contact"**
One name for the action, the page and the footer block. Connect frames a conversation; contact frames a transaction.

**D-011 · A case study is a project written at full depth**
One canonical seven-part narrative with a `depth: 'brief' | 'full'` field, replacing two competing structures (11-section and 9-section) and the implied second page type. There is no case-study route, layout or collection.
*Revisit if* a project needs a fundamentally different structure rather than a longer one.

---

## 2026-08-12 — Design

**D-012 · Single light editorial theme; no dark mode in v1**
Dark-plus-bright-accent is the convention of the developer portfolio the platform is explicitly trying not to be. A considered light editorial surface reads as timeless, scans better for the primary audience, and puts typography in charge of the impression. Tokens are role-named, so a second theme is a change of values.
*Revisit if* the light theme proves limiting.
*Reversed 2026-08-13 by D-034:* the committed theme is dark editorial. The objection to dark-plus-*bright*-accent stands and is honoured by the replacement palette; the role-named token claim above is what made the reversal cheap.

**D-013 · Accent `#1F4B3F`**
A deep green rather than the ubiquitous blue or violet. Distinctive, restrained, and consonant with the platform's growth motif. 9.2:1 against the background — AAA at every size.
*Superseded 2026-08-13 by D-034:* the accent is `#6E97A3`, a muted blue-gray required by the dark ground. The preference for restraint over a saturated hue is unchanged; only the hue and the surface it sits on differ.

**D-014 · Fraunces (display) + IBM Plex Sans (body)**
An editorial serif creates the voice; a clear grotesque carries reading and interface text. Both open-source, both self-hosted, three files total. A licensed typeface would introduce a cost the platform does not need.

**D-015 · Fonts self-hosted, not loaded from a third-party CDN**
Removes a third-party request, its latency and its privacy implications.

**D-016 · Token scale trimmed: 8 type levels, 3 breakpoints, 3 radii, 2 elevations, no semantic colours**
The original system specified values with no consumer — four elevation levels in a system that avoids shadows, semantic colours with no feature to colour. Tokens are added when a component needs them.
*Revisit* per token, individually, when something consumes it.

---

## 2026-08-12 — Scope

**D-017 · Thinking is built in v1, published only with two strong pieces**
The routes cost little; the content costs everything. An empty or thin Thinking section damages the platform more than its absence. If the bar is unmet, the route is not generated and the destination is omitted from navigation, with no redesign needed later.

**D-018 · No contact form**
A form requires a backend, spam handling and an email service to do less than a direct email link. Settled, not deferred.
*Revisit if* a direct email link demonstrably loses contacts.

**D-019 · No analytics in v1**
No specific question currently needs measuring, and the platform's success criteria are qualitative. Avoids a service, a script and a privacy consideration for no present return.
*Revisit if* a specific question emerges. Any analytics must remain free and cookieless.

**D-020 · No automated tests or CI in v1**
v1 has no business logic, no user input and no persistence. Build-time schema validation and `astro check` catch the errors that are actually likely; the rest is visual and manual, which no test suite would cover better. A failed Cloudflare build already blocks deployment.
*Revisit if* real logic appears or a critical journey needs regression protection.

**D-021 · Directories are created when they have an occupant**
`features/`, `services/`, `types/`, `tests/`, `scripts/` and `.github/` are absent by design. Empty structure is a promise the project has not made.

---

## 2026-08-12 — Infrastructure and Cost

**D-022 · Cloudflare Pages, free tier**
A genuinely free tier with unlimited bandwidth, automatic HTTPS, branch previews, and a free path to server rendering if ever needed. Output is a static directory, so migration cost is near zero.
*Superseded 2026-08-13 by D-032:* the hosting product is Cloudflare Workers with static assets. The reasoning above is unchanged and still describes why Cloudflare was chosen.

**D-023 · No custom domain in v1; launch on `*.pages.dev`**
A domain is the only recurring cost the platform would carry, and it blocks nothing. The site URL is read from configuration, so registering one later is a config change and a DNS record.
*Revisit* whenever the brand benefit is judged worth roughly €10/year. This is the most likely first accepted cost.
*Amended 2026-08-13 by D-032:* the launch hostname is `*.workers.dev`. The decision not to register a domain in v1 is unchanged.

**D-024 · Zero recurring cost is a constraint, not an aspiration**
Every technology decision is filtered through it. Accepting a cost requires an entry here.

**D-025 · Deploy from Phase 0**
The platform is live and building before any feature exists, so deployment is never a late-stage risk and every phase is verified against a real production build.

---

## 2026-08-12 — Content and Language

**D-026 · English only; architecture kept i18n-ready at zero cost**
No i18n framework, routing strategy or translation layer. One rule preserves the option: user-facing interface strings live in `src/data/ui.ts` rather than hardcoded in components.
*Revisit if* the audience proves ES-primary.

**D-027 · Real content precedes finalized templates**
One genuine project is authored end to end in Phase 2, before the templates that display it are finished in Phase 3. Content-shaped layouts designed against placeholders get rebuilt.

**D-028 · Metadata and social previews are foundational, built in Phase 1**
Most visitors arrive at a project page directly from a shared link, so how that link previews is a core requirement rather than a late optimization.

---

## 2026-08-12 — Repository

**D-029 · `3GsO-Platform` is an independent Git repository**
The project previously sat untracked inside a repository rooted at the user's home directory, whose working tree contained credentials and personal data. The documentation — the project's source of truth — was therefore unversioned, and any broad `git add` risked committing secrets.
*Status:* executed 2026-08-13. The repository root is `C:/Users/User/Proyectos/3GsO-Platform`, independent of any parent repository, with the documentation committed in `41bbfe4`.

**D-030 · Working material stays outside the repository**
Source PDFs, the CV, raw screenshots and visual references are inputs to the platform, not part of it.

---

## 2026-08-13 — Framework Version

**D-031 · Astro 7, not Astro 5**
D-001 originally pinned Astro 5, written when that was the current major. It is not: Astro 5 is out of security support, and no fix has been backported to the 5.x line. `npm audit` against a clean install reports 10 advisories on Astro 5.18.2, 5 on Astro 6.4.8 — the line still receives partial backports — and **0 on Astro 7.2.1**.

Actual production exposure on Astro 5 was near zero: seven of the eight Astro advisories require SSR, hydrated islands, view transitions or attacker-controlled input, none of which exist in a static build with no user input. The decisive argument is not present exposure but future exposure — every subsequent advisory would also go unpatched, and the View Transition advisory would activate in Phase 5.

Migration cost was near zero because the repository contained only the scaffold. The documented architecture survives intact: `src/content.config.ts`, `output: 'static'`, `astro/tsconfigs/strict`, `astro:assets` and `@astrojs/sitemap` all carry over unchanged. Three points of the v6/v7 migration touch the platform and are verified in Phase 2 when the first real content is authored: collections must declare a `glob()` loader (recorded in `08_Project_Structure.md`), Markdown is rendered by Astro's native pipeline rather than remark/rehype, and `compressHTML` now defaults to `'jsx'` whitespace handling.

*Revisit* at the next major, on the same test: whether the current line is the one receiving security fixes.

---

## 2026-08-13 — Hosting and Tooling

**D-032 · Cloudflare Workers with static assets, not Cloudflare Pages**
Supersedes the hosting mechanism in D-022 and the launch hostname in D-023. Both remain on record as history.

The platform is deployed at `https://3gso-platform.guilleggo73.workers.dev`. Cloudflare has consolidated static site hosting into Workers with static assets, and that is the product the deployment was created on.

Every property D-022 selected Cloudflare for is unchanged: a genuinely free tier, automatic HTTPS, builds triggered by a push to `main`, per-branch preview deployments, and a path to server rendering that the platform does not need. The build output is still a plain static directory, so the near-zero migration cost D-022 relied on also holds.

What changes is the hostname, and only the hostname. D-023's substance — no custom domain in v1, no recurring cost — stands exactly as written; `*.pages.dev` simply becomes `*.workers.dev`. The site URL is read from `site` in `astro.config.mjs`, so registering a domain later remains a configuration change and a DNS record.

*Revisit* together with D-023, whenever a custom domain is judged worth its cost.

**D-033 · `@astrojs/check` and `typescript` as development dependencies**
`10_Implementation_Roadmap.md` requires `astro check` as a script in Phase 0, and `11_Technical_Standards.md` requires it to pass before any commit is considered complete. The command does not ship with Astro: it requires `@astrojs/check`, which in turn requires `typescript`.

This does not breach D-005. That rule governs **production** dependencies — the three that reach the build output remain Astro, TypeScript and `@astrojs/sitemap`. `@astrojs/check` is tooling: it runs locally and in CI, never in the output, and adds nothing to what a visitor downloads.

It is recorded anyway, because `11_Technical_Standards.md` requires every added dependency to be recorded, and because a dependency appearing in `package.json` without a stated reason is exactly what D-005 exists to prevent. Note that `typescript` is installed as a development dependency rather than a production one; it is a compile-time tool, and D-005 counts it among the three because the platform is written in it, not because it ships.

*Revisit if* `astro check` stops being the mechanism that satisfies the type-checking requirement.

---

## 2026-08-13 — Visual Direction

**D-034 · Dark editorial theme, reversing D-012 and D-013**
Reverses the committed direction in D-012 and the accent in D-013. Both remain on record as history; the reasoning that produced them is preserved unchanged.

The light editorial direction was reviewed against an actual visual prototype rather than against its description. Seen built, the dark treatment represents the personality and positioning of 3G'sO more accurately: charcoal and warm off-white read as considered and personal where the off-white surface read as merely clean, and the platform's quiet confidence carries better on a recessive ground that lets typography advance.

**This is not a return to the aesthetic D-012 rejected.** D-012's objection was specific — dark background *plus bright accent*, the neon-on-black convention of the developer portfolio. The approved direction keeps the rejection and drops only the background: the accent is a muted blue-gray at low saturation, there is no neon, no glow, no gradient and no glassmorphism. Composition remains typography-led, whitespace remains the primary means of grouping, and colour remains emphasis rather than surface. Every visual rule in `04_Visual_System.md` survives intact; only the ground and the accent hue change.

D-012's structural claim also survives and is what made this affordable: tokens are named by role, so the reversal was a change of seven values rather than a change of code.

Approved palette, implemented in `src/styles/tokens.css`:

| Token | Value |
|---|---|
| `--color-bg` | `#1C1D1F` |
| `--color-surface` | `#23252A` |
| `--color-border` | `#3E6673` |
| `--color-text` | `#F2EEE7` |
| `--color-text-muted` | `#A6A7A4` |
| `--color-accent` | `#6E97A3` |
| `--color-accent-contrast` | `#1C1D1F` |

Two notes the palette carries with it. The accent was verified before adoption: the prototype's `#3E6673` measures 2.69:1 against the background and cannot carry links or focus rings, so `#6E97A3` — 5.32:1, the most restrained value in the family that clears AA — takes the accent role, and `#3E6673` is confined to dividers and subtle structure. That confinement is a constraint, not a preference: at 2.69:1 it sits below the 3:1 required of interface boundaries, which is acceptable for the decorative dividers v1 uses and would not be acceptable for a control. `11_Technical_Standards.md` is unchanged by this decision; its thresholds are theme-independent and the palette was chosen to meet them.

*Revisit if* the dark ground proves limiting, on the same test that produced this entry: reviewing a real build rather than a description.

---

## Open Questions

Not yet decided. Listed so they are not mistaken for oversights.

| Question | Needed by |
|---|---|
| Which 2–3 projects appear in v1, and which is written at full depth | Phase 2 |
| Whether a downloadable CV belongs on `/connect` — the primary audience often expects one, and the platform positions itself as complementing the CV | Phase 3 |
| Whether Thinking will meet its two-piece standard before launch | Phase 4 |
