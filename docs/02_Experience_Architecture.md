---
Document Version: 2.0
Status: Approved
Purpose: Define the definitive information architecture, navigation and content hierarchy of the 3G'sO platform.
Last Updated: 2026-08-12
---

# Experience Architecture

This document owns the **information architecture, navigation and content hierarchy**.

Audience is owned by `00_Project_Vision.md`. Visitor journeys and flow are owned by `03_User_Journey.md`. Brand principles are owned by `01_Brand_Identity.md`.

---

## Experience Goal

The 3G'sO experience should communicate who Guillermo is, how he thinks and what he is building within the first moments of interaction.

It should create curiosity first, build trust through substance, and leave visitors with a clear understanding of his professional direction.

It should feel like discovering a person and a journey, not reviewing a résumé.

---

## User Intent

Visitors arrive with different objectives. The architecture accommodates all of them without fragmenting the platform:

- **Discover** — who Guillermo is and what drives him.
- **Evaluate** — his capabilities, experience and potential.
- **Explore** — selected work, decisions and ideas in depth.
- **Connect** — start a professional conversation.
- **Return** — find new work, ideas and developments.

---

## Information Architecture

3G'sO is a single connected experience organized around **four destinations and one persistent action**.

This is the definitive model. No other section, taxonomy or destination exists in v1.

| Route | Destination | Contains |
|---|---|---|
| `/` | **Home** | Identity, positioning, selected work, entry points into every area |
| `/work` | **Work** | Curated index of projects |
| `/work/[slug]` | *(project)* | A single project's narrative, at brief or full depth |
| `/journey` | **Journey** | Who Guillermo is, education, experience, milestones and direction |
| `/thinking` | **Thinking** | Index of written ideas and perspectives |
| `/thinking/[slug]` | *(piece)* | A single long-form piece |
| `/connect` | **Connect** | Direct, low-friction paths to a professional conversation |
| `404` | — | A designed recovery page that offers real next steps |

### Resolved Structural Decisions

These resolve ambiguities that previously existed across documents. They are binding.

**About is not a destination.**
The personal narrative opens `/journey`, and a condensed form anchors `/`. There is no `/about` route and no About content directory. The identity copy lives in a single source (`src/data/profile.ts`) consumed by both surfaces, so the two can never drift apart.

**Work is the section; project is the entity.**
"Work" is the user-facing name of the destination. "Project" is the name of the content entity and the URL segment for an individual item. These terms are not interchangeable and no synonyms are introduced.

**Experience is not a separate section.**
Professional experience, education and milestones are all *journey entries*, distinguished by a `kind` field rather than by location. `/journey` presents them as an evolution, not a list.

**Future is a thread, not a section.**
Direction and ambition are expressed as the closing movement of `/journey` and as a recurring lens in Thinking. There is no Future destination and no Future content type.

**Connect is the only name.**
The persistent action, the page and the footer block are all called Connect. "Contact" is not used as platform terminology.

**Case studies are a depth, not a destination.**
A case study is a project written at full depth. There is no separate case-study route, layout or collection. See `05_Content_Strategy.md` for the narrative structure and `09_Feature_Specification.md` for scope.

---

## Navigation

Navigation is minimal, persistent and secondary to the content.

Primary navigation contains exactly four destinations — **Home, Work, Thinking, Journey** — plus a persistent **Connect** action.

Navigation must:

- Remain accessible throughout the experience.
- Make the visitor's current location clear.
- Never compete visually with the content.
- Allow direct movement to any destination.
- Preserve the feeling of a single connected platform.

If Thinking has no published pieces at launch, its destination is omitted from the navigation and the route is not generated. The architecture does not change when it appears; see `09_Feature_Specification.md`.

### Contextual Navigation

Content provides its own paths between areas, so visitors are not forced back to the primary navigation:

- A project links to related journey entries and, where relevant, to a piece of thinking.
- A journey entry links to the projects it produced.
- A piece of thinking links to the work that informed it.
- Every project and every article ends with a meaningful next step.

Journey entries declare their related projects in content, so these connections are data rather than hardcoded links.

### Mobile Navigation

On mobile, the four destinations and the Connect action remain immediately accessible without introducing unnecessary interaction or visual complexity.

---

## Content Hierarchy

Content is prioritized by its ability to communicate identity, capability, potential and thinking.

**Primary** — who Guillermo is, what he is capable of, what he has built, how he thinks, where he is heading. Greatest visual prominence and the clearest paths for exploration.

**Secondary** — professional experience, education, technical capabilities, additional projects, external profiles. Supporting context that never competes with the primary narrative.

**Tertiary** — implementation detail, extended documentation, specific tools. Available to those who want it, invisible to those who do not.

### Content Selection

Depth over volume. Not every project, achievement or skill needs to appear. Content is selected by how effectively it contributes to the overall narrative.

### Content Evolution

Content is reviewed as Guillermo's career develops. New and more relevant work gradually replaces older material, while meaningful milestones are preserved as part of the journey.

---

## Desired Actions

**Primary** — explore selected work, read a project in depth, understand the journey, discover ideas, start a conversation.

**Secondary** — visit external profiles, follow contextual paths between areas, return to find new work.

### Conversion Philosophy

The platform earns interest before asking for anything. Connecting should feel like the natural result of understanding Guillermo, never a conversion objective imposed by the interface.

A successful visit does not require contact. It may simply mean the visitor leaves with a clear understanding of who Guillermo is and why his direction is worth following.

---

## Responsive Experience

3G'sO provides a coherent experience across desktop, tablet and mobile. Mobile is not a reduced desktop.

**Desktop** — the richest expression of the visual language: generous spacing, editorial composition, subtle motion.

**Mobile** — clarity, readability, effortless navigation, efficient use of vertical space.

**Consistency** — identity, hierarchy, content and interaction principles hold at every size.

### Adapt by Default, Redesign by Exception

Layouts *adapt* responsively by default. Only two compositions are permitted bespoke mobile treatments: the **home hero** and the **project header**. Everywhere else, one layout responds rather than two layouts existing.

This bounds the responsive effort without compromising the experience.

---

## Future Evolution

The architecture allows 3G'sO to grow beyond its first version. Future content — additional projects, deeper writing, experiments, products or entrepreneurial work — must integrate into the four existing destinations rather than requiring new top-level sections.

Introducing a fifth destination is a significant architectural decision and should be recorded in `12_Decision_Record.md`.

---

## Experience Rules

- Every interaction must have a purpose.
- Content takes priority over decoration.
- The visitor should always know where they are and where they can go next.
- No page is a dead end, including 404.
- Complexity is introduced only when it provides meaningful value.
- Motion communicates, guides or gives feedback — never spectacle.
- Important information never depends exclusively on animation.
- The interface remains usable without motion.
- The experience feels fast even when visually rich.
- Projects prioritize reasoning and decisions over technical showcases.
- The platform never feels like a traditional résumé.
- New content integrates naturally without disrupting the existing experience.
