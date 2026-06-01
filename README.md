# Kitsudo landing site

Marketing landing page for **Kitsudo**, a local task/to-do planner for
Android (+ Wear OS companion). Open-source at
[github.com/hecker-01/Kitsudo](https://github.com/hecker-01/Kitsudo), by
[heckr.dev](https://heckr.dev).

Terminal/hacker look: monospace type, typewriter reveals, a boot-log loader,
`$ command` headings, and bracketed `[ BUTTONS ]`, in Kitsudo's
**Catppuccin Mocha** palette with Mauve/Lavender accents and the fox mascot.

## Stack

- **Vite 8** + **Vue 3** `<script setup>` SFCs (plain JS)
- **Vue Router** (history mode): `/`, `/privacy`, and `*` for 404
- **Tailwind CSS 4** via `@tailwindcss/vite` (CSS-first config in `src/index.css`)
- **Swiper** for the screenshot carousel
- Google Fonts: JetBrains Mono / IBM Plex Mono (via CSS `@import`)
- No backend, no tracking.

## Scripts

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # -> dist/
npm run preview  # serve the built dist/
```

## Customizing

- **Links & config**: single source of truth in `src/data/site.js`
  (repo, releases, author, Play Store URL, screenshot manifest, boot-log lines).
  The Play Store badge stays hidden until `PLAY_URL` is set.
- **Features**: edit `src/data/features.js`.
- **Logo**: replace `public/logo.svg` (hero/favicon) and add `public/logo.png`
  (social meta). Keep the same filenames so no code changes are needed.
- **Screenshots**: drop `1.png` ... `N.png` into `public/screenshots/` and list
  them in `SCREENSHOTS` in `src/data/site.js`. Placeholder frames show until then.
- **Theme tokens**: Catppuccin Mocha colors, fonts, and animations live in the
  `@theme` block at the top of `src/index.css`.
