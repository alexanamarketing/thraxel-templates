import type { BrandTheme } from "./types";

// Wise — global money-transfer. Signature: sage canvas (#e8ebe6) + lime-green CTA pill
// (#9fe870) set against near-black Wise Sans weight-900 headlines. Split hero with
// currency-converter card on the right. Polarity-flip ink/lime cards on sage.
// Source: fintech-and-crypto/wise.md.
const wise: BrandTheme = {
  schemaVersion: 1,
  slug: "wise",
  name: "Wise",
  description: "Global money-transfer — sage canvas, lime-green CTA pill, ultra-heavy Wise Sans headlines.",
  polarity: "light",
  colors: {
    canvas: "oklch(0.93 0.01 130)",      // #e8ebe6 — sage-tinted page & hero background
    surface: "oklch(1 0 0)",             // #ffffff — white card interior / content bands
    raised: "oklch(1 0 0)",              // #ffffff — elevated white cards on sage canvas
    ink: "oklch(0.07 0.004 130)",        // #0e0f0c — near-black with olive warmth
    muted: "oklch(0.58 0.002 140)",      // #868685 — captions, fine print, placeholder
    hairline: "oklch(0.85 0.008 130)",   // sage mid-tone for borders and dividers
    primary: "oklch(0.84 0.21 130)",     // #9fe870 — Wise lime-green, the universal CTA
    onPrimary: "oklch(0.21 0.07 138)",   // #163300 — deep forest-green on bright lime
    accent: "oklch(0.84 0.21 130)",      // lime-green for links and emphasis
  },
  fonts: {
    display: {
      stack: '"Wise Sans", "Manrope", system-ui, -apple-system, sans-serif',
      source: { kind: "proprietary", substituteGoogle: "Manrope", weights: [800, 900] },
      weight: 900,
      tracking: "-0.02em",
    },
    body: {
      stack: '"Inter", system-ui, -apple-system, sans-serif',
      source: { kind: "google", family: "Inter", weights: [400, 600] },
      weight: 400,
    },
  },
  type: {
    navUppercase: false,
    buttonUppercase: false,
    tabularNumbers: true,
  },
  radius: {
    button: "24px",
    card: "24px",
    input: "12px",
    chip: "9999px",
  },
  density: "standard",
  buttons: {
    primary: {
      bg: "oklch(0.84 0.21 130)",
      color: "oklch(0.21 0.07 138)",
    },
    secondary: {
      bg: "oklch(0.93 0.01 130)",
      color: "oklch(0.07 0.004 130)",
    },
  },
  elevation: "none",
  layout: { hero: "split", cta: "band", preview: "dashboard" },
  signature: {
    kind: "color-tiles",
    accent: "oklch(0.84 0.21 130)",
    accent2: "oklch(0.93 0.01 130)",
    intensity: "medium",
    note: "Polarity-flip cards — lime-pale, sage, ink — on a sage canvas; surface contrast carries depth.",
  },
};

export default wise;
