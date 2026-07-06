import type { BrandTheme } from "./types";

// Framer — bold dark-canvas web builder. Signature: near-pure-black artboard,
// white pill CTAs, GT Walsheim Medium at extreme negative tracking (-0.05em),
// Inter Variable body with OpenType character variants, and oversized gradient
// spotlight tiles (violet, magenta, orange) dropped into dark monochrome card
// grids. The blue accent (#0099ff) is reserved solely for links and focus
// states — never used as a fill. Source: design-and-creative-tools/framer.md.
const framer: BrandTheme = {
  schemaVersion: 1,
  slug: "framer",
  name: "Framer",
  description:
    "Pure black artboard — white pill CTAs, GT Walsheim at extreme negative tracking, gradient spotlight tiles in dark monochrome grids.",
  polarity: "dark",
  colors: {
    canvas: "oklch(0.09 0.002 80)",    // #090909 near-black, faint warm cast
    surface: "oklch(0.15 0.002 80)",   // #141414 surface-1: pricing cards, secondary buttons
    raised: "oklch(0.20 0.002 80)",    // #1c1c1c surface-2: featured card, hero pill backdrop
    ink: "oklch(1 0 0)",               // #ffffff pure white display & body type
    muted: "oklch(0.63 0 0)",          // #999999 secondary text, footer columns, deselected tabs
    hairline: "oklch(0.26 0.002 80)",  // #262626 input borders, comparison dividers
    primary: "oklch(1 0 0)",           // white pill — the ONLY primary CTA fill on the site
    onPrimary: "oklch(0 0 0)",         // black text on white pill
    accent: "oklch(0.63 0.22 240)",    // #0099ff sky blue — links, focus rings, selection only
  },
  fonts: {
    display: {
      stack: '"GT Walsheim", "GT Walsheim Medium", "Inter", system-ui, sans-serif',
      source: { kind: "proprietary", substituteGoogle: "Inter", weights: [500, 600] },
      weight: 500,
      tracking: "-0.05em", // maps to ~-5.5px on 110px hero; brand signature compression
    },
    body: {
      stack: '"Inter Variable", "Inter", system-ui, sans-serif',
      source: { kind: "google", family: "Inter", weights: [400, 500] },
      weight: 400,
      tracking: "-0.01em", // ~-0.15px on 15px body; slight negative per DESIGN.md
    },
  },
  type: {
    navUppercase: false,
    buttonUppercase: false,
    tabularNumbers: true, // Inter's tnum feature active on pricing/stats
  },
  radius: {
    button: "100px",  // pill — the ONLY CTA shape across the site
    card: "20px",     // rounded.xl: pricing cards, mockup tiles
    input: "10px",    // rounded.md: form fields
    chip: "9999px",
  },
  density: "spacious", // ~96px section padding; dark canvas IS the whitespace
  buttons: {
    primary: {
      bg: "oklch(1 0 0)",
      color: "oklch(0 0 0)",
    },
    secondary: {
      bg: "oklch(0.15 0.002 80)", // surface-1 charcoal pill
      color: "oklch(1 0 0)",
    },
  },
  elevation: "border", // surface lifts + 0.5px light-edge top border on floating cards
  layout: {
    hero: "centered",    // one assertive statement floating centered on black canvas
    cta: "band",         // full-width dark bands with pill CTAs
    preview: "media",    // browser-framed product mockups, template gallery tiles
  },
  signature: {
    kind: "color-tiles",
    accent: "oklch(0.50 0.27 278)",  // gradient-violet #6a4cf5 — most common spotlight
    accent2: "oklch(0.62 0.27 316)", // gradient-magenta #d44df0 — second spotlight variant
    intensity: "medium",
    note: "Oversized gradient spotlight cards (violet, magenta, orange) dropped sparingly into dark monochrome card grids; gradients are CARDS, not section backgrounds.",
  },
};

export default framer;
