import type { BrandTheme } from "./types";

// Miro — AI-powered visual workspace. Signature: pastel sticky-note color-tiles
// (yellow, rose, coral, teal) scattered on a white canvas; canary-yellow wordmark;
// Roobert PRO geometric rounded display; pill buttons throughout; playful +
// collaborative. Source: design-and-creative-tools/miro.md.
const miro: BrandTheme = {
  schemaVersion: 1,
  slug: "miro",
  name: "Miro",
  description: "AI-powered visual workspace — white canvas, canary-yellow wordmark, sticky-note pastels, pill buttons everywhere.",
  polarity: "light",
  colors: {
    canvas:     "oklch(1 0 0)",             // #ffffff white canvas
    surface:    "oklch(0.98 0.004 240)",    // #f7f8fa subtle section background
    raised:     "oklch(1 0 0)",             // cards are white, separated by hairline
    ink:        "oklch(0.17 0.004 265)",    // #1c1c1e near-black primary text
    muted:      "oklch(0.72 0.018 270)",    // #a5a8b5 secondary / placeholder text
    hairline:   "oklch(0.91 0.009 260)",    // #e0e2e8 1px borders and dividers
    primary:    "oklch(0.87 0.16 86)",      // #FFD02F canary yellow — brand signature
    onPrimary:  "oklch(0.17 0.004 265)",    // near-black on yellow (NOT white — contrast)
    accent:     "oklch(0.53 0.24 265)",     // #4262FF brand blue for links / emphasis
  },
  fonts: {
    display: {
      stack: '"Roobert PRO", "Plus Jakarta Sans", "Noto Sans", -apple-system, system-ui, sans-serif',
      source: { kind: "proprietary", substituteGoogle: "Plus Jakarta Sans", weights: [400, 500, 600] },
      weight: 500,
      tracking: "-0.02em",
    },
    body: {
      stack: '"Roobert PRO", "Plus Jakarta Sans", "Noto Sans", system-ui, sans-serif',
      source: { kind: "proprietary", substituteGoogle: "Plus Jakarta Sans", weights: [400, 500] },
      weight: 400,
    },
  },
  type: {
    navUppercase: false,
    buttonUppercase: false,
    tabularNumbers: false,
  },
  radius: {
    button: "9999px",  // pill is the brand signature — every button, tab, badge
    card:   "16px",    // rounded.xl — standard feature cards
    input:  "8px",     // rounded.md — text inputs
    chip:   "9999px",  // all status badges and pill-tabs
  },
  density: "standard",
  buttons: {
    primary: {
      bg:    "oklch(0.87 0.16 86)",      // canary yellow CTA
      color: "oklch(0.17 0.004 265)",    // near-black for legibility on yellow
    },
    secondary: {
      bg:     "transparent",
      color:  "oklch(0.17 0.004 265)",   // ink
      border: "oklch(0.83 0.011 265)",   // #c7cad5 hairline-strong
    },
  },
  elevation: "soft",  // subtle card shadow (rgba(5,0,56,0.06)); mockups use deeper shadow
  layout: {
    hero:    "centered",    // centered headline + subtitle, then whiteboard mockup below
    cta:     "band",        // full-width dark CTA band at bottom of feature pages
    preview: "dashboard",   // real Miro-board mockup (sticky notes, kanban, mind maps)
  },
  signature: {
    kind:      "color-tiles",
    accent:    "oklch(0.87 0.16 86)",   // canary yellow (#FFD02F)
    accent2:   "oklch(0.85 0.07 20)",   // coral-light (#ffc6c6)
    intensity: "medium",
    note:      "Pastel sticky-note color tiles — yellow, coral, teal, rose — echoing the live-board palette on the white canvas hero.",
  },
};

export default miro;
