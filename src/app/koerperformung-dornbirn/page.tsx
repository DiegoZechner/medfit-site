import { LandingHero } from "@/components/LandingHero";
import { TreatmentDetailAccordion } from "@/components/TreatmentDetailAccordion";
import Link from "next/link";

export default function KoerperformungPage() {
  const treatments = [
    {
      title: "KryoShape",
      shortDesc: "Fett weg mit Kälte – gezielte Fettreduktion ohne OP.",
      benefits: [
        "Behandlung hartnäckiger Fettdepots",
        "Keine Nadeln, keine OP",
        "Schonende Kühltechnologie",
        "Gezielte Konturierung"
      ],
      forWhom: "Bauch, Hüfte, Reiterhosen, Arme, Rücken, Doppelkinn.",
      priceLink: "/preise#koerper",
      bookLink: "/termin",
      bookLabel: "KryoShape Beratung buchen"
    },
    {
      title: "RF-SCULPTING ULTRA",
      shortDesc: "Fettabbau und Muskelaufbau in einer Behandlung.",
      benefits: [
        "Intensive Muskelaktivierung",
        "30 Minuten Behandlung = wie intensives Workout",
        "Unterstützt die Fettverbrennung",
        "Strafft das Gewebe"
      ],
      forWhom: "Für Bauch, Po, Arme oder Beine zur Definition.",
      priceLink: "/preise#koerper",
      bookLink: "/termin",
      bookLabel: "RF-Sculpting anfragen"
    },
    {
      title: "TriLipo Maximus",
      shortDesc: "Radiofrequenz für Hautstraffung, Fettabbau und Cellulite.",
      benefits: [
        "Aktivierung der Muskeln",
        "Straffung der Hautschichten",
        "Verbesserung des Cellulite-Erscheinungsbildes",
        "Ganzheitliche Gewebeaktivierung"
      ],
      forWhom: "Bei erschlaffter Haut oder Cellulite an Beinen, Po und Bauch.",
      priceLink: "/preise#koerper",
      bookLink: "/termin",
      bookLabel: "TriLipo Preise ansehen"
    },
    {
      title: "CFU Körperstraffung",
      shortDesc: "Ultraschall-Hautstraffung für Bauch, Arme, Beine oder Haut nach Gewichtsverlust.",
      benefits: [
        "Fokussierter Ultraschall",
        "Tiefenwirksame Gewebestraffung",
        "Natürliche Kollagenbildung",
        "Keine Ausfallzeit"
      ],
      forWhom: "Bei schlaffer Haut, z.B. nach Schwangerschaft oder Gewichtsabnahme.",
      priceLink: "/preise#koerper",
      bookLink: "/termin",
      bookLabel: "CFU Körperberatung buchen"
    },
    {
      title: "Akustische Wellentherapie",
      shortDesc: "Gegen Cellulite und für glattere Hautstruktur.",
      benefits: [
        "Löst Gewebeverklebungen",
        "Fördert Durchblutung und Lymphfluss",
        "Glättet das Hautbild sichtbar",
        "Schmerzarm"
      ],
      forWhom: "Speziell bei Cellulite und Dellenbildung.",
      priceLink: "/preise#koerper",
      bookLink: "/termin",
      bookLabel: "Cellulite Beratung buchen"
    },
    {
      title: "Slimyonik AIR",
      shortDesc: "Druckwellenmassage und Sauerstoff für Lymphaktivierung, Stoffwechsel und Regeneration.",
      benefits: [
        "Aktiviert das Lymphsystem",
        "Unterstützt die Entschlackung",
        "Angenehme Druckwellenmassage",
        "Sauerstoff-Inhalation für den Stoffwechsel"
      ],
      forWhom: "Zur Regeneration, bei schweren Beinen und begleitend zur Körperformung.",
      priceLink: "/preise#koerper",
      bookLink: "/termin",
      bookLabel: "Slimyonik anfragen"
    }
  ];

  return (
    <>
      <LandingHero
        eyebrow="Bodyforming"
        title="Körperformung & Hautstraffung in Dornbirn"
        subtitle="Moderne nicht-invasive Anwendungen für Bauch, Beine, Po, Arme, Doppelkinn und Cellulite."
        primaryCtaLabel="Kostenlose Beratung buchen"
        primaryCtaHref="/termin"
        secondaryCtaLabel="Behandlungen ansehen"
        secondaryCtaHref="#treatments"
      />

      <section id="treatments" className="bg-shell py-16 md:py-24">
        <div className="page-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-ink mb-4">Behandlungsmöglichkeiten</h2>
            <p className="text-muted text-lg max-w-2xl mx-auto">
              Für jedes Ziel die passende Methode. Entdecken Sie unsere schonenden Technologien für Ihren Körper.
            </p>
          </div>
          
          <TreatmentDetailAccordion treatments={treatments} />

          <div className="mt-16 text-center bg-white p-8 md:p-12 rounded-3xl border border-aqua/30 shadow-lg max-w-4xl mx-auto relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-aqua/5 rounded-bl-full"></div>
            <h3 className="text-2xl md:text-3xl font-bold text-ink mb-4">Individuelle Figurpakete</h3>
            <p className="text-muted text-lg mb-8 max-w-2xl mx-auto">
              Da Ziel, Zone und Ausgangssituation unterschiedlich sind, empfehlen wir eine persönliche Beratung. So entsteht ein realistischer Behandlungsplan ohne falsche Versprechen.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/termin"
                className="inline-flex justify-center items-center rounded-xl bg-aqua px-8 py-3.5 font-medium text-white shadow-md hover:opacity-90 transition-colors"
              >
                Kostenlose Körperberatung buchen
              </Link>
              <Link
                href="/preise"
                className="inline-flex justify-center items-center rounded-xl bg-white border border-line px-8 py-3.5 font-medium text-ink hover:bg-shell transition-colors"
              >
                Preisübersicht ansehen
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
