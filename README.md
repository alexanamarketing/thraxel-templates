# Thraxel Templates

A template gallery for [Thraxel](https://thraxel.io) customers: the same sample page rendered in 71 different design languages, side by side, so picking a design direction for a project starts from concrete examples instead of a blank page.

The sample content never changes; only the design does. Browse the categories, open a few templates, shortlist the names you like, and send them with your project brief.

## How it works

- Every template is a theme file in `lib/themes/<slug>.ts` describing colors, typography, layout, and signature details.
- One shared renderer (`app/components/standard/StandardTemplate.tsx`) draws the fixed sample page ("SignalKit", a fictional product) in whatever theme it is given.
- `lib/brands.json` + `lib/site-content.json` drive the gallery index: categories, blurbs, and links.
- The site is a fully static Next.js export (`output: "export"`), deployable to any static host.

## Run it locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Build

```bash
npm run build
```

Static output lands in `out/`.

## Add or edit a template

1. Create `lib/themes/<slug>.ts` exporting a `BrandTheme` (copy an existing theme as a starting point).
2. Add the brand entry to `lib/brands.json` and a blurb in `lib/site-content.json`.
3. Regenerate the theme registry: `node scripts/gen-theme-registry.mjs`.
4. Verify the sample copy is unchanged across pages: `node scripts/verify-signalkit-copy.mjs`.

## License

MIT. See [LICENSE](LICENSE) and [CREDITS.md](CREDITS.md).
