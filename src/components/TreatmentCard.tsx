type TreatmentCardProps = {
  name: string;
  subtitle: string;
  bullets: string[];
};

export function TreatmentCard({ name, subtitle, bullets }: TreatmentCardProps) {
  return (
    <article className="flex flex-col justify-between rounded-xl-2xl border border-line bg-shell/60 p-5 text-sm text-muted">
      <div>
        <h3 className="text-base font-semibold text-ink">{name}</h3>
        <p className="mt-1 text-sm text-muted">{subtitle}</p>
        <ul className="mt-3 space-y-1 text-sm">
          {bullets.map((b) => (
            <li key={b} className="flex gap-2">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-slate-400" />
              <span>{b}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-4 text-xs text-muted">
        Kostenlose Beratung: Wir klären gemeinsam, ob diese Behandlung zu Ihnen passt.
      </div>
    </article>
  );
}

