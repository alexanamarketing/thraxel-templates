import type { BrandTheme } from "./types";

// Zapier — workflow automation platform. Signature: warm-cream canvas (#fffefb),
// single saturated orange CTA (#ff4f00), deep coffee ink (#201515), Degular Display
// for hero scale + Inter for everything else, 12 px medium-radius buttons and cards.
// Source: productivity-and-saas/zapier.md.
const zapier: BrandTheme = {
  schemaVersion: 1,
  slug: "zapier",
  name: "Zapier",
  description: "Workflow automation — warm cream canvas, single saturated orange CTA, coffee ink, friendly 12 px radius.",
  polarity: "light",
  colors: {
    canvas:   "oklch(0.999 0.004 91)",   // #fffefb — warm off-white, not pure white
    surface:  "oklch(0.970 0.008 72)",   // #f8f4f0 — cream-tinted soft surface
    raised:   "oklch(0.970 0.008 72)",   // same cream — cards sit on cream vs canvas contrast
    ink:      "oklch(0.200 0.022 30)",   // #201515 — deep coffee, not pure black
    muted:    "oklch(0.490 0.015 70)",   // #605d52 — warm body-text color
    hairline: "oklch(0.790 0.012 72)",   // #c5c0b1 — warm neutral divider
    primary:  "oklch(0.647 0.220 38)",   // #ff4f00 — Zapier orange, single brand accent
    onPrimary:"oklch(0.999 0.004 91)",   // #fffefb — warm white on orange
    accent:   "oklch(0.647 0.220 38)",   // same orange — links / emphasis
  },
  fonts: {
    display: {
      stack: '"Degular Display", "Inter", system-ui, -apple-system, sans-serif',
      source: { kind: "proprietary", substituteGoogle: "Inter", weights: [500] },
      weight: 500,
      tracking: "0",
    },
    body: {
      stack: '"Inter", system-ui, -apple-system, sans-serif',
      source: { kind: "google", family: "Inter", weights: [400, 500, 600, 700] },
      weight: 400,
    },
  },
  type: {
    navUppercase: false,
    navTracking: "0",
    buttonUppercase: false,
    buttonTracking: "0",
    displayUppercase: false,
    tabularNumbers: false,
  },
  radius: {
    button: "12px",   // {rounded.md} — the brand's canonical button radius
    card:   "12px",   // same — middle radius is the brand signature
    input:  "6px",    // {rounded.sm} — form inputs
    chip:   "9999px", // {rounded.pill} — status pills and badges
  },
  density: "standard",
  buttons: {
    primary:   { bg: "oklch(0.647 0.220 38)", color: "oklch(0.999 0.004 91)" },
    secondary: { bg: "oklch(0.200 0.022 30)", color: "oklch(0.999 0.004 91)" },
  },
  elevation: "soft",
  layout: {
    hero:    "split",
    cta:     "band",
    preview: "dashboard",
  },
  signature: {
    kind:      "color-tiles",
    accent:    "oklch(0.647 0.220 38)",  // Zapier orange
    accent2:   "oklch(0.970 0.008 72)",  // cream surface
    intensity: "subtle",
    note:      "Warm-cream canvas with scattered orange-accent app-icon tiles — the 'connect your apps' zap grid motif.",
  },
};

export default zapier;
