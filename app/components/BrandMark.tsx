import { iconFile, type Brand } from "@/lib/brands";

// A small brand symbol: the self-hosted favicon when we have one, else a
// monogram. Decorative next to the visible brand name, so alt is empty.
export default function BrandMark({
  brand,
  size = 24,
}: {
  brand: Brand;
  size?: number;
}) {
  const file = iconFile(brand.slug);
  const box = { width: size, height: size } as const;

  if (file) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={`/icons/${file}`}
        alt=""
        width={size}
        height={size}
        style={box}
        className="shrink-0 rounded-[5px] border border-hairline bg-raised object-contain"
      />
    );
  }

  const letter = brand.name.trim()[0]?.toUpperCase() ?? "?";
  return (
    <span
      aria-hidden
      style={{ ...box, fontSize: size * 0.5 }}
      className="inline-flex shrink-0 items-center justify-center rounded-[5px] border border-hairline bg-surface font-serif font-semibold text-accent-ink"
    >
      {letter}
    </span>
  );
}
