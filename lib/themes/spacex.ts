import type { BrandTheme } from "./types";

// SpaceX — aerospace / mission brand. Signature: pure-black canvas, full-bleed
// cinematic rocket photography, uppercase D-DIN display with wide positive tracking,
// strict monochrome (no accent color), single ghost pill CTA per band.
// Source: media-and-consumer-tech/spacex.md.
const spacex: BrandTheme = {
  schemaVersion: 1,
  slug: "spacex",
  name: "SpaceX",
  description: "Pure-black canvas, full-bleed rocket photography, monochrome — photography is the design system.",

  polarity: "dark",

  colors: {
    canvas:    "oklch(0 0 0)",           // #000000 canvas-night — pure black marketing canvas
    surface:   "oklch(0.05 0 0)",        // #0a0a0a canvas-night-soft — barely lifted near-black
    raised:    "oklch(0.13 0 0)",        // dark card surface; no shadow, only hairline depth
    ink:       "oklch(1 0 0)",           // #ffffff on-primary — dominant text on dark
    muted:     "oklch(0.70 0 0)",        // secondary text on dark; reads clearly on canvas + surface
    hairline:  "oklch(0.27 0.004 285)",  // #3a3a3f hairline-on-dark — 1px borders on dark chrome
    primary:   "oklch(1 0 0)",           // white — ghost pill border + text; filled shop variant
    onPrimary: "oklch(0 0 0)",           // black text on white fill (shop site)
    accent:    "oklch(1 0 0)",           // #ffffff link-on-dark — no brand accent; white does all chromatic work
  },

  fonts: {
    display: {
      // D-DIN-Bold: condensed industrial DIN-style face. Google substitute: Oswald (condensed sans, bold).
      stack: '"D-DIN", "Oswald", "Arial Narrow", Arial, sans-serif',
      source: { kind: "proprietary", substituteGoogle: "Oswald", weights: [700] },
      weight: 700,
      tracking: "0.02em", // ~1.6px at 80px — wide positive tracking is the typographic signature
    },
    body: {
      // D-DIN regular: same family, standard weight for body, button labels, captions.
      stack: '"D-DIN", "Oswald", "Arial Narrow", Arial, sans-serif',
      source: { kind: "proprietary", substituteGoogle: "Oswald", weights: [400, 700] },
      weight: 400,
    },
  },

  type: {
    displayUppercase: true,         // every display tier renders uppercase — brand non-negotiable
    buttonUppercase:  true,         // button-cap style: all-caps with positive tracking
    buttonTracking:   "0.09em",     // ~1.17px at 13px button-cap
    navUppercase:     true,         // nav items in micro-cap all-caps
    navTracking:      "0.08em",     // ~0.96px micro-cap tracking
  },

  radius: {
    button: "9999px",  // ghost pill — the brand's only marketing CTA shape
    card:   "4px",     // rounded.xs — near-flat; engineering precision over decoration
    input:  "4px",     // shop-site form inputs
    chip:   "9999px",
  },

  density: "cinematic", // full-viewport photography bands; whitespace is the dark sky in the photograph

  buttons: {
    primary: {
      bg:     "transparent",
      color:  "oklch(1 0 0)",
      border: "oklch(1 0 0)",   // ghost outlined pill on dark — only CTA on marketing surfaces
    },
    secondary: {
      bg:     "oklch(1 0 0)",
      color:  "oklch(0 0 0)",   // filled white; used on light shop-site surfaces
    },
  },

  elevation: "border",  // 1px hairline borders only; no shadows, blurs, or glows

  layout: {
    hero:    "cinema",   // full-bleed photography / autoplaying video fills the viewport
    cta:     "band",     // one ghost CTA per full-viewport photographic band
    preview: "media",    // photography-driven; no card grids or dashboard chrome
  },

  signature: {
    kind:      "cinema-photo",
    accent:    "oklch(1 0 0)",
    intensity: "strong",
    note: "Full-viewport rocket and Mars photography sits as the canvas; type overlays directly on imagery — no scrim, no gradient, no overlay. Photography IS the design.",
  },
};

export default spacex;
