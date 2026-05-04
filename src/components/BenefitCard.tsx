interface BenefitCardProps {
  title: string;
  description: string;
}

export function BenefitCard({ title, description }: BenefitCardProps) {
  return (
    <div className="rounded-2xl border border-line bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
      <h3 className="mb-2 text-lg font-semibold text-ink">{title}</h3>
      <p className="text-sm text-muted leading-relaxed">
        {description}
      </p>
    </div>
  );
}
