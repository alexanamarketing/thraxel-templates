import type { BrandTheme } from "./types";

// Kraken — crypto exchange. Signature: Kraken Purple (#7132f5) soft radial glow on a
// white canvas, split hero, dashboard preview, tabular figures throughout.
// Source: fintech-and-crypto/kraken.md.
const kraken: BrandTheme = {
  schemaVersion: 1,
  slug: "kraken",
  name: "Kraken",
  description: "Crypto exchange — Kraken Purple CTA on white, data-forward dashboard, bold display type.",
  polarity: "light",
  colors: {
    // #ffffff — white canvas
    canvas: "oklch(1 0 0)",
    // Barely-tinted cool off-white for alternating bands
    surface: "oklch(0.98 0.003 270)",
    // White cards; soft elevation shadow provides the visual lift
    raised: "oklch(1 0 0)",
    // #101114 — near-black with cool blue cast
    ink: "oklch(0.13 0.012 265)",
    // #686b82 — Cool Gray primary neutral; contrast ~4.6:1 on white (WCAG AA)
    muted: "oklch(0.52 0.028 270)",
    // #dedee5 — Border Gray
    hairline: "oklch(0.90 0.008 278)",
    // #7132f5 — Kraken Purple
    primary: "oklch(0.46 0.30 278)",
    // White text on Kraken Purple
    onPrimary: "oklch(1 0 0)",
    // Links and emphasis share the Kraken Purple
    accent: "oklch(0.46 0.30 278)",
  },
  fonts: {
    display: {
      // Kraken-Brand: proprietary display typeface (bold, -1px tracking at 48px ≈ -0.02em)
      stack: '"Kraken-Brand", "IBM Plex Sans", Helvetica, Arial, sans-serif',
      source: { kind: "proprietary", substituteGoogle: "IBM Plex Sans", weights: [700] },
      weight: 700,
      tracking: "-0.02em",
    },
    body: {
      // Kraken-Product: proprietary UI typeface; IBM Plex Sans as open substitute
      stack: '"Kraken-Product", "IBM Plex Sans", "Helvetica Neue", Helvetica, Arial, sans-serif',
      source: { kind: "proprietary", substituteGoogle: "IBM Plex Sans", weights: [400, 500, 600] },
      weight: 400,
    },
    mono: {
      // IBM Plex Mono: renders tabular price/volume data in the dashboard preview
      stack: '"IBM Plex Mono", "Courier New", monospace',
      source: { kind: "google", family: "IBM Plex Mono", weights: [400, 500] },
      weight: 400,
    },
  },
  type: {
    navUppercase: false,
    tabularNumbers: true,
  },
  radius: {
    // Explicitly 12px per DESIGN.md ("Don't use pill buttons — 12px is the max")
    button: "12px",
    card: "16px",
    input: "8px",
    chip: "9999px",
  },
  density: "compact",
  buttons: {
    // Primary: #7132f5 fill, white text
    primary: {
      bg: "oklch(0.46 0.30 278)",
      color: "oklch(1 0 0)",
    },
    // Outlined: white bg, #5741d8 text + border
    secondary: {
      bg: "oklch(1 0 0)",
      color: "oklch(0.42 0.27 276)",
      border: "oklch(0.42 0.27 276)",
    },
  },
  elevation: "soft",
  layout: {
    hero: "split",
    cta: "band",
    preview: "dashboard",
  },
  signature: {
    // Soft Kraken Purple radial glow behind the hero; rgba(133,91,251,0.16) tint across panels
    kind: "glow",
    accent: "oklch(0.46 0.30 278)",
    // #149e61 — green for positive data states (price gains, success badges)
    accent2: "oklch(0.57 0.14 159)",
    intensity: "medium",
    note: "Soft Kraken Purple radial glow behind hero; green data accent for positive trading states.",
  },
};

export default kraken;
