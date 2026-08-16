---
Document Version: 2.0
Status: Approved
Purpose: Define the concrete design tokens, component rules and responsive behaviour of the 3G'sO platform.
Last Updated: 2026-08-13
---

# Design System

This document owns **every concrete visual value**. Direction and intent are owned by `04_Visual_System.md`.

Tokens are implemented as CSS custom properties in `src/styles/tokens.css`. Components consume tokens; components never define raw values.

---

## Theme

**One dark editorial theme.** No second theme in v1.

Tokens are named by role, not by appearance, so a second theme becomes a change of values rather than a change of code. The reversal recorded in D-034 is the proof: it changed seven values and no code.

---

## Colour Tokens

Seven tokens. Every value below is final.

| Token | Value | Use |
|---|---|---|
| `--color-bg` | `#1C1D1F` | Page background |
| `--color-surface` | `#23252A` | Raised or grouped surfaces |
| `--color-border` | `#3E6673` | Dividers and hairlines only — see below |
| `--color-text` | `#F2EEE7` | Primary text |
| `--color-text-muted` | `#A6A7A4` | Secondary text, metadata, captions |
| `--color-accent` | `#6E97A3` | Links, focus rings, selected states, key emphasis |
| `--color-accent-contrast` | `#1C1D1F` | Text on accent surfaces |

### Verified Contrast

Measured against the values above, to the thresholds in `11_Technical_Standards.md`.

| Pair | Ratio | Result |
|---|---|---|
| `--color-text` on `--color-bg` | 14.59:1 | AAA |
| `--color-text-muted` on `--color-bg` | 6.98:1 | AA |
| `--color-accent` on `--color-bg` | 5.32:1 | AA |
| `--color-accent-contrast` on `--color-accent` | 5.32:1 | AA |
| `--color-border` on `--color-bg` | 2.69:1 | Decorative only |

The first four pairs pass AA at every size in the type scale. `--color-text-muted` clears AA for normal text but not AAA, so it is used for secondary content only, never for primary reading text.

**`--color-border` is not an accessible foreground colour.** At 2.69:1 it sits below the 3:1 required of interface boundaries and far below the 4.5:1 required of text. It is permitted only for dividers and hairlines, which WCAG treats as decorative — the use v1 makes of it, since no forms exist. It must never carry text, an icon that conveys meaning, a focus indicator, or the boundary of a control. Any of those requires a value that clears its threshold; `--color-accent` already does.

### Semantic Colours

**Not defined in v1.** No feature consumes success, warning, error or information states. They are added when a feature requires one, not before.

### Colour Rules

- Prefer an existing token to a new value, always.
- The accent stays controlled; it is emphasis, not surface.
- No gradients.
- New colours require a recorded reason in `12_Decision_Record.md`.

---

## Typography Tokens

Two families. Two files. Self-hosted `woff2`, latin subset, in `public/fonts/`, preloaded, `font-display: swap`.

| Role | Family | Weights | Token |
|---|---|---|---|
| Display | **Fraunces** (variable) | 400 | `--font-display` |
| Body / UI | **IBM Plex Sans** | 400, 600 | `--font-body` |

Both are open-source (SIL OFL). No font is loaded from a third-party CDN — self-hosting avoids the third-party request and its privacy implications.

### Type Scale

Eight levels. Fluid via `clamp()` between the `sm` and `lg` breakpoints.

| Token | Min → Max | Family | Line height | Tracking |
|---|---|---|---|---|
| `--text-display` | 40 → 72px | display | 1.05 | −0.02em |
| `--text-h1` | 32 → 48px | display | 1.10 | −0.01em |
| `--text-h2` | 24 → 32px | display | 1.20 | −0.01em |
| `--text-h3` | 20 → 24px | body 600 | 1.30 | 0 |
| `--text-body-lg` | 18 → 20px | body 400 | 1.60 | 0 |
| `--text-body` | 16 → 17px | body 400 | 1.65 | 0 |
| `--text-body-sm` | 14 → 15px | body 400 | 1.55 | 0 |
| `--text-label` | 12 → 13px | body 600 | 1.40 | 0.06em |

### Typography Rules

- No arbitrary font sizes. If a size is needed twice, it is a token.
- Two weights on the body family, one on the display family. Adding a weight is a design decision, not a convenience.
- Never use `--text-label` for running text.
- Long-form content uses the reading width (below).

---

## Spacing Tokens

4px base. Ten steps.

