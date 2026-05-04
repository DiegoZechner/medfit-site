import Link from "next/link";
import { TrustChips } from "./TrustChips";

interface LandingHeroProps {
  eyebrow?: string;
  title: string;
  subtitle: string;
  primaryCtaLabel: string;
  primaryCtaHref: string;
  secondaryCtaLabel?: string;
  secondaryCtaHref?: string;
  trustItems?: string[];
  note?: string;
}

export function LandingHero({
  eyebrow,
  title,
  subtitle,
  primaryCtaLabel,
  primaryCtaHref,
  secondaryCtaLabel,
  secondaryCtaHref,
  trustItems,
  note,
}: LandingHeroProps) {
  return (
    <section className="bg-white py-16 md:py-24 border-b border-line">
      <div className="page-container max-w-4xl text-center">
        {eyebrow && (
          <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-sand">
            {eyebrow}
          </span>
        )}
        <h1 className="mb-6 text-4xl font-bold tracking-tight text-ink sm:text-5xl md:text-6xl">
          {title}
        </h1>
        <p className="mx-auto mb-8 max-w-2xl text-lg text-muted md:text-xl">
          {subtitle}
        </p>
        
        {trustItems && trustItems.length > 0 && (
          <div className="mb-10 flex justify-center">
            <TrustChips items={trustItems} />
          </div>
        )}

        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href={primaryCtaHref}
            className="w-full sm:w-auto rounded-xl bg-aqua px-8 py-3.5 text-base font-medium text-white shadow-sm hover:opacity-90 transition-colors text-center"
          >
            {primaryCtaLabel}
          </Link>
          {secondaryCtaLabel && secondaryCtaHref && (
            <Link
              href={secondaryCtaHref}
              className="w-full sm:w-auto rounded-xl border border-line bg-white px-8 py-3.5 text-base font-medium text-slate hover:bg-shell transition-colors text-center"
            >
              {secondaryCtaLabel}
            </Link>
          )}
        </div>

        {note && (
          <p className="mt-6 text-sm text-muted">
            {note}
          </p>
        )}
      </div>
    </section>
  );
}
