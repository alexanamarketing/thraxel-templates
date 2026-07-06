import BrandCard from "@/app/components/BrandCard";
import { categoryDescription, type Brand, type Category } from "@/lib/brands";

export default function CategorySection({
  category,
  items,
}: {
  category: Category;
  items: Brand[];
}) {
  const description = categoryDescription(category.slug);
  return (
    <section
      id={category.slug}
      className="scroll-mt-16 border-b border-hairline"
    >
      <div className="mx-auto max-w-6xl px-5 py-14">
        <div className="mb-8 flex items-baseline justify-between gap-4">
          <div>
            <h2 className="font-serif text-2xl font-semibold tracking-tight sm:text-3xl">
              {category.label}
            </h2>
            {description && (
              <p className="measure mt-2 text-sm leading-relaxed text-muted">
                {description}
              </p>
            )}
          </div>
          <span className="shrink-0 text-sm text-muted">
            {items.length} systems
          </span>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((b) => (
            <BrandCard key={b.slug} brand={b} />
          ))}
        </div>
      </div>
    </section>
  );
}
