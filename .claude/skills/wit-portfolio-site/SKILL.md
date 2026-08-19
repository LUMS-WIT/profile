---
name: wit-portfolio-site
description: Context and conventions for the WIT (Centre for Water Informatics & Technology, LUMS) portfolio website — use when building, editing, or deploying this React site, or when asked about its content model, information architecture, design system, or hosting.
---

# WIT portfolio site

## Why this exists

Built after a meeting with the Brave project team (DAI) who asked WIT for
a portfolio covering: hydrology tools training, sensor/field work (what
sensors, what parameters, where, which partners), and an overall lab
portfolio (capabilities, research domains, key people, projects).
Existing material was scattered across slides/proposals; the LUMS Drupal
site (`wit.lums.edu.pk`) was judged not effective for this pitch.

This is a **standalone React site**, not wired into the Drupal site.
Content is curated and cross-linked to `wit.lums.edu.pk` where we don't
reproduce something in full (e.g. the complete people list, the full
15-theme research list) — the goal is focused communication, not a full
CMS mirror. Folding this into Drupal later is an open question, not
started.

## Core message — read this before editing copy

The site's framing is **systems thinking about water**, not
instrumentation. WIT studies water, energy, agriculture, and climate as
one connected system; field sensors are how the data gets collected, not
the headline. This was an explicit correction mid-project — an earlier
draft led with "we put instruments where the water is" and got pushed
back on for foregrounding the wrong thing. Keep hero/about copy and
section framing systems-first; technology/sensors get their own page,
not the front-page thesis.

## Content is real, not placeholder

Every person, project, theme, and news item in `src/data/content.ts` is
sourced from live fetches of `wit.lums.edu.pk` (dated in the file's
header comment) — verify against the live site before trusting old
figures, and re-fetch rather than guess when adding more. Do not
reintroduce invented names/numbers; if a fact isn't sourced, mark it
clearly as pending rather than inventing a plausible-sounding one.

Research themes have a two-tier depth model (`ResearchDomain.full`):
only "Integrated Climate Policy Analysis" has real paragraph-level
depth (transcribed from `wit.lums.edu.pk/icpa`) — the other five have
honest one-line summaries plus what-we-do bullets grounded in real
project titles/funders, and link out to the live site for more. When
you get real depth for another theme (an `/xyz` page like `/icpa`
exists for it), set `full: true` and fill in `overview`/`whatWeDo`/
`collaboration`/`capacityBuilding` the same way ICPA is filled in —
don't fabricate the shape without the content.

## Stack & architecture

- Vite + React 19 + TypeScript, Tailwind CSS v4 via `@tailwindcss/vite`
  (tokens live in the `@theme` block in `src/index.css`, not a
  `tailwind.config.js` — v4 is CSS-first)
- **React Router** (`HashRouter`, in `main.tsx`) — this is a real
  multi-page site now, not a single scrolling page. `HashRouter` was
  chosen specifically because GitHub Pages can't do server-side rewrites
  for client-side routes; URLs are `#/research/climate-policy` etc. If
  this ever moves to Vercel/a real server, switch to `BrowserRouter` and
  drop the `#` — it's a one-line change in `main.tsx`, but do it
  deliberately, not by accident.
- `src/App.tsx` defines routes under a shared `Layout` (`Nav` +
  `<Outlet/>` + footer). `src/pages/*.tsx` are thin route components;
  most just render the matching `src/components/*.tsx` section. The
  interesting ones are `Research.tsx` (theme index) and
  `ResearchTheme.tsx` (per-theme detail, `/research/:id`) — this pair is
  what gives each research angle a real, shareable, deep-linkable page,
  which was the point of moving off single-page anchors.
- `framer-motion` for the hero reveal, plus `whileInView` fade/slide-up
  on card grids and section headers site-wide — motion is deliberate
  and repeated, not scattered.

## Signature diagrams — the brand's one repeated visual idea

