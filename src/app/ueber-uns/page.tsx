import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="flex-1 bg-white">
        <section className="border-b border-slate-100 bg-slate-50/80">
          <div className="mx-auto max-w-3xl px-4 py-12 md:py-16">
            <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
              Über uns
            </p>
            <h1 className="mt-2 text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
              med fit wohlfühlschön in Dornbirn
            </h1>
            <p className="mt-4 text-sm text-slate-600 md:text-base">
              Wir verbinden moderne, medizinisch-ästhetische Technologien mit einer
              persönlichen und wertschätzenden Betreuung. Unser Ziel: Dass Sie sich in
              Ihrem Körper wieder rundum wohlfühlen.
            </p>
          </div>
        </section>
        <section className="bg-white">
          <div className="mx-auto max-w-3xl px-4 py-12 md:py-16 space-y-6 text-sm text-slate-700 md:text-base">
            <p>
              In unserem Institut am Kehlerpark in Dornbirn setzen wir auf hochwertige
              Geräte, klare Aufklärung und realistische Erwartungen. Uns ist wichtig,
              dass jede Behandlung zu Ihnen und Ihrem Alltag passt – ohne unnötigen
              Druck oder leere Versprechen.
            </p>
            <p>
              Deshalb starten wir immer mit einer sorgfältigen Anamnese und Beratung.
              Gemeinsam definieren wir, was für Sie ein gutes Ergebnis bedeutet, und
              wählen die passende Kombination aus Behandlungen aus.
            </p>
            <p>
              Natürlich stehen Diskretion, Hygiene und Wohlfühlatmosphäre an erster
              Stelle. Wir möchten, dass jeder Besuch bei uns sich leicht, klar und
              professionell anfühlt.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

