# WIT Portfolio

Website for the Centre for Water Informatics & Technology (WIT) at LUMS —
research themes, sensor technology, projects, training, and people.

## Develop

```bash
npm install
npm run dev
```

## Build & deploy

```bash
npm run build      # outputs to dist/
npm run deploy      # builds and pushes dist/ to the gh-pages branch
```

Auto-deploys to GitHub Pages on every push to `main` via
`.github/workflows/deploy.yml`.

## Content

All copy and data lives in [`src/data/content.ts`](src/data/content.ts).
Real photos can be dropped into `src/assets/photos/` — see the README in
that folder for the naming convention.
