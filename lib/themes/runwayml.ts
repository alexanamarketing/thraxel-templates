import type { BrandTheme } from "./types";

// Runway — AI creative video platform. Signature: pure-black canvas, full-bleed
// cinematic photography as the primary design element, single typeface (abcNormal),
// zero shadows, cool-slate (#767d88) secondary text, deliberately achromatic UI.
// Source: ai-and-llm-platforms/runwayml.md.
const runwayml: BrandTheme = {
  schemaVersion: 1,
  slug: "runwayml",
  name: "Runway",
  description: "AI filmmaking platform — the interface retreats so the imagery leads.",

  polarity: "dark",

  colors: {
    canvas: "oklch(0 0 0)",             // #000000 Runway Black
    surface: "oklch(0.02 0 0)",         // #030303 Deep Black (near-imperceptible layer)
    raised: "oklch(0.14 0 0)",          // #1a1a1a Dark Surface (cards, elevated containers)
    ink: "oklch(1 0 0)",               // #ffffff Pure White (primary text on dark)
    muted: "oklch(0.54 0.018 250)",    // #767d88 Cool Slate (secondary text, distinctly blue-gray)
    hairline: "oklch(0.18 0.003 270)", // #27272a Border Dark (barely-visible containment)
    primary: "oklch(1 0 0)",           // #ffffff white — restrained, invisible-UI philosophy
    onPrimary: "oklch(0 0 0)",         // #000000 black text on white CTA
    accent: "oklch(0.54 0.018 250)",   // #767d88 Cool Slate (links, eyebrows, tags)
  },

  fonts: {
    display: {
      // abcNormal is a custom geometric sans-serif; DM Sans is the DESIGN.md-recommended sub
      stack: '"abcNormal", "DM Sans", "Inter", system-ui, sans-serif',
      source: { kind: "proprietary", substituteGoogle: "DM Sans", weights: [400, 500, 600] },
      weight: 400,
      tracking: "-0.025em", // -1.2px at 48px display = -0.025em; film-title density
    },
    body: {
      stack: '"abcNormal", "DM Sans", "Inter", system-ui, sans-serif',
      source: { kind: "proprietary", substituteGoogle: "DM Sans", weights: [400, 500, 600] },
      weight: 400,
      tracking: "-0.01em",  // -0.16px at 16px body; even body is slightly compressed
    },
  },

  // Runway uses uppercase only for micro labels (14px, 0.35px spacing), not nav or buttons
  type: {
    navUppercase: false,
    buttonUppercase: false,
    tabularNumbers: false,
  },

  // Sharp, not pill — explicitly per the Do's and Don'ts
  radius: {
    button: "4px",
    card: "8px",
    input: "4px",
    chip: "4px",
  },

  density: "cinematic", // cinema-grade breathing: 48–78px section gaps

  buttons: {
    primary: { bg: "oklch(1 0 0)", color: "oklch(0 0 0)" },
    secondary: { bg: "transparent", color: "oklch(1 0 0)", border: "oklch(1 0 0)" },
  },

  // Runway uses zero shadows — depth comes from photography and section alternation
  elevation: "none",

  layout: {
    hero: "cinema",    // full-viewport cinematic with text overlay
    cta: "band",       // mission-statement full-width dark band
    preview: "media",  // media/cinema forward — imagery IS the product
  },

  signature: {
    kind: "cinema-photo",
    accent: "oklch(0 0 0)",
    intensity: "strong",
    note: "Full-bleed cinematic photography IS the design — no gradients, no shadows, interface invisible.",
  },
};

export default runwayml;
