import type { BrandTheme } from "./types";

// Shopify — commerce platform. Signature: pure-black cinematic hero with full-bleed
// merchant photography, thin Neue Haas Grotesk Display at weight 330, aloe-mint
// commerce accent on the featured CTA, pill-shape-only button vocabulary, and a
// sharp two-track system (black marketing / cream transactional). Source: e-commerce-and-retail/shopify.md.
const shopify: BrandTheme = {
  schemaVersion: 1,
  slug: "shopify",
  name: "Shopify",
  description: "Commerce platform — pure-black cinematic hero, aloe-mint featured CTA, thin editorial type.",
  polarity: "dark",
  colors: {
    canvas: "oklch(0 0 0)",               // #000000 — canvas-night: pure black cinematic
    surface: "oklch(0.05 0 0)",            // #0a0a0a — canvas-night-elevated: cards on cinematic
    raised: "oklch(0.21 0.025 205)",       // #1e2c31 — surface-elevated-dark: teal-shifted deep card
    ink: "oklch(1 0 0)",                   // #ffffff — on-primary: all text on dark canvas
    muted: "oklch(0.70 0.025 195)",        // #9dabad — link-cool-1: muted teal-gray footer/tertiary
    hairline: "oklch(0.24 0.025 205)",     // #1e2c31 — hairline-dark: 1px borders on dark cards
    primary: "oklch(0.94 0.10 155)",       // #c1fbd4 — aloe-10: commerce / growth accent, featured CTA fill
    onPrimary: "oklch(0 0 0)",             // black text on aloe mint — sufficient contrast on L≈0.94
    accent: "oklch(0.94 0.10 155)",        // aloe-10: links/eyebrows on dark canvas
  },
  fonts: {
    display: {
      // Neue Haas Grotesk Display at weight 330 is the brand's loudest visual identity.
      // No open-source exact match: Inter at low weights is the DESIGN.md-recommended substitute.
      stack: '"Neue Haas Grotesk Display", "Helvetica", Arial, sans-serif',
      source: { kind: "proprietary", substituteGoogle: "Inter", weights: [300, 400] },
      weight: 300,
      // Positive tracking lifts the thin display glyphs; +2.4px at 96px ≈ 0.025em.
      tracking: "0.02em",
    },
    body: {
      stack: '"Inter Variable", Inter, system-ui, sans-serif',
      source: { kind: "google", family: "Inter", weights: [400, 500, 600] },
      weight: 400,
    },
    mono: {
      // System mono preferred; avoids an extra webfont download for code blocks only.
      stack: 'ui-monospace, "SFMono-Regular", Menlo, Monaco, Consolas, monospace',
      source: { kind: "system" },
      weight: 400,
    },
  },
  type: {
    navUppercase: false,
    buttonUppercase: false,
    // Prices and feature-comparison numbers benefit from tabular alignment.
    tabularNumbers: true,
  },
  radius: {
    button: "9999px",  // pill — the ONLY button shape; non-negotiable per DESIGN.md
    card: "12px",      // {rounded.lg}: pricing cards, feature cards
    input: "8px",      // {rounded.md}: text inputs, video frames
    chip: "9999px",    // pill-tag-mint, pill-tag-shade
  },
  density: "spacious",  // 128–192px vertical air on cinematic pages; the whitespace IS the brand
  buttons: {
    // Aloe-mint pill: the "Start free trial" / featured-tier CTA; black text on L≈0.94 mint.
    primary: {
      bg: "oklch(0.94 0.10 155)",
      color: "oklch(0 0 0)",
    },
    // Outline-on-dark: the standard cinematic-track CTA; white border, white text on black.
    secondary: {
      bg: "transparent",
      color: "oklch(1 0 0)",
      border: "oklch(1 0 0)",
    },
  },
  elevation: "soft",  // Layered tiny-shadow stack on light; inset top-edge highlight on dark cards
  layout: {
    hero: "cinema",       // Full-bleed merchant photography; type in clean negative space
    cta: "band",          // Horizontal full-width band; the dark track runs edge-to-edge
    preview: "media",     // Cinematic photo/video frames rather than dashboard chrome
  },
  signature: {
    kind: "cinema-photo",
    accent: "oklch(0.94 0.10 155)",   // aloe-10 mint — one color pop against pure black
    intensity: "strong",
    note: "Full-bleed merchant photography on pure black; no scrim; type in clean negative space above/below the image.",
  },
};

export default shopify;