`--space-1: 4` · `--space-2: 8` · `--space-3: 12` · `--space-4: 16` · `--space-5: 24` · `--space-6: 32` · `--space-7: 48` · `--space-8: 64` · `--space-9: 96` · `--space-10: 128`

Spacing communicates relationship: elements that belong together sit closer; independent ideas are separated. Section rhythm typically uses `--space-8` to `--space-10` on desktop and one step down on mobile.

Prefer spacing over borders, containers and shadows to express grouping.

---

## Layout Tokens

| Token | Value | Use |
|---|---|---|
| `--width-reading` | `68ch` | Long-form prose: project narrative, articles |
| `--width-standard` | `1080px` | Default page container |
| `--width-wide` | `1320px` | Project imagery, editorial compositions |
| *full-bleed* | utility class | Sections that break the container deliberately |

Gutters: `--space-5` on mobile, `--space-7` from `md` upward.

### Layout Rules

- Maintain consistent alignment points across sections.
- The grid is a foundation, not a restriction; intentional asymmetry is allowed.
- Avoid nested containers.
- Never exceed the reading width for running text.

---

## Breakpoints

Three. Mobile-first; each exists because a composition genuinely stops working.

| Token | Value | Change |
|---|---|---|
| `--bp-sm` | `640px` | Single column → two-column metadata, larger type steps |
| `--bp-md` | `900px` | Full navigation, multi-column layouts, wider gutters |
| `--bp-lg` | `1200px` | Maximum widths, editorial composition, largest type |

No other breakpoints without a recorded reason. Intermediate sizes must remain coherent.

---

## Border Radius

Three tokens.

`--radius-sm: 4px` — inputs, tags, small controls
`--radius-md: 8px` — cards, images, larger surfaces
`--radius-pill: 999px` — pills only, used selectively

Nothing larger. Excessive rounding reads playful and generic.

---

## Elevation

Two levels.

`--elevation-flat: none` — the default for almost everything
`--elevation-subtle: 0 1px 2px rgba(0, 0, 0, 0.3), 0 4px 12px rgba(0, 0, 0, 0.2)`

Shadows are black at a strength the dark ground requires. The earlier values were tinted with the light theme's ink and carried its alpha, both of which are invisible on `--color-bg` (D-034).

Hierarchy comes from spacing and contrast first. Elevation is used only when it communicates a real relationship — never for decoration.

---

## Motion

| Token | Value | Use |
|---|---|---|
| `--duration-fast` | `120ms` | Colour, opacity, small state changes |
| `--duration-base` | `200ms` | Hover, focus, standard transitions |
| `--duration-slow` | `320ms` | Entrances, larger movements |
| `--ease-standard` | `cubic-bezier(0.2, 0, 0, 1)` | Everything |

`prefers-reduced-motion: reduce` is honoured globally: transitions and animations reduce to near-instant, and no information depends on motion.

---

## Interaction States

Required for every interactive element: **default, hover, focus, active, disabled** — plus **selected** for navigation.

Loading, success and error states are not defined in v1; no asynchronous interface exists.

**Focus** — `outline: 2px solid var(--color-accent); outline-offset: 2px`, applied via `:focus-visible`. Focus is never removed.

**Hover** — restrained: colour, opacity or a small translation. Never a layout shift.

**Touch targets** — minimum 44×44px.

---

## Component System

Components are built from tokens and stay minimal.

**Navigation** — primary (four destinations), Connect action, active state, mobile behaviour.

**Buttons** — three levels: primary, secondary, text. Hierarchy through weight and colour, never decoration.

**Links** — clearly identifiable in prose; external links marked where the destination is not obvious.

**Cards** — only when grouping genuinely helps. Cards are not the default container for content.

**Project components** — project preview, metadata, project narrative sections.

**Content components** — headings, prose, lists, quotes, media with caption, tags, metadata.

**Forms** — none in v1. No contact form exists; see `09_Feature_Specification.md`.

---

## Accessibility

Built into components, not added afterwards: sufficient contrast, semantic hierarchy, keyboard navigation, visible focus, accessible labels, adequate touch targets, reduced-motion support and readable typography.

The conformance target and its verification are defined in `11_Technical_Standards.md`.

---

## Design System Rules

- Use a token wherever a recurring value exists.
- No arbitrary visual values.
- Do not create a component without a clear purpose.
- Avoid unnecessary component variants.
- Preserve hierarchy across responsive states.
- Use elevation and decoration sparingly.
- Components support the experience; they never become it.
- Adding a token, weight, breakpoint or colour is a decision to be recorded, not a convenience.
