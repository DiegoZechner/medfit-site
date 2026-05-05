import { LandingHero } from "@/components/LandingHero";
import { FAQAccordion } from "@/components/FAQAccordion";
import { TreatmentDetailAccordion } from "@/components/TreatmentDetailAccordion";
import Link from "next/link";

export default function GesichtsbehandlungPage() {
  const treatments = [
    {
      title: "CFU ÈLIFE HIFU Facelifting",
      shortDesc: "Hautstraffung mit hochfokussiertem Ultraschall – für definiertere Konturen und natürliche Festigung.",
      benefits: [
        "Lifting ohne OP",
        "Keine klassische Ausfallzeit",
        "Gesicht, Hals, Dekolleté und Körper möglich",
        "Natürliche Stimulation der Kollagenproduktion"
      ],
      forWhom: "Ideal für reifere Haut, bei Konturverlust oder als präventives Anti-Aging.",
      priceLink: "/preise#gesicht",
      bookLink: "/termin",
      bookLabel: "CFU Beratung buchen"
    },
    {
      title: "BYONIK Biolifting mit Hyaluron",
      shortDesc: "Laserlicht und Hyaluron für Feuchtigkeit, Volumen, Elastizität und strahlenden Teint.",
      benefits: [
        "Schmerzfrei und entspannend",
        "Einschleusung von hochwertigem Hyaluron",
        "Frischer Teint und sofortiger Glow-Effekt",
        "Verbesserung der Hautelastizität"
      ],
      forWhom: "Für alle Hauttypen, besonders bei Feuchtigkeitsverlust und ersten Fältchen.",
      priceLink: "/preise#gesicht",
      bookLink: "/termin",
      bookLabel: "Byonik anfragen"
    },
    {
      title: "Microdermabrasion",
      shortDesc: "Sanfte Hauterneuerung für feinere Poren, frischeren Teint und sichtbar glattere Haut.",
      benefits: [
        "Hautbildverfeinerung",
        "Porenverfeinerung",
        "Abtragung abgestorbener Hautschüppchen",
        "Frischer Glow"
      ],
      forWhom: "Zur Auffrischung des Teints und bei großporiger oder leicht unreiner Haut.",
      priceLink: "/preise#gesicht",
      bookLink: "/termin",
      bookLabel: "Microdermabrasion buchen"
    },
    {
      title: "BYONIK Blue Light",
      shortDesc: "Für unreine Haut, Akne und barrieregeschädigte Haut.",
      benefits: [
        "Sanfte antibakterielle Wirkung",
        "Unterstützt die natürliche Regeneration",
        "Geeignet bei Problemhaut",
        "Beruhigend bei Rötungen"
      ],
      forWhom: "Bei Akne, Entzündungen oder sensibler, gestresster Haut.",
      priceLink: "/preise#gesicht",
      bookLink: "/termin",
      bookLabel: "Problemhaut beraten lassen"
    }
  ];

  return (
    <>
      <LandingHero
        eyebrow="Glow & Anti-Aging"
        title="Gesichtsbehandlungen & Anti-Aging in Dornbirn"
        subtitle="Für straffere Haut, frischen Teint und natürliche Ergebnisse – ohne OP."
        primaryCtaLabel="Kostenlose Beratung buchen"
        primaryCtaHref="/termin"
        secondaryCtaLabel="Behandlungen ansehen"
        secondaryCtaHref="#treatments"
      />

      <section id="treatments" className="bg-shell py-16 md:py-24">
        <div className="page-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-ink mb-4">Unsere Methoden für Ihr Gesicht</h2>
            <p className="text-muted text-lg max-w-2xl mx-auto">
              Innovative Technologien für sichtbare Ergebnisse. Wir beraten Sie gerne, welche Methode am besten zu Ihren Zielen passt.
            </p>
          </div>
          
          <TreatmentDetailAccordion treatments={treatments} />

          <div className="mt-16 text-center bg-white p-8 rounded-3xl border border-line shadow-sm max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-ink mb-3">Unsicher, welche Gesichtsbehandlung passt?</h3>
            <p className="text-muted mb-6">Wir analysieren Ihre Haut und erstellen einen individuellen Behandlungsplan.</p>
            <Link
              href="/termin"
              className="inline-flex justify-center items-center rounded-xl bg-aqua px-8 py-3.5 font-medium text-white shadow-md hover:opacity-90 transition-colors"
            >
              Kostenlose Beratung buchen
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
