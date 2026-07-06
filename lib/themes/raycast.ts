import type { BrandTheme } from "./types";

// Raycast — macOS command-palette launcher. Signature: pure near-black canvas,
// white CTA pill (the ONLY primary-action color), diagonal red hero-stripe gradient
// used exactly once per page, Inter with ss03 alternate-g enabled site-wide, hairline
// 1px borders carrying every card edge (no drop shadows). Source: developer-tools-and-ides/raycast.md.
const raycast: BrandTheme = {
  schemaVersion: 1,
  slug: "raycast",
  name: "Raycast",
  description: "Command-palette launcher — near-black canvas, white pill CTA, signature red hero stripe, ss03 Inter.",
  polarity: "dark",
  colors: {
    canvas:    "oklch(0.04 0.003 250)",  // #07080a — pure near-black with faint blue cast
    surface:   "oklch(0.06 0 0)",        // #0d0d0d — card / panel background
    raised:    "oklch(0.08 0.002 200)",  // #101111 — elevated panel (surface-elevated)
    ink:       "oklch(0.97 0.003 280)",  // #f4f4f6 — near-white headline text
    muted:     "oklch(0.83 0 0)",        // #cdcdcd — default body paragraph text
    hairline:  "oklch(0.16 0.004 220)",  // #242728 — universal 1px card border
    primary:   "oklch(1 0 0)",           // #ffffff — white CTA pill ("Download" / "Get Pro")
    onPrimary: "oklch(0 0 0)",           // #000000 — black label on white button
    accent:    "oklch(0.65 0.20 27)",    // #ff5757 — hero stripe red, brand signature
  },
  fonts: {
    display: {
      stack: '"Inter", "Inter Fallback", system-ui, sans-serif',
      source: { kind: "google", family: "Inter", weights: [500, 600] },
      weight: 600,
      tracking: "0",
    },
    body: {
      stack: '"Inter", "Inter Fallback", system-ui, sans-serif',
      source: { kind: "google", family: "Inter", weights: [400, 500] },
      weight: 400,
    },
    // No mono: marketing pages use Inter for everything; code chips in docs only.
  },
  type: {
    navUppercase: false,
    navTracking: "0",
    buttonUppercase: false,
    buttonTracking: "0.01em",  // button-md: 0.2px at 14px ≈ 0.014em
    displayUppercase: false,
    tabularNumbers: false,
  },
  radius: {
    button: "8px",    // rounded.md — standard buttons / inputs
    card:   "10px",   // rounded.lg — feature cards / command-palette mockup containers
    input:  "8px",    // rounded.md — text inputs and search bars
    chip:   "9999px", // rounded.full — pill-tab filter chips
  },
  density: "spacious",  // 96px section rhythm between every major content block
  buttons: {
    primary: {
      bg:    "oklch(1 0 0)",
      color: "oklch(0 0 0)",
    },
    secondary: {
      bg:     "transparent",
      color:  "oklch(1 0 0)",
      border: "oklch(0.16 0.004 220)",  // hairline — "Sign in" / install-button style
    },
  },
  elevation: "border",  // no drop shadows; depth from surface-color ladder + hairline 1px edges
  layout: {
    hero:    "split",      // copy left, command-palette mockup right
    cta:     "band",       // full-width hero band with single white pill CTA
    preview: "dashboard",  // command-palette UI mockup is the primary preview visual
  },
  signature: {
    kind:      "glow",
    accent:    "oklch(0.65 0.20 27)",   // #ff5757 hero stripe start
    accent2:   "oklch(0.36 0.13 27)",   // #a1131a hero stripe end — deep crimson
    intensity: "medium",
    note:      "Three diagonal red stripes (#ff5757→#a1131a) washed across the very top of the hero band — the system's only chromatic chrome moment, used once per page maximum.",
  },
};

export default raycast;
