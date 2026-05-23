# sourav-site

A creative one-page personal site that ties together my apps, YouTube, and Instagram. Built with **Vite + React + TypeScript + Tailwind + Framer Motion**. Hosted on **GitHub Pages**.

## What's where

```
personal-site/
  src/
    content.ts            ← EDIT THIS. Single source of truth for every piece of content.
    App.tsx               ← page composition (order of sections)
    components/
      Nav.tsx
      Hero.tsx
      About.tsx
      Apps.tsx
      YouTube.tsx
      Instagram.tsx
      Footer.tsx
  public/favicon.svg
  .github/workflows/deploy.yml   ← auto-deploys on push to main
  vite.config.ts                 ← `base` must match the GitHub repo name
```

## Run it locally

```powershell
cd personal-site
npm install
npm run dev
```

Open http://localhost:5173

## Customize

Everything you'll want to edit lives in `src/content.ts`:

- **`profile`** — name, tagline, bio, email, social URLs
- **`apps`** — app cards (name, blurb, tags, link, emoji, gradient)
- **`youtubeVideoIds`** — array of `["dQw4w9WgXcQ", ...]` (the `v=` part of the URL)
- **`instagramPostUrls`** — array of full post URLs like `https://www.instagram.com/p/Cxxxxxxxx/`

Colors live in `tailwind.config.js` (the `accent` and `accent2` keys + the gradient utility in `src/index.css`).

## Deploy to GitHub Pages

1. Create a new GitHub repo named **`sourav-site`** (or anything you like).
2. If you pick a different name, change `base: '/sourav-site/'` in `vite.config.ts` to `'/<your-repo>/'`.
3. Push:
   ```powershell
   git init
   git add .
   git commit -m "feat: initial site"
   git branch -M main
   git remote add origin https://github.com/thesouravverse/sourav-site.git
   git push -u origin main
   ```
4. On GitHub: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
5. The included workflow `.github/workflows/deploy.yml` builds on every push to `main` and deploys. Site will be live at `https://thesouravverse.github.io/sourav-site/`.

### Want a root-domain site instead? (`thesouravverse.github.io`)

1. Rename the repo to `thesouravverse.github.io`.
2. Change `base: '/sourav-site/'` to `base: '/'` in `vite.config.ts`.
3. In `index.html`, change `/sourav-site/favicon.svg` to `/favicon.svg`.
4. Push.

## Iteration tips for the next 10–15 days

- v1 (today): scaffold works, sections render, deploys. ✅
- v2: drop in real Instagram post URLs + YouTube IDs in `content.ts`.
- v3: replace the bio with the real one, add a real headshot (drop into `public/` and use `<img src="/sourav-site/me.jpg" />` in `Hero.tsx`).
- v4: tweak colors in `tailwind.config.js`, swap the gradient stops in `src/index.css` `.text-gradient`.
- v5: add a "Now" section, a blog, custom cursor, scroll-driven scenes — the sky's the limit.

## Reference templates I borrowed ideas from

- [HugoBlox/kit](https://github.com/HugoBlox/kit) — for section structure inspo (we don't use Hugo, just the layout grammar).
- [learning-zone/website-templates](https://github.com/learning-zone/website-templates) — for typography / spacing patterns.

Built fast. Iterate slow.
