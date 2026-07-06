// THE canonical flatten + hash for the frozen SignalKit fixture. Single
// implementation imported by lib/signalkit.ts (runtime), scripts/verify-signalkit-copy.mjs
// (post-build sweep), and scripts/audit-signalkit-pages.mjs (page audit). Replaces
// the three hand-copied flatten functions (lane3a, Codex finding 4).
//
// Order mirrors DOM order. Every entry is human-visible rendered text; attribute-only
// strings (placeholders, readOnly input values) stay OUT because the sweep strips tags.

/** @param {import("./signalkit.json")} k @returns {string[]} */
export function flattenSignalkit(k) {
  return [
    ...k.navbar.links,
    k.navbar.ghost,
    k.navbar.primary,
    k.hero.eyebrow,
    k.hero.h1,
    k.hero.subhead,
    k.hero.primary,
    k.hero.secondary,
    k.hero.ghostLink,
    k.hero.preview.title,
    k.hero.preview.statusChip,
    ...k.hero.preview.rows.flatMap((r) => [r.label, r.value]),
    k.hero.preview.note,
    k.features.eyebrow,
    k.features.heading,
    k.features.subhead,
    ...k.features.items.flatMap((f) => [f.tag, f.title, f.body, f.link]),
    ...k.detailRows.rows.flatMap((r) => [
      r.title,
      r.body,
      r.link,
      r.vignette.title,
      ...r.vignette.rows.flatMap((x) => [x.label, x.value]),
      ...(r.vignette.caption ? [r.vignette.caption] : []),
    ]),
    k.developer.heading,
    k.developer.subhead,
    k.developer.filename,
    ...k.developer.request,
    k.developer.responseStatus,
    ...k.developer.response,
    k.developer.caption,
    k.specimen.heading,
    k.specimen.subhead,
    ...k.specimen.swatches,
    k.specimen.typeSample,
    ...k.specimen.typeLabels,
    k.specimen.controls.inputLabel,
    k.specimen.controls.chip,
    k.specimen.controls.primary,
    k.specimen.controls.secondary,
    k.specimen.note,
    k.stats.label,
    ...k.stats.items.flatMap((s) => [s.value, s.label]),
    k.stats.note,
    k.testimonial.trustedBy.lead,
    ...k.testimonial.trustedBy.names,
    k.testimonial.quote,
    k.testimonial.name,
    k.testimonial.role,
    k.testimonial.monogram,
    k.testimonial.caseCard.label,
    k.testimonial.caseCard.text,
    k.testimonial.caseCard.link,
    k.testimonial.quote2.quote,
    k.testimonial.quote2.name,
    k.testimonial.quote2.role,
    k.pricing.heading,
    k.pricing.subhead,
    ...k.pricing.tiers.flatMap((t) => [
      t.name,
      ...(t.chip ? [t.chip] : []),
      t.price,
      t.term,
      ...t.features,
      t.cta,
    ]),
    k.pricing.note,
    k.faq.heading,
    ...k.faq.items.flatMap((i) => [i.q, i.a]),
    k.cta.heading,
    k.cta.subhead,
    k.cta.primary,
    k.cta.secondary,
    k.form.eyebrow,
    k.form.heading,
    k.form.subhead,
    ...Object.values(k.form.fields).map((f) => f.label),
    k.form.submit,
    k.form.note,
    k.footer.description,
    ...k.footer.groups.flatMap((g) => [g.heading, ...g.links]),
    ...k.footer.legal,
  ];
}

/** FNV-1a over the joined strings. @param {string} s @returns {string} */
export function fnv1a(s) {
  let h = 0x811c9dc5;
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 0x01000193);
  }
  return (h >>> 0).toString(16).padStart(8, "0");
}
