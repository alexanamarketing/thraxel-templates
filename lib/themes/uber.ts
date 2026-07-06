import type { BrandTheme } from "./types";

// Uber — transportation super-app. Signature: pure black/white duet, pill-geometry
// on every interactive element (999 px), alternating-band polarity flips mid-page,
// UberMove display (weight 700) + UberMoveText body, sentence-case always.
// Source: media-and-consumer-tech/uber.md.
const uber: BrandTheme = {
  schemaVersion: 1,
  slug: "uber",
  name: "Uber",
  description: "Black-and-white duet — pill geometry, alternating polarity bands, editorial restraint.",
  polarity: "light",
  colors: {
    canvas: "oklch(1 0 0)",
    surface: "oklch(0.95 0 0)",
    raised: "oklch(1 0 0)",
    ink: "oklch(0 0 0)",
    muted: "oklch(0.44 0 0)",
    hairline: "oklch(0.91 0 0)",
    primary: "oklch(0 0 0)",
    onPrimary: "oklch(1 0 0)",
    accent: "oklch(0 0 0)",
  },
  fonts: {
    display: {
      stack: '"UberMove", "Inter", "Helvetica Neue", Arial, system-ui, sans-serif',
      source: { kind: "proprietary", substituteGoogle: "Inter", weights: [700] },
      weight: 700,
      tracking: "0",
    },
    body: {
      stack: '"UberMoveText", "Inter", "Helvetica Neue", Arial, system-ui, sans-serif',
      source: { kind: "proprietary", substituteGoogle: "Inter", weights: [400, 500] },
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
    button: "9999px",
    card: "16px",
    input: "8px",
    chip: "9999px",
  },
  density: "standard",
  buttons: {
    primary: { bg: "oklch(0 0 0)", color: "oklch(1 0 0)" },
    secondary: { bg: "oklch(1 0 0)", color: "oklch(0 0 0)", border: "oklch(0 0 0)" },
  },
  elevation: "soft",
  layout: { hero: "split", cta: "band", preview: "card" },
  signature: {
    kind: "editorial-rule",
    accent: "oklch(0 0 0)",
    intensity: "strong",
    note: "Alternating black/white polarity bands mid-page; 4:3 editorial illustrations anchor every promo card.",
  },
};

export default uber;
