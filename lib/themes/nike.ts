import type { BrandTheme } from "./types";

// Nike — athletic editorial. Signature: full-bleed campaign photography with towering
// uppercase Futura lockup burned in; pure black/white/single-gray retail chrome; pill
// CTAs anchored bottom-left on editorial tiles; zero elevation anywhere.
// Source: e-commerce-and-retail/nike.md.
const nike: BrandTheme = {
  schemaVersion: 1,
  slug: "nike",
  name: "Nike",
  description: "Athletic editorial — pure black/white canvas, monumental Futura uppercase burned into full-bleed campaign photography, pill CTAs.",
  polarity: "light",

  colors: {
    // #ffffff → pure white page background
    canvas: "oklch(1 0 0)",
    // #f5f5f5 soft-cloud — product card stages, search pill, secondary CTA, utility bar
    surface: "oklch(0.966 0 0)",
    // same soft-cloud for raised card faces (no additional elevation)
    raised: "oklch(0.966 0 0)",
    // #111111 near-black — primary text, active filters, CTA fill, swatch dots
    ink: "oklch(0.17 0 0)",
    // #707072 — product subtitles, footer link text, secondary metadata
    muted: "oklch(0.52 0.002 286)",
    // #cacacb — 1px dividers between filter rows, footer columns, PDP disclosure rows
    hairline: "oklch(0.82 0.001 286)",
    // primary CTA = ink: black pill is Nike's only brand "color"
    primary: "oklch(0.17 0 0)",
    onPrimary: "oklch(1 0 0)",
    // accent = ink; no decorative accent hue in Nike's retail chrome
    accent: "oklch(0.17 0 0)",
    // Hero band is full-bleed editorial photography — treated as dark so headline reads white
    heroCanvas: "oklch(0.14 0 0)",
    heroInk: "oklch(1 0 0)",
    heroMuted: "oklch(0.75 0 0)",
  },

  fonts: {
    display: {
      // Nike Futura ND: proprietary geometric condensed, uppercase-only campaign display.
      // Substitute: Anton (Google Fonts) — heavy geometric condensed at similar optical weight.
      // DESIGN.md: "Bebas Neue or Anton at 96px / 0.9 line-height; tighten -0.5% tracking."
      stack: '"Nike Futura ND", "Anton", "Bebas Neue", "Helvetica Now Display", Helvetica, Arial, sans-serif',
      source: { kind: "proprietary", substituteGoogle: "Anton", weights: [400] },
      weight: 400,
      tracking: "-0.005em",
    },
    body: {
      // Helvetica Now Text / Helvetica Now Display — Nike's UI workhorse for all chrome.
      // Substitute: Inter at weights 400 / 500.
      stack: '"Helvetica Now Text", "Helvetica Now Display", "Inter", Helvetica, Arial, sans-serif',
      source: { kind: "proprietary", substituteGoogle: "Inter", weights: [400, 500] },
      weight: 400,
    },
  },

  type: {
    // Nav links are mixed case ("New & Featured", "Men", "Women")
    navUppercase: false,
    navTracking: "0",
    // Task brief + brand expectation: pill CTAs uppercase in the showcase context
    buttonUppercase: true,
    buttonTracking: "0",
    // display-campaign: textTransform uppercase at 96px / line-height 0.9
    displayUppercase: true,
  },

  radius: {
    // button-primary uses rounded.lg (30px pill) — not fully fluid, but pill-like
    button: "30px",
    // product-card, campaign-tile, category-icon-card all use rounded.none (0px)
    card: "0px",
    // search-pill uses rounded.md (24px)
    input: "24px",
    // filter-chip uses rounded.lg (30px)
    chip: "30px",
  },

  density: "standard",

  buttons: {
    // button-primary: #111111 fill, white text, 48px height, 30px pill
    primary: { bg: "oklch(0.17 0 0)", color: "oklch(1 0 0)" },
    // button-secondary: soft-cloud fill, ink text — no border (Nike uses fill, not outline)
    secondary: { bg: "oklch(0.966 0 0)", color: "oklch(0.17 0 0)" },
  },

  // "The system has no drop-shadow elevation in its retail chrome at all."
  elevation: "none",

  layout: {
    // Full-bleed editorial campaign photography with headline burned in — cinematic scale
    hero: "cinema",
    // CTA section is a full-width band (member CTA, sign-up strip)
    cta: "band",
    // Product preview is photography-first — media layout, not dashboard
    preview: "media",
  },

  signature: {
    // The ONE recognizable move: editorial rules of bold uppercase type over full-bleed imagery.
    kind: "editorial-rule",
    // White headline as primary lockup color on dark editorial photography
    accent: "oklch(1 0 0)",
    // Ink headline variant for bright/light campaign imagery
    accent2: "oklch(0.17 0 0)",
    intensity: "strong",
    note: "Towering uppercase Futura lockup burned into full-bleed campaign photography; crisp white pill CTA anchored bottom-left of every editorial tile.",
  },
};

export default nike;
