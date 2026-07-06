import type { BrandTheme } from "./types";

// Figma — design-tool platform. Signature: rigorously monochrome white canvas
// (black primary, white on-primary, pill-only CTAs) interrupted by oversized
// pastel color-block sections — lime, lilac, cream, mint, pink, coral, navy —
// that span full content width like giant editorial sticky notes. figmaSans
// variable type at fine weight increments (320–700), tight negative tracking
// on display. Source: design-and-creative-tools/figma.md.
const figma: BrandTheme = {
  schemaVersion: 1,
  slug: "figma",
  name: "Figma",
  description:
    "White editorial canvas interrupted by oversized pastel color blocks — monochrome core, pill CTAs, figmaSans variable type.",

  polarity: "light",

  colors: {
    canvas: "oklch(1 0 0)",              // #ffffff — default page background
    surface: "oklch(0.97 0.003 105)",    // #f7f7f5 surface-soft: icon btn, template tiles
    raised: "oklch(1 0 0)",              // pricing cards sit on white with hairline border
    ink: "oklch(0 0 0)",                 // #000000 — all headline + body on light surfaces
    muted: "oklch(0.40 0 0)",            // dark gray (no mid-gray in brand; weight ≠ opacity)
    hairline: "oklch(0.91 0 0)",         // #e6e6e6 — inputs, pricing cards, table dividers
    primary: "oklch(0 0 0)",             // #000000 — every CTA, marquee strip, inverse surfaces
    onPrimary: "oklch(1 0 0)",           // #ffffff
    accent: "oklch(0 0 0)",              // links/emphasis use ink-black; no colored link system
  },

  fonts: {
    display: {
      stack:
        '"figmaSans", "figmaSans Fallback", "Inter", "SF Pro Display", system-ui, sans-serif',
      source: {
        kind: "proprietary",
        substituteGoogle: "Inter",
        weights: [300, 400, 500, 700],
      },
      weight: 340,       // display-xl / display-lg: weight 340, fine variable axis
      tracking: "-0.02em", // -1.72px at 86px hero; scales tighter with size
    },
    body: {
      stack:
        '"figmaSans", "figmaSans Fallback", "Inter", system-ui, sans-serif',
      source: {
        kind: "proprietary",
        substituteGoogle: "Inter",
        weights: [300, 400],
      },
      weight: 320, // body weight; hierarchy expressed via weight steps, not opacity
    },
    mono: {
      stack:
        '"figmaMono", "figmaMono Fallback", "JetBrains Mono", "SF Mono", Menlo, monospace',
      source: {
        kind: "proprietary",
        substituteGoogle: "JetBrains Mono",
        weights: [400],
      },
      weight: 400,
      tracking: "0.03em", // eyebrow/caption: always uppercase, positive tracking
    },
  },

  type: {
    navUppercase: false,      // sentence case throughout
    navTracking: "0",
    buttonUppercase: false,   // pill CTAs are lowercase ("Get started for free")
    tabularNumbers: false,
  },

  radius: {
    button: "9999px", // pill: the only CTA shape — square buttons are off-brand
    card: "24px",     // rounded.lg: pricing cards, color-block sections
    input: "8px",     // rounded.md: form inputs, list items, image frames
    chip: "9999px",   // rounded.full: icon buttons, comparison checkmarks
  },

  density: "spacious", // 96px section gaps, 48px color-block interior padding

  buttons: {
    primary: {
      bg: "oklch(0 0 0)",
      color: "oklch(1 0 0)",
    },
    // White pill + black text; no border per spec — relies on pairing with primary
    // and surrounding context. A hairline provides minimal rendering visibility.
    secondary: {
      bg: "oklch(1 0 0)",
      color: "oklch(0 0 0)",
      border: "oklch(0.85 0 0)",
    },
  },

  // Shadow-light by design; color blocks substitute for elevation.
  // Pricing cards and inputs use 1px hairline, not shadows.
  elevation: "border",

  layout: {
    hero: "centered",    // oversized centered headline + pill pair + product UI below
    cta: "band",         // full-content-width color band closings (lime FAQ, etc.)
    preview: "dashboard", // embedded Figma/FigJam UI panel mocks inside color blocks
  },

  signature: {
    kind: "color-tiles",
    accent: "oklch(0.90 0.09 128)",  // block-lime #dceeb1 — systems / FAQ / contact
    accent2: "oklch(0.77 0.12 296)", // block-lilac #c5b0f4 — /design/ hero, promo banners
    intensity: "medium",
    note: "Oversized pastel color-block panels (lime, lilac, cream, mint, pink, coral, navy) interrupt the white monochrome canvas like editorial sticky notes — the color IS the depth device.",
  },
};

export default figma;
