import type { BrandTheme } from "./types";

// Tesla — photography-first automotive gallery. Signature: full-viewport cinema
// photography, near-zero UI chrome, a single Electric Blue CTA, Universal Sans
// (Montserrat sub) at weights 400/500 only, sharp 4px corners, no uppercase, no
// tracking, no shadows anywhere. Source: automotive/tesla.md.
const tesla: BrandTheme = {
  schemaVersion: 1,
  slug: "tesla",
  name: "Tesla",
  description: "Photography-first gallery — white canvas, sole Electric Blue CTA, zero UI decoration.",
  polarity: "light",

  colors: {
    canvas:   "oklch(1 0 0)",           // #FFFFFF Pure White — dominant background
    surface:  "oklch(0.97 0 0)",        // #F4F4F4 Light Ash — subtle alternate band
    raised:   "oklch(1 0 0)",           // cards carry no shadow; blend with canvas
    ink:      "oklch(0.15 0.012 255)",  // #171A20 Carbon Dark — headings / nav (blue undertone)
    muted:    "oklch(0.42 0.004 250)",  // #5C5E62 Pewter — sub-links / secondary labels
    hairline: "oklch(0.94 0 0)",        // #EEEEEE Cloud Gray — borders / dividers
    primary:  "oklch(0.55 0.19 264)",   // #3E6AE1 Electric Blue — sole chromatic CTA color
    onPrimary:"oklch(1 0 0)",           // white text on Electric Blue
    accent:   "oklch(0.55 0.19 264)",   // same Electric Blue for links / promo text
    // Hero: white type floats over dark cinematic photography
    heroCanvas: "oklch(0.15 0.012 255)", // Carbon Dark fallback when photo not loaded
    heroInk:    "oklch(1 0 0)",          // white model name over hero imagery
    heroMuted:  "oklch(0.80 0 0)",       // light muted for sub-labels on dark hero
  },

  fonts: {
    display: {
      // Universal Sans Display (proprietary, unifies web/app/in-car). Montserrat is
      // the closest open substitute: geometric, slightly humanist, similar optical weight.
      stack: '"Universal Sans Display", "Montserrat", -apple-system, Arial, sans-serif',
      source: { kind: "proprietary", substituteGoogle: "Montserrat", weights: [400, 500] },
      weight: 500,
      // Tesla explicitly uses default letter-spacing everywhere — no tracking manipulation.
    },
    body: {
      stack: '"Universal Sans Text", "Montserrat", -apple-system, Arial, sans-serif',
      source: { kind: "proprietary", substituteGoogle: "Montserrat", weights: [400, 500] },
      weight: 400,
    },
  },

  type: {
    navUppercase:    false, // Tesla's confidence is expressed through lowercase calm
    buttonUppercase: false, // CTA labels are sentence-case ("Order Now", not "ORDER NOW")
    displayUppercase: false,
    tabularNumbers:  false, // product showcase, not fintech
  },

  radius: {
    button: "4px",    // barely perceptible — engineered precision over playfulness
    card:   "12px",   // category-card rounding (subtle on large surfaces)
    input:  "4px",
    chip:   "9999px", // perfect circle for carousel dot indicators
  },

  density: "cinematic", // one message per viewport-height screen; whitespace as luxury signal

  buttons: {
    primary: {
      bg:    "oklch(0.55 0.19 264)", // Electric Blue
      color: "oklch(1 0 0)",          // white
    },
    secondary: {
      bg:     "oklch(1 0 0)",          // white — mirrors the canvas
      color:  "oklch(0.15 0.012 255)", // Carbon Dark text
      border: "oklch(0.94 0 0)",       // Cloud Gray hairline — necessary over white canvas
    },
  },

  elevation: "none", // no box-shadows anywhere — Tesla's explicit design rule

  layout: {
    hero:    "cinema",  // full-viewport photography dominates; minimal UI overlay
    cta:     "band",    // centered CTA band: model name → subtitle → two stacked buttons
    preview: "media",   // photography-first product showcase
  },

  signature: {
    kind:      "cinema-photo",
    accent:    "oklch(0.55 0.19 264)", // Electric Blue used scarcely on hero overlays
    intensity: "strong",
    note:      "Full-viewport vehicle photography as sole hero background; UI chrome nearly invisible.",
  },
};

export default tesla;
