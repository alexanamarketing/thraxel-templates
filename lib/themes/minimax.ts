import type { BrandTheme } from "./types";

// MiniMax — AI infrastructure platform. Signature: vibrant product-color tiles
// (coral M2.7, magenta Music 2.6, blue Hailuo, purple Speech) on stark white canvas;
// black-pill primary CTA; single DM Sans face with tight -0.02em display tracking.
// Source: ai-and-llm-platforms/minimax.md.
const minimax: BrandTheme = {
  schemaVersion: 1,
  slug: "minimax",
  name: "MiniMax",
  description: "AI infrastructure — stark white canvas, black-pill CTA, vibrant product-color tiles.",
  polarity: "light",
  colors: {
    canvas: "oklch(1 0 0)",
    surface: "oklch(0.98 0.003 260)",
    raised: "oklch(1 0 0)",
    ink: "oklch(0.15 0 0)",
    muted: "oklch(0.40 0.02 245)",
    hairline: "oklch(0.92 0.005 264)",
    primary: "oklch(0.15 0 0)",
    onPrimary: "oklch(1 0 0)",
    accent: "oklch(0.45 0.24 264)",
  },
  fonts: {
    display: {
      stack: '"DM Sans", "Inter", "Helvetica Neue", Helvetica, Arial, system-ui, sans-serif',
      source: { kind: "google", family: "DM Sans", weights: [400, 500, 600, 700] },
      weight: 600,
      tracking: "-0.02em",
    },
    body: {
      stack: '"DM Sans", "Inter", "Helvetica Neue", Helvetica, Arial, system-ui, sans-serif',
      source: { kind: "google", family: "DM Sans", weights: [400, 500, 600] },
      weight: 400,
    },
  },
  type: {
    navUppercase: false,
    buttonUppercase: false,
    tabularNumbers: true,
  },
  radius: {
    button: "9999px",
    card: "16px",
    input: "8px",
    chip: "9999px",
  },
  density: "standard",
  buttons: {
    primary: { bg: "oklch(0.15 0 0)", color: "oklch(1 0 0)" },
    secondary: { bg: "transparent", color: "oklch(0.15 0 0)", border: "oklch(0.15 0 0)" },
  },
  elevation: "border",
  layout: { hero: "centered", cta: "band", preview: "card" },
  signature: {
    kind: "color-tiles",
    accent: "oklch(0.64 0.21 28)",
    accent2: "oklch(0.67 0.22 336)",
    intensity: "strong",
    note: "Vibrant product-color tiles — coral (M2.7), magenta (Music 2.6), blue (Hailuo), purple (Speech) — on stark white canvas; 32px radius marks product moments vs 16px for quiet cards.",
  },
};

export default minimax;
