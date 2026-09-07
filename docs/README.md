# DAAART Studio — daaart.in.ua

Premium editorial website for DAAART Studio (Demon & Angels PR) —
individual solutions for unique people and cool companies: promotion,
scaling and automation of business processes.

## Stack

Static site. No framework, no build step.

- HTML5, CSS3, vanilla JavaScript (ES Modules)
- CSS Custom Properties as the design-token layer
- JSON i18n (English default, Ukrainian)
- WebP / SVG for imagery
- GSAP / ScrollTrigger — added only where a cinematic interaction genuinely needs it

## Structure

```
index.html
css/
├── tokens.css        design tokens (color, type, spacing, motion)
├── base.css          resets + global typography
├── layout.css         container, section rhythm, breakpoints
└── components/
    ├── navigation.css
    ├── hero.css
    ├── buttons.css
    └── sections.css   solutions / approach / contact
js/
├── app.js             entry point — wires up modules, nothing else
└── modules/
    ├── i18n.js
    ├── theme.js
    ├── nav.js
    └── reveal.js
data/i18n/
├── en.json
└── ua.json
assets/images/daaart/  photography (to be added)
docs/                   this folder
```

## Local preview

No build step required — serve the folder statically, e.g.:

```
npx serve .
```

or any static file server. Opening `index.html` directly also works but
`fetch()` for i18n JSON requires an HTTP server in most browsers.

## Further reading

- `ARCHITECTURE.md` — how the pieces fit together
- `DEVELOPMENT.md` — day-to-day conventions
- `DESIGN-SYSTEM.md` — tokens and visual language
- `I18N.md` — adding and editing translations
- `DEPLOYMENT.md` — GitHub Pages + custom domain
