import type { BrandTheme } from "./types";

// Fallback theme for un-built brands: the editorial shell palette (globals.css).
// A /preview/<slug> with no dedicated theme renders SignalKit in this quiet
// museum-print aesthetic so the page is never broken, just un-branded.
const neutral: BrandTheme = {
  schemaVersion: 1,
  slug: "neutral",
  name: "Neutral",
  description: "The quiet editorial shell — pale tinted paper, graphite ink.",
  polarity: "light",
  colors: {
    canvas: "oklch(0.975 0.008 220)",
    surface: "oklch(0.945 0.010 220)",
    raised: "oklch(0.990 0.006 220)",
    ink: "oklch(0.220 0.018 245)",
    muted: "oklch(0.480 0.020 245)",
    hairline: "oklch(0.850 0.012 225)",
    primary: "oklch(0.330 0.070 165)",
    onPrimary: "oklch(0.975 0.008 220)",
    accent: "oklch(0.560 0.080 165)",
  },
  fonts: {
    display: {
      stack: "var(--font-source-serif), ui-serif, Georgia, serif",
      source: { kind: "system" },
      weight: 600,
      tracking: "-0.01em",
    },
    body: {
      stack: "var(--font-inter), system-ui, sans-serif",
      source: { kind: "system" },
      weight: 400,
    },
  },
  type: { navTracking: "0.02em" },
  radius: { button: "0.6rem", card: "0.75rem", input: "0.5rem", chip: "9999px" },
  density: "standard",
  buttons: {
    primary: { bg: "oklch(0.330 0.070 165)", color: "oklch(0.975 0.008 220)" },
    secondary: {
      bg: "oklch(0.990 0.006 220)",
      color: "oklch(0.220 0.018 245)",
      border: "oklch(0.850 0.012 225)",
    },
  },
  elevation: "border",
  layout: { hero: "split", cta: "band", preview: "card" },
  signature: { kind: "none" },
};

export default neutral;
