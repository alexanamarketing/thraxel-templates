import type { BrandTheme } from "./types";

// HashiCorp — enterprise infrastructure tooling. Signature: pure-black canvas,
// per-product color-tiled cards (Terraform purple, Vault yellow, Waypoint cyan)
// as identity surfaces, white primary CTA on black, hashicorpSans with tight
// display / relaxed body line-height contrast, no mono on the marketing surface.
// Source: backend-database-and-devops/hashicorp.md.
const hashicorp: BrandTheme = {
  schemaVersion: 1,
  slug: "hashicorp",
  name: "HashiCorp",
  description: "Infrastructure tooling — black canvas, per-product color tiles, white CTA, tight display type.",
  polarity: "dark",
  colors: {
    canvas:    "oklch(0 0 0)",
    surface:   "oklch(0.13 0.008 258)",
    raised:    "oklch(0.17 0.009 258)",
    ink:       "oklch(1 0 0)",
    muted:     "oklch(0.74 0.005 256)",
    hairline:  "oklch(0.28 0.007 258)",
    primary:   "oklch(1 0 0)",
    onPrimary: "oklch(0 0 0)",
    accent:    "oklch(0.60 0.19 252)",
  },
  fonts: {
    display: {
      stack: '"hashicorpSans", "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif',
      source: { kind: "proprietary", substituteGoogle: "Inter", weights: [600, 700] },
      weight: 700,
      tracking: "-0.03em",
    },
    body: {
      stack: '"hashicorpSans", "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif',
      source: { kind: "proprietary", substituteGoogle: "Inter", weights: [500, 600] },
      weight: 500,
    },
  },
  type: {
    navUppercase:    false,
    navTracking:     "0",
    buttonUppercase: false,
    buttonTracking:  "0",
    tabularNumbers:  true,
  },
  radius: {
    button: "8px",
    card:   "12px",
    input:  "8px",
    chip:   "9999px",
  },
  density: "standard",
  buttons: {
    primary:   { bg: "oklch(1 0 0)",          color: "oklch(0 0 0)" },
    secondary: { bg: "oklch(0.17 0.009 258)", color: "oklch(1 0 0)" },
  },
  elevation: "border",
  layout: {
    hero:    "split",
    cta:     "card",
    preview: "dashboard",
  },
  signature: {
    kind:      "color-tiles",
    accent:    "oklch(0.43 0.20 295)",
    accent2:   "oklch(0.73 0.12 198)",
    intensity: "medium",
    note: "Per-product color tiles — Terraform purple, Vault yellow, Waypoint cyan — are identity surfaces that tell readers which HashiCorp tool owns each section.",
  },
};

export default hashicorp;
