import type { BrandTheme } from "./types";

// Together AI — AI native cloud. Signature: near-black navy hero (#010120), three-stop
// orange→magenta→periwinkle gradient ribbon as the only decorative chrome, single black
// CTA pill, two-face typography (The Future display sans + PP Neue Montreal Mono uppercase
// labels), 4 px canonical card/button radius, hairline borders on light surfaces.
// Source: ai-and-llm-platforms/together.ai.md.
const togetherAi: BrandTheme = {
  schemaVersion: 1,
  slug: "together-ai",
  name: "Together AI",
  description: "AI native cloud — near-black hero, black CTA pill, three-color gradient ribbon, mono uppercase labels.",
  polarity: "light",

  colors: {
    // Light-polarity base — product/pricing/docs bands are white.
    canvas:   "oklch(1 0 0)",           // #ffffff — default light surface
    surface:  "oklch(0.96 0 0)",        // near-white alt panels / hairline-toned bands
    raised:   "oklch(1 0 0)",           // cards are flush on canvas; elevation = hairline border
    ink:      "oklch(0 0 0)",           // #000000 — headlines + body on light surfaces
    muted:    "oklch(0.63 0 0)",        // #999999 — captions, table secondaries, footer links
    hairline: "oklch(0.93 0 0)",        // #ebebeb — 1 px borders, table-header rows, toggle rails
    primary:  "oklch(0 0 0)",           // #000000 — single black CTA pill (every conversion target)
    onPrimary:"oklch(1 0 0)",           // white on black
    accent:   "oklch(0 0 0)",           // black — links/emphasis (brand has no coloured link accent)

    // Dark hero override — opens every marketing page.
    heroCanvas: "oklch(0.07 0.06 265)", // #010120 — near-black navy hero + research bands
    heroInk:    "oklch(1 0 0)",         // white on dark hero
    heroMuted:  "oklch(0.72 0 0)",      // lightened grey — secondary text readable on dark hero
  },

  fonts: {
    display: {
      // "The Future" is a proprietary geometric display sans; Inter is the DESIGN.md-named substitute.
      stack: '"The Future", "Inter", "Helvetica Neue", Arial, sans-serif',
      source: { kind: "proprietary", substituteGoogle: "Inter", weights: [400, 500] },
      weight: 500,
      tracking: "-0.03em", // mirrors -1.92 px at 64 px display; brand's condensed, poured-on-the-page feel
    },
    body: {
      stack: '"The Future", "Inter", "Helvetica Neue", Arial, sans-serif',
      source: { kind: "proprietary", substituteGoogle: "Inter", weights: [400, 500] },
      weight: 400,
    },
    mono: {
      // PP Neue Montreal Mono carries eyebrows, button labels, table headers, section tags — always uppercase.
      // JetBrains Mono is the DESIGN.md-named open substitute.
      stack: '"PP Neue Montreal Mono", "JetBrains Mono", ui-monospace, "SF Mono", Menlo, monospace',
      source: { kind: "proprietary", substituteGoogle: "JetBrains Mono", weights: [400, 500] },
      weight: 500,
      tracking: "0.04em", // positive tracking on mono (reversal of display's negative tracking)
    },
  },

  type: {
    navUppercase: false,      // nav links use body-md (sentence case)
    buttonUppercase: true,    // all button labels use mono-caps-button (uppercase mono)
    buttonTracking: "0.005em", // 0.08 px at 16 px = 0.005em
    tabularNumbers: false,
  },

  radius: {
    button: "4px",    // rounded.sm — the brand's canonical CTA shape (never full-pill)
    card:   "4px",    // rounded.sm — all cards, badges, data-table rows, stat tiles
    input:  "4px",    // rounded.sm — text inputs, form fields
    chip:   "9999px", // rounded.full — reserved for the floating icon button only
  },

  density: "standard", // 80 px section padding top/bottom; tightens to ~48 px inside pricing tables

  buttons: {
    primary: {
      bg:    "oklch(0 0 0)",   // black
      color: "oklch(1 0 0)",   // white
    },
    secondary: {
      bg:     "oklch(1 0 0)",  // white canvas
      color:  "oklch(0 0 0)",  // black ink
      border: "oklch(0.93 0 0)", // 1 px hairline border (button-outline pattern on light surfaces)
    },
  },

  elevation: "border", // hairline borders only — no drop shadows on light-surface cards

  layout: {
    hero:    "split",    // 50/50: headline + CTA cluster left, gradient ribbon SVG right
    cta:     "band",     // dark-light band alternation carries elevation instead of boxed CTA
    preview: "terminal", // code-editor-mockup is the canonical product preview surface
  },

  signature: {
    kind:     "gradient-mesh",
    accent:   "oklch(0.61 0.22 35)",  // #fc4c02 brand orange — gradient stop 1
    accent2:  "oklch(0.57 0.28 330)", // #ef2cc1 brand magenta — gradient stop 2
    // Periwinkle (#bdbbff ≈ oklch(0.80 0.10 283)) is stop 3; rendered by the mesh internally.
    intensity: "medium",
    note: "Three-stop orange→magenta→periwinkle gradient ribbon SVG; the brand's only decorative element.",
  },
};

export default togetherAi;
