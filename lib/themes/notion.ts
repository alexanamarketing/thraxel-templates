import type { BrandTheme } from "./types";

// Notion — all-in-one workspace. Signature: deep navy hero band with scattered
// colorful sticky-note dots and mesh wire illustrations, clean white canvas body,
// Notion Sans (Inter-based) across every surface, 8px-rounded rectangular buttons
// (NOT pills), signature purple CTA. Source: productivity-and-saas/notion.md.
const notion: BrandTheme = {
  schemaVersion: 1,
  slug: "notion",
  name: "Notion",
  description: "All-in-one workspace — deep navy hero, signature purple CTA, pastel feature tiles on a clean white canvas.",

  polarity: "light",

  colors: {
    canvas: "oklch(1 0 0)",           // #ffffff — pure white page background
    surface: "oklch(0.97 0.003 85)",  // #f6f5f4 — warm off-white section bands
    raised: "oklch(1 0 0)",           // #ffffff — cards use canvas + hairline border
    ink: "oklch(0.14 0 0)",           // #1a1a1a — near-black primary text
    muted: "oklch(0.74 0.006 85)",    // #bbb8b1 — warm stone secondary text
    hairline: "oklch(0.91 0.004 85)", // #e5e3df — warm light-gray borders
    primary: "oklch(0.50 0.22 276)",  // #5645d4 — Notion purple CTA
    onPrimary: "oklch(1 0 0)",        // #ffffff
    accent: "oklch(0.50 0.22 276)",   // #5645d4 — purple for tags / eyebrows / emphasis
    // Navy hero band uses dark-surface polarity
    heroCanvas: "oklch(0.13 0.06 258)", // #0a1530 — brand-navy deep
    heroInk: "oklch(1 0 0)",            // #ffffff — on-dark text
    heroMuted: "oklch(0.65 0.006 85)",  // #a4a097 — on-dark-muted secondary
  },

  fonts: {
    display: {
      stack: '"Notion Sans", "Inter", -apple-system, system-ui, "Segoe UI", Helvetica, sans-serif',
      source: { kind: "proprietary", substituteGoogle: "Inter", weights: [400, 500, 600] },
      weight: 600,
      tracking: "-0.02em", // -2px on 80px hero per DESIGN.md
    },
    body: {
      stack: '"Notion Sans", "Inter", -apple-system, system-ui, "Segoe UI", Helvetica, sans-serif',
      source: { kind: "proprietary", substituteGoogle: "Inter", weights: [400, 500] },
      weight: 400,
    },
  },

  type: {
    navUppercase: false,
    buttonUppercase: false,
    tabularNumbers: false,
  },

  radius: {
    button: "8px",    // rounded.md — sober rectangular, NOT pill
    card: "12px",     // rounded.lg — all card families
    input: "8px",     // rounded.md — inputs match buttons
    chip: "9999px",   // rounded.full — pill tabs and status badges only
  },

  density: "spacious", // section-lg = 96px; generous marketing breathing room

  buttons: {
    primary: {
      bg: "oklch(0.50 0.22 276)",   // Notion purple
      color: "oklch(1 0 0)",
    },
    secondary: {
      bg: "transparent",
      color: "oklch(0.14 0 0)",
      border: "oklch(0.82 0.006 85)", // hairline-strong #c8c4be
    },
  },

  elevation: "border", // cards use 1px hairline; deep shadow reserved for hero workspace mockup

  layout: {
    hero: "centered",    // Notion explicitly uses centered hero (vs. left-aligned B2B norm)
    cta: "band",         // cta-banner-light is a full-width surface-tinted band
    preview: "dashboard", // hero workspace mockup card shows a kanban board UI
  },

  signature: {
    kind: "color-tiles",
    accent: "oklch(0.50 0.22 276)",  // purple sticky-note dot
    accent2: "oklch(0.87 0.15 93)",  // brand-yellow #f5d75e sticky-note dot
    intensity: "subtle",
    note: "Scattered colorful sticky-note dots and mesh wire illustrations over the deep navy hero band.",
  },
};

export default notion;
