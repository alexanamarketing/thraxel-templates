import type { BrandTheme } from "./types";

// Sanity — developer content platform. Signature: near-black achromatic canvas,
// waldenburgNormal with extreme negative tracking at display scale, coral-red pill
// CTA, IBM Plex Mono for technical metadata, electric blue as the universal
// activation/hover signal. Source: backend-database-and-devops/sanity.md.
const sanity: BrandTheme = {
  schemaVersion: 1,
  slug: "sanity",
  name: "Sanity",
  description: "Developer content platform — achromatic near-black canvas, coral-red pill CTA, electric blue activation.",
  polarity: "dark",
  colors: {
    canvas:    "oklch(0.11 0 0)",       // #0b0b0b — near-black; the natural environment, not a "dark mode"
    surface:   "oklch(0.21 0 0)",       // #212121 — elevated cards and containers
    raised:    "oklch(0.29 0 0)",       // #353535 — prominent layering; colorimetric depth, no shadows
    ink:       "oklch(1 0 0)",          // #ffffff — primary text on dark surfaces
    muted:     "oklch(0.77 0 0)",       // #b9b9b9 — silver secondary text; reads clearly on canvas and surface
    hairline:  "oklch(0.21 0 0)",       // #212121 — subtle 1px border containment; barely visible, never dominant
    primary:   "oklch(0.68 0.17 23)",   // #f36458 — coral-red CTA; the only warm touch in the system
    onPrimary: "oklch(1 0 0)",          // #ffffff — white on coral-red
    accent:    "oklch(0.48 0.24 258)",  // #0052ef — electric blue; universal hover/active/link signal
  },
  fonts: {
    display: {
      stack: '"waldenburgNormal", "Space Grotesk", "Inter", ui-sans-serif, system-ui, sans-serif',
      source: { kind: "proprietary", substituteGoogle: "Space Grotesk", weights: [400, 500] },
      weight: 400,
      tracking: "-0.04em", // represents extreme negative tracking at 72px+; machined, precision-cut quality
    },
    body: {
      stack: '"waldenburgNormal", "Space Grotesk", "Inter", ui-sans-serif, system-ui, sans-serif',
      source: { kind: "proprietary", substituteGoogle: "Space Grotesk", weights: [400, 500] },
      weight: 400,
    },
    mono: {
      stack: '"IBM Plex Mono", "ibmPlexMono Fallback", ui-monospace, "Cascadia Code", monospace',
      source: { kind: "google", family: "IBM Plex Mono", weights: [400, 500] },
      weight: 400,
    },
  },
  type: {
    navUppercase: false,
    navTracking: "0",
    buttonUppercase: false,
    tabularNumbers: false,
  },
  radius: {
    button: "9999px", // full pill for primary CTAs and all badge buttons
    card:   "6px",    // standard dark content cards
    input:  "3px",    // minimal rounding; inputs sit flush to the dark surface
    chip:   "9999px", // neutral badges are pills
  },
  density: "spacious", // 64-120px vertical section spacing; each section a focused frame
  buttons: {
    primary: {
      bg:    "oklch(0.68 0.17 23)", // coral-red pill
      color: "oklch(1 0 0)",
    },
    secondary: {
      bg:    "oklch(0.11 0 0)",     // near-black pill (no border; dark identity)
      color: "oklch(0.77 0 0)",     // silver text
    },
  },
  elevation: "border", // colorimetric depth via surface shifts + 1px ring borders; no offset shadows
  layout: {
    hero:    "editorial", // editorial authority; massive compressed display type as visual element
    cta:     "band",      // full-bleed dark CTA band
    preview: "terminal",  // developer-facing; IBM Plex Mono uppercase technical labels
  },
  signature: {
    kind:     "editorial-rule",
    accent:   "oklch(0.68 0.17 23)",   // coral-red hairline rules and accent marks
    accent2:  "oklch(0.48 0.24 258)",  // electric blue activation signal
    intensity: "subtle",
    note: "Hairline editorial rules on near-black; achromatic surface shifts create depth; vivid coral and electric blue land like signal lights in a dark control room.",
  },
};

export default sanity;
