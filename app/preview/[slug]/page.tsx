import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import BrandMark from "@/app/components/BrandMark";
import StandardTemplate from "@/app/components/standard/StandardTemplate";
import { brands, brandBySlug } from "@/lib/brands";
import { themeFor, hasTheme } from "@/lib/themes/registry";

export const dynamicParams = false;

export function generateStaticParams() {
  return brands.map((b) => ({ slug: b.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const brand = brandBySlug(slug);
  if (!brand) return { title: "Preview not found" };
  const built = hasTheme(slug);
  const title = built
    ? `The ${brand.name} template`
    : `${brand.name} template (pending)`;
  const description = built
    ? `The standard sample page rendered entirely in the ${brand.name} design language. Same content, different design.`
    : `The template rendered in the ${brand.name} design language is not generated yet.`;
  return {
    title,
    description,
    alternates: { canonical: `/preview/${brand.slug}` },
    openGraph: { title, description, url: `/preview/${brand.slug}` },
  };
}

export default async function PreviewPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const brand = brandBySlug(slug);
  if (!brand) notFound();

  // Built: render the SignalKit template in this brand's design language, full-bleed
  // (StandardTemplate owns its own branded nav + footer).
  if (hasTheme(slug)) {
    return <StandardTemplate theme={themeFor(slug)} brandName={brand.name} />;
  }

  // Un-built: the shell "Preview pending" page.
  return (
    <>
      <Navbar />
      <main id="main-content" className="mx-auto flex w-full max-w-3xl flex-1 flex-col px-5 py-24">
        <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted">
          {brand.categoryLabel}
        </p>
        <div className="mt-3 flex items-center gap-4">
          <BrandMark brand={brand} size={44} />
          <h1 className="font-serif text-4xl font-semibold tracking-tight sm:text-5xl">
            {brand.name}
          </h1>
        </div>
        <p className="mt-4 inline-flex w-fit rounded-full border border-hairline px-3 py-1 text-sm text-muted">
          Preview pending
        </p>
        <p className="measure mt-6 text-lg leading-relaxed text-muted">
          {brand.blurb}. The sample page rendered in the {brand.name} design
          language is not generated yet.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          {brand.site && (
            <a
              href={brand.site}
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary"
            >
              Visit {brand.name} ↗
            </a>
          )}
          <Link href="/#index" className="btn btn-ghost">
            Back to all templates
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
