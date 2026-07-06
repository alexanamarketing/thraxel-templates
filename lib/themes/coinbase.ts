import type { BrandTheme } from "./types";

// Coinbase — institutional crypto exchange. White canvas, single Coinbase Blue
// (#0052ff) used scarcely on primary CTAs and accent links, near-black dark hero
// band with layered product-UI mockups as signature, CoinbaseDisplay at weight 400
// (editorial calm over fintech urgency), tabular mono for all numeric data.
// Source: fintech-and-crypto/coinbase.md.
const coinbase: BrandTheme = {
  schemaVersion: 1,
  slug: "coinbase",
  name: "Coinbase",
  description: "Institutional crypto — white canvas, scarce Coinbase Blue, near-black dark hero with layered dashboard cards.",

  polarity: "light",

  colors: {
    // White page floor — base canvas is pure white (#ffffff)
    canvas: "oklch(1 0 0)",
    // Subtle alternating band — surface-soft #f7f7f7
    surface: "oklch(0.97 0 0)",
    // Feature cards sit on white with hairline border (#ffffff)
    raised: "oklch(1 0 0)",
    // Display headings, primary nav — ink #0a0b0d
    ink: "oklch(0.12 0.005 255)",
    // Default running body text — body #5b616e (WCAG AA ≥ 4.5:1 on white)
    muted: "oklch(0.47 0.018 258)",
    // 1px dividers on white — hairline #dee1e6
    hairline: "oklch(0.90 0.007 249)",
    // Coinbase Blue — single brand voltage #0052ff
    primary: "oklch(0.46 0.28 264)",
    // White text on Coinbase Blue CTAs
    onPrimary: "oklch(1 0 0)",
    // Links, eyebrows, inline emphasis — same Coinbase Blue
    accent: "oklch(0.46 0.28 264)",
    // Full-bleed dark hero canvas — surface-dark #0a0b0d
    heroCanvas: "oklch(0.12 0.005 255)",
    // White text on dark hero — on-dark #ffffff
    heroInk: "oklch(1 0 0)",
    // De-emphasized text on dark hero — on-dark-soft #a8acb3
    heroMuted: "oklch(0.73 0.009 257)",
  },

  fonts: {
    display: {
      // CoinbaseDisplay is proprietary; Inter at weight 400 is the documented sub.
      // Negative tracking at -0.025em mirrors -2px at 80px display scale.
      stack: '"Coinbase Display", "Inter", -apple-system, system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
      source: { kind: "proprietary", substituteGoogle: "Inter", weights: [400] },
      weight: 400,
      tracking: "-0.025em",
    },
    body: {
      // CoinbaseSans is proprietary; Inter is the documented substitute.
      stack: '"Coinbase Sans", "Inter", -apple-system, system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
      source: { kind: "proprietary", substituteGoogle: "Inter", weights: [400, 600, 700] },
      weight: 400,
    },
    mono: {
      // CoinbaseMono is proprietary; JetBrains Mono is the documented substitute.
      // Used for every tabular numeric — asset prices, percent changes.
      stack: '"Coinbase Mono", "JetBrains Mono", "Geist Mono", ui-monospace, monospace',
      source: { kind: "proprietary", substituteGoogle: "JetBrains Mono", weights: [500] },
      weight: 500,
    },
  },

  type: {
    // Nav text is sentence-case, no uppercase treatment
    navUppercase: false,
    // CTA pills are sentence-case per button-primary spec
    buttonUppercase: false,
    // All asset prices, changes, stats in CoinbaseMono
    tabularNumbers: true,
  },

  radius: {
    // All CTA pills: rounded.pill = 100px
    button: "9999px",
    // Feature cards, product-UI mockups, pricing tiers: rounded.xl = 24px
    card: "24px",
    // Text inputs: rounded.md = 12px
    input: "12px",
    // Asset icon circles and badge pills: rounded.full
    chip: "9999px",
  },

  // 96px section rhythm — editorial pacing, closer to Bloomberg than a trading UI
  density: "spacious",

  buttons: {
    // button-primary: Coinbase Blue pill (#0052ff) with white label
    primary: {
      bg: "oklch(0.46 0.28 264)",
      color: "oklch(1 0 0)",
    },
    // button-secondary-light: soft-gray pill (surface-strong #eef0f3) with ink label
    secondary: {
      bg: "oklch(0.95 0.005 249)",
      color: "oklch(0.12 0.005 255)",
    },
  },

  // Feature cards: hairline border on white, no drop shadow tiers
  elevation: "border",

  layout: {
    // Text left + layered product-UI mockup right — the standard Coinbase marketing hero
    hero: "split",
    // Dark pre-footer CTA band ("Take control of your money")
    cta: "band",
    // Dashboard product-UI mockup cards are the signature preview treatment
    preview: "dashboard",
  },

  signature: {
    // Coinbase Blue as a subtle radial glow anchors the dark hero and surfaces
    // the brand voltage without violating the "scarce color" principle.
    kind: "glow",
    accent: "oklch(0.46 0.28 264)",
    intensity: "subtle",
    note: "Scarce Coinbase Blue glow on near-black hero canvas; layered floating product-UI cards are the single most distinctive brand pattern.",
  },
};

export default coinbase;
