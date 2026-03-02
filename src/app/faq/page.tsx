import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Section } from "@/components/Section";

export default function FaqPage() {
  return (
    <>
      <Header />
      <main className="flex-1 bg-white">
        <Section eyebrow="Fragen" title="Häufige Fragen (FAQ)">
          <div className="space-y-6 text-sm text-slate-700 md:text-base">
            <div>
              <h2 className="text-base font-semibold text-slate-900">
                Brauche ich für die erste Beratung schon eine konkrete Wunschbehandlung?
              </h2>
              <p className="mt-2">
                Nein. Viele Menschen kommen mit einem Gefühl oder einem Wunschbild zu uns
                (z. B. weniger Bauch, glattere Haut), ohne schon zu wissen, welche
                Behandlung dazu passt. Genau das klären wir gemeinsam im Erstgespräch.
              </p>
            </div>
            <div>
              <h2 className="text-base font-semibold text-slate-900">
                Ist die Erstberatung wirklich kostenlos?
              </h2>
              <p className="mt-2">
                Ja. Die Erstberatung ist kostenlos und unverbindlich. Sie entscheiden erst
                im Anschluss, ob und welche Behandlung Sie buchen möchten.
              </p>
            </div>
            <div>
              <h2 className="text-base font-semibold text-slate-900">
                Wie viele Sitzungen brauche ich?
              </h2>
              <p className="mt-2">
                Das ist sehr individuell und hängt von Ausgangssituation, Behandlungsart
                und Zielvorstellung ab. In der Beratung geben wir Ihnen eine realistische
                Einschätzung und empfehlen Ihnen einen sinnvollen Rahmen.
              </p>
            </div>
            <div>
              <h2 className="text-base font-semibold text-slate-900">
                Gibt es Ausfallzeit nach den Behandlungen?
              </h2>
              <p className="mt-2">
                Die meisten Anwendungen sind so konzipiert, dass Sie danach Ihrem Alltag
                weitgehend normal nachgehen können. Je nach Behandlung und Beruf besprechen
                wir mit Ihnen, worauf Sie achten sollten.
              </p>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}

