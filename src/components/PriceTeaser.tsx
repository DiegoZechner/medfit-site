import Link from "next/link";

interface PriceItem {
  label: string;
  value: string;
}

interface PriceTeaserProps {
  title: string;
  items: PriceItem[];
  note?: string;
  ctaLabel: string;
  ctaHref: string;
}

export function PriceTeaser({ title, items, note, ctaLabel, ctaHref }: PriceTeaserProps) {
  return (
    <div className="mx-auto max-w-2xl rounded-2xl border border-line bg-white p-6 shadow-sm md:p-8">
      <h3 className="mb-6 text-center text-2xl font-bold text-ink">{title}</h3>
      <div className="mb-8 flex flex-col gap-4">
        {items.map((item, index) => (
          <div key={index} className="flex items-center justify-between border-b border-line pb-4 last:border-0 last:pb-0">
            <span className="font-medium text-ink">{item.label}</span>
            <span className="text-lg font-bold text-aqua">{item.value}</span>
          </div>
        ))}
      </div>
      {note && (
        <p className="mb-8 text-center text-xs text-muted">
          {note}
        </p>
      )}
      <div className="flex justify-center">
        <Link
          href={ctaHref}
          className="rounded-xl bg-aqua px-6 py-3 text-sm font-medium text-white shadow-sm hover:opacity-90 transition-colors"
        >
          {ctaLabel}
        </Link>
      </div>
    </div>
  );
}
