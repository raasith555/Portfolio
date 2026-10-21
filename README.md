# Portfolio

Personal portfolio site built with Vite, React, and Material UI. Hosted on GitHub Pages.

## One-time GitHub Pages setup

1. Push this repo to GitHub (default branch: `main`).
2. In the repo: **Settings → Pages → Build and deployment → Source**: choose **GitHub Actions**.
3. Push to `main` (or run the **Deploy to GitHub Pages** workflow manually). The site goes live after the workflow succeeds.

## Vite `base` path

In `vite.config.js`, `base` is set to `/Portfolio/` (this repo’s name).

| Hosting type | Example repo | Set `base` to |
|--------------|--------------|---------------|
| Project site (default) | `username/Portfolio` | `/Portfolio/` |
| User / org site | `username/username.github.io` | `/` |

If you rename the repo or use a `<username>.github.io` repo, update `base` in `vite.config.js` to match.

## Local development

```bash
npm install
npm run dev
```

Other scripts:

```bash
npm run build    # production build → dist/
npm run preview  # preview the production build locally
```

## Live URL format

Because routing uses `HashRouter`, pages use a `/#/` segment:

```
https://<username>.github.io/Portfolio/#/
https://<username>.github.io/Portfolio/#/skills
https://<username>.github.io/Portfolio/#/projects
```

For a user site (`username.github.io` with `base: '/'`):

```
https://<username>.github.io/#/
```
