"use client";
import { useState } from "react";
import { FAQAccordion } from "@/components/FAQAccordion";
import { ContactCTA } from "@/components/ContactCTA";
import Link from "next/link";

export default function FaqPage() {
  const [activeTab, setActiveTab] = useState("allgemein");

  const categories = [
    { id: "allgemein", label: "Allgemein" },
    { id: "haarentfernung", label: "Haarentfernung" },
    { id: "gesicht", label: "Gesicht / Anti-Aging" },
    { id: "koerper", label: "Körperformung" },
    { id: "preise", label: "Preise & Pakete" },
    { id: "termin", label: "Termin & Kontakt" },
    { id: "sicherheit", label: "Sicherheit & Vorbereitung" }
  ];

  const faqs = {
    allgemein: [
      { question: "Ist die Erstberatung kostenlos?", answer: "Ja, die Erstberatung ist bei uns komplett kostenlos und unverbindlich." },
      { question: "Welche Behandlung passt zu mir?", answer: "Das klären wir gemeinsam in der Beratung. Oft kommen Kunden mit einem allgemeinen Wunsch – wir finden die passende Methode dazu." },
      { question: "Muss ich mich vorab entscheiden?", answer: "Nein. Buchen Sie einfach einen Beratungstermin und wir klären vor Ort, welche Behandlung sinnvoll ist." },
      { question: "Wo befindet sich med fit?", answer: "Am Kehlerpark 2 in 6850 Dornbirn. Wir sind gut erreichbar und zentral gelegen." },
      { question: "Gibt es Parkmöglichkeiten?", answer: "Ja, es gibt ausreichend Parkplätze direkt beim Studio." },
      { question: "Sind die Behandlungen für Männer und Frauen geeignet?", answer: "Ja, die meisten unserer Behandlungen sind für Männer und Frauen gleichermaßen geeignet." }
    ],
    haarentfernung: [
      { question: "Wie viele Sitzungen brauche ich?", answer: "Meistens 6 bis 10 Sitzungen, je nach Haar- und Hauttyp sowie Behandlungszone." },
      { question: "Warum braucht man mehrere Sitzungen?", answer: "Haare haben unterschiedliche Wachstumszyklen. Der Laser wirkt nur auf Haare, die sich gerade in der aktiven Wachstumsphase befinden." },
      { question: "Ist die Behandlung schmerzhaft?", answer: "Dank modernster XLASE PLUS Technologie mit Kühlung ist die Behandlung sehr schmerzarm." },
      { question: "Welche Bereiche können behandelt werden?", answer: "Nahezu alle Körperzonen: Beine, Achseln, Gesicht, Rücken, Brust, Bikini und mehr." },
      { question: "Funktioniert Laser bei grauen Haaren?", answer: "Da der Laser das Melanin (Farbpigment) im Haar benötigt, ist die Behandlung bei komplett grauen oder weißen Haaren meist nicht effektiv." },
      { question: "Was kostet Haarentfernung?", answer: "Das richtet sich nach der Größe der Zone. Einzelzonen beginnen bei günstigeren Preisen, wir bieten zudem attraktive Kombi-Pakete an." },
      { question: "Gibt es Paketpreise?", answer: "Ja, wir empfehlen unser Kombi-Paket: Eine Hauptzone und bis zu zwei weitere mit 50 % Rabatt." }
    ],
    gesicht: [
      { question: "Was ist CFU ÈLIFE?", answer: "Eine fortschrittliche HIFU-Technologie (hochfokussierter Ultraschall) zur Hautstraffung und zum Lifting ohne OP." },
      { question: "Was ist BYONIK?", answer: "Ein Biolifting-Verfahren mit Laser und Hyaluron, das der Haut intensiv Feuchtigkeit und Elastizität zurückgibt." },
      { question: "Was ist Microdermabrasion?", answer: "Eine schonende Abtragung der obersten Hautschichten, die für ein feineres, frischeres Hautbild sorgt." },
      { question: "Welche Behandlung ist gut bei Falten?", answer: "Je nach Ausprägung empfehlen wir CFU ÈLIFE für Straffung oder BYONIK für Feuchtigkeit und Volumen." },
      { question: "Welche Behandlung ist gut bei unreiner Haut?", answer: "Hier eignet sich oft die BYONIK Blue Light Therapie oder eine spezielle Microdermabrasion." },
      { question: "Gibt es Ausfallzeit?", answer: "Nein, bei unseren Gesichtsbehandlungen gibt es in der Regel keine Ausfallzeit. Sie können direkt danach in Ihren Alltag zurückkehren." }
    ],
    koerper: [
      { question: "Was ist KryoShape?", answer: "Eine Methode zur gezielten Kältebehandlung von Fettdepots ohne Operation." },
      { question: "Was ist RF-SCULPTING ULTRA?", answer: "Eine Behandlung, die Fettabbau und intensive Muskelaktivierung in nur 30 Minuten kombiniert." },
      { question: "Was ist TriLipo?", answer: "Eine Radiofrequenz-Therapie zur Hautstraffung, Figurformung und Behandlung von Cellulite." },
      { question: "Was hilft bei Cellulite?", answer: "Wir setzen hier oft auf Akustische Wellentherapie, TriLipo oder Slimyonik AIR, je nach Ausprägung." },
      { question: "Welche Behandlung passt bei Bauch, Hüfte oder Armen?", answer: "KryoShape eignet sich hervorragend für diese Problemzonen, ebenso wie RF-SCULPTING zur Straffung." },
      { question: "Sind Ergebnisse garantiert?", answer: "Ergebnisse sind individuell und hängen von Ausgangssituation, Lebensstil und Behandlung ab. Wir besprechen realistische Erwartungen vorab ehrlich mit Ihnen." }
    ],
    preise: [
      { question: "Sind die Preise transparent?", answer: "Ja, alle Preise verstehen sich als Orientierung laut Preisliste. Den genauen Preis ermitteln wir im Erstgespräch." },
      { question: "Wie setzen sich die Kosten zusammen?", answer: "Die finalen Kosten hängen von der Behandlungszone, dem Umfang und der Paketkombination ab." },
      { question: "Bieten Sie Rabatte an?", answer: "Wir bieten attraktive Paketpreise an, z.B. bei der Kombination mehrerer Zonen bei der Haarentfernung." },
      { question: "Kann ich Behandlungen kombinieren?", answer: "Ja, wir schnüren gerne individuelle Figur- oder Gesichtspakete für Sie." }
    ],
    termin: [
      { question: "Wie kann ich einen Termin buchen?", answer: "Ganz einfach über unser Kontaktformular, telefonisch oder per WhatsApp." },
      { question: "Kann ich per WhatsApp schreiben?", answer: "Ja, unsere WhatsApp-Nummer lautet +43 678 133 00 11." },
      { question: "Wie lange im Voraus muss ich buchen?", answer: "Wir empfehlen, Termine 1-2 Wochen im Voraus zu buchen. Manchmal sind aber auch kurzfristige Termine frei." },
      { question: "Was passiert, wenn ich einen Termin absagen muss?", answer: "Bitte sagen Sie Termine mindestens 24 Stunden vorher ab, da wir die Zeit exklusiv für Sie reservieren." }
    ],
    sicherheit: [
      { question: "Was muss ich vor einer Laser-Haarentfernung beachten?", answer: "Die zu behandelnde Zone sollte am Tag zuvor rasiert werden. Vermeiden Sie starke Sonneneinstrahlung und Solarium." },
      { question: "Was muss ich nach der Behandlung beachten?", answer: "Je nach Methode gibt es kleine Dinge zu beachten (z.B. Sonnenschutz). Diese besprechen wir ausführlich nach der Behandlung." },
      { question: "Sind die Geräte sicher?", answer: "Ja, wir arbeiten ausschließlich mit zertifizierten, modernen und erprobten Technologien." },
      { question: "Wer führt die Behandlungen durch?", answer: "Unser geschultes und erfahrenes Fachpersonal, das sich kontinuierlich weiterbildet." }
    ]
  };

  return (
    <>
      <section className="bg-white py-16 md:py-24 border-b border-line">
        <div className="page-container max-w-3xl text-center">
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-ink sm:text-5xl">
            Häufige Fragen (FAQ)
          </h1>
          <p className="text-lg text-muted">
            Finden Sie schnell Antworten auf die wichtigsten Fragen. Wenn Sie Ihre Frage hier nicht finden, beraten wir Sie gerne persönlich.
          </p>
        </div>
      </section>

      <section className="bg-shell py-16 md:py-24">
        <div className="page-container max-w-4xl">
          
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeTab === cat.id
                    ? "bg-aqua text-white shadow-md"
                    : "bg-white text-ink border border-line hover:bg-line"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-line min-h-[400px]">
            <h2 className="text-2xl font-bold text-ink mb-6 pb-4 border-b border-line">
              {categories.find(c => c.id === activeTab)?.label}
            </h2>
            <FAQAccordion items={faqs[activeTab as keyof typeof faqs] || []} />
          </div>

          <div className="mt-16 text-center bg-aqua/5 p-8 rounded-3xl border border-aqua/20 max-w-2xl mx-auto">
            <h3 className="text-xl font-bold text-ink mb-3">Noch offene Fragen?</h3>
            <p className="text-muted mb-6">Schreiben Sie uns direkt per WhatsApp, wir helfen gerne weiter.</p>
            <a
              href="https://api.whatsapp.com/send/?phone=436781330011&text&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex justify-center items-center rounded-xl bg-[#25D366] px-8 py-3.5 font-medium text-white shadow-md hover:opacity-90 transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884" />
              </svg>
              WhatsApp schreiben
            </a>
          </div>

        </div>
      </section>
    </>
  );
}
