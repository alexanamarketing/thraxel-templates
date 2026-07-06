import type { BrandTheme } from "./types";

// Sentry — error monitoring and observability. Signature: midnight violet canvas,
// bright violet CTA, electric lime keyword highlight chips in display type, Monaco
// code tier, developer console typographic cadence (uppercase buttons, 0.01em tracking).
// Source: backend-database-and-devops/sentry.md.
const sentry: BrandTheme = {
  schemaVersion: 1,
  slug: "sentry",
  name: "Sentry",
  description: "Error monitoring at the stack level — midnight violet canvas, electric lime keyword chips, dev console cadence.",
  polarity: "dark",

  colors: {
    canvas:   "oklch(0.13 0.05 295)",  // #1f1633 ink-deep / dark marketing canvas
    surface:  "oklch(0.17 0.05 295)",  // slightly lifted alternate band
    raised:   "oklch(0.21 0.06 295)",  // card background on dark canvas
    ink:      "oklch(1 0 0)",          // #ffffff — primary text on dark
    muted:    "oklch(0.76 0.01 305)",  // #bdb8c0 on-dark-muted secondary text
    hairline: "oklch(0.24 0.07 295)",  // #362d59 hairline-violet card borders
    primary:  "oklch(0.50 0.27 276)",  // ~#7553FF bright violet CTA
    onPrimary:"oklch(1 0 0)",          // white on violet — 4.6:1 against primary
    accent:   "oklch(0.67 0.18 282)",  // lightened violet for links on dark canvas
  },

  fonts: {
    display: {
      stack: '"Sentri Display", "Space Grotesk", system-ui, sans-serif',
      source: { kind: "proprietary", substituteGoogle: "Space Grotesk", weights: [500, 700] },
      weight: 700,
      tracking: "0",
    },
    body: {
      stack: '"Rubik", -apple-system, system-ui, "Segoe UI", Helvetica, Arial, sans-serif',
      source: { kind: "google", family: "Rubik", weights: [400, 500, 600, 700] },
      weight: 400,
    },
    mono: {
      stack: '"Monaco", "Menlo", "Ubuntu Mono", monospace',
      source: { kind: "system" },
      weight: 400,
    },
  },

  type: {
    navUppercase: false,
    buttonUppercase: true,
    buttonTracking: "0.01em",
    tabularNumbers: false,
  },

  radius: {
    button: "8px",
    card: "12px",
    input: "6px",
    chip: "4px",
  },

  density: "standard",

  buttons: {
    primary:   { bg: "oklch(0.50 0.27 276)", color: "oklch(1 0 0)" },
    secondary: { bg: "transparent", color: "oklch(1 0 0)", border: "oklch(0.50 0.27 276)" },
  },

  elevation: "border",

  layout: {
    hero:    "split",
    cta:     "band",
    preview: "terminal",
  },

  signature: {
    kind:      "glow",
    accent:    "oklch(0.50 0.27 276)",  // bright violet radial glow
    accent2:   "oklch(0.90 0.18 120)",  // #c2ef4e electric lime for keyword chips
    intensity: "medium",
    note: "Deep violet radial glow on midnight canvas; electric lime keyword highlight chips in display headlines.",
  },
};

export default sentry;
