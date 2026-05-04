import { FAQAccordion } from "@/components/FAQAccordion";
import { ContactCTA } from "@/components/ContactCTA";
import Link from "next/link";

export const metadata = {
  title: "Häufige Fragen (FAQ) | med fit wohlfühlschön",
  description: "Antworten auf häufige Fragen zu unseren Behandlungen, Kosten und Abläufen.",
};

export default function FaqPage() {
  return (
    <>
      <section className="bg-white py-16 md:py-24 border-b border-line">
        <div className="page-container max-w-3xl text-center">
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-ink sm:text-5xl">
            Häufige Fragen
          </h1>
          <p className="text-lg text-muted">
            Hier finden Sie Antworten auf die wichtigsten Fragen zu unseren Behandlungen. 
            Für spezifische Fragen beraten wir Sie gerne persönlich.
          </p>
        </div>
      </section>

      <section className="bg-shell py-16 md:py-24">
        <div className="page-container max-w-3xl">
          <FAQAccordion items={[
            {
              question: "Brauche ich für die erste Beratung schon eine konkrete Wunschbehandlung?",
              answer: "Nein. Viele Menschen kommen mit einem Gefühl oder einem Wunschbild zu uns (z. B. weniger Bauch, glattere Haut), ohne schon zu wissen, welche Behandlung dazu passt. Genau das klären wir gemeinsam im Erstgespräch."
            },
            {
              question: "Ist die Erstberatung wirklich kostenlos?",
              answer: "Ja. Die Erstberatung ist komplett kostenlos und unverbindlich. Sie entscheiden erst im Anschluss, ob und welche Behandlung Sie buchen möchten."
            },
            {
              question: "Wie viele Sitzungen brauche ich?",
              answer: "Das ist sehr individuell und hängt von Ausgangssituation, Behandlungsart und Zielvorstellung ab. In der Beratung geben wir Ihnen eine realistische Einschätzung und empfehlen Ihnen einen sinnvollen Rahmen."
            },
            {
              question: "Gibt es Ausfallzeit nach den Behandlungen?",
              answer: "Die meisten Anwendungen sind so konzipiert, dass Sie danach Ihrem Alltag weitgehend normal nachgehen können. Je nach Behandlung besprechen wir mit Ihnen, worauf Sie in den Tagen danach achten sollten."
            },
            {
              question: "Wo finde ich Informationen zu spezifischen Behandlungen?",
              answer: "Detaillierte Informationen finden Sie auf unseren Themenseiten für dauerhafte Haarentfernung, Gesichtsbehandlungen und Körperformung. Dort sind auch spezifische Fragen zur jeweiligen Behandlung beantwortet."
            }
          ]} />

          <div className="mt-12 flex flex-col gap-4 sm:flex-row justify-center">
            <Link
              href="/haarentfernung-dornbirn"
              className="rounded-xl bg-white border border-line px-6 py-3 text-sm font-medium text-ink text-center hover:bg-shell transition-colors"
            >
              Zu Haarentfernung
            </Link>
            <Link
              href="/gesichtsbehandlung-dornbirn"
              className="rounded-xl bg-white border border-line px-6 py-3 text-sm font-medium text-ink text-center hover:bg-shell transition-colors"
            >
              Zu Gesichtsbehandlungen
            </Link>
            <Link
              href="/koerperformung-dornbirn"
              className="rounded-xl bg-white border border-line px-6 py-3 text-sm font-medium text-ink text-center hover:bg-shell transition-colors"
            >
              Zu Körperformung
            </Link>
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}

