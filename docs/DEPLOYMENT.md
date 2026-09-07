# Deployment

Static site, deployed via GitHub Pages on the `main` branch, custom
domain `daaart.in.ua`.

## One-time setup

1. GitHub → repo → **Settings → Pages**
   Source: **Deploy from a branch** → Branch: `main` → Folder: `/ (root)`
   (not `/docs` — that folder is used for project documentation here,
   not the Pages source).
2. Custom domain: `daaart.in.ua` (the `CNAME` file at the repo root
   already contains this — GitHub Pages reads it automatically).
3. DNS at the domain registrar must point to GitHub Pages:
   - `A` records for the apex domain → GitHub Pages IPs
     (`185.199.108.153`, `185.199.109.153`, `185.199.110.153`,
     `185.199.111.153`), or
   - a `CNAME`/`ALIAS` record → `daaart-studio.github.io`, depending
     on whether `www` or the apex is used.
   Verify current DNS before switching — the domain is already live,
   so this is a cut-over, not a fresh setup.
4. Enable **Enforce HTTPS** once the certificate is issued (can take
   a few minutes to a few hours after DNS propagates).

## Every deploy after that

Pushing to `main` is the deploy:

```
git add .
git commit -m "type: description"
git push
```

GitHub Pages rebuilds automatically. No build step, no CI required
for this project as it stands.
