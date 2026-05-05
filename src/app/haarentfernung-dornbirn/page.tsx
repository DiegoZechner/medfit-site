import { LandingHero } from "@/components/LandingHero";
import { FAQAccordion } from "@/components/FAQAccordion";
import { PackagePricingCards } from "@/components/PackagePricingCards";
import Link from "next/link";

export default function HaarentfernungPage() {
  return (
    <>
      <LandingHero
        eyebrow="XLASE PLUS"
        title="Dauerhafte Haarentfernung in Dornbirn"
        subtitle="Weniger Rasur, weniger Hautstress und dauerhaft glattere Haut – mit moderner XLASE PLUS Technologie."
        primaryCtaLabel="Kostenlose Beratung buchen"
        primaryCtaHref="/termin"
        secondaryCtaLabel="Preise ansehen"
        secondaryCtaHref="#preise"
      />

      <section className="bg-white py-16">
        <div className="page-container max-w-5xl">
          {/* Offer Card */}
          <div className="bg-aqua/10 border border-aqua/20 rounded-3xl p-8 mb-16 text-center max-w-2xl mx-auto shadow-sm">
            <span className="inline-block bg-aqua text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-4">Jetzt profitieren</span>
            <h2 className="text-2xl font-bold text-ink mb-4">Kombi-Aktion</h2>
            <p className="text-lg text-ink font-medium mb-2">1 Hauptzone zum Normalpreis</p>
            <p className="text-lg text-aqua font-bold mb-6">–50 % auf zwei weitere Zonen</p>
            <Link
              href="/termin"
              className="inline-flex justify-center items-center rounded-xl bg-aqua px-8 py-3 font-medium text-white shadow-md hover:opacity-90 transition-colors"
            >
              Aktion sichern
            </Link>
          </div>

          {/* Quick Benefit Row */}
          <div className="flex flex-wrap justify-center gap-3 md:gap-6 mb-16">
            {["weniger Rasieren", "weniger eingewachsene Haare", "glatteres Hautgefühl", "moderne Lasertechnologie", "kostenlose Beratung"].map((benefit, i) => (
              <span key={i} className="bg-shell text-ink px-4 py-2 rounded-full text-sm font-medium border border-line flex items-center">
                <svg className="w-4 h-4 text-aqua mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                {benefit}
              </span>
            ))}
          </div>

          {/* Before/After Cards */}
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-shell/50 rounded-3xl p-8 border border-line">
              <h3 className="text-xl font-bold text-muted mb-6 flex items-center">
                <span className="w-8 h-8 rounded-full bg-line flex items-center justify-center mr-3 text-sm">❌</span>
                Vorher
              </h3>
              <ul className="space-y-4">
                {["tägliches Rasieren", "Hautreizungen", "eingewachsene Haare", "Waxing-Termine", "Stoppeln nach kurzer Zeit"].map((item, i) => (
                  <li key={i} className="flex items-center text-muted">
                    <span className="w-1.5 h-1.5 rounded-full bg-muted/50 mr-3 shrink-0"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white shadow-lg rounded-3xl p-8 border border-aqua/20 transform md:-translate-y-2">
              <h3 className="text-xl font-bold text-ink mb-6 flex items-center">
                <span className="w-8 h-8 rounded-full bg-aqua/10 text-aqua flex items-center justify-center mr-3 text-sm">✨</span>
                Danach
              </h3>
              <ul className="space-y-4">
                {["glatteres Hautgefühl", "weniger Aufwand", "weniger Hautstress", "langfristige Haarreduktion", "mehr Komfort im Alltag"].map((item, i) => (
                  <li key={i} className="flex items-center text-ink font-medium">
                    <svg className="w-5 h-5 text-aqua mr-3 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-shell py-16 md:py-24">
        <div className="page-container max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-ink mb-4">Behandlungszonen</h2>
            <p className="text-muted text-lg max-w-2xl mx-auto">
              Unsere Technologie ermöglicht eine effektive Behandlung in nahezu allen Körperbereichen.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {["Gesicht", "Achseln", "Arme", "Beine", "Rücken / Brust", "Bikini / Intim (nach Beratung)"].map((zone, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl text-center border border-line shadow-sm hover:shadow-md transition-shadow">
                <p className="font-semibold text-ink">{zone}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="preise" className="bg-white py-16 md:py-24">
        <div className="page-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-ink mb-4">Preise & Pakete</h2>
            <p className="text-muted text-lg max-w-2xl mx-auto">
              Transparente Preise für dauerhaft glatte Haut. Kombinieren Sie Zonen für den besten Preis.
            </p>
          </div>
          <PackagePricingCards />
        </div>
      </section>

      <section className="bg-shell py-16 md:py-24 border-t border-line">
        <div className="page-container max-w-3xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-ink mb-4">Fragen zur Haarentfernung?</h2>
          </div>
          <FAQAccordion items={[
            { question: "Wie viele Sitzungen brauche ich?", answer: "In der Regel empfehlen wir 6 bis 10 Sitzungen, abhängig von Haarwuchs und Zone, um optimale Ergebnisse zu erzielen." },
            { question: "Ist Laser-Haarentfernung schmerzhaft?", answer: "Unsere XLASE PLUS Technologie arbeitet mit einem integrierten Kühlsystem und ist daher besonders schmerzarm und hautschonend." },
            { question: "Welche Bereiche können behandelt werden?", answer: "Nahezu alle Körperregionen können behandelt werden, von Gesicht über Achseln bis zu Beinen und Rücken." },
            { question: "Funktioniert es bei jedem Haut- und Haartyp?", answer: "Die Behandlung ist am effektivsten bei dunkleren Haaren. Bei sehr hellen oder grauen Haaren beraten wir Sie gerne zu den Möglichkeiten." },
            { question: "Was muss ich vor der Behandlung beachten?", answer: "Die zu behandelnde Zone sollte am Tag zuvor rasiert werden. Vermeiden Sie außerdem direkte Sonneneinstrahlung oder Solarium vor der Behandlung." },
            { question: "Kann ich nach der Behandlung normal weiterarbeiten?", answer: "Ja, es gibt keine Ausfallzeit. Die Haut kann leicht gerötet sein, was aber schnell abklingt." },
            { question: "Was kostet dauerhafte Haarentfernung?", answer: "Die Preise variieren je nach Zone. Ein genauer Kostenvoranschlag wird in der kostenlosen Erstberatung erstellt. Beachten Sie auch unsere Kombi-Pakete." },
            { question: "Können graue oder sehr helle Haare behandelt werden?", answer: "Laserlicht zielt auf das Melanin im Haar ab. Bei komplett grauen oder weißen Haaren ist die Laserbehandlung leider oft nicht effektiv." },
            { question: "Warum brauche ich mehrere Sitzungen?", answer: "Haare wachsen in Zyklen. Der Laser kann Haare nur in der aktiven Wachstumsphase dauerhaft entfernen. Daher sind mehrere Sitzungen im Abstand von einigen Wochen nötig." }
          ]} />
        </div>
      </section>
    </>
  );
}
