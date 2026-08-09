# Luis Enrique Ramírez López — Portfolio

Live at **[luisralo.github.io](https://luisralo.github.io/)**.

Bilingual (ES/EN) portfolio built with [Astro](https://astro.build), no UI framework — plain HTML/CSS/vanilla JS. Light/dark theme, a centered alternating experience timeline, an Iruz Labs investor spotlight, a GitHub contributions heatmap, and full SEO/AEO (Open Graph, Twitter Card, JSON-LD, `llms.txt`).

## Project structure

```text
/
├── public/
│   ├── assets/           # CV, photo, company logos, OG image
│   ├── robots.txt
│   ├── sitemap.xml
│   └── llms.txt
├── src/
│   ├── data/content.ts   # single source of truth for ALL site copy (ES + EN)
│   ├── components/       # Hero, Experience, Skills, Contact, etc.
│   ├── layouts/Layout.astro
│   └── pages/index.astro
└── .github/workflows/deploy.yml
```

## Editing content

Everything visible on the site — hero copy, experience, projects, skills, education, contact info — lives in [`src/data/content.ts`](src/data/content.ts), duplicated under `content.es` and `content.en`. There's no CMS; edit that file and rebuild.

Both language versions are rendered into the page at build time and toggled client-side via a `data-lang` attribute on `<html>` (see `src/components/Site.astro` and `global.css`), so there's a single static HTML output with no routing per language.

## Commands

| Command           | Action                                      |
| :----------------- | :------------------------------------------ |
| `npm install`       | Install dependencies                        |
| `npm run dev`       | Start local dev server at `localhost:4321`  |
| `npm run build`     | Build the production site to `./dist/`      |
| `npm run preview`   | Preview the production build locally        |

## Deployment

Pushing to `main` triggers [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml), which builds the site and publishes `./dist` to GitHub Pages (Pages is configured for **workflow**-based builds, not the legacy Jekyll branch deploy).

## SEO / AEO

- `astro.config.mjs` sets `site` for canonical URLs and sitemap generation.
- `Layout.astro` emits canonical link, Open Graph, Twitter Card, and JSON-LD (`Person` + `Organization`) structured data.
- `public/llms.txt` gives LLM crawlers a plain-text summary for answer-engine optimization.
- `public/assets/og-image.png` is the 1200×630 social share card.
