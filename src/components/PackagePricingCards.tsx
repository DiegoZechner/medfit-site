import Link from "next/link";

export function PackagePricingCards() {
  return (
    <div className="w-full max-w-6xl mx-auto py-12">
      <div className="grid md:grid-cols-3 gap-8 items-end">
        
        {/* 1. Einzelzone */}
        <div className="bg-white border border-line rounded-3xl p-8 shadow-sm flex flex-col hover:shadow-md transition-shadow">
          <h3 className="text-2xl font-bold text-ink mb-2">Einzelzone</h3>
          <p className="text-muted mb-6 flex-1">Für den gezielten Start mit einer bestimmten Region.</p>
          <ul className="space-y-3 mb-8">
            <li className="flex items-center text-sm text-ink">
              <svg className="w-5 h-5 text-aqua mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
              Individuelle Zonenwahl
            </li>
            <li className="flex items-center text-sm text-ink">
              <svg className="w-5 h-5 text-aqua mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
              Ideal zum Kennenlernen
            </li>
          </ul>
          <Link
            href="/termin"
            className="w-full rounded-xl border border-line bg-shell py-3 text-center text-sm font-medium text-ink hover:bg-line transition-colors"
          >
            Einzelzone anfragen
          </Link>
        </div>

        {/* 2. Kombi-Paket (Highlight) */}
        <div className="relative bg-white border-2 border-aqua rounded-3xl p-8 shadow-lg flex flex-col md:-mt-4 transform md:scale-105 z-10 overflow-hidden">
          {/* Subtle animated border effect could be done with before/after pseudo elements, 
              but keeping it clean with Tailwind border */}
          <div className="absolute top-0 right-0 bg-aqua text-white text-xs font-bold px-4 py-1 rounded-bl-xl uppercase tracking-wider">
            Empfohlen
          </div>
          <h3 className="text-2xl font-bold text-ink mb-2">Kombi-Paket</h3>
          <p className="text-muted mb-6 flex-1">1 Hauptzone + bis zu zwei weitere Zonen mit Rabatt.</p>
          <ul className="space-y-3 mb-8">
            <li className="flex items-center text-sm text-ink font-medium">
              <svg className="w-5 h-5 text-aqua mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
              Hauptzone zum Normalpreis
            </li>
            <li className="flex items-center text-sm text-ink font-medium">
              <svg className="w-5 h-5 text-aqua mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
              –50 % auf zwei weitere Zonen
            </li>
            <li className="flex items-center text-sm text-ink font-medium">
              <svg className="w-5 h-5 text-aqua mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
              Bestes Preis-Leistungs-Verhältnis
            </li>
          </ul>
          <Link
            href="/termin"
            className="w-full rounded-xl bg-aqua py-3.5 text-center text-sm font-medium text-white hover:opacity-90 transition-colors shadow-md hover:shadow-lg"
          >
            Paket sichern
          </Link>
        </div>

        {/* 3. Beratung zuerst */}
        <div className="bg-shell border border-line rounded-3xl p-8 shadow-sm flex flex-col hover:shadow-md transition-shadow">
          <h3 className="text-2xl font-bold text-ink mb-2">Beratung zuerst</h3>
          <p className="text-muted mb-6 flex-1">Wir klären unverbindlich, was für Sie am sinnvollsten ist.</p>
          <ul className="space-y-3 mb-8">
            <li className="flex items-center text-sm text-ink">
              <svg className="w-5 h-5 text-aqua mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
              Kostenlose Hautanalyse
            </li>
            <li className="flex items-center text-sm text-ink">
              <svg className="w-5 h-5 text-aqua mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
              Individueller Plan
            </li>
          </ul>
          <Link
            href="/termin"
            className="w-full rounded-xl border border-line bg-white py-3 text-center text-sm font-medium text-ink hover:bg-line transition-colors"
          >
            Kostenlos beraten lassen
          </Link>
        </div>

      </div>
      <p className="text-center text-xs text-muted mt-8 max-w-2xl mx-auto">
        Die finalen Kosten hängen von Behandlungszone, Umfang und Paketkombination ab. Wir beraten Sie transparent und individuell.
      </p>
    </div>
  );
}
