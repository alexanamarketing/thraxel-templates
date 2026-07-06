import type { BrandTheme } from "./types";

// Mastercard — global payments network. Signature: overlapping red (#EB001B) and
// amber (#F79E1B) brand circles as color-tiles; warm cream editorial canvas,
// extreme pill radius, ink-black primary CTAs, MarkForMC / Sofia Sans.
// Source: fintech-and-crypto/mastercard.md.
const mastercard: BrandTheme = {
  schemaVersion: 1,
  slug: "mastercard",
  name: "Mastercard",
  description: "Editorial payments — warm cream canvas, extreme-pill radius, ink-black CTAs, iconic red-amber circle pair.",
  polarity: "light",
  colors: {
    canvas:    "oklch(0.95 0.006 75)",   // #F3F0EE Canvas Cream — putty, never sterile white
    surface:   "oklch(0.985 0.003 80)",  // #FCFBFA Lifted Cream — one step lighter for nested sections
    raised:    "oklch(1 0 0)",           // #FFFFFF White — floating nav pill, modal cards, satellite CTAs
    ink:       "oklch(0.135 0.003 75)",  // #141413 Ink Black (warm near-black, primary text + footer)
    muted:     "oklch(0.49 0 0)",        // #696969 Slate Gray — secondary text, disabled states
    hairline:  "oklch(0.83 0.006 75)",   // #D1CDC7 Dust Taupe — borders, dividers
    primary:   "oklch(0.135 0.003 75)",  // #141413 Ink Black — primary pill CTA fill
    onPrimary: "oklch(0.95 0.006 75)",   // #F3F0EE Canvas Cream — text on ink pill (warm, not pure white)
    accent:    "oklch(0.46 0.14 265)",   // #3860BE Link Blue — inline links, informational callouts
  },
  fonts: {
    display: {
      stack: '"MarkForMC", "Sofia Sans", "Arial", sans-serif',
      source: { kind: "proprietary", substituteGoogle: "Sofia Sans", weights: [400, 500, 700] },
      weight: 500,
      tracking: "-0.02em",
    },
    body: {
      stack: '"MarkForMC", "MarkOffcForMC", "Sofia Sans", "Arial", sans-serif',
      source: { kind: "proprietary", substituteGoogle: "Sofia Sans", weights: [400, 500] },
      weight: 450,
    },
  },
  type: {
    navUppercase: false,
    navTracking: "-0.03em",
    buttonUppercase: false,
    buttonTracking: "-0.03em",
    tabularNumbers: true,
  },
  radius: {
    button: "20px",
    card: "40px",
    input: "999px",
    chip: "9999px",
  },
  density: "spacious",
  buttons: {
    primary: {
      bg: "oklch(0.135 0.003 75)",
      color: "oklch(0.95 0.006 75)",
    },
    secondary: {
      bg: "oklch(1 0 0)",
      color: "oklch(0.135 0.003 75)",
      border: "oklch(0.135 0.003 75)",
    },
  },
  elevation: "soft",
  layout: {
    hero: "split",
    cta: "band",
    preview: "card",
  },
  signature: {
    kind: "color-tiles",
    accent:  "oklch(0.56 0.23 27)",   // #EB001B Mastercard Red (left circle of the mark)
    accent2: "oklch(0.77 0.18 53)",   // #F79E1B Mastercard Amber (right circle of the mark)
    intensity: "medium",
    note: "Overlapping red and amber circles — the Mastercard mark — rendered as signature color-tile pair.",
  },
};

export default mastercard;
