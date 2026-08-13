---
Document Version: 2.0
Status: Approved
Purpose: Define the visual direction and intent of the 3G'sO platform.
Last Updated: 2026-08-12
---

# Visual System

This document owns **visual direction and intent** — what the platform should feel like and why.

All concrete values (colour, type scale, spacing, breakpoints, radius, elevation, motion timing) are owned by `06_Design_System.md`. Brand principles are owned by `01_Brand_Identity.md` and are not restated here.

---

## Visual Direction

3G'sO should feel premium, refined, modern and intentional.

It should communicate ambition and potential without visual excess or obvious displays of sophistication. It should feel closer to a premium digital product than a personal website, while balancing technology, strategy, business, engineering and personal identity.

The visual language should feel mature enough for senior professionals and ambitious organizations while remaining personal and distinctive.

It must not look like a generic developer portfolio, a corporate consulting site or a personal-branding template.

### Committed Direction

**A single light editorial theme.** Warm off-white surface, near-black ink, one restrained accent.

This is a deliberate rejection of the dark-background-plus-bright-accent convention that dominates developer portfolios. A considered light editorial surface reads as timeless rather than trend-driven, scans better for the primary audience, and puts typography and content — not chrome — in charge of the impression.

There is no dark mode in v1. Colour tokens are role-named, so introducing one later is a value change rather than a rewrite.

---

## Visual Principles

**Purpose over decoration** — every element has a reason to exist. Visual complexity is introduced only when it improves understanding, hierarchy or impact.

**Restraint** — premium perception comes from precision, consistency and execution, not visual noise.

**Contrast** — differentiate levels of information through scale, spacing, typography and composition before reaching for colour.

**Hierarchy** — important information is immediately recognizable. Typography and spacing guide attention; UI elements do not.

**Consistency** — new pages and components feel like natural extensions of the same system.

**Character** — enough personality to be recognizably 3G'sO, never interchangeable with another personal site.

**Timelessness** — decisions prioritize long-term coherence over short-lived trends.

---

## Colour Direction

A neutral foundation carries the majority of the interface. Content, typography and a single controlled accent create hierarchy.

The accent marks important interactions, selected information and moments that deserve attention. It is deliberately limited and never dominates.

Large areas of saturated colour are avoided. Colour supports hierarchy and meaning, never decoration.

Semantic colours (success, warning, error, information) are **not defined in v1** — no feature consumes them. They will be added when one does.

---

## Typography Direction

Typography carries the platform. It should communicate confidence, clarity and sophistication, prioritizing readability while allowing strong editorial moments.

A **display serif** creates the editorial voice — hero statements, section openings, project titles.

A **body sans-serif** carries interface text, long-form reading and metadata.

Body text prioritizes comfortable line length and never feels dense or compressed. Hierarchy comes from size, weight, line height, spacing and position — not from an accumulation of weights and styles.

---

## Layout & Composition

The layout system creates structure while preserving freedom for expressive composition.

**Grid** — a consistent responsive foundation for project layouts, editorial sections, navigation and responsive adaptation.

**Alignment** — major elements share alignment points. Intentional deviation is allowed when it strengthens composition.

**Composition** — layouts balance structure and asymmetry. Not every section is a row of identical cards. Rhythm comes from variation within a consistent system.

**Content width** — long-form content uses a controlled reading width. Large visual sections may extend beyond it when this creates meaningful impact.

---

## Spacing

Spacing is part of the visual language, not a byproduct of it.

Generous whitespace creates focus, hierarchy, calmness and separation between ideas. Spacing communicates relationships as clearly as borders or containers — and is preferred over both.

Major sections have enough vertical space to feel independent while maintaining a coherent rhythm.

---

## Imagery

Imagery reinforces the narrative rather than decorating it.

**Photography** — authentic, high-quality, intentional. Generic stock photography is avoided.

**Project imagery** — real interfaces, meaningful product states, diagrams, architecture, artifacts and results. Screenshots are evidence, not decoration.

**Treatment** — restrained. Effects and overlays are used only when they support the narrative or improve readability.

---

## Iconography

Iconography stays minimal and functional, sharing a consistent stroke weight, proportion, scale and geometry.

Icons never replace clear text when text communicates better. Decorative icons are not used.

---

## Motion

Motion is subtle, purposeful and responsive.

It may establish hierarchy, guide attention, communicate relationships, reinforce transitions, provide feedback or create continuity.

It never exists to demonstrate technical capability. Transitions are fast enough to preserve momentum and slow enough to be perceptible.

Interactive elements respond through restrained changes in position, opacity, scale or colour. Reduced-motion preferences are always respected.

---

## Components

Components are designed as part of one system rather than as isolated elements: navigation, buttons, links, cards, project previews, project sections, tags, metadata, content blocks and footer elements.

Components should have clear purposes, reuse established patterns, remain visually consistent, adapt naturally across screen sizes and avoid unnecessary variants.

---

## Responsive Visual System

The visual system adapts intelligently rather than scaling down.

**Desktop** — the broadest canvas: large typography, editorial composition, generous whitespace, subtle motion.

**Tablet** — preserves hierarchy while adapting grid and spacing.

**Mobile** — readability, clear hierarchy, touch-friendly interaction, efficient vertical space.

The adapt-by-default rule and its two permitted exceptions are defined in `02_Experience_Architecture.md`.

---

## Accessibility

Accessibility is part of the visual system, not a separate technical requirement: sufficient contrast, readable typography, clear and visible interactive states, accessible motion, touch-friendly targets and semantic hierarchy.

Visual sophistication never reduces usability. Measurable targets are defined in `11_Technical_Standards.md`.

---

## Visual Rules

- Never add decoration without purpose.
- Never sacrifice readability for visual impact.
- Avoid generic portfolio aesthetics.
- Avoid gradients, glassmorphism and visual effects.
- Prefer whitespace over borders, shadows and containers.
- Maintain strong typographic hierarchy.
- Use the accent sparingly.
- Prefer real project evidence over decorative mockups.
- Use motion to enhance meaning, not to demonstrate ability.
- Prefer timeless decisions over short-lived trends.
