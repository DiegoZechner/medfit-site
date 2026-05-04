import { Metadata } from "next";
import { LandingHero } from "@/components/LandingHero";
import { BenefitCard } from "@/components/BenefitCard";
import { ProcessSteps } from "@/components/ProcessSteps";
import { PriceTeaser } from "@/components/PriceTeaser";
import { FAQAccordion } from "@/components/FAQAccordion";
import { ContactCTA } from "@/components/ContactCTA";
import { StickyMobileCTA } from "@/components/StickyMobileCTA";
import { SchemaJsonLd } from "@/components/SchemaJsonLd";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Dauerhafte Haarentfernung Dornbirn | med fit wohlfühlschön",
  description: "Dauerhafte Haarentfernung in Dornbirn für Gesicht und Körper. Kostenlose Beratung, individuelle Planung und moderne Lasertechnologie bei med fit wohlfühlschön.",
  alternates: {
    canonical: "/haarentfernung-dornbirn",
  },
};

export default function HaarentfernungLandingPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BeautySalon",
    "name": "med fit wohlfühlschön",
    "url": "https://medfit-site.vercel.app/haarentfernung-dornbirn",
    "telephone": "+43 678 133 00 11",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Am Kehlerpark 2",
      "addressLocality": "Dornbirn",
      "postalCode": "6850",
      "addressCountry": "AT"
    },
    "description": "Dauerhafte Haarentfernung in Dornbirn für Gesicht und Körper. Kostenlose Beratung, individuelle Planung und moderne Lasertechnologie bei med fit wohlfühlschön.",
    "priceRange": "$$"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Ist die Behandlung schmerzhaft?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Die meisten Kunden empfinden die Behandlung als gut erträglich. Durch moderne Kühlungstechniken wird die Haut während der Laser-Haarentfernung geschont."
        }
      },
      {
        "@type": "Question",
        "name": "Wie viele Sitzungen brauche ich?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Da Haare in unterschiedlichen Zyklen wachsen, sind in der Regel 6 bis 8 Sitzungen erforderlich, um ein optimales Ergebnis zu erzielen. Dies variiert jedoch je nach Haut- und Haartyp."
        }
      },
      {
        "@type": "Question",
        "name": "Welche Bereiche können behandelt werden?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Wir behandeln nahezu alle Körperbereiche: Gesicht (Oberlippe, Kinn), Achseln, Arme, Beine, Rücken, Brust sowie sensible Zonen wie die Bikinizone nach vorheriger Beratung."
        }
      },
      {
        "@type": "Question",
        "name": "Kann ich direkt danach in den Alltag zurück?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ja, es gibt in der Regel keine Ausfallzeit. Sie können sofort wieder Ihren gewohnten Tätigkeiten nachgehen. Direkte Sonneneinstrahlung sollte jedoch vermieden werden."
        }
      },
      {
        "@type": "Question",
        "name": "Was kostet dauerhafte Haarentfernung?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Die Preise richten sich nach der Größe der zu behandelnden Zone. Bei Kombination mehrerer Zonen (z.B. zweite und dritte Zone) bieten wir bis zu -50% Rabatt an."
        }
      },
      {
        "@type": "Question",
        "name": "Ist die Beratung kostenlos?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ja, unsere Erstberatung ist komplett kostenlos und unverbindlich. Wir nehmen uns Zeit, um Ihre Haut zu analysieren und einen persönlichen Plan zu erstellen."
        }
      },
      {
        "@type": "Question",
        "name": "Funktioniert es bei jedem Haut- und Haartyp?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Unsere Technologie ist für viele Haut- und Haartypen geeignet. Am besten wirken die Behandlungen bei dunkleren Haaren. In der Beratung klären wir, ob die Methode für Sie ideal ist."
        }
      },
      {
        "@type": "Question",
        "name": "Wie bereite ich mich auf den Termin vor?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Die zu behandelnde Stelle sollte 24 Stunden vorher rasiert werden. Auf Epilieren, Waxing oder Zupfen sollte in den Wochen vor der Behandlung verzichtet werden."
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
        title="Dauerhafte Haarentfernung in Dornbirn"
        subtitle="Sanft, hautfreundlich und individuell geplant – für glatte Haut ohne ständiges Rasieren."
        primaryCtaLabel="Kostenlose Beratung buchen"
        primaryCtaHref="/termin?behandlung=haarentfernung"
        secondaryCtaLabel="Preise ansehen"
        secondaryCtaHref="/preise#haarentfernung"
        trustItems={[
          "Kostenlose Erstberatung",
          "Für Gesicht & Körper",
          "Moderne Lasertechnologie",
          "Standort Dornbirn"
        ]}
      />

      <section className="bg-shell py-16 md:py-24">
        <div className="page-container max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-ink mb-4">Weniger Rasur, weniger Hautstress</h2>
            <p className="text-lg text-muted">
              Tägliches Rasieren kostet Zeit und Nerven. Eingewachsene Haare, Hautirritationen und der ständige Aufwand für Waxing oder Epilieren gehören mit einer professionellen Haarentfernung der Vergangenheit an. Auch bei empfindlichen Zonen bieten wir eine sanfte Lösung.
            </p>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <BenefitCard
              title="Weniger Rasuraufwand"
              description="Sparen Sie sich wertvolle Zeit im Bad und genießen Sie langfristige Freiheit von lästigen Stoppeln."
            />
            <BenefitCard
              title="Glatteres Hautgefühl"
              description="Schonen Sie Ihre Haut vor Irritationen und Entzündungen, die oft durch herkömmliche Rasuren entstehen."
            />
            <BenefitCard
              title="Für Gesicht & Körper planbar"
              description="Ob feine Härchen im Gesicht oder größere Partien am Körper – wir behandeln präzise und schonend."
            />
            <BenefitCard
              title="Persönlicher Behandlungsplan"
              description="Jeder Haar- und Hauttyp ist anders. Wir erstellen ein maßgeschneidertes Konzept für Ihre Bedürfnisse."
            />
            <BenefitCard
              title="Kurze Wege in Dornbirn"
              description="Zentral gelegen am Kehlerpark 2, mit guten Parkmöglichkeiten für entspannte Termine."
            />
            <BenefitCard
              title="Kostenlose Beratung"
              description="Lernen Sie uns unverbindlich kennen. Wir klären alle Fragen vor dem Start der Behandlung."
            />
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24 border-y border-line">
        <div className="page-container max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-ink mb-6">Laser-Haarentfernung verständlich erklärt</h2>
          <p className="text-lg text-muted mb-12 leading-relaxed">
            Wir bieten Ihnen eine dauerhafte Haarreduktion durch modernste Laser- und Lichttechnologie. Die Ergebnisse variieren je nach Hauttyp, Haartyp, behandelter Zone und Anzahl der Sitzungen. Um Ihre Erwartungen optimal zu erfüllen, beraten wir Sie vor dem Start ausführlich und individuell.
          </p>

          <div className="grid md:grid-cols-3 gap-8 text-left">
            <div className="p-6 border border-line rounded-xl bg-shell">
              <h3 className="font-semibold text-xl mb-3">Gesicht</h3>
              <p className="text-muted text-sm">Oberlippe, Kinn, Wangen, Hals</p>
            </div>
            <div className="p-6 border border-line rounded-xl bg-shell">
              <h3 className="font-semibold text-xl mb-3">Körper</h3>
              <p className="text-muted text-sm">Achseln, Beine, Arme, Rücken, Brust</p>
            </div>
            <div className="p-6 border border-line rounded-xl bg-shell">
              <h3 className="font-semibold text-xl mb-3">Sensible Bereiche</h3>
              <p className="text-muted text-sm">Bikini und Intimbereich (nach Beratung)</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-shell py-16 md:py-24">
        <div className="page-container max-w-5xl">
          <h2 className="text-3xl font-bold text-center text-ink mb-12">Wie läuft es ab?</h2>
          <ProcessSteps
            steps={[
              {
                title: "Kostenlose Beratung",
                description: "Wir analysieren Ihren Haut- und Haartyp und klären alle offenen Fragen."
              },
              {
                title: "Individueller Behandlungsplan",
                description: "Sie erhalten ein maßgeschneidertes Konzept mit Kostenschätzung."
              },
              {
                title: "Behandlung & Folgetermine",
                description: "Entspannte Sitzungen im Abstand von mehreren Wochen für das beste Ergebnis."
              }
            ]}
          />
        </div>
      </section>

      <section className="bg-white py-16 md:py-24 border-y border-line">
        <div className="page-container">
          <PriceTeaser
            title="Fair & Planbar: Unser Vorteilspreis"
            items={[
              { label: "Erste Zone", value: "Basispreis" },
              { label: "Zweite Zone", value: "-50 %" },
              { label: "Dritte Zone", value: "-50 %" }
            ]}
            note="Aktion und Paketdetails nach Verfügbarkeit. Flexibel kombinierbar. Details klären wir im persönlichen Beratungsgespräch."
            ctaLabel="Preisübersicht ansehen"
            ctaHref="/preise#haarentfernung"
          />
        </div>
      </section>

      <section className="bg-shell py-16 md:py-24">
        <div className="page-container max-w-3xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-ink mb-4">Häufige Fragen</h2>
            <p className="text-muted">Kurz erklärt: Das Wichtigste zur Haarentfernung</p>
          </div>
          <FAQAccordion items={[
            { question: "Ist die Behandlung schmerzhaft?", answer: "Die meisten Kunden empfinden die Behandlung als gut erträglich. Durch moderne Kühlungstechniken wird die Haut während der Laser-Haarentfernung geschont." },
            { question: "Wie viele Sitzungen brauche ich?", answer: "Da Haare in unterschiedlichen Zyklen wachsen, sind in der Regel 6 bis 8 Sitzungen erforderlich, um ein optimales Ergebnis zu erzielen. Dies variiert jedoch je nach Haut- und Haartyp." },
            { question: "Welche Bereiche können behandelt werden?", answer: "Wir behandeln nahezu alle Körperbereiche: Gesicht (Oberlippe, Kinn), Achseln, Arme, Beine, Rücken, Brust sowie sensible Zonen wie die Bikinizone nach vorheriger Beratung." },
            { question: "Kann ich direkt danach in den Alltag zurück?", answer: "Ja, es gibt in der Regel keine Ausfallzeit. Sie können sofort wieder Ihren gewohnten Tätigkeiten nachgehen. Direkte Sonneneinstrahlung sollte jedoch vermieden werden." },
            { question: "Was kostet dauerhafte Haarentfernung?", answer: "Die Preise richten sich nach der Größe der zu behandelnden Zone. Bei Kombination mehrerer Zonen (z.B. zweite und dritte Zone) bieten wir bis zu -50% Rabatt an." },
            { question: "Ist die Beratung kostenlos?", answer: "Ja, unsere Erstberatung ist komplett kostenlos und unverbindlich. Wir nehmen uns Zeit, um Ihre Haut zu analysieren und einen persönlichen Plan zu erstellen." },
            { question: "Funktioniert es bei jedem Haut- und Haartyp?", answer: "Unsere Technologie ist für viele Haut- und Haartypen geeignet. Am besten wirken die Behandlungen bei dunkleren Haaren. In der Beratung klären wir, ob die Methode für Sie ideal ist." },
            { question: "Wie bereite ich mich auf den Termin vor?", answer: "Die zu behandelnde Stelle sollte 24 Stunden vorher rasiert werden. Auf Epilieren, Waxing oder Zupfen sollte in den Wochen vor der Behandlung verzichtet werden." }
          ]} />
        </div>
      </section>

      <ContactCTA title="Bereit für glattere Haut?" />
      
      <StickyMobileCTA />
    </>
  );
}
