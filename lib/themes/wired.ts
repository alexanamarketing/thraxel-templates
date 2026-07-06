import type { BrandTheme } from "./types";

// Wired — iconic tech magazine editorial. Signature: stark black-on-white duet,
// proprietary WiredDisplay tall-narrow serif, masthead-band editorial-rule, 0 px
// square geometry throughout. Link blue scarce (inline body links only).
// Source: media-and-consumer-tech/wired.md.
const wired: BrandTheme = {
  schemaVersion: 1,
  slug: "wired",
  name: "Wired",
  description: "Bold tech editorial — black-on-white duet, WiredDisplay serif, square geometry, masthead rule.",
  polarity: "light",
  colors: {
    canvas:    "oklch(1 0 0)",           // #ffffff — default page background
    surface:   "oklch(0.97 0 0)",        // #f5f5f5 — canvas-soft: comment bg, hover states
    raised:    "oklch(1 0 0)",           // flat on canvas; no drop-shadow elevation
    ink:       "oklch(0 0 0)",           // #000000 — headlines, body paragraphs
    muted:     "oklch(0.52 0 0)",        // #757575 — bylines, timestamps, secondary metadata
    hairline:  "oklch(0.90 0 0)",        // #e0e0e0 — 1 px story-row dividers
    primary:   "oklch(0 0 0)",           // #000000 — CTA fill, wordmark, footer band
    onPrimary: "oklch(1 0 0)",           // #ffffff — text on black CTA / footer
    accent:    "oklch(0.55 0.12 255)",   // #057dbc — inline link blue (used scarcely)
  },
  fonts: {
    display: {
      // WiredDisplay: the proprietary tall-narrow high-contrast serif used at 64 px
      // for hero headlines. Playfair Display captures the didone high-contrast feel.
      stack: '"WiredDisplay", "Playfair Display", "Times New Roman", Georgia, serif',
      source: { kind: "proprietary", substituteGoogle: "Playfair Display", weights: [400] },
      weight: 400,
      tracking: "-0.01em", // display-hero: -0.5px at 64 px ≈ -0.008 em
    },
    body: {
      // BreveText: the proprietary humanist serif for long-form body and bylines.
      // Lora is the closest open-source approximation (per DESIGN.md).
      stack: '"BreveText", "Lora", Georgia, "Times New Roman", serif',
      source: { kind: "proprietary", substituteGoogle: "Lora", weights: [400, 700] },
      weight: 400,
    },
  },
  type: {
    navUppercase:    false,
    navTracking:     "0",
    buttonUppercase: false,
    buttonTracking:  "0.02em", // button-md: 0.3 px at 16 px ≈ 0.02 em (Apercu 16/700)
    displayUppercase: false,   // elegance from typeface design, never weight 700+
    tabularNumbers:  false,
  },
  radius: {
    button: "0px",    // non-negotiable — brand reads as printed magazine
    card:   "0px",
    input:  "0px",
    chip:   "9999px", // circular only for social-share icon buttons
  },
  density: "standard",
  buttons: {
    primary: {
      bg:    "oklch(0 0 0)",
      color: "oklch(1 0 0)",
    },
    secondary: {
      bg:     "oklch(1 0 0)",
      color:  "oklch(0 0 0)",
      border: "oklch(0 0 0)", // 1 px solid ink — button-outline spec
    },
  },
  elevation: "border", // hairlines only; brand uses no drop-shadows
  layout: {
    hero:    "editorial", // magazine cover-story grid: large hero + 2-up secondary + row stack
    cta:     "band",      // black footer/CTA band full-width
    preview: "card",      // story-card large pattern
  },
  signature: {
    kind:      "editorial-rule",
    accent:    "oklch(0 0 0)",
    intensity: "medium",
    note:      "Thin black masthead band with centred wordmark; 1 px hairline rules between story rows.",
  },
};

export default wired;
