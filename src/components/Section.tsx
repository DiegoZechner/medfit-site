type SectionProps = {
  title: string;
  eyebrow?: string;
  children: React.ReactNode;
};

export function Section({ title, eyebrow, children }: SectionProps) {
  return (
    <section className="border-t border-line bg-white/90">
      <div className="page-container py-12 md:py-16">
        <div className="mb-6 space-y-1">
          {eyebrow && (
            <p className="text-xs font-medium uppercase tracking-wide text-muted">
              {eyebrow}
            </p>
          )}
          <h2 className="text-xl font-semibold tracking-tight text-ink md:text-2xl">
            {title}
          </h2>
        </div>
        <div className="space-y-4 text-sm text-muted md:text-base">
          {children}
        </div>
      </div>
    </section>
  );
}
