import type { BrandTheme } from "./types";

// IBM — Carbon Design System. Signature: white canvas, IBM Plex Sans weight 300
// for display, single IBM Blue (#0f62fe) CTA, flat 0px corners, 4px base grid
// structure, border-only elevation. Source: media-and-consumer-tech/ibm.md.
const ibm: BrandTheme = {
  schemaVersion: 1,
  slug: "ibm",
  name: "IBM",
  description: "Carbon Design System — white canvas, light-weight Plex Sans, single IBM Blue accent, flat 0px geometry.",
  polarity: "light",
  colors: {
    canvas:    "oklch(1 0 0)",           // #ffffff — default page background
    surface:   "oklch(0.96 0 0)",        // #f4f4f4 surface-1 — alt bands, inputs
    raised:    "oklch(1 0 0)",           // white cards; depth via hairline, not fill
    ink:       "oklch(0.17 0 0)",        // #161616 charcoal — all headlines + body
    muted:     "oklch(0.41 0 0)",        // #525252 ink-muted — secondary type, meta
    hairline:  "oklch(0.90 0 0)",        // #e0e0e0 — 1px card, input, divider borders
    primary:   "oklch(0.51 0.27 264)",   // #0f62fe IBM Blue — links, primary CTA, banner
    onPrimary: "oklch(1 0 0)",           // white on IBM Blue
    accent:    "oklch(0.51 0.27 264)",   // same as primary — one chromatic accent only
  },
  fonts: {
    display: {
      stack: '"IBM Plex Sans", "Helvetica Neue", Arial, sans-serif',
      source: { kind: "google", family: "IBM Plex Sans", weights: [300, 400, 600] },
      weight: 300,        // weight-300 at display sizes is IBM's typographic signature
      tracking: "-0.01em", // ~-0.5px at 76px per Carbon display-xl spec
    },
    body: {
      stack: '"IBM Plex Sans", "Helvetica Neue", Arial, sans-serif',
      source: { kind: "google", family: "IBM Plex Sans", weights: [400, 600] },
      weight: 400,
    },
    mono: {
      stack: '"IBM Plex Mono", "Courier New", monospace',
      source: { kind: "google", family: "IBM Plex Mono", weights: [400, 600] },
      weight: 400,
    },
  },
  type: {
    navUppercase: false,      // Carbon uses sentence case throughout
    buttonUppercase: false,   // button labels are sentence case per Carbon spec
    tabularNumbers: true,     // enterprise data context
  },
  radius: {
    button: "0px",   // Carbon commits to flat square geometry
    card:   "0px",
    input:  "0px",
    chip:   "2px",   // xs token — rare badge exception per DESIGN.md
  },
  density: "compact", // Carbon pages are intentionally dense; 4px base grid
  buttons: {
    primary:   { bg: "oklch(0.51 0.27 264)", color: "oklch(1 0 0)" },
    secondary: { bg: "oklch(0.17 0 0)",      color: "oklch(1 0 0)" }, // charcoal fill per Carbon
  },
  elevation: "border", // 1px hairlines only — no drop shadows on marketing surfaces
  layout: {
    hero:    "editorial", // wide light-weight headline with structured grid beneath
    cta:     "band",      // full-width IBM Blue cta-banner across the page
    preview: "dashboard", // tabular data-dense product preview
  },
  signature: {
    kind:      "grid",
    accent:    "oklch(0.51 0.27 264)",
    intensity: "subtle",
    note:      "Carbon 4px 2x grid — engineered flat-square geometry with IBM Blue as the single accent.",
  },
};

export default ibm;
