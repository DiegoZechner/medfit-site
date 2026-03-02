import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export default function TerminPage() {
  return (
    <>
      <Header />
      <main className="flex-1 bg-white">
        <section className="border-b border-slate-100 bg-slate-50/80">
          <div className="mx-auto max-w-3xl px-4 py-12 md:py-16">
            <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
              Termin buchen
            </p>
            <h1 className="mt-2 text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
              Kostenlose &amp; unverbindliche Erstberatung
            </h1>
            <p className="mt-4 text-sm text-slate-600 md:text-base">
              In der Erstberatung nehmen wir uns Zeit für Ihre Wünsche und Fragen. Wir
              prüfen gemeinsam, welche Behandlung für Sie geeignet ist und erstellen
              auf Wunsch einen persönlichen Behandlungsplan.
            </p>
          </div>
        </section>
        <section className="bg-white">
          <div className="mx-auto max-w-3xl px-4 py-12 md:py-16">
            <div className="grid gap-8 md:grid-cols-[2fr,1.5fr]">
              <form className="space-y-4 rounded-2xl border border-slate-100 bg-slate-50/80 p-6">
                <div>
                  <label className="block text-sm font-medium text-slate-800">
                    Name
                  </label>
                  <input
                    type="text"
                    className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 outline-none ring-0 focus:border-brand focus:ring-1 focus:ring-brand"
                    placeholder="Vor- und Nachname"
                  />
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <label className="block text-sm font-medium text-slate-800">
                      E-Mail
                    </label>
                    <input
                      type="email"
                      className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 outline-none ring-0 focus:border-brand focus:ring-1 focus:ring-brand"
                      placeholder="Ihre E-Mail-Adresse"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-800">
                      Telefon
                    </label>
                    <input
                      type="tel"
                      className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 outline-none ring-0 focus:border-brand focus:ring-1 focus:ring-brand"
                      placeholder="+43 ..."
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-800">
                    Wunschbehandlung (optional)
                  </label>
                  <input
                    type="text"
                    className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 outline-none ring-0 focus:border-brand focus:ring-1 focus:ring-brand"
                    placeholder="z. B. Kryolipolyse, RF-Sculpting, Körperformung allgemein"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-800">
                    Nachricht
                  </label>
                  <textarea
                    rows={4}
                    className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 outline-none ring-0 focus:border-brand focus:ring-1 focus:ring-brand"
                    placeholder="Worum geht es? Welche Zonen stören Sie besonders?"
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center rounded-full bg-slate-900 px-5 py-2.5 text-sm font-medium text-white hover:bg-slate-800"
                >
                  Anfrage senden
                </button>
                <p className="text-xs text-slate-500">
                  Mit dem Absenden Ihrer Anfrage erklären Sie sich damit einverstanden,
                  dass wir Ihre Angaben zur Beantwortung verwenden. Weitere
                  Informationen finden Sie in unserer Datenschutzerklärung.
                </p>
              </form>
              <div className="space-y-4 text-sm text-slate-700">
                <div>
                  <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
                    Kontakt
                  </h2>
                  <p className="mt-2">
                    med fit wohlfühlschön
                    <br />
                    Am Kehlerpark 2
                    <br />
                    A-6850 Dornbirn
                  </p>
                </div>
                <div>
                  <p>
                    Tel.:{" "}
                    <a href="tel:+436781330011" className="underline">
                      +43 678 133 00 11
                    </a>
                    <br />
                    E-Mail:{" "}
                    <a href="mailto:office@med-fit.com" className="underline">
                      office@med-fit.com
                    </a>
                  </p>
                </div>
                <div className="rounded-2xl border border-slate-100 bg-slate-50 p-4 text-xs text-slate-600">
                  <p>
                    Hinweis: Die kostenlose Erstberatung ersetzt keine ärztliche
                    Diagnose. Bei bestehenden Erkrankungen oder Unsicherheiten wenden Sie
                    sich bitte zusätzlich an Ihre behandelnde Ärztin/Ihren behandelnden
                    Arzt.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

