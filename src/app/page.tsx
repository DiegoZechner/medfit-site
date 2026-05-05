import { LandingHero } from "@/components/LandingHero";
import { FAQAccordion } from "@/components/FAQAccordion";
import { AnimatedTreatmentCards } from "@/components/AnimatedTreatmentCards";
import { FloatingTrustOrbit } from "@/components/FloatingTrustOrbit";
import { ReviewCarousel } from "@/components/ReviewCarousel";
import { LocationContactSection } from "@/components/LocationContactSection";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <LandingHero
        title="Ihre Praxis für ästhetische Behandlungen in Dornbirn"
        subtitle="Dauerhafte Haarentfernung, moderne Gesichtsbehandlungen und Körperformung – persönlich beraten, individuell geplant, sichtbar natürlich."
        primaryCtaLabel="Kostenlose Beratung buchen"
        primaryCtaHref="/termin"
        secondaryCtaLabel="Behandlungen ansehen"
        secondaryCtaHref="#behandlungen"
        trustItems={[
          "Seit 2000 in Dornbirn",
          "Kostenlose Erstberatung",
          "Moderne nicht-invasive Technologien",
          "Persönliche Betreuung"
        ]}
      />

      <section id="behandlungen" className="bg-shell py-16 md:py-24 overflow-hidden relative">
        <div className="page-container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-ink mb-4">Unsere Schwerpunkte</h2>
            <p className="text-muted text-lg max-w-2xl mx-auto">
              Spezialisiert auf Ergebnisse, die man sieht und fühlt. Ohne OP, mit modernster Technologie.
            </p>
          </div>
          <AnimatedTreatmentCards />
        </div>
      </section>

      <section className="bg-white py-16 border-y border-line overflow-hidden">
        <div className="page-container">
          <FloatingTrustOrbit />
        </div>
      </section>

      <section className="bg-shell py-16">
        <div className="page-container">
          <ReviewCarousel />
        </div>
      </section>

      <section className="bg-white py-16 md:py-24 border-y border-line">
        <div className="page-container max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-ink mb-4">Häufige Fragen</h2>
            <p className="text-muted text-lg">
              Kurze Antworten auf die wichtigsten Fragen.
            </p>
          </div>
          <FAQAccordion items={[
            { question: "Ist die Erstberatung kostenlos?", answer: "Ja, die erste Beratung ist bei uns immer kostenlos und unverbindlich." },
            { question: "Welche Behandlung passt zu mir?", answer: "Das klären wir gemeinsam vor Ort anhand einer Haut- und Zielanalyse." },
            { question: "Wie schnell sehe ich Ergebnisse?", answer: "Das hängt von der Behandlung ab. Bei einigen Gesichtsbehandlungen sofort, bei Haarentfernung und Körperformung nach einigen Wochen." },
            { question: "Gibt es Ausfallzeit?", answer: "Unsere Methoden sind nicht-invasiv. Meistens können Sie direkt wieder in den Alltag starten." },
            { question: "Sind die Behandlungen schmerzhaft?", answer: "Wir setzen auf schonende Technologien, die schmerzarm bis schmerzfrei sind." },
            { question: "Wo befindet sich med fit in Dornbirn?", answer: "Am Kehlerpark 2, direkt in Dornbirn mit guten Parkmöglichkeiten." },
            { question: "Kann ich direkt online buchen?", answer: "Über unser Kontaktformular oder per WhatsApp können Sie schnell und einfach anfragen." },
            { question: "Kann ich auch per WhatsApp Kontakt aufnehmen?", answer: "Sehr gerne! Unsere Nummer ist +43 678 133 00 11." }
          ]} />
        </div>
      </section>

      <section className="bg-aqua text-white py-16 md:py-20 text-center px-4">
        <div className="max-w-2xl mx-auto space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">Bereit für Ihre persönliche Beratung?</h2>
          <p className="text-white/90 text-lg">
            Wir klären gemeinsam, welche Behandlung zu Ihrem Ziel, Ihrer Haut und Ihrem Körper passt.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link href="/termin" className="w-full sm:w-auto bg-white text-ink px-8 py-3.5 rounded-xl font-semibold shadow-md hover:bg-shell transition-colors active:scale-95">
              Beratung buchen
            </Link>
            <a href="https://api.whatsapp.com/send/?phone=436781330011&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto bg-[#25D366] text-white px-8 py-3.5 rounded-xl font-semibold shadow-md hover:opacity-90 transition-colors active:scale-95 flex items-center justify-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884" /></svg>
              WhatsApp schreiben
            </a>
            <a href="tel:+436781330011" className="w-full sm:w-auto border-2 border-white/30 text-white px-8 py-3.5 rounded-xl font-semibold hover:bg-white/10 transition-colors active:scale-95">
              Anrufen
            </a>
          </div>
        </div>
      </section>

      <LocationContactSection />
    </>
  );
}

