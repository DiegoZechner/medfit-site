import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Section } from "@/components/Section";

export default function FacePage() {
  return (
    <>
      <Header />
      <main className="flex-1 bg-white">
        <Section eyebrow="Gesicht" title="Gesichtsbehandlungen & Anti-Aging">
          <p>
            Seit vielen Jahren ist med fit wohlfühlschön in Dornbirn Ansprechpartner für
            nicht-invasive Anti-Aging-Behandlungen. Ziel ist kein „neues Gesicht“,
            sondern eine frische, erholte Ausstrahlung, die zu Ihnen passt.
          </p>
          <p>
            Wir arbeiten mit modernen Technologien wie CFU Èlife Lifting, Biolifting
            Byonik®, Microdermabrasion und individuell abgestimmten Gesichtsbehandlungen.
            In der Beratung besprechen wir gemeinsam, was für Ihre Haut sinnvoll ist.
          </p>
        </Section>
        <Section eyebrow="Anwendungen" title="Ein Auszug unserer Gesichtsbehandlungen">
          <div className="space-y-6 text-sm text-slate-700 md:text-base">
            <div>
              <h2 className="text-base font-semibold text-slate-900">
                CFU Èlife – Lifting ohne OP
              </h2>
              <p className="mt-2">
                Hochfokussierter Ultraschall strafft gezielt tiefere Hautschichten und
                kann Konturen im Gesicht deutlicher definieren – ohne Skalpell. Ideal für
                Kundinnen und Kunden, die eine Alternative zu operativen Eingriffen
                suchen.
              </p>
            </div>
            <div>
              <h2 className="text-base font-semibold text-slate-900">
                Biolifting Byonik®
              </h2>
              <p className="mt-2">
                Diese Behandlung unterstützt die Regeneration der Haut, wirkt Zeichen der
                Hautalterung entgegen und kann für ein gleichmäßigeres Hautbild sorgen.
                Sie eignet sich besonders, wenn Hautstress, erste Fältchen oder
                Rötungen im Vordergrund stehen.
              </p>
            </div>
            <div>
              <h2 className="text-base font-semibold text-slate-900">
                Microdermabrasion &amp; klassische Gesichtsbehandlungen
              </h2>
              <p className="mt-2">
                Sanfte Abtragung verhor­nter Hautschichten und tiefenreinigende
                Anwendungen können das Hautbild verfeinern, Poren optisch verkleinern
                und die Aufnahme von Pflegewirkstoffen verbessern.
              </p>
            </div>
            <p>
              Welche Kombination aus Behandlungen für Sie sinnvoll ist, klären wir in
              Ruhe im persönlichen Gespräch.
            </p>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}

