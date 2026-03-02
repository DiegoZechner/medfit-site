import Link from "next/link";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-32 top-10 h-72 w-72 rounded-full bg-brand/5 blur-3xl" />
        <div className="absolute -right-24 top-40 h-80 w-80 rounded-full bg-slate-300/20 blur-3xl" />
      </div>
      <div className="page-container grid gap-10 py-14 md:grid-cols-2 md:items-center md:py-20">
        <div className="space-y-6">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-brand-dark/70">
            Körperbehandlungen · Dornbirn
          </p>
          <h1 className="text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl lg:text-5xl">
            Für einen Körper, in dem
            <span className="block text-slate-500">Sie sich wieder wohlfühlen.</span>
          </h1>
          <p className="max-w-xl text-base text-slate-600 md:text-lg">
            Wir unterstützen Sie dabei, Problemzonen sanft zu reduzieren und Ihre Haut zu
            glätten – mit bewährten Körperbehandlungen und ehrlicher, persönlicher Beratung.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/termin"
              className="rounded-full bg-slate-900 px-6 py-2.5 text-sm font-medium text-white shadow-sm transition hover:-translate-y-[1px] hover:bg-slate-800 hover:shadow-md"
            >
              Kostenlose Beratung buchen
            </Link>
            <Link
              href="/koerperformung"
              className="rounded-full border border-slate-200 bg-white px-6 py-2.5 text-sm font-medium text-slate-800 transition hover:border-slate-300 hover:bg-slate-50"
            >
              Körperbehandlungen ansehen
            </Link>
          </div>
          <div className="flex flex-wrap gap-4 text-xs font-medium text-slate-500 md:text-sm">
            <span className="inline-flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              Schonende Anwendungen ohne OP
            </span>
            <span className="inline-flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              Realistische, nachvollziehbare Ergebnisse
            </span>
            <span className="inline-flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              Zeit für Ihre Fragen &amp; Anliegen
            </span>
          </div>
        </div>
        <div className="md:justify-self-end">
          <div className="relative rounded-3xl border border-slate-100 bg-white/80 p-6 shadow-md shadow-slate-900/5 backdrop-blur">
            <div className="absolute -right-4 -top-4 rounded-full bg-emerald-400 px-3 py-1 text-xs font-medium text-emerald-950 shadow-sm">
              Erstgespräch kostenlos
            </div>
            <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
              Ihre Zonen im Fokus
            </h2>
            <p className="mt-2 text-xs text-slate-500">
              Viele Kundinnen und Kunden kommen mit genau diesen Bereichen zu uns.
            </p>
            <ul className="mt-5 grid grid-cols-2 gap-3 text-sm text-slate-700">
              <li className="rounded-2xl bg-slate-50 px-4 py-3 shadow-sm shadow-slate-900/3">
                Doppelkinn &amp; Oberarme
              </li>
              <li className="rounded-2xl bg-slate-50 px-4 py-3 shadow-sm shadow-slate-900/3">
                Bauch &amp; Hüftgold
              </li>
              <li className="rounded-2xl bg-slate-50 px-4 py-3 shadow-sm shadow-slate-900/3">
                Reiterhosen &amp; Innenschenkel
              </li>
              <li className="rounded-2xl bg-slate-50 px-4 py-3 shadow-sm shadow-slate-900/3">
                Hartnäckige Cellulite
              </li>
            </ul>
            <p className="mt-4 text-xs text-slate-500">
              Im Gespräch klären wir gemeinsam, ob und welche Behandlung für Sie sinnvoll ist.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

