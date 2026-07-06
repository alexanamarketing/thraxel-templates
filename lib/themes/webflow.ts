import type { BrandTheme } from "./types";

// Webflow — visual web-builder. Signature: white canvas + near-black (#080808) primary
// CTA, five-stop chromatic category tiles (purple / pink / blue / orange / green),
// optional near-black hero band; WF Visual Sans Variable proprietary type at 600/400
// with negative tracking; tight 4 px button geometry. Source: design-and-creative-tools/webflow.md.
const webflow: BrandTheme = {
  schemaVersion: 1,
  slug: "webflow",
  name: "Webflow",
  description: "Visual web-builder — near-black CTA, white canvas, five-stop chromatic category tiles.",
  polarity: "light",
  colors: {
    canvas: "oklch(1 0 0)",
    surface: "oklch(0.97 0 0)",
    raised: "oklch(1 0 0)",
    ink: "oklch(0.08 0 0)",
    muted: "oklch(0.42 0 0)",
    hairline: "oklch(0.87 0 0)",
    primary: "oklch(0.08 0 0)",
    onPrimary: "oklch(1 0 0)",
    accent: "oklch(0.52 0.21 258)",
    // Campaign pages flip to a near-black hero band (#080808)
    heroCanvas: "oklch(0.08 0 0)",
    heroInk: "oklch(1 0 0)",
    heroMuted: "oklch(0.72 0 0)",
  },
  fonts: {
    display: {
      stack: '"WF Visual Sans Variable", "Inter", system-ui, -apple-system, sans-serif',
      source: { kind: "proprietary", substituteGoogle: "Inter", weights: [500, 600] },
      weight: 600,
      tracking: "-0.01em",
    },
    body: {
      stack: '"WF Visual Sans Variable", "Inter", system-ui, sans-serif',
      source: { kind: "proprietary", substituteGoogle: "Inter", weights: [400, 500] },
      weight: 400,
    },
    mono: {
      stack: '"WFVisualSans-Mono", "Inconsolata", ui-monospace, SFMono-Regular, Menlo, monospace',
      source: { kind: "proprietary", substituteGoogle: "Inconsolata", weights: [400] },
      weight: 400,
    },
  },
  type: {
    navUppercase: false,
    buttonUppercase: false,
  },
  radius: {
    button: "4px",
    card: "8px",
    input: "4px",
    chip: "9999px",
  },
  density: "standard",
  buttons: {
    primary: { bg: "oklch(0.08 0 0)", color: "oklch(1 0 0)" },
    secondary: { bg: "oklch(1 0 0)", color: "oklch(0.08 0 0)", border: "oklch(0.87 0 0)" },
  },
  elevation: "soft",
  layout: {
    hero: "centered",
    cta: "band",
    preview: "dashboard",
  },
  signature: {
    kind: "color-tiles",
    accent: "oklch(0.50 0.28 283)",
    accent2: "oklch(0.67 0.21 38)",
    intensity: "strong",
    note: "Five full-saturation category cards (purple / pink / blue / orange / green) on white canvas.",
  },
};

export default webflow;
