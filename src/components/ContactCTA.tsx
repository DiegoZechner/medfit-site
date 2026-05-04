import Link from "next/link";

interface ContactCTAProps {
  title?: string;
  subtitle?: string;
  primaryLabel?: string;
  secondaryLabel?: string;
}

export function ContactCTA({
  title = "Bereit für den nächsten Schritt?",
  subtitle = "Lassen Sie sich unverbindlich und kostenlos beraten. Gemeinsam finden wir die beste Behandlung für Sie.",
  primaryLabel = "Kostenlose Beratung buchen",
  secondaryLabel = "Jetzt anrufen",
}: ContactCTAProps) {
  return (
    <section className="bg-slate py-16 md:py-24">
      <div className="page-container max-w-3xl text-center">
        <h2 className="mb-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
          {title}
        </h2>
        <p className="mx-auto mb-8 text-lg text-shell/80">
          {subtitle}
        </p>
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/termin"
            className="w-full sm:w-auto rounded-xl bg-aqua px-8 py-3.5 text-base font-medium text-white shadow-sm hover:opacity-90 transition-colors"
          >
            {primaryLabel}
          </Link>
          <a
            href="tel:+436781330011"
            className="w-full sm:w-auto rounded-xl border border-shell/20 bg-white/5 px-8 py-3.5 text-base font-medium text-white hover:bg-white/10 transition-colors"
          >
            {secondaryLabel}
          </a>
        </div>
      </div>
    </section>
  );
}
