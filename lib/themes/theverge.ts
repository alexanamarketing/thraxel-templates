import type { BrandTheme } from "./types";

// The Verge — tech-media editorial. Signature: near-black canvas (#131313), hazard-mint
// (#3cffd0) + ultraviolet (#5200ff) accents, Manuka 900 display at 60-107px, vertical
// StoryStream timeline rule, saturated color-block story tiles, flat 1px-border depth.
// Source: media-and-consumer-tech/theverge.md.
const theverge: BrandTheme = {
  schemaVersion: 1,
  slug: "theverge",
  name: "The Verge",
  description: "Tech-media editorial — near-black canvas, hazard mint CTA, Manuka at 107px.",
  polarity: "dark",

  colors: {
    canvas:    "oklch(0.14 0 0)",        // #131313 Canvas Black
    surface:   "oklch(0.22 0 0)",        // #2d2d2d Surface Slate
    raised:    "oklch(0.26 0 0)",        // #313131 Image Frame / card background
    ink:       "oklch(1 0 0)",           // #ffffff Hazard White — primary text
    muted:     "oklch(0.63 0 0)",        // #949494 Secondary Text — bylines, timestamps
    hairline:  "oklch(0.32 0 0)",        // quiet section divider on dark canvas
    primary:   "oklch(0.90 0.18 163)",   // #3cffd0 Jelly Mint — CTA fill
    onPrimary: "oklch(0 0 0)",           // #000000 — text on mint buttons/tiles
    accent:    "oklch(0.90 0.18 163)",   // #3cffd0 Jelly Mint — links, active states
  },

  fonts: {
    display: {
      // Manuka (Klim Type Foundry) — proprietary. Anton is the closest open condensed
      // heavy; loosen line-height ~+0.12 when rendered via Anton substitute.
      stack: '"Manuka", "Anton", Impact, sans-serif',
      source: { kind: "proprietary", substituteGoogle: "Anton", weights: [900] },
      weight: 900,
      tracking: "0.01em",
    },
    body: {
      // PolySans (PanGram Pangram) — proprietary. Space Grotesk metrics are close enough
      // that no token adjustments are needed.
      stack: '"PolySans", "Space Grotesk", Helvetica, Arial, sans-serif',
      source: { kind: "proprietary", substituteGoogle: "Space Grotesk", weights: [300, 400, 500, 700] },
      weight: 400,
    },
    mono: {
      // PolySans Mono — used exclusively for UPPERCASE labels, kickers, timestamps,
      // and button text. Space Mono works at the same token values.
      stack: '"PolySans Mono", "Space Mono", "Courier New", monospace',
      source: { kind: "proprietary", substituteGoogle: "Space Mono", weights: [500, 600] },
      weight: 600,
    },
  },

  type: {
    navUppercase: true,
    navTracking: "0.12em",      // ~1.5px on 12px mono nav labels
    buttonUppercase: true,
    buttonTracking: "0.12em",   // PolySans Mono button label tracking
    displayUppercase: false,    // Manuka headlines are mixed-case, not all-caps
    tabularNumbers: false,
  },

  radius: {
    button: "24px",   // primary pill — Jelly Mint CTA
    card:   "20px",   // standard StoryStream tile
    input:  "2px",    // newspaper-form feel — deliberately tight
    chip:   "20px",   // category tag / text pill
  },

  density: "standard",

  buttons: {
    primary: {
      bg:    "oklch(0.90 0.18 163)",  // Jelly Mint fill
      color: "oklch(0 0 0)",          // Absolute Black text on mint
    },
    secondary: {
      bg:    "oklch(0.22 0 0)",       // Surface Slate — dark pill, no border
      color: "oklch(0.93 0 0)",       // #e9e9e9 Muted Text (reduces screen glare)
    },
  },

  elevation: "border",  // 1px hairline borders replace shadows throughout; color-as-elevation

  layout: {
    hero:    "editorial",   // massive Manuka wordmark + editorial headline stack, not split
    cta:     "band",        // subscribe/promo band pinned to the section break
    preview: "card",        // StoryStream tile-based feed
  },

  signature: {
    kind:      "editorial-rule",
    accent:    "oklch(0.90 0.18 163)",  // Jelly Mint (#3cffd0) — hazard tape primary
    accent2:   "oklch(0.37 0.30 278)",  // Verge Ultraviolet (#5200ff) — secondary hazard
    intensity: "strong",
    note: "Vertical StoryStream timeline rule (1px mint/UV) + saturated solid color-block tiles on near-black; no gradients, no shadows.",
  },
};

export default theverge;
