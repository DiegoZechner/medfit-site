import { Metadata } from "next";
import { LandingHero } from "@/components/LandingHero";
import { BenefitCard } from "@/components/BenefitCard";
import { ProcessSteps } from "@/components/ProcessSteps";
import { FAQAccordion } from "@/components/FAQAccordion";
import { ContactCTA } from "@/components/ContactCTA";
import { StickyMobileCTA } from "@/components/StickyMobileCTA";
import { SchemaJsonLd } from "@/components/SchemaJsonLd";

export const metadata: Metadata = {
  title: "Körperformung Dornbirn | Ohne OP | med fit wohlfühlschön",
  description: "Körperformung, Hautstraffung und Fettabbau ohne OP in Dornbirn. Individuelle Beratung zu Kryolipolyse, RF-Sculpting, TriLipo und weiteren Anwendungen.",
  alternates: {
    canonical: "/koerperformung-dornbirn",
  },
};

export default function KoerperformungLandingPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BeautySalon",
    "name": "med fit wohlfühlschön",
    "url": "https://medfit-site.vercel.app/koerperformung-dornbirn",
    "telephone": "+43 678 133 00 11",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Am Kehlerpark 2",
      "addressLocality": "Dornbirn",
      "postalCode": "6850",
      "addressCountry": "AT"
    },
    "description": "Körperformung, Hautstraffung und Fettabbau ohne OP in Dornbirn. Individuelle Beratung zu Kryolipolyse, RF-Sculpting, TriLipo und weiteren Anwendungen."
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Wie funktioniert Körperformung ohne OP?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Wir nutzen verschiedene Technologien wie Kryolipolyse (Kälte), RF-Sculpting oder TriLipo, die das Gewebe schonend stimulieren sollen. Die Wahl der Methode hängt vom individuellen Befund ab."
        }
      },
      {
        "@type": "Question",
        "name": "Ist die Behandlung schmerzhaft?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Die meisten Verfahren sind nicht invasiv und gelten als schmerzarm bis schmerzfrei. Es kann ein Wärme- oder Kältegefühl während der Sitzung auftreten."
        }
      },
      {
        "@type": "Question",
        "name": "Was kostet die Körperformung?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Der Preis richtet sich nach den gewählten Zonen und dem Behandlungsplan. Wir erstellen nach der kostenlosen Erstberatung ein transparentes Angebot."
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
        title="Körperformung in Dornbirn"
        subtitle="Hautstraffung und Figurpflege ohne OP. Individuelle Konzepte für Ihr Wohlbefinden."
        primaryCtaLabel="Kostenlose Beratung buchen"
        primaryCtaHref="/termin?behandlung=koerper"
        secondaryCtaLabel="Preise ansehen"
        secondaryCtaHref="/preise#koerper"
        trustItems={[
          "Nicht-invasive Methoden",
          "Kostenlose Erstberatung",
          "Persönlicher Behandlungsplan",
          "Standort Dornbirn"
        ]}
      />

      <section className="bg-shell py-16 md:py-24">
        <div className="page-container max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-ink mb-4">Kurz erklärt: Für wen geeignet?</h2>
          <p className="text-lg text-muted mb-12">
            Unsere Anwendungen richten sich an alle, die das Erscheinungsbild ihrer Haut unterstützen möchten, ohne chirurgische Eingriffe in Betracht zu ziehen.
          </p>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <BenefitCard
              title="Kryolipolyse"
              description="Kälteanwendung für gezielte Körperregionen."
            />
            <BenefitCard
              title="RF-Sculpting & TriLipo"
              description="Technologien zur Unterstützung der Hautstraffung."
            />
            <BenefitCard
              title="CFU-Hautstraffung"
              description="Moderne Ultraschall-Methode zur Gewebestimulation."
            />
            <BenefitCard
              title="Akustische Wellentherapie"
              description="Unterstützt die Durchblutung und Gewebestruktur."
            />
            <BenefitCard
              title="Slimyonik AIR"
              description="Druckwellenmassage zur Entspannung und Regeneration."
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
                title: "Kostenlose Erstberatung",
                description: "Wir besprechen Ihre Ziele und prüfen die Eignung der verschiedenen Methoden."
              },
              {
                title: "Individueller Plan",
                description: "Sie erhalten ein maßgeschneidertes Konzept mit Kostenschätzung."
              },
              {
                title: "Behandlung",
                description: "Schonende und professionelle Durchführung der Anwendungen."
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
            { question: "Wie funktioniert Körperformung ohne OP?", answer: "Wir nutzen verschiedene Technologien wie Kryolipolyse (Kälte), RF-Sculpting oder TriLipo, die das Gewebe schonend stimulieren sollen. Die Wahl der Methode hängt vom individuellen Befund ab." },
            { question: "Ist die Behandlung schmerzhaft?", answer: "Die meisten Verfahren sind nicht invasiv und gelten als schmerzarm bis schmerzfrei. Es kann ein Wärme- oder Kältegefühl während der Sitzung auftreten." },
            { question: "Was kostet die Körperformung?", answer: "Der Preis richtet sich nach den gewählten Zonen und dem Behandlungsplan. Wir erstellen nach der kostenlosen Erstberatung ein transparentes Angebot." }
          ]} />
        </div>
      </section>

      <ContactCTA title="Interesse an Körperformung?" />
      
      <StickyMobileCTA />
    </>
  );
}
