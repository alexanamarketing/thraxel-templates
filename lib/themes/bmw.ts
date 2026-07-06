import type { BrandTheme } from "./types";

// BMW — premium corporate-automotive. Signature: white canvas punctuated by dark-navy
// cinema hero bands with full-bleed vehicle photography; BMW Blue (#1c69d4) as the
// sole CTA color; BMW Type Next Latin 700/300 weight contrast; 0px rectangular
// corners throughout. Source: automotive/bmw.md.
const bmw: BrandTheme = {
  schemaVersion: 1,
  slug: "bmw",
  name: "BMW",
  description: "Corporate-automotive precision — white canvas, BMW Blue, 0px corners, 700/300 weight contrast.",
  polarity: "light",
  colors: {
    // Light premium canvas; dark navy surfaces live only in hero / CTA bands.
    canvas:   "oklch(1 0 0)",          // #ffffff
    surface:  "oklch(0.97 0 0)",       // #f7f7f7 — footer, sub-nav bands
    raised:   "oklch(0.98 0 0)",       // #fafafa — model card photo plates
    ink:      "oklch(0.20 0 0)",       // #262626 — all display + primary text
    muted:    "oklch(0.50 0 0)",       // #6b6b6b — captions, breadcrumbs, footer links
    hairline: "oklch(0.91 0 0)",       // #e6e6e6 — input outlines, table dividers
    primary:  "oklch(0.56 0.17 259)", // #1c69d4 — BMW Blue, sole CTA color
    onPrimary:"oklch(1 0 0)",          // #ffffff — white on BMW Blue button
    accent:   "oklch(0.56 0.17 259)", // #1c69d4 — links, "LEARN MORE" inline CTAs
    // Dark-navy hero-band overrides — used once per page for cinematic vehicle photography.
    heroCanvas: "oklch(0.17 0.015 240)", // #1a2129 — dark navy hero band
    heroInk:    "oklch(1 0 0)",          // #ffffff — white on dark hero
    heroMuted:  "oklch(0.77 0 0)",       // #bbbbbb — secondary text on dark hero
  },
  fonts: {
    display: {
      // BMW Type Next Latin is a licensed typeface. Inter at weight 700 is the
      // documented open-source substitute per the BMW DESIGN.md.
      stack: '"BMW Type Next Latin", "Inter", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      source: { kind: "proprietary", substituteGoogle: "Inter", weights: [700] },
      weight: 700,
      tracking: "0",  // BMW Type Next works on a wide body; negative tracking reads off-brand.
    },
    body: {
      // BMW Type Next Latin Light (weight 300) is the editorial body voice. Inter 300
      // matches well; Inter variable supports the 300 stop.
      stack: '"BMW Type Next Latin", "Inter", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      source: { kind: "proprietary", substituteGoogle: "Inter", weights: [300, 400] },
      weight: 300,
    },
    // No dedicated mono: BMW corporate does not use a monospace face for stats or code.
  },
  type: {
    navUppercase:    false,        // Nav links run mixed-case (14px / 400 / 0.3px tracking).
    navTracking:     "0.02em",    // ~0.3px at 14px
    buttonUppercase: true,         // "LEARN MORE", "CONFIGURE" — uppercase is the corporate voice.
    buttonTracking:  "0.04em",    // ~0.5px at 14px per button spec
    displayUppercase: false,       // Headlines are title-case, not monumental all-caps.
    tabularNumbers:   false,
  },
  radius: {
    button: "0px",      // Rectangular is the BMW corporate signature — no softening.
    card:   "0px",      // All model cards, configurator tiles, inventory cards.
    input:  "0px",      // Text inputs and filter chips follow the same 0px rule.
    chip:   "0px",      // Filter chips: {rounded.none} per DESIGN.md components spec.
  },
  density: "standard", // 80px section rhythm — tighter than BMW M's aerated 96px.
  buttons: {
    primary:   { bg: "oklch(0.56 0.17 259)", color: "oklch(1 0 0)" },
    secondary: {
      bg: "oklch(1 0 0)",
      color: "oklch(0.20 0 0)",
      border: "oklch(0.82 0 0)",  // hairline-strong #cccccc
    },
  },
  elevation: "border",  // 1px hairline dividers; zero drop shadows — depth from photo + color contrast.
  layout: {
    hero:    "cinema",     // Full-bleed dark-navy band with vehicle photography — one per page.
    cta:     "band",       // Pre-footer dark photo band ("Discover the New iX3" pattern).
    preview: "card",       // 4-up / 5-up model card grids.
  },
  signature: {
    kind:      "cinema-photo",
    accent:    "oklch(0.17 0.015 240)",   // Dark navy #1a2129 — the hero band color
    accent2:   "oklch(0.56 0.17 259)",   // BMW Blue — scarce CTA punctuation
    intensity: "medium",
    note: "Alternating white-canvas / dark-navy bands frame full-bleed vehicle photography; no shadows, depth from color-block contrast only.",
  },
};

export default bmw;
