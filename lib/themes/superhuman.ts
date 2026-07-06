import type { BrandTheme } from "./types";

// Superhuman — premium fast-email. Signature: deep indigo navy hero with a
// soft violet-sky radial atmospheric glow behind a half-bleed twilight portrait,
// white body canvas, deep-teal resolving CTA band. Super Sans VF (proprietary
// variable sans) at sub-default weights 460/540 — typographic warmth signature.
// Source: developer-tools-and-ides/superhuman.md
const superhuman: BrandTheme = {
  schemaVersion: 1,
  slug: "superhuman",
  name: "Superhuman",
  description: "Fast email, editorial dark hero — indigo navy canvas, violet glow, deep-teal close.",
  polarity: "light",

  colors: {
    // Body: white canvas / barely-warm off-white surface / white raised cards
    canvas: "oklch(1 0 0)",               // #ffffff white body
    surface: "oklch(0.982 0.002 90)",     // #fafaf8 canvas-soft, barely warm
    raised: "oklch(1 0 0)",               // white cards (distinguished by border elevation)
    // Text
    ink: "oklch(0.18 0.003 60)",          // #292827 warm dark grey, never pure black
    muted: "oklch(0.49 0.005 70)",        // #73706d ink-mute, secondary text
    hairline: "oklch(0.905 0.008 80)",    // #e8e4dd warm light grey border
    // Brand
    primary: "oklch(0.16 0.07 280)",      // #1b1938 indigo navy — hero canvas / filled CTA / featured pricing
    onPrimary: "oklch(1 0 0)",            // white on indigo
    accent: "oklch(0.16 0.07 280)",       // indigo navy for body links / emphasis
    // Hero overrides — dark indigo band over the white body polarity
    heroCanvas: "oklch(0.16 0.07 280)",   // #1b1938 indigo hero canvas
    heroInk: "oklch(1 0 0)",              // white headline on indigo
    heroMuted: "oklch(0.77 0.015 295)",   // #bcbac9 on-dark-mute, secondary text on hero
  },

  fonts: {
    display: {
      stack: '"Super Sans VF", "Inter Variable", "Inter", system-ui, -apple-system, sans-serif',
      source: { kind: "proprietary", substituteGoogle: "Inter", weights: [460, 540, 600] },
      weight: 540,
      tracking: "-0.028em", // -1.32px at 48px; 0 at 64px — use mid-range for display tier
    },
    body: {
      stack: '"Super Sans VF", "Inter Variable", "Inter", system-ui, sans-serif',
      source: { kind: "proprietary", substituteGoogle: "Inter", weights: [460, 540, 600] },
      weight: 460, // sub-default warmth — the brand's typographic signature
    },
  },

  type: {
    navUppercase: false,
    buttonUppercase: false,
    tabularNumbers: false,
  },

  radius: {
    button: "8px",    // rounded.md — rounded-rectangle, the body CTA standard (never pill in body)
    card: "12px",     // rounded.lg — pricing cards, feature cards
    input: "6px",     // rounded.sm
    chip: "9999px",   // pill — hero CTA (button-on-dark-pill) and feature-row tab selectors
  },

  density: "cinematic", // 96–128px section padding; generous editorial whitespace is the brand

  buttons: {
    primary: {
      bg: "oklch(0.16 0.07 280)",   // indigo navy fill
      color: "oklch(1 0 0)",        // white label
    },
    secondary: {
      bg: "oklch(1 0 0)",                          // white
      color: "oklch(0.18 0.003 60)",               // warm dark ink
      border: "oklch(0.27 0.03 290)",              // #3f3a52 hairline-dark border
    },
  },

  elevation: "border", // 1px hairline borders on cards; minimal shadow lift (0 1px 3px / 0 8px 24px)

  layout: {
    hero: "split",        // type + CTA left, half-bleed twilight portrait right, full-width atmospheric backdrop
    cta: "band",          // deep-teal full-width resolving CTA band closes every page
    preview: "dashboard", // email inbox / product UI mockup
  },

  signature: {
    kind: "glow",
    accent: "oklch(0.77 0.12 295)",   // #c9b4fa violet-soft atmospheric glow
    accent2: "oklch(0.20 0.04 190)",  // #0e3030 deep-teal closing band
    intensity: "medium",
    note: "Indigo-to-violet-to-sky radial atmospheric glow behind half-bleed twilight portrait; deep teal resolves every page.",
  },
};

export default superhuman;
