import type { BrandTheme } from "./types";

// Renault — modern mainstream automotive. Signature: stark white-and-black two-tone
// canvas punctuated by scarce Sunlight Yellow, NouvelR bold display at lineHeight 0.95,
// square corners, colour-block band rhythm. Source: automotive/renault.md.
const renault: BrandTheme = {
  schemaVersion: 1,
  slug: "renault",
  name: "Renault",
  description: "Confident mass-market automotive — white/black colour-block bands, scarce Sunlight Yellow CTA, square NouvelR type.",
  polarity: "light",
  colors: {
    canvas: "oklch(1 0 0)",
    surface: "oklch(0.97 0 0)",
    raised: "oklch(1 0 0)",
    ink: "oklch(0.18 0 0)",
    muted: "oklch(0.47 0 0)",
    hairline: "oklch(0.96 0 0)",
    primary: "oklch(0.93 0.21 107)",
    onPrimary: "oklch(0 0 0)",
    accent: "oklch(0.18 0 0)",
    heroCanvas: "oklch(0 0 0)",
    heroInk: "oklch(1 0 0)",
    heroMuted: "oklch(0.72 0 0)",
  },
  fonts: {
    display: {
      stack: '"NouvelR", "Inter Tight", "Manrope", system-ui, sans-serif',
      source: { kind: "proprietary", substituteGoogle: "Inter Tight", weights: [400, 700] },
      weight: 700,
    },
    body: {
      stack: '"NouvelR", "Inter Tight", "Manrope", system-ui, sans-serif',
      source: { kind: "proprietary", substituteGoogle: "Inter Tight", weights: [400, 700] },
      weight: 400,
    },
  },
  type: {
    navUppercase: false,
    navTracking: "0",
    buttonUppercase: false,
    buttonTracking: "0.01em",
    displayUppercase: false,
    tabularNumbers: false,
  },
  radius: {
    button: "2px",
    card: "0px",
    input: "0px",
    chip: "9999px",
  },
  density: "standard",
  buttons: {
    primary: { bg: "oklch(0.93 0.21 107)", color: "oklch(0 0 0)" },
    secondary: { bg: "oklch(0 0 0)", color: "oklch(1 0 0)" },
  },
  elevation: "border",
  layout: {
    hero: "cinema",
    cta: "band",
    preview: "card",
  },
  signature: {
    kind: "color-tiles",
    accent: "oklch(0.93 0.21 107)",
    accent2: "oklch(0 0 0)",
    intensity: "strong",
    note: "Alternating white, black, and Sunlight Yellow full-bleed colour-block bands; one yellow tile per band maximum.",
  },
};

export default renault;
