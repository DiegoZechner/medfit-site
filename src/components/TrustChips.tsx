interface TrustChipsProps {
  items: string[];
}

export function TrustChips({ items }: TrustChipsProps) {
  if (!items || items.length === 0) return null;
  
  return (
    <div className="flex flex-wrap items-center justify-center gap-2">
      {items.map((item, i) => (
        <span
          key={i}
          className="inline-flex items-center rounded-full bg-shell border border-line px-3 py-1 text-xs font-medium text-muted"
        >
          <svg className="mr-1.5 h-3.5 w-3.5 text-sand" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
          {item}
        </span>
      ))}
    </div>
  );
}
