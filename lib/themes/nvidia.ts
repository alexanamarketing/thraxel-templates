import type { BrandTheme } from "./types";

// NVIDIA — engineering-grade AI platform. Signature: dual-mode black/white canvas,
// single NVIDIA Green (#76b900) accent on dark hero, hairline-border editorial grid
// with 2px angular geometry. No drop shadows, no gradients, no pills. Source:
// media-and-consumer-tech/nvidia.md.
const nvidia: BrandTheme = {
  schemaVersion: 1,
  slug: "nvidia",
  name: "NVIDIA",
  description: "Engineering-grade AI platform — black hero, white body, single NVIDIA Green CTA, 2px angular grid.",

  // Light body, dark hero: alternating black/white is NVIDIA's page structure.
  polarity: "light",

  colors: {
    canvas: "oklch(1 0 0)",            // #ffffff — page body
    surface: "oklch(0.975 0 0)",       // #f7f7f7 — breadcrumb strip, sub-nav, alt rows
    raised: "oklch(1 0 0)",            // cards sit on canvas; hairline border (elevation: border) lifts them
    ink: "oklch(0 0 0)",               // #000000 — headlines + body on light
    muted: "oklch(0.56 0 0)",          // #757575 — metadata, secondary copy
    hairline: "oklch(0.84 0 0)",       // #cccccc — 1px card / table borders
    primary: "oklch(0.73 0.22 129)",   // #76b900 — NVIDIA Green: CTAs, active states, corner squares
    onPrimary: "oklch(0 0 0)",         // BLACK on NVIDIA Green (green is bright enough; white would wash)
    accent: "oklch(0.73 0.22 129)",    // same as primary — single-accent system
    // Hero / footer / nav chapters use deep-black canvas (surface-dark: #000000)
    heroCanvas: "oklch(0 0 0)",
    heroInk: "oklch(1 0 0)",
    heroMuted: "oklch(1 0 0 / 0.7)",   // on-dark-mute: rgba(255,255,255,0.7)
  },

  fonts: {
    display: {
      // NVIDIA-EMEA is proprietary; Inter is the documented substitute (within ~2% optical)
      stack: '"NVIDIA-EMEA", "Inter", Arial, Helvetica, system-ui, sans-serif',
      source: { kind: "proprietary", substituteGoogle: "Inter", weights: [400, 700] },
      weight: 700,
      // letterSpacing: 0 throughout the system — no tracking override needed
    },
    body: {
      stack: '"NVIDIA-EMEA", "Inter", Arial, Helvetica, system-ui, sans-serif',
      source: { kind: "proprietary", substituteGoogle: "Inter", weights: [400, 700] },
      weight: 400,
    },
    // No mono face — NVIDIA's system uses NVIDIA-EMEA at every tier; no code/terminal role
  },

  type: {
    navUppercase: false,       // nav labels are mixed-case ("Products / Solutions")
    navTracking: "0",
    buttonUppercase: false,    // buttons use normal-case weight-700 text
    buttonTracking: "0",
    displayUppercase: false,   // headlines are title/sentence case, not monumental all-caps
    tabularNumbers: true,      // stat callouts and data tables are core to the AI platform
  },

  radius: {
    button: "2px",    // rounded.sm — the system's universal interactive radius
    card: "2px",
    input: "2px",
    chip: "2px",      // explicitly NOT pill; NVIDIA's system prohibits soft geometry
  },

  density: "standard",   // 64px section rhythm, 24px gutters — structured but not cinematic

  buttons: {
    primary: {
      bg: "oklch(0.73 0.22 129)",   // NVIDIA Green fill
      color: "oklch(0 0 0)",        // black label on green
    },
    secondary: {
      bg: "transparent",
      color: "oklch(0 0 0)",                  // ink on light canvas
      border: "oklch(0.73 0.22 129)",         // green 2px outline (button-outline pattern)
    },
  },

  elevation: "border",   // hairline 1px border; zero drop shadows on cards

  layout: {
    hero: "cinema",      // full-bleed photographic/3D hero on black canvas, copy at left
    cta: "band",         // cta-strip-dark: compressed one-row dark band between sections
    preview: "card",     // product/feature cards are the primary preview surface
  },

  signature: {
    kind: "grid",
    accent: "oklch(0.73 0.22 129)",   // NVIDIA Green corner squares + active tab fills
    intensity: "medium",
    note: "Structured black/white editorial grid; 2px angular geometry; NVIDIA Green corner squares (12px) as the sole ornamental device.",
  },
};

export default nvidia;
