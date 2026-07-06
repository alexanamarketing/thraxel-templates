// SignalKit — the FROZEN content template. Single source of truth for every
// /preview/<slug> page. Copy + section order are byte-identical across all 71
// brand renderings; only the design (theme) varies. A page that alters any string
// here fails the comparability contract (docs/standard-template-spec.md).
//
// The strings live in lib/signalkit.json so the Node sweep (scripts/verify-signalkit-copy.mjs)
// reads the exact same source. Do NOT edit copy to "improve" a brand — edit
// lib/themes/<slug>.ts instead.
import raw from "./signalkit.json";
import { flattenSignalkit, fnv1a } from "./signalkit-flatten.mjs";

export type SignalKit = typeof raw;
export const SIGNALKIT = raw;

// Ordered list of every human-visible copy string. ONE implementation, shared
// with both verify scripts: lib/signalkit-flatten.mjs.
export const SIGNALKIT_STRINGS: string[] = flattenSignalkit(SIGNALKIT);

export { fnv1a };

export const signalkitCopyHash: string = fnv1a(SIGNALKIT_STRINGS.join(""));
