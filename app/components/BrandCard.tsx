import Link from "next/link";
import BrandMark from "@/app/components/BrandMark";
import { traits, type Brand } from "@/lib/brands";
import { hasTheme } from "@/lib/themes/registry";

export default function BrandCard({ brand }: { brand: Brand }) {
  const chips = traits(brand.blurb);
  const built = hasTheme(brand.slug);
  return (
    <article className="group flex flex-col rounded-xl border border-hairline bg-raised p-5 transition-[box-shadow,border-color,transform] duration-150 ease-out hover:-translate-y-0.5 hover:border-ink/25 hover:shadow-[0_8px_24px_-12px_oklch(0.22_0.02_245/0.28)]">
      <div className="flex items-start justify-between gap-3">
        <div className="flex min-w-0 items-center gap-2.5">
          <BrandMark brand={brand} size={26} />
          <h3 className="truncate font-serif text-lg font-semibold leading-tight">
            {brand.name}
          </h3>
        </div>
        {built ? (
          <span className="shrink-0 rounded-full border border-accent/40 bg-accent/10 px-2 py-0.5 text-[11px] font-medium uppercase tracking-wide text-accent-ink">
            Live
          </span>
        ) : (
          <span className="shrink-0 rounded-full border border-hairline px-2 py-0.5 text-[11px] font-medium uppercase tracking-wide text-muted">
            Preview pending
          </span>
        )}
      </div>
      <p className="mt-2 text-sm leading-relaxed text-muted">{brand.blurb}.</p>
      {chips.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-1.5">
          {chips.map((c) => (
            <span
              key={c}
              className="rounded bg-surface px-2 py-0.5 text-[11px] font-medium text-muted"
            >
              {c}
            </span>
          ))}
        </div>
      )}
      {/* Two distinct actions, separated by shape/weight/color:
          View template (primary, accent) · Actual site (dark outline). */}
      <div className="mt-auto border-t border-hairline pt-4">
        <Link
          href={`/preview/${brand.slug}`}
          className="flex min-h-[2.75rem] items-center justify-center gap-1.5 rounded-lg bg-accent-ink px-3 text-sm font-semibold text-canvas transition-[background-color] duration-150 hover:bg-ink"
        >
          View template →
        </Link>
        {brand.site && (
          <a
            href={brand.site}
            target="_blank"
            rel="noreferrer"
            className="mt-2 flex min-h-[2.75rem] items-center justify-center gap-1 rounded-lg border border-ink/20 px-3 text-sm font-medium text-ink transition-colors duration-150 hover:border-ink/40 hover:bg-surface"
          >
            Actual site ↗
          </a>
        )}
      </div>
    </article>
  );
}
