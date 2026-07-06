import type { BrandTheme } from "./types";

// Supabase — open-source Postgres dev platform. Signature: pure-white canvas, single
// emerald-green primary (#3ecf8e), near-black onPrimary (NOT white — brand's idiosyncratic
// choice), system mono in dark code blocks, composited dashboard/SQL mockups as hero visual.
// No atmospheric gradients — the white canvas is the design.
// Source: backend-database-and-devops/supabase.md.
const supabase: BrandTheme = {
  schemaVersion: 1,
  slug: "supabase",
  name: "Supabase",
  description: "Postgres dev platform — white canvas, single emerald CTA, dark code blocks, near-black on green.",
  polarity: "light",
  colors: {
    canvas:    "oklch(1 0 0)",            // #ffffff pure white
    surface:   "oklch(0.985 0 0)",        // #fafafa canvas-soft
    raised:    "oklch(1 0 0)",            // cards sit on white with hairline border
    ink:       "oklch(0.19 0 0)",         // #171717 near-black
    muted:     "oklch(0.52 0 0)",         // #707070 ink-mute
    hairline:  "oklch(0.90 0 0)",         // #dfdfdf
    primary:   "oklch(0.762 0.154 159)",  // #3ecf8e signature emerald
    onPrimary: "oklch(0.19 0 0)",         // #171717 near-black on green — brand's intentional choice
    accent:    "oklch(0.762 0.154 159)",  // emerald — the only chromatic system event
  },
  fonts: {
    display: {
      stack: '"Circular", "Inter", "Helvetica Neue", Helvetica, Arial, system-ui, sans-serif',
      source: { kind: "proprietary", substituteGoogle: "Inter", weights: [500] },
      weight: 500,
      tracking: "-0.03em",
    },
    body: {
      stack: '"Circular", "Inter", "Helvetica Neue", Helvetica, Arial, system-ui, sans-serif',
      source: { kind: "proprietary", substituteGoogle: "Inter", weights: [400, 500] },
      weight: 400,
    },
    mono: {
      stack: '"JetBrains Mono", ui-monospace, Menlo, Monaco, Consolas, "Liberation Mono", monospace',
      source: { kind: "google", family: "JetBrains Mono", weights: [400] },
      weight: 400,
    },
  },
  type: {
    navUppercase: false,
    tabularNumbers: true,
  },
  radius: {
    button: "6px",    // square-ish — brand signature; never pill-shaped
    card: "12px",
    input: "6px",
    chip: "9999px",
  },
  density: "standard",
  buttons: {
    primary: {
      bg:    "oklch(0.762 0.154 159)", // #3ecf8e emerald fill
      color: "oklch(0.19 0 0)",        // near-black — brand explicitly avoids white on green
    },
    secondary: {
      bg:     "oklch(1 0 0)",
      color:  "oklch(0.19 0 0)",
      border: "oklch(0.83 0 0)",       // #c7c7c7 hairline-strong
    },
  },
  elevation: "border",
  layout: {
    hero:    "split",
    cta:     "band",
    preview: "terminal",
  },
  signature: {
    kind:      "grid",
    accent:    "oklch(0.762 0.154 159)",
    intensity: "subtle",
    note:      "Faint technical grid on white hero; emerald reserved for CTAs and wordmark dot only.",
  },
};

export default supabase;
