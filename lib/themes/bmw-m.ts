import type { BrandTheme } from "./types";

// BMW M — motorsport engineering. Signature: pure-black canvas, UPPERCASE BMW Type Next Latin
// at maximum weight contrast (700 display / 300 body), M tricolor stripe (light blue →
// dark blue → red) as brand divider. No gradients, no shadows — depth via photography.
// Source: automotive/bmw-m.md.
const bmwM: BrandTheme = {
  schemaVersion: 1,
  slug: "bmw-m",
  name: "BMW M",
  description: "Motorsport engineering — pure-black canvas, UPPERCASE BMW Type at maximum weight contrast, M tricolor stripe, zero radius.",
  polarity: "dark",
  colors: {
    canvas: "oklch(0 0 0)",          // #000000 — true black, the page floor
    surface: "oklch(0.13 0 0)",      // #1a1a1a — surface-card: cards, secondary buttons
    raised: "oklch(0.18 0 0)",       // #262626 — surface-elevated: nested cards
    ink: "oklch(1 0 0)",             // #ffffff — on-dark: all headline and primary text
    muted: "oklch(0.77 0 0)",        // #bbbbbb — body: default running text on dark
    hairline: "oklch(0.28 0 0)",     // #3c3c3c — 1px divider on dark surfaces
    primary: "oklch(1 0 0)",         // white = BMW M's own primary; bold white CTA on black canvas
    onPrimary: "oklch(0 0 0)",       // black text on white primary button
    accent: "oklch(0.52 0.20 250)",  // #1c69d4 — BMW heritage blue / M tricolor middle — links/emphasis
  },
  fonts: {
    display: {
      stack: '"BMWTypeNextLatin", "Inter", -apple-system, BlinkMacSystemFont, system-ui, sans-serif',
      source: { kind: "proprietary", substituteGoogle: "Inter", weights: [700] },
      weight: 700,
      tracking: "-0.01em",
    },
    body: {
      stack: '"BMWTypeNextLatin Light", "BMWTypeNextLatin", "Inter", system-ui, sans-serif',
      source: { kind: "proprietary", substituteGoogle: "Inter", weights: [300, 700] },
      weight: 300,
    },
  },
  type: {
    navUppercase: false,
    navTracking: "0.04em",    // 0.5px at 14px nav size — machined label feel
    buttonUppercase: true,
    buttonTracking: "0.1em",  // 1.5px at 14px — non-negotiable "machined" spacing
    displayUppercase: true,   // UPPERCASE BMW Type for h1/h2 — brand voice, not style
  },
  radius: {
    button: "0px",  // sharp rectangle = engineered precision, the brand silhouette
    card: "0px",
    input: "0px",
    chip: "0px",    // BMW M is all-sharp; only circular icon buttons use full (not in schema)
  },
  density: "cinematic",  // 96px between major bands; photography fills full-bleed hero bands
  buttons: {
    primary: { bg: "oklch(1 0 0)", color: "oklch(0 0 0)" },                                        // bold white-fill button
    secondary: { bg: "transparent", color: "oklch(1 0 0)", border: "oklch(1 0 0)" },               // ghost — the true BMW M primary style
  },
  elevation: "border",  // 1px hairline borders; no shadows; photographic depth only
  layout: {
    hero: "cinema",    // full-bleed automotive photography with UPPERCASE overlay type
    cta: "band",       // cta-band-photo: full-width photo band with centered headline
    preview: "media",  // feature-photo-card style: photographic frame for product preview
  },
  signature: {
    kind: "linework",
    accent: "oklch(0.47 0.17 250)",   // #0066b1 — M tricolor stripe: light blue (first stop)
    accent2: "oklch(0.55 0.22 27)",   // #e22718 — M tricolor stripe: red (third stop)
    intensity: "strong",
    note: "4px M tricolor stripe (light blue #0066b1 → dark blue #1c69d4 → red #e22718) as brand divider on motorsport chrome; never as button fill.",
  },
};

export default bmwM;
