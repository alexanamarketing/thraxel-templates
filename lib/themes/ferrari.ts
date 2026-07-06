import type { BrandTheme } from "./types";

// Ferrari — cinematic luxury-automotive. Signature: near-black canvas, full-bleed
// cinematic hero, scarce Rosso Corsa red, FerrariSans at weight 500, sharp 0px
// corners, uppercase CTA/nav with generous tracking. Source: automotive/ferrari.md.
const ferrari: BrandTheme = {
  schemaVersion: 1,
  slug: "ferrari",
  name: "Ferrari",
  description: "Cinematic editorial — near-black canvas, scarce Rosso Corsa, sharp corners.",
  polarity: "dark",
  colors: {
    canvas: "oklch(0.23 0.002 40)",
    surface: "oklch(0.34 0.002 40)",
    raised: "oklch(0.34 0.002 40)",
    ink: "oklch(1 0 0)",
    muted: "oklch(0.70 0 0)",
    hairline: "oklch(0.40 0.002 40)",
    primary: "oklch(0.57 0.22 27)",
    onPrimary: "oklch(1 0 0)",
    accent: "oklch(0.62 0.21 27)",
  },
  fonts: {
    display: {
      stack: '"FerrariSans", "Inter", -apple-system, system-ui, sans-serif',
      source: { kind: "proprietary", substituteGoogle: "Inter", weights: [500, 700] },
      weight: 500,
      tracking: "-0.02em",
    },
    body: {
      stack: '"FerrariSans", "Inter", system-ui, sans-serif',
      source: { kind: "proprietary", substituteGoogle: "Inter", weights: [400, 600] },
      weight: 400,
    },
  },
  type: {
    navUppercase: true,
    navTracking: "0.05em",
    buttonUppercase: true,
    buttonTracking: "0.1em",
  },
  radius: { button: "0px", card: "0px", input: "4px", chip: "9999px" },
  density: "spacious",
  buttons: {
    primary: { bg: "oklch(0.57 0.22 27)", color: "oklch(1 0 0)" },
    secondary: { bg: "transparent", color: "oklch(1 0 0)", border: "oklch(1 0 0)" },
  },
  elevation: "border",
  layout: { hero: "cinema", cta: "card", preview: "card" },
  signature: {
    kind: "cinema-photo",
    accent: "oklch(0.57 0.22 27)",
    intensity: "strong",
    note: "Full-bleed cinematic vignette; Rosso Corsa used scarcely.",
  },
};

export default ferrari;
