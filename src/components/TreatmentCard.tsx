type TreatmentCardProps = {
  name: string;
  subtitle: string;
  bullets: string[];
};

export function TreatmentCard({ name, subtitle, bullets }: TreatmentCardProps) {
  return (
    <article className="flex flex-col justify-between rounded-2xl border border-slate-100 bg-slate-50/60 p-5 text-sm text-slate-700">
      <div>
        <h3 className="text-base font-semibold text-slate-900">{name}</h3>
        <p className="mt-1 text-sm text-slate-600">{subtitle}</p>
        <ul className="mt-3 space-y-1 text-sm">
          {bullets.map((b) => (
            <li key={b} className="flex gap-2">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-slate-400" />
              <span>{b}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-4 text-xs text-slate-500">
        Kostenlose Beratung: Wir klären gemeinsam, ob diese Behandlung zu Ihnen passt.
      </div>
    </article>
  );
}

