import type { BrandTheme } from "./types";

// Apple — consumer electronics. Signature: pure-white/parchment canvas with zero
// decorative chrome, SF Pro Display at negative tracking, single Action Blue pill
// CTA; photography and tile-color alternation carry all visual weight.
// Source: media-and-consumer-tech/apple.md.
const apple: BrandTheme = {
  schemaVersion: 1,
  slug: "apple",
  name: "Apple",
  description: "Photography-first museum gallery — white canvas, single Action Blue, SF Pro tight headlines.",
  polarity: "light",
  colors: {
    canvas: "oklch(1 0 0)",                   // #ffffff pure white
    surface: "oklch(0.967 0.003 270)",        // #f5f5f7 parchment — alt bands, footer
    raised: "oklch(0.984 0.002 270)",         // #fafafc pearl — ghost button fills, secondary cards
    ink: "oklch(0.19 0.003 270)",             // #1d1d1f near-black — all text on light surfaces
    muted: "oklch(0.48 0.004 270)",           // #6e6e73 secondary text on light
    hairline: "oklch(0.90 0 0)",              // #e0e0e0 utility card / configurator chip border
    primary: "oklch(0.52 0.21 255)",          // #0071e3 Action Blue — the sole interactive color
    onPrimary: "oklch(1 0 0)",
    accent: "oklch(0.52 0.21 255)",           // same Action Blue — links, focus rings, eyebrows
  },
  fonts: {
    display: {
      stack: '"SF Pro Display", "Inter", -apple-system, BlinkMacSystemFont, system-ui, sans-serif',
      source: { kind: "proprietary", substituteGoogle: "Inter", weights: [300, 400, 600] },
      weight: 600,
      tracking: "-0.02em",
    },
    body: {
      stack: '"SF Pro Text", "Inter", -apple-system, BlinkMacSystemFont, system-ui, sans-serif',
      source: { kind: "proprietary", substituteGoogle: "Inter", weights: [300, 400, 600] },
      weight: 400,
    },
  },
  type: {
    navUppercase: false,
    navTracking: "-0.01em",
    buttonUppercase: false,
  },
  radius: {
    button: "9999px",
    card: "18px",
    input: "9999px",
    chip: "9999px",
  },
  density: "spacious",
  buttons: {
    primary: {
      bg: "oklch(0.52 0.21 255)",
      color: "oklch(1 0 0)",
    },
    secondary: {
      bg: "transparent",
      color: "oklch(0.52 0.21 255)",
      border: "oklch(0.52 0.21 255)",
    },
  },
  elevation: "border",
  layout: {
    hero: "centered",
    cta: "band",
    preview: "card",
  },
  signature: {
    kind: "none",
    note: "No decorative chrome — zero gradients, glows, or overlays; photography and tile-color alternation carry all visual weight.",
  },
};

export default apple;
