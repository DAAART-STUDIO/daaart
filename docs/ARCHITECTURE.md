# Architecture

## Principles

- Static HTML page, progressively enhanced by JS. Content is readable
  and structured even before `app.js` runs.
- `app.js` is an entry point only — it imports and calls `init*()`
  functions from `js/modules/`. It never grows business logic itself.
- Each module owns one responsibility and reads/writes only the DOM
  hooks it needs (`data-*` attributes), so modules don't know about
  each other.

## Current modules

| Module        | Responsibility                                      |
|---------------|------------------------------------------------------|
| `i18n.js`     | Detects language, loads the matching JSON, applies text to `[data-i18n]` / `[data-i18n-attr]`, persists choice |
| `theme.js`    | Light/dark ("Angels/Demons") toggle, persists choice, respects `prefers-color-scheme` on first visit |
| `nav.js`      | Mobile menu open/close state, focus and Escape handling |
| `reveal.js`   | Scroll-in reveal via `IntersectionObserver` on `[data-reveal]`, degrades gracefully without it |

## Adding a module

Create `js/modules/<name>.js`, export a single `init<Name>()`, import
and call it from `app.js`. Keep DOM contracts explicit via `data-*`
attributes rather than classnames, so styling and behaviour can change
independently.

## CSS layering

`tokens.css` → `base.css` → `layout.css` → `components/*.css`, loaded
in that order in `index.html`. Components should only ever consume
tokens, never invent one-off colors, spacing or timing values.

## Sections not yet built

- **Work / Case studies** — intentionally left out of this first pass.
  We don't have confirmed photography or case-study copy yet, and a
  placeholder-card grid would work against the "no template UI"
  principle. Add once real cases (e.g. Bastione) are approved.
- **Hero photography** — hero currently runs on typography + a subtle
  gradient field. Swap in day/night photography per `DESIGN-SYSTEM.md`
  once assets exist, without changing the grid.
