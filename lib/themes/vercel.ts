import type { BrandTheme } from "./types";

// Vercel — developer platform. Signature: near-white canvas, stark black ink
// primary CTA, multi-stop mesh gradient (blue / teal / violet / pink / amber)
// at hero scale only, Geist geometric sans + Geist Mono for technical labels,
// 100px pill buttons, stacked soft shadows. Source: developer-tools-and-ides/vercel.md.
const vercel: BrandTheme = {
  schemaVersion: 1,
  slug: "vercel",
  name: "Vercel",
  description: "Developer platform — stark black ink CTA, mesh gradient atmosphere, Geist geometric sans.",
  polarity: "light",
  colors: {
    canvas: "oklch(0.98 0 0)",        // #fafafa canvas-soft (page body)
    surface: "oklch(0.96 0 0)",       // #f5f5f5 canvas-soft-2 (inset regions)
    raised: "oklch(1 0 0)",           // #ffffff pure white (cards, dialogs)
    ink: "oklch(0.14 0 0)",           // #171717 near-black (all headings + body)
    muted: "oklch(0.43 0 0)",         // #4d4d4d secondary text, nav-link, footer body
    hairline: "oklch(0.93 0 0)",      // #ebebeb 1px dividers, card borders, input borders
    primary: "oklch(0.14 0 0)",       // #171717 black ink — the single CTA colour
    onPrimary: "oklch(1 0 0)",        // #ffffff text on black primary
    accent: "oklch(0.53 0.23 264)",   // #0070f3 link blue / inline emphasis
  },
  fonts: {
    display: {
      stack: '"Geist", "Inter", system-ui, -apple-system, sans-serif',
      source: { kind: "google", family: "Geist", weights: [400, 500, 600] },
      weight: 600,
      tracking: "-0.05em",
    },
    body: {
      stack: '"Geist", "Inter", system-ui, -apple-system, sans-serif',
      source: { kind: "google", family: "Geist", weights: [400, 500] },
      weight: 400,
    },
    mono: {
      stack: '"Geist Mono", ui-monospace, "SFMono-Regular", Menlo, Monaco, monospace',
      source: { kind: "google", family: "Geist Mono", weights: [400] },
      weight: 400,
    },
  },
  type: {
    navUppercase: false,
    navTracking: "0",
    buttonUppercase: false,
    tabularNumbers: true,
  },
  radius: {
    button: "100px",   // rounded.pill — the 100px marketing CTA pill
    card: "8px",       // rounded.md — --geist-marketing-radius
    input: "6px",      // rounded.sm — --geist-radius
    chip: "9999px",    // rounded.full — icon-button-circular, nav-link ghost
  },
  density: "spacious",
  buttons: {
    primary: { bg: "oklch(0.14 0 0)", color: "oklch(1 0 0)" },
    secondary: {
      bg: "oklch(1 0 0)",
      color: "oklch(0.14 0 0)",
      border: "oklch(0.93 0 0)",
    },
  },
  elevation: "soft",
  layout: {
    hero: "centered",
    cta: "band",
    preview: "terminal",
  },
  signature: {
    kind: "gradient-mesh",
    accent: "oklch(0.55 0.22 253)",   // #007cf0 develop-blue (gradient start)
    accent2: "oklch(0.58 0.28 340)",  // #ff0080 highlight pink (gradient end)
    intensity: "medium",
    note: "Multi-stop mesh (blue → teal → violet → pink → amber) as atmospheric backdrop at hero scale only; never miniaturised or reduced to a single colour.",
  },
};

export default vercel;
