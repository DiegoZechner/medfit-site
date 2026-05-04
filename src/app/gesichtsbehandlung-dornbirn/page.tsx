import { Metadata } from "next";
import { LandingHero } from "@/components/LandingHero";
import { BenefitCard } from "@/components/BenefitCard";
import { ProcessSteps } from "@/components/ProcessSteps";
import { FAQAccordion } from "@/components/FAQAccordion";
import { ContactCTA } from "@/components/ContactCTA";
import { StickyMobileCTA } from "@/components/StickyMobileCTA";
import { SchemaJsonLd } from "@/components/SchemaJsonLd";

export const metadata: Metadata = {
  title: "Gesichtsbehandlung Dornbirn | Anti-Aging & Hautbild | med fit",
  description: "Gesichtsbehandlungen, Anti-Aging und Lifting ohne OP in Dornbirn. Individuelle Beratung für ein frisches, gepflegtes Hautbild bei med fit wohlfühlschön.",
  alternates: {
    canonical: "/gesichtsbehandlung-dornbirn",
  },
};

export default function GesichtsbehandlungLandingPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BeautySalon",
    "name": "med fit wohlfühlschön",
    "url": "https://medfit-site.vercel.app/gesichtsbehandlung-dornbirn",
    "telephone": "+43 678 133 00 11",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Am Kehlerpark 2",
      "addressLocality": "Dornbirn",
      "postalCode": "6850",
      "addressCountry": "AT"
    },
    "description": "Gesichtsbehandlungen, Anti-Aging und Lifting ohne OP in Dornbirn. Individuelle Beratung für ein frisches, gepflegtes Hautbild bei med fit wohlfühlschön."
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Für wen sind die Gesichtsbehandlungen geeignet?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Unsere Behandlungen eignen sich für alle, die ihr Hautbild verbessern, erfrischen oder pflegen möchten. Jeder Hauttyp wird in der Erstberatung individuell analysiert."
        }
      },
      {
        "@type": "Question",
        "name": "Wie schnell sehe ich ein Ergebnis?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ein gepflegteres, frischeres Gefühl ist oft direkt nach der Behandlung spürbar. Langfristige Verbesserungen hängen von der Art der Behandlung und dem individuellen Hautbild ab."
        }
      },
      {
        "@type": "Question",
        "name": "Was kostet eine Gesichtsbehandlung?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Der Preis variiert je nach Umfang und Art der Behandlung (z.B. CFU Lifting, Byonik oder Microdermabrasion). In der kostenlosen Beratung erstellen wir ein individuelles Angebot."
        }
      }
    ]
  };

  return (
    <>
      <SchemaJsonLd schema={schema} />
      <SchemaJsonLd schema={faqSchema} />
      
      <LandingHero
        eyebrow="med fit wohlfühlschön · Am Kehlerpark 2 · Dornbirn"
        title="Gesichtsbehandlungen & Anti-Aging in Dornbirn"
        subtitle="Für ein frisches, gepflegtes Hautbild – individuell beraten und ohne künstlichen Look."
        primaryCtaLabel="Kostenlose Beratung buchen"
        primaryCtaHref="/termin?behandlung=gesicht"
        secondaryCtaLabel="Preise ansehen"
        secondaryCtaHref="/preise#gesicht"
        trustItems={[
          "Lifting ohne OP",
          "Individuelle Hautanalyse",
          "Kostenlose Erstberatung",
          "Standort Dornbirn"
        ]}
      />

      <section className="bg-shell py-16 md:py-24">
        <div className="page-container max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-ink mb-4">Kurz erklärt: Unsere Behandlungen</h2>
          <p className="text-lg text-muted mb-12">
            Wir bieten moderne Methoden, die die natürliche Schönheit unterstützen.
          </p>
          <div className="grid gap-6 md:grid-cols-2">
            <BenefitCard
              title="CFU Èlife Lifting ohne OP"
              description="Ultraschall-Technologie, die die Hautstraffung unterstützen kann, ohne Ausfallzeiten."
            />
            <BenefitCard
              title="Biolifting Byonik"
              description="Laser-Hyaluron-Behandlung für ein frischeres und gut versorgtes Hautgefühl."
            />
            <BenefitCard
              title="Microdermabrasion"
              description="Sanftes Peeling für ein klares Hautbild, das die Aufnahmefähigkeit für Pflegeprodukte verbessert."
            />
            <BenefitCard
              title="Klassische Gesichtsbehandlungen"
              description="Tiefenreinigung und Pflege, exakt auf die aktuellen Bedürfnisse Ihrer Haut abgestimmt."
            />
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24 border-y border-line">
        <div className="page-container max-w-5xl">
          <h2 className="text-3xl font-bold text-center text-ink mb-12">Wie läuft es ab?</h2>
          <ProcessSteps
            steps={[
              {
                title: "Kostenlose Hautanalyse",
                description: "Wir betrachten Ihr Hautbild im Detail und besprechen Ihre Wünsche."
              },
              {
                title: "Behandlungskonzept",
                description: "Sie erhalten eine Empfehlung, welche Methode am besten für Sie geeignet ist."
              },
              {
                title: "Wohlfühlen & Pflegen",
                description: "Die Behandlung erfolgt in entspannter Atmosphäre – für ein sichtbares, gepflegtes Ergebnis."
              }
            ]}
          />
        </div>
      </section>

      <section className="bg-shell py-16 md:py-24">
        <div className="page-container max-w-3xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-ink mb-4">Häufige Fragen</h2>
          </div>
          <FAQAccordion items={[
            { question: "Für wen sind die Gesichtsbehandlungen geeignet?", answer: "Unsere Behandlungen eignen sich für alle, die ihr Hautbild verbessern, erfrischen oder pflegen möchten. Jeder Hauttyp wird in der Erstberatung individuell analysiert." },
            { question: "Wie schnell sehe ich ein Ergebnis?", answer: "Ein gepflegteres, frischeres Gefühl ist oft direkt nach der Behandlung spürbar. Langfristige Verbesserungen hängen von der Art der Behandlung und dem individuellen Hautbild ab." },
            { question: "Was kostet eine Gesichtsbehandlung?", answer: "Der Preis variiert je nach Umfang und Art der Behandlung (z.B. CFU Lifting, Byonik oder Microdermabrasion). In der kostenlosen Beratung erstellen wir ein individuelles Angebot." }
          ]} />
        </div>
      </section>

      <ContactCTA title="Bereit für ein frischeres Hautbild?" />
      
      <StickyMobileCTA />
    </>
  );
}
