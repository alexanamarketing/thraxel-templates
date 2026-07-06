import type { BrandTheme } from "./types";

// Binance — crypto exchange. Signature: near-black canvas (#0b0e11), single Binance
// Yellow (#FCD535) on every primary CTA and brand-claim headline, flat color-block
// elevation (no shadows/gradients), BinanceNova display/body + BinancePlex tabular
// numbers, compact density, split hero (text left + markets table right), grid
// signature. Source: fintech-and-crypto/binance.md.
const binance: BrandTheme = {
  schemaVersion: 1,
  slug: "binance",
  name: "Binance",
  description:
    "Near-black canvas, Binance Yellow on every primary action, flat color-block depth, tabular-number precision.",
  polarity: "dark",

  colors: {
    // #0b0e11 — near-black with a faint blue-gray tint, never pure black
    canvas: "oklch(0.11 0.009 252)",
    // #1e2329 — surface-card-dark: elevated cards, nav dropdowns, secondary buttons
    surface: "oklch(0.20 0.011 252)",
    // #2b3139 — surface-elevated-dark: nested cards, hovered nav, chart panels
    raised: "oklch(0.26 0.013 252)",
    // #eaecef — body text on dark: deliberately not pure white, slightly cool
    ink: "oklch(0.94 0.005 250)",
    // #707a8a — footer links, breadcrumbs, table column headers, captions
    muted: "oklch(0.54 0.022 250)",
    // #2b3139 — hairline-on-dark: borders read as surface steps, not ink lines
    hairline: "oklch(0.26 0.013 252)",
    // #FCD535 — Binance Yellow: every primary CTA, wordmark, brand-claim headlines
    primary: "oklch(0.87 0.175 90)",
    // #181a20 — near-black on yellow: the system's iconic black-on-yellow combination
    onPrimary: "oklch(0.16 0.012 268)",
    // Yellow also carries inline links — accent == primary per DESIGN.md
    accent: "oklch(0.87 0.175 90)",
  },

  fonts: {
    display: {
      // BinanceNova: display headlines weight 700 — heavier than typical marketing
      // so numbers and headlines compete with dense chart visualizations
      stack:
        '"BinanceNova", "Inter", -apple-system, BlinkMacSystemFont, system-ui, sans-serif',
      source: { kind: "proprietary", substituteGoogle: "Inter", weights: [600, 700] },
      weight: 700,
      tracking: "-0.02em",
    },
    body: {
      // BinanceNova for all editorial copy, nav, button labels
      stack: '"BinanceNova", "Inter", system-ui, sans-serif',
      source: { kind: "proprietary", substituteGoogle: "Inter", weights: [400, 500, 600] },
      weight: 400,
    },
    mono: {
      // BinancePlex: tabular numbers only — prices, volumes, percentages, stat counters.
      // Mixing BinanceNova into a price ticker would lose trading-platform character.
      // IBM Plex Mono is the closest open substitute (tabular monospace fidelity).
      stack: '"BinancePlex", "IBM Plex Mono", "Courier New", monospace',
      source: {
        kind: "proprietary",
        substituteGoogle: "IBM Plex Mono",
        weights: [500, 700],
      },
      weight: 500,
    },
  },

  type: {
    navUppercase: false,
    buttonUppercase: false,
    tabularNumbers: true, // BinancePlex on all numeric data — trading platform requirement
  },

  radius: {
    button: "6px",   // rounded.md — standard CTA buttons
    card: "12px",    // rounded.xl — elevated card containers (markets-table, QR-promo)
    input: "8px",    // rounded.lg — search inputs, content cards
    chip: "9999px",  // pill — "Sign Up" hero CTA, futures-arena "Join Now"
  },

  density: "compact", // 80px section spacing (tighter than airy 96px+ marketing sites)

  buttons: {
    // Yellow bg + near-black text: the system's iconic combination, unchanged across
    // both dark and light modes
    primary: {
      bg: "oklch(0.87 0.175 90)",
      color: "oklch(0.16 0.012 268)",
    },
    // button-secondary-on-dark: surface-card-dark bg, white text, no border
    secondary: {
      bg: "oklch(0.20 0.011 252)",
      color: "oklch(0.94 0.005 250)",
    },
  },

  // Flat surfaces with color-block separation — no drop shadows, no glassmorphism.
  // Depth comes from the lightness delta between canvas and surface-card-dark.
  elevation: "border",

  layout: {
    // Hero: text block left, live markets table right — classic exchange split
    hero: "split",
    // CTA band: full-width "Secure, Low-Fee Trading on Binance" pre-footer band
    cta: "band",
    // Preview: dashboard — tabular market data is the product's primary surface
    preview: "dashboard",
  },

  signature: {
    // Grid: the markets table IS Binance's signature visual — dense data rows,
    // hairline dividers, price-change color semantics. Color-block contrast does
    // brand work; no atmospheric gradients per DESIGN.md do's and don'ts.
    kind: "grid",
    accent: "oklch(0.87 0.175 90)", // Binance Yellow grid accents on dark canvas
    intensity: "subtle",
    note: "Sparse yellow-keyed data grid on near-black; color-block contrast carries brand work, no atmospheric effects.",
  },
};

export default binance;