Benchmarked against peer institutes (IIASA's systems-analysis identity,
Stockholm Resilience Centre's "planetary boundaries" diagram) — the
pattern those sites share is one custom diagram repeated as the site's
visual signature, not stock photography or decoration. WIT's version:

- `SystemsDiagram.tsx` — a 4-node "nexus" (Water/Energy/Agriculture/
  Climate connected to a center + each other), colored via the
  `--color-sector-*` tokens in `index.css`. Used on `/research` and the
  `systems-modelling` theme page.
- `SensingLoopDiagram.tsx` — a monochrome river-teal closed loop
  (Sense → Transmit → Model → Decide → back to Sense), representing
  WIT's own instrumentation method rather than an external sector
  (hence single-color, not sector-colored). Used on `/technology` and
  the `iot-telematics` theme page.

`ResearchTheme.tsx` maps domain id → diagram via `THEME_DIAGRAM`. When
another theme earns real depth (`full: true`), consider whether it
needs its own diagram in the same visual language before defaulting to
plain text — that repetition is what makes it read as a brand, not a
one-off illustration.

Sector colors (`--color-sector-water/energy/agriculture/climate` in
`index.css`) are scoped strictly to diagram nodes and small tags —
never section backgrounds. Water reuses the primary brand `river` color
since it's WIT's home sector.

## Logo & favicon

`src/assets/wit-logo.png` is the real LUMS/WIT lockup (used in `Nav`).
`public/favicon-mark.png` is the LUMS shield mark cropped out of that
same file (via a one-off Pillow script, not committed) — if the source
logo changes, the favicon needs re-cropping by hand; there's no
build-time pipeline for it.

## Content model — edit `content.ts`, not the components

All copy/data lives in `src/data/content.ts`. Components and pages just
map over these arrays/objects — add a project/person/news item/theme by
adding an entry there, not by touching a component.

## Photos — real, drop-in, not stock

`src/assets/photos/{hero,tech,people,stories}/` hold **real WIT field
photos** the user supplied directly (not stock) — e.g. `tech/aws.jpg` is
an actual WIT team installing a weather station on snow;
`hero/site.jpg` is a real deployed river gauge with an actual data-curve
overlay. `src/lib/photos.ts` uses `import.meta.glob` to match filenames
to ids automatically — drop `people/<id>.jpg` or `stories/<id>.jpg`
(id = the matching entry's `id` in `content.ts`) and it appears with no
code change. Missing photos fall back to a plain accent panel or
initials avatar — never a stock substitute. See
`src/assets/photos/README.md` for the exact convention.

If new photos arrive with descriptive filenames (like `"1 snow melt.jpg"`
did), rename to the `id`-matching convention and `sips -Z <width>`
them down before committing — several arrived multi-MB and were resized
to ~300–550KB. Don't skip this; it's the difference between a fast site
and a slow one.

## Design system

Deliberately institutional/clean, not the "AI portfolio" look (dark
hero + gradient + mono-everything was the first draft and got corrected
— see git history if curious what to avoid repeating). Benchmarked
against `city.lums.edu.pk`.

- **Palette** (`src/index.css` `@theme`): `ink` #14181b, `body` #444d52,
  `paper` #ffffff, `surface` #f5f6f4, `border` #e2e5e1, `river` #0f5c56
  (primary accent), `river-dark` #0a413c, `river-tint` #e9f2f0. No
  second/decorative accent color — restraint is the point.
- **Type**: Inter only, weight/size for hierarchy. No display serif, no
  monospace-for-everything.
- **Logo**: `src/assets/wit-logo.png` is the real LUMS/WIT lockup — used
  in `Nav` and available for the footer. Don't replace with text or a
  generated mark.
- **Motion**: one hero reveal, `prefers-reduced-motion` respected in
  `index.css`. Nothing else animates on its own.

## Running locally

```bash
npm install
npm run dev       # http://localhost:5173/wit-portfolio/
npm run build      # tsc -b && vite build -> dist/
npm run preview
```

## Deploying to GitHub Pages

`vite.config.ts` sets `base: '/wit-portfolio/'` to match the repo slug
— update this if the repo is renamed, or assets 404.

Already live via **GitHub Actions** (`.github/workflows/deploy.yml`,
`actions/deploy-pages`) — pushing to `main` auto-redeploys. Pages source
must be set to "GitHub Actions" in repo Settings → Pages (one-time,
already done). A manual `gh-pages` branch path also exists
(`npm run deploy`) as a fallback but isn't the primary path.

If this moves to Vercel (e.g. to add a CMS/API so non-engineers can
edit content): change `vite.config.ts`'s `base` to `/`, and switch
`HashRouter` → `BrowserRouter` in `main.tsx`. Both are one-line changes,
noted here so they're deliberate, not accidental.

## SEO

`index.html` has real title/description (from actual WIT mission text),
canonical link, OG/Twitter tags, JSON-LD `ResearchOrganization`.
`public/robots.txt` and `public/sitemap.xml` exist but are minimal
(single-URL sitemap) since this was built as a single-page app — now
that it's multi-route, revisit `sitemap.xml` to list real routes
(`/research`, `/research/climate-policy`, `/projects`, etc.) for better
indexing, and consider whether `HashRouter` URLs need any special
handling for search engines (they generally index hash routes poorly —
this is the main SEO tradeoff of the GitHub Pages hosting choice).

## Open items

- Only ICPA has full research-theme depth — the other 5 themes need the
  same treatment as real source pages become available.
- People section is curated to 6 (4 directors + 2 leads); full team is
  ~40, linked out to `wit.lums.edu.pk/people` rather than reproduced.
- `sitemap.xml` doesn't yet list the real routes (see SEO above).
- No CMS — content edits require a code change to `content.ts`. Fine
  for now; reconsider if non-engineers need to update it regularly.
