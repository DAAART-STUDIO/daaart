# Development

## Before changing anything

1. Read the relevant doc in this folder.
2. Check GitHub for the current state of the file — it's the source
   of truth, not memory of a previous session.
3. Look for an existing token / module / class before adding a new one.
4. Prefer the smallest correct change. Don't rewrite working code
   without a reason.

## HTML

- Compact and readable. One line per element when it reads fine;
  multi-line attributes only when an element genuinely gets heavy
  (e.g. `<img>` with several attributes).
- No mechanical blank lines between every tag — use blank lines to
  separate logical blocks only.
- Comments are short and useful (`<!-- SOLUTIONS -->`), never
  decorative or stating the obvious.

## CSS

- Use existing tokens from `tokens.css` before inventing a new value.
- Component styles live in `css/components/`, one file per component.
- BEM-ish naming: `.block`, `.block__element`, `.block--modifier`.
- No new global styles unless something is genuinely global.

## JavaScript

- ES Modules only. `app.js` stays an entry point — logic goes in
  `js/modules/`.
- One module = one responsibility. Don't duplicate existing logic.
- Check whether a third-party library is actually necessary before
  adding it — this project stays framework-free on purpose.

## Before committing

- [ ] Desktop
- [ ] Mobile (390 / 430 / 768)
- [ ] EN / UA
- [ ] Light / Dark
- [ ] Console clean
- [ ] Animation respects `prefers-reduced-motion`
- [ ] `git diff` reviewed — no unrelated changes

## Git

```
git add .
git commit -m "type: description"
git push
```

Types: `feat:` `fix:` `style:` `refactor:` `docs:` `perf:`

Don't commit if a change is unclear or accidental.
