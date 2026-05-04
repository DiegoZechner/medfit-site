import { LandingHero } from "@/components/LandingHero";
import { BenefitCard } from "@/components/BenefitCard";
import { FAQAccordion } from "@/components/FAQAccordion";
import { ContactCTA } from "@/components/ContactCTA";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <LandingHero
        eyebrow="med fit wohlfühlschön in Dornbirn"
        title="Ihre Praxis für ästhetische Behandlungen"
        subtitle="Haarentfernung, Gesichtsbehandlungen und Körperformung – klar beraten, individuell geplant."
        primaryCtaLabel="Kostenlose Beratung buchen"
        primaryCtaHref="/termin"
      />

      <section className="bg-shell py-16 md:py-24">
        <div className="page-container max-w-5xl">
          <div className="grid gap-8 md:grid-cols-3">
            {/* 1. Haarentfernung */}
            <div className="flex flex-col rounded-2xl border border-line bg-white p-8 shadow-sm">
              <h3 className="mb-3 text-xl font-bold text-ink">Dauerhafte Haarentfernung</h3>
              <p className="mb-6 flex-1 text-muted">
                Sanfte Lasertechnologie für Gesicht und Körper. Sparen Sie sich das tägliche Rasieren und genießen Sie glatte Haut.
              </p>
              <Link
                href="/haarentfernung-dornbirn"
                className="inline-flex justify-center rounded-xl bg-shell px-4 py-2 text-sm font-medium text-ink border border-line hover:bg-line transition-colors"
              >
                Mehr erfahren
              </Link>
            </div>

            {/* 2. Gesicht */}
            <div className="flex flex-col rounded-2xl border border-line bg-white p-8 shadow-sm">
              <h3 className="mb-3 text-xl font-bold text-ink">Gesichtsbehandlungen</h3>
              <p className="mb-6 flex-1 text-muted">
                Anti-Aging, Lifting ohne OP und Pflege für ein frisches, ebenmäßiges Hautbild.
              </p>
              <Link
                href="/gesichtsbehandlung-dornbirn"
                className="inline-flex justify-center rounded-xl bg-shell px-4 py-2 text-sm font-medium text-ink border border-line hover:bg-line transition-colors"
              >
                Mehr erfahren
              </Link>
            </div>

            {/* 3. Körper */}
            <div className="flex flex-col rounded-2xl border border-line bg-white p-8 shadow-sm">
              <h3 className="mb-3 text-xl font-bold text-ink">Körperformung</h3>
              <p className="mb-6 flex-1 text-muted">
                Gezielte Hautstraffung und Figurpflege mit modernen, nicht-invasiven Methoden.
              </p>
              <Link
                href="/koerperformung-dornbirn"
                className="inline-flex justify-center rounded-xl bg-shell px-4 py-2 text-sm font-medium text-ink border border-line hover:bg-line transition-colors"
              >
                Mehr erfahren
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24 border-y border-line">
        <div className="page-container max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-ink mb-4">Warum med fit wohlfühlschön?</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <BenefitCard
              title="Kostenlose Erstberatung"
              description="Wir nehmen uns Zeit für Ihre Wünsche und erstellen einen transparenten Plan ohne versteckte Kosten."
            />
            <BenefitCard
              title="Zentrale Lage in Dornbirn"
              description="Sie finden uns am Kehlerpark 2 – gut erreichbar und mit entspannten Parkmöglichkeiten."
            />
            <BenefitCard
              title="Moderne Technologien"
              description="Wir setzen auf erprobte und schonende Verfahren für bestmögliche, natürliche Ergebnisse."
            />
            <BenefitCard
              title="Persönliche Betreuung"
              description="Bei uns stehen Sie im Mittelpunkt. Wir begleiten Sie vom ersten Gespräch bis zum gewünschten Ziel."
            />
          </div>
        </div>
      </section>

      <section className="bg-shell py-16 md:py-24">
        <div className="page-container max-w-3xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-ink mb-4">Häufige Fragen</h2>
          </div>
          <FAQAccordion items={[
            { question: "Ist die Erstberatung wirklich kostenlos?", answer: "Ja. Die Erstberatung ist komplett kostenlos und unverbindlich. Sie entscheiden erst im Anschluss, ob und welche Behandlung Sie buchen möchten." },
            { question: "Brauche ich schon eine konkrete Wunschbehandlung?", answer: "Nein. Viele Kunden kommen mit einem allgemeinen Wunschbild (z. B. weniger Rasieren, frischeres Gesicht) zu uns. Wir beraten Sie zu den passenden Möglichkeiten." },
            { question: "Wie buche ich einen Termin?", answer: "Sie können ganz einfach unser Online-Formular nutzen, uns anrufen oder eine E-Mail schreiben." }
          ]} />
        </div>
      </section>

      <ContactCTA />
    </>
  );
}

