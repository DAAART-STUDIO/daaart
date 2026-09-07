# Design System

## Concept

Light = "Angels" (paper), dark = "Demons" (ink) — the site's one piece
of literal brand symbolism, expressed only through the theme toggle,
never through illustration. Everything else stays editorial and
restrained: photography, typography and whitespace carry the brand,
not decoration.

## Color

Defined in `tokens.css` as role-based custom properties, not raw hex
in components:

- `--surface` / `--surface-dim` — page background
- `--on-surface` / `--on-surface-soft` — text
- `--line` — hairline dividers (no borders/shadows on cards)
- `--accent` — one warm gold, used only for small emphasis (index
  numerals, hover states, focus). Never as a background fill.

Dark mode overrides the same roles under `[data-theme="dark"]` —
components never branch on theme directly.

## Typography

- Display: **Fraunces** (editorial serif, used for headlines and
  large numerals only)
- Body/UI: **Inter**
- Type scale is fluid (`clamp()`), tokens named `--fs-display` through
  `--fs-small` in `tokens.css`. Don't hardcode a `font-size`.

## Spacing & motion

- Spacing scale: `--space-1` (0.5rem) through `--space-7`, fluid at
  the larger end so section rhythm holds across viewports.
- One easing curve, `--ease-cinematic`, used everywhere. Durations:
  `--dur-fast` (hover/micro), `--dur-base` (theme/menu), `--dur-slow`
  (scroll reveal).
- Only `transform`/`opacity` are animated. No layout-triggering
  properties.

## What we avoid

Card grids with borders/shadows, gradient-heavy hero overlays beyond
the one readability gradient, rounded corners as a default, motion
that doesn't serve the story, more than one accent color.

## Photography (pending)

Hero and future Work section are designed around a full-bleed
photography slot (`.hero__field` today is a placeholder gradient).
When day/night photography is supplied:

- Add to `assets/images/daaart/`, WebP, hero-critical images `eager`,
  everything else `lazy`.
- Use `aspect-ratio` on the containing element, never on the `<img>`.
- Swap the `.hero__field` background for an `<img>`/`<picture>` behind
  the existing gradient overlay — grid and type don't need to change.
