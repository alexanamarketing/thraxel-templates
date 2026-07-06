import { categories, brandsByCategory } from "@/lib/brands";

export default function CategoryNav() {
  return (
    <section id="index" className="scroll-mt-16 border-b border-hairline bg-surface">
      <div className="mx-auto max-w-6xl px-5 py-6">
        <div className="flex flex-wrap gap-2">
          {categories.map((c) => (
            <a key={c.slug} href={`#${c.slug}`} className="chip">
              {c.label}
              <span className="text-muted">· {brandsByCategory(c.slug).length}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
