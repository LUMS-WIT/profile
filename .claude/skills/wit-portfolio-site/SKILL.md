---
name: wit-portfolio-site
description: Context and conventions for the WIT Lab (LUMS) portfolio website prototype — use when building, editing, or deploying this React site, or when asked about its content model, design system, or GitHub Pages hosting.
---

# WIT Lab portfolio site

## Why this exists

Built after a meeting with the Brave project team (DAI) who asked WIT
for a portfolio covering: hydrology tools training, sensor/field work
(what sensors, what parameters, where, which partners), and an overall
lab portfolio (capabilities, research domains, key people, projects).
Existing material was scattered across slides/proposals; the LUMS
Drupal site was judged not effective for this. Decision: build a
focused, high-impact single-page site rather than dumping everything.

Future integration target is `wit.lums.edu.pk` (Drupal) — out of scope
for now. This repo is a **standalone React prototype**, not wired into
Drupal.

## Stack

- Vite + React 19 + TypeScript
- Tailwind CSS v4 via `@tailwindcss/vite` (tokens live in `@theme` block
  in `src/index.css`, not a `tailwind.config.js` — v4 is CSS-first)
- `framer-motion` for the hero reveal, `lucide-react` available for
  icons, `recharts` installed but not yet used (candidate for a real
  sensor-data chart once live telemetry exists)
- No router — single scrolling page with anchor-link nav

## Content model — edit this, not the components

All copy/data lives in [`src/data/content.ts`](../../../src/data/content.ts):
`researchDomains`, `sensorSites`, `impactStories`, `projects`,
`trainings`, `people`, `partners`. Every value in that file is
**placeholder** (marked in a header comment) — names like `[Name]`,
invented metrics, plausible-but-unverified donors/partners. Before
this goes in front of anyone external, every field must be checked
against real WIT records. Components (`src/components/*.tsx`) just map
over these arrays — add a new project/person/site by adding an entry,
not by touching a component.

`sensorSites` coordinates (`x`, `y`, 0–100) are positions on the
abstract basin diagram in `SensorNetwork.tsx`, north-to-south — not
real lat/lon. If real site coordinates are wanted, replace the
abstract SVG path with an actual basin/Pakistan outline and recompute
positions.

## Design system

Chosen deliberately against the generic AI-portfolio defaults (cream
+ serif + terracotta; black + neon; broadsheet). Direction: a
field-instrument / topo-map register — the site should feel like it
was designed by people who spend time in the field, not a generic
agency template.

- **Palette** (`src/index.css` `@theme`): `ink` #0d1b1c (near-black,
  used as a real section background, not just text), `paper` #eef1ea,
  `paper-raised` #e2e7db, `river` #1e6f6b (primary brand teal),
  `glacier` #4fa3c4 (cryosphere/cool accent), `terracotta` #c85a2b
  (flood-warning/alert accent — used sparingly, thematically tied to
  flood alerts, not decorative), `moss` #5c7a52 (agriculture/active-status
  accent).
- **Type**: `Fraunces` (display, headings only), `IBM Plex Sans` (body),
  `IBM Plex Mono` (labels, stats, table data, nav — the "field
  instrument readout" register). Loaded via Google Fonts `<link>` in
  `index.html`.
- **Signature element**: the interactive sensor-network map in
  `SensorNetwork.tsx` — directly answers the Brave/DAI ask (sensor
  types, parameters, locations, partners) as one visual instead of a
  spec sheet.
- **Motion**: restrained — one orchestrated hero reveal
  (`framer-motion`), no scroll-jacking or per-card animation elsewhere.
  `prefers-reduced-motion` respected in `index.css`.

## Section order (App.tsx)

Nav → Hero → About → ResearchDomains → SensorNetwork (signature) →
ImpactStories → Projects (filterable table) → Trainings → People →
PartnersFooter (partner logos strip + contact footer).

This order was chosen to lead with credibility (hero stats, domains,
sensors/impact) before the denser reference material (project list,
people grid) that donor/partner audiences dig into once already
convinced.

## Running locally

```bash
npm install
npm run dev       # http://localhost:5173
npm run build      # tsc -b && vite build -> dist/
npm run preview
```

## Deploying to GitHub Pages

`vite.config.ts` sets `base: '/wit-portfolio/'` to match this repo's
slug — **update this if the repo is renamed**, or Pages assets 404.

Two ways to publish, either works for a "temporary" prototype:

1. **`gh-pages` package** (already installed as a devDependency):
   ```bash
   npm run build
   npx gh-pages -d dist
   ```
   Then enable Pages on the repo → Settings → Pages → source =
   `gh-pages` branch.

2. **GitHub Actions** (`actions/deploy-pages`) — no `gh-pages` package
   needed, deploys on every push to `main`. Preferred if this becomes
   long-lived rather than a one-off demo.

GitHub Pages only serves static files, which is all this is — no
backend, no env vars, so hosting it there has no real downside beyond
it being a `github.io` URL until pointed at a custom domain or folded
into the Drupal site later.

## Photography

`src/assets/{hero-glacier,impact-cryosphere,impact-agriculture}.jpg`
are stock placeholders (Unsplash License, free for commercial use, no
attribution required) — generic mountain/lake/wheat-field shots
chosen to match each section's theme, **not real WIT field photos**.
The flood impact story deliberately uses an inline SVG hydrograph
graphic instead of a stock photo (no good river/flood stock match —
a data graphic fit the "flood early warning" story better anyway).
Swap the three JPGs for real field photography before this is shown
externally — stock mountains next to a claim about "our" glacier
stations would misrepresent the work once anyone looks closely.

## Open items / known placeholders

- All names in `people` are `[Name]` placeholders — needs real
  designations and headshots (currently text-only cards).
- `projects`, `sensorSites`, `impactStories` figures are illustrative,
  not sourced from real WIT records.
- Hero and two of three impact-story images are stock placeholders —
  see Photography above.
- No CMS/markdown pipeline — content edits require a code change to
  `content.ts`. Fine for a prototype; worth reconsidering if
  non-engineers need to update it regularly before Drupal integration.
