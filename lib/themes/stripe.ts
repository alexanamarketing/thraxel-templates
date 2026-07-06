import type { BrandTheme } from "./types";

// Stripe — financial-infrastructure. Signature: pastel gradient-mesh over a white
// canvas, single-indigo CTA, Sohne-thin display with negative tracking, tabular
// figures, pill buttons. Source: fintech-and-crypto/stripe.md.
const stripe: BrandTheme = {
  schemaVersion: 1,
  slug: "stripe",
  name: "Stripe",
  description: "Financial infrastructure — indigo CTA, gradient mesh, thin editorial type.",
  polarity: "light",
  colors: {
    canvas: "oklch(1 0 0)",
    surface: "oklch(0.98 0.005 240)",
    raised: "oklch(1 0 0)",
    ink: "oklch(0.26 0.05 250)",
    muted: "oklch(0.56 0.03 256)",
    hairline: "oklch(0.93 0.008 250)",
    primary: "oklch(0.53 0.24 279)",
    onPrimary: "oklch(1 0 0)",
    accent: "oklch(0.53 0.24 279)",
  },
  fonts: {
    display: {
      stack: '"Sohne", "Inter", "SF Pro Display", system-ui, sans-serif',
      source: { kind: "proprietary", substituteGoogle: "Inter", weights: [300, 400, 600] },
      weight: 300,
      tracking: "-0.02em",
    },
    body: {
      stack: '"Sohne", "Inter", system-ui, sans-serif',
      source: { kind: "proprietary", substituteGoogle: "Inter", weights: [400, 600] },
      weight: 400,
    },
  },
  type: { navUppercase: false, navTracking: "0", tabularNumbers: true },
  radius: { button: "9999px", card: "12px", input: "6px", chip: "9999px" },
  density: "standard",
  buttons: {
    primary: { bg: "oklch(0.53 0.24 279)", color: "oklch(1 0 0)" },
    secondary: { bg: "oklch(1 0 0)", color: "oklch(0.53 0.24 279)", border: "oklch(0.53 0.24 279)" },
  },
  elevation: "soft",
  layout: { hero: "split", cta: "band", preview: "dashboard" },
  signature: {
    kind: "gradient-mesh",
    accent: "oklch(0.82 0.13 65)",
    accent2: "oklch(0.72 0.19 350)",
    intensity: "medium",
    note: "Pastel cream/orange/lavender/indigo/ruby mesh across the upper hero.",
  },
};

export default stripe;
