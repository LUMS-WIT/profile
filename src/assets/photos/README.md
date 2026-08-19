# Photo drop-in folders

Drop real photos here — the site picks them up automatically on the next
`npm run dev` / `npm run build`, no code changes needed.

- **`hero/site.jpg`** — the main hero background photo. Any of `.jpg`,
  `.jpeg`, `.png`, `.webp` works; keep the filename exactly `site.jpg`
  (or update the import in `src/components/Hero.tsx` to match).
- **`people/<id>.jpg`** — one photo per person, filename = their `id` from
  `src/data/content.ts` (e.g. `abubakr-muhammad.jpg`). Missing photos fall
  back to an initials avatar automatically.
- **`stories/<id>.jpg`** — one photo per impact story, filename = the
  story's `id` from `src/data/content.ts` (e.g. `intelliwarn.jpg`).
  Missing photos fall back to a plain accent panel automatically.
- **`tech/<id>.jpg`** — one photo per technology/sensor product, filename
  = the product's `id` from `src/data/content.ts` (e.g. `aws.jpg`).
  Missing photos fall back to a plain accent panel automatically.

The matching is done by `src/lib/photos.ts` via `import.meta.glob` — it
scans these folders at build time and maps filenames to ids. Nothing else
needs to change when you add a file.
