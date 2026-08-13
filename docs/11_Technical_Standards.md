---
Document Version: 2.0
Status: Approved
Purpose: Define the engineering standards, measurable quality targets and Git workflow of the 3G'sO codebase.
Last Updated: 2026-08-12
---

# Technical Standards

This document owns **coding conventions, the Git workflow and every measurable quality target**.

Targets are met through the simplest implementation that meets them. No tool is introduced to satisfy a target that plain implementation already satisfies.

---

## Measurable Targets

These are the numbers. They are verified on a production build, not in development.

### Accessibility — WCAG 2.2 AA

| Requirement | Target |
|---|---|
| Text contrast | ≥ 4.5:1 (verified in `06_Design_System.md`) |
| UI and graphical contrast | ≥ 3:1 |
| Keyboard operability | Every interactive element, no traps |
| Focus indicator | Visible via `:focus-visible`, 2px accent, 2px offset, never removed |
| Touch targets | ≥ 44×44px |
| Headings | One `<h1>` per page, no skipped levels |
| Images | Alt text on every image; required by content schema |
| Landmarks | `header`, `nav`, `main`, `footer` on every page, plus a skip link |
| Motion | `prefers-reduced-motion` honoured; no information conveyed by motion alone |
| Language | `lang` attribute set on `<html>` |

### Performance

| Metric | Target |
|---|---|
| Lighthouse Performance (mobile) | ≥ 95 |
| Lighthouse Accessibility | 100 |
| Lighthouse Best Practices | ≥ 95 |
| Lighthouse SEO | ≥ 95 |
| LCP | < 2.0s |
| CLS | < 0.05 |
| INP | < 200ms |
| JavaScript per route | < 20KB gzipped |
| Font files | ≤ 3, latin subset, preloaded |
| Images | Optimized via `astro:assets`, explicit dimensions |

The JavaScript budget is deliberately far above expected usage; Astro's baseline is zero. Crossing it means a decision was made that should have been recorded.

### Browser Support

Last two versions of Chrome, Edge, Firefox and Safari, plus iOS Safari 16+.

### How These Are Verified

Lighthouse in Chrome DevTools against a production preview, plus a manual keyboard and screen-reader pass. No CI, no automated test suite, no monitoring service in v1 — the targets are checked at phase exits and before launch.

This is deliberate. Adding tooling to measure a site this size would cost more than it returns.

---

## Code Quality

Code prioritizes clarity, simplicity, maintainability, consistency and predictability. It is written for humans first.

- Prefer simple implementations.
- Avoid unnecessary abstraction.
- Keep components and functions focused.
- Use descriptive names.
- Remove unused code.
- Keep responsibilities separated.

---

## Conventions

Follow Astro and TypeScript conventions. Naming and file conventions are defined in `08_Project_Structure.md`.

### TypeScript

Strict mode (`astro/tsconfigs/strict`). `astro check` passes before any commit is considered complete.

Prefer inferred types from Zod content schemas over hand-written duplicates. Avoid `any`.

### Astro Components

Single-file: markup, scoped `<style>` and component script together. No separate stylesheet per component.

Props are typed. Components consume design tokens and never define raw visual values.

Client-side JavaScript requires a real interaction requirement. `client:*` directives are not used in v1 — there is no UI framework to hydrate.

### Styling

Global tokens and base styles in `src/styles/`. Everything else scoped to its component.

No utility framework. No CSS-in-JS. No arbitrary values where a token exists.

### Naming

Names communicate purpose. Avoid `data`, `thing`, `temp`, `utils` unless context makes the meaning genuinely clear.

### Comments

Explain *why* when the reason is not obvious. Do not narrate what the code already says.

---

## Git Workflow

`3GsO-Platform` is an independent repository. It is never nested inside another repository, and the repository root is the project root.

### Cycle

1. Identify the task.
2. Branch when the work is large enough to benefit from separation.
3. Implement.
4. Verify: `astro check`, production build, and the targets relevant to the change.
5. Commit.
6. Merge to `main`.

`main` always represents a deployable state — Cloudflare builds and publishes from it.

### Branches

`main`, plus `feature/…`, `fix/…`, `refactor/…` when separation is genuinely useful. Small changes may go directly to `main`; this is a solo project and ceremony has a cost.

### Commits

One logical change per commit. Messages are clear, concise and descriptive.

Good: `Add project detail layout` · `Implement responsive navigation` · `Fix mobile typography spacing`

Avoid: `changes` · `stuff` · `fix` · `update` · `final`

### Pull Requests

Optional. Used when a change is large enough that a written record of what changed and why is worth having.

---

## Testing

Testing is proportional to risk. v1 contains no business logic, no user input, no authentication and no data persistence — so the highest-value verification is manual and visual, and that is what v1 uses.

**Build-time validation** — Zod content schemas and `astro check` catch the errors most likely to occur: malformed content and type mistakes.

**Manual testing** — every phase exit covers desktop, mobile, intermediate widths, navigation, interaction, content and accessibility.

**Automated tests** are introduced when real logic exists or a critical journey needs protection from regression. Not before.

---

## Error Handling

Errors are handled intentionally: fail gracefully, never expose implementation detail, preserve the visitor's context.

A designed `404` offers real next steps rather than a dead end. Broken content fails the build rather than reaching production.

---

## Dependencies

Three production dependencies: **Astro, TypeScript, `@astrojs/sitemap`.**

Before adding a fourth, answer: is it necessary, could this be done simply without it, is it maintained, does it introduce a security concern, a recurring cost or lock-in, and does it meaningfully increase complexity?

A dependency added must be recorded in `12_Decision_Record.md`.

Dependencies are reviewed periodically for known vulnerabilities.

---

## Security

Static output removes most of the attack surface. What applies:

- **Secrets** — none exist in v1. If one is needed, it lives in an environment variable, never in the repository. `.env` is gitignored.
- **External input** — none is accepted. If that changes, it is untrusted by default.
- **External links** — `rel="noopener"` on any `target="_blank"`.
- **Headers** — a minimal security header set configured at the hosting layer.
- **Authentication** — none. If ever introduced, it follows established practice and is not implemented casually.

---

## Documentation

Documentation records decisions, reasoning and constraints — not obvious implementation detail.

`12_Decision_Record.md` logs meaningful decisions as they are made. Documentation stays synchronized with implementation: if a decision in `docs/` becomes untrue, the document is corrected in the same change that made it untrue.

---

## Technical Debt

Debt is acceptable when intentional and understood. It must not become invisible.

Prefer small, understandable compromises. Record significant shortcuts. Revisit a temporary solution when it becomes a long-term dependency.

---

## Quality Gate

Before work is considered complete:

- `astro check` passes.
- The production build succeeds with no console errors.
- The change follows the architecture and the design system.
- Responsive behaviour verified at all three breakpoints.
- Accessibility requirements met for the change.
- Relevant performance targets still pass.
- No unnecessary dependency, no secret, no recurring cost introduced.
- Documentation updated if a decision changed.

---

## Standards Rules

- Write clear, simple code.
- Follow Astro and TypeScript conventions.
- Keep responsibilities separated.
- Avoid unnecessary abstraction and unnecessary dependencies.
- Meet the targets through the simplest implementation that meets them.
- Keep commits logical; keep `main` deployable.
- Protect secrets.
- Consider accessibility and performance during implementation, not after.
- Record meaningful decisions.
- Treat technical debt intentionally.
