import type { BrandTheme } from "./types";

// Linear — refined project-management SaaS. Signature: near-black #010102 canvas,
// lavender-blue accent (#5e6ad2), proprietary Linear Display with aggressive negative
// tracking (-3px at 80px), product UI screenshots as the page protagonist.
// Source: productivity-and-saas/linear.app.md.
const linearApp: BrandTheme = {
  schemaVersion: 1,
  slug: "linear-app",
  name: "Linear",
  description: "Near-black canvas, scarce lavender-blue accent, product screenshots as protagonist.",
  polarity: "dark",
  colors: {
    canvas: "oklch(0.04 0.003 265)",   // #010102 — deepest dark in this collection
    surface: "oklch(0.12 0.003 265)",  // #0f1011 — feature cards, product screenshot panels
    raised: "oklch(0.15 0.003 265)",   // #141516 — featured pricing card, hovered tiles
    ink: "oklch(0.975 0.002 220)",     // #f7f8f8 — primary text (light gray, not pure white)
    muted: "oklch(0.86 0.020 252)",    // #d0d6e0 — secondary text, meta, hero sub-copy
    hairline: "oklch(0.22 0.008 258)", // #23252a — 1px card borders and section dividers
    primary: "oklch(0.52 0.17 268)",   // #5e6ad2 — lavender-blue; brand mark, CTA, focus ring
    onPrimary: "oklch(1 0 0)",
    accent: "oklch(0.52 0.17 268)",    // #5e6ad2 — links, eyebrows (used scarcely per brand rules)
  },
  fonts: {
    display: {
      stack: '"Linear Display", "SF Pro Display", -apple-system, "Inter", system-ui, sans-serif',
      source: { kind: "proprietary", substituteGoogle: "Inter", weights: [500, 600, 700] },
      weight: 600,
      tracking: "-0.04em", // approx -3px at 80px — Linear's aggressive negative tracking
    },
    body: {
      stack: '"Linear Text", "SF Pro Text", -apple-system, "Inter", system-ui, sans-serif',
      source: { kind: "proprietary", substituteGoogle: "Inter", weights: [400, 500] },
      weight: 400,
    },
    mono: {
      // Reserved for code snippets inside product-screenshot panels
      stack: '"Linear Mono", "SF Mono", ui-monospace, "JetBrains Mono", monospace',
      source: { kind: "proprietary", substituteGoogle: "JetBrains Mono", weights: [400] },
      weight: 400,
    },
  },
  type: {
    navUppercase: false,
    navTracking: "0",
    buttonUppercase: false,
    tabularNumbers: false,
  },
  radius: {
    button: "8px",   // rounded.md — Linear's compact button spec (8px 14px padding)
    card: "12px",    // rounded.lg — feature/pricing cards; screenshot panels use 16px
    input: "8px",    // rounded.md — form inputs
    chip: "9999px",  // pill — pricing tab toggles, status badges
  },
  density: "compact",
  buttons: {
    primary: {
      bg: "oklch(0.52 0.17 268)",   // lavender-blue fill
      color: "oklch(1 0 0)",
    },
    secondary: {
      bg: "oklch(0.12 0.003 265)",  // surface-1 charcoal fill
      color: "oklch(0.975 0.002 220)",
      border: "oklch(0.22 0.008 258)", // 1px hairline border
    },
  },
  elevation: "border", // depth via surface ladder + hairline; no drop shadows
  layout: {
    hero: "centered",   // large centered headline + subhead + CTA buttons over dark canvas
    cta: "card",        // closing CTA is a surface-1 panel, not a full-bleed band
    preview: "dashboard",
  },
  signature: {
    kind: "glow",
    accent: "oklch(0.52 0.17 268)",
    intensity: "subtle",
    note: "Barely-visible lavender-blue atmospheric glow at hero center; the near-black canvas is the design.",
  },
};

export default linearApp;
