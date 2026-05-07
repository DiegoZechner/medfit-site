type SectionProps = {
  title: string;
  eyebrow?: string;
  children: React.ReactNode;
};

export function Section({ title, eyebrow, children }: SectionProps) {
  return (
    <section className="border-t border-slate-100/80 bg-white/90">
      <div className="page-container py-12 md:py-16">
        <div className="mb-6 space-y-1">
          {eyebrow && (
            <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
              {eyebrow}
            </p>
          )}
          <h2 className="text-xl font-semibold tracking-tight text-slate-900 md:text-2xl">
            {title}
          </h2>
        </div>
        <div className="space-y-4 text-sm text-slate-600 md:text-base">
          {children}
        </div>
      </div>
    </section>
  );
}
