import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Section } from "@/components/Section";
import { TreatmentCard } from "@/components/TreatmentCard";
import Link from "next/link";

export default function BodyShapingPage() {
  return (
    <>
      <Header />
      <main className="flex-1 bg-white">
        <Section
          eyebrow="Körperformung & Hautstraffung"
          title="Gezielte Behandlungen für Bauch, Beine, Po & mehr"
        >
          <p>
            Bei med fit wohlfühlschön in Dornbirn bieten wir Ihnen moderne
            Körperbehandlungen, um Problemzonen sichtbar zu reduzieren und die Haut zu
            straffen – ohne OP.
          </p>
          <p>
            Je nach Ziel und Ausgangssituation setzen wir Kryolipolyse, RF-Sculpting,
            TriLipo, CFU-Hautstraffung, Akustische Wellentherapie, Ultratone
            Biostimulation oder Slimyonik AIR ein.
          </p>
          <p>
            In einem kostenlosen Beratungsgespräch prüfen wir, welche Methode für Sie
            sinnvoll ist und erstellen einen individuellen Behandlungsplan.
          </p>
          <div className="mt-4">
            <Link
              href="/termin"
              className="inline-flex items-center rounded-full bg-slate-900 px-5 py-2.5 text-sm font-medium text-white hover:bg-slate-800"
            >
              Kostenlose Beratung buchen
            </Link>
          </div>
        </Section>
        <section className="border-t border-slate-100 bg-slate-50/80">
          <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
            <h2 className="text-xl font-semibold tracking-tight text-slate-900 md:text-2xl">
              Unsere Körperbehandlungen im Überblick
            </h2>
            <p className="mt-2 text-sm text-slate-600 md:text-base">
              Ein schneller Überblick über die wichtigsten Anwendungen. Details klären
              wir gerne persönlich.
            </p>
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              <TreatmentCard
                name="KryoShape® Kryolipolyse"
                subtitle="Fettabbau mit Kälte – schonend & ohne OP."
                bullets={[
                  "Ideal für lokale Fettpolster wie Bauch, Hüften oder Reiterhosen",
                  "Reduktion des Fettgewebes um bis zu ca. 30 % möglich",
                  "Behandlung bequem im Liegen, keine Ausfallzeit"
                ]}
              />
              <TreatmentCard
                name="RF-SCULPTING ULTRA"
                subtitle="Fettabbau und Muskelaufbau in einer Anwendung."
                bullets={[
                  "Simuliert intensive Muskelkontraktionen (bis zu 20.000 Sit-ups in 30 Min.)",
                  "Straffere Konturen an Bauch, Po oder Oberschenkeln",
                  "Effektives Bodyforming ohne hartes Training"
                ]}
              />
              <TreatmentCard
                name="TriLipo™ Radiofrequenz"
                subtitle="Hautstraffung und Fettreduktion mit Radiofrequenz."
                bullets={[
                  "Verbessert Cellulite, Dehnungsstreifen und erschlaffte Haut",
                  "Wirkt in mehreren Hautebenen gleichzeitig",
                  "Sofort spürbare Straffungseffekte"
                ]}
              />
              <TreatmentCard
                name="CFU-Hautstraffung"
                subtitle="Focused Ultrasound für straffere Körperkonturen."
                bullets={[
                  "Ideal bei schlaffer Haut nach Gewichtsverlust oder Schwangerschaft",
                  "Regt die Kollagenneubildung in tieferen Hautschichten an",
                  "Lang anhaltende Straffungseffekte ohne Skalpell"
                ]}
              />
              <TreatmentCard
                name="Akustische Wellentherapie (AWT)"
                subtitle="Gegen die Ursache von Cellulite."
                bullets={[
                  "Akustische Wellen regen Durchblutung und Stoffwechsel an",
                  "Glatteres Hautbild an Oberschenkeln und Po",
                  "Deutlich sichtbare Ergebnisse nach wenigen Sitzungen"
                ]}
              />
              <TreatmentCard
                name="Ultratone Biostimulation"
                subtitle="Sanftes Bodyforming durch Bio-Impulse."
                bullets={[
                  "Stimuliert Muskulatur und hebt erschlaffte Partien an",
                  "Fördert die Mikrozirkulation und den Lymphfluss",
                  "Unterstützt ein glattes und straffes Hautbild"
                ]}
              />
              <TreatmentCard
                name="Slimyonik AIR"
                subtitle="Druckwellenmassage & Sauerstoff für Ihren Stoffwechsel."
                bullets={[
                  "Angenehme Druckwellenmassage mit gleichzeitiger Sauerstoff-Inhalation",
                  "Detox, Anti-Aging und Aktivierung des Lymphsystems",
                  "Unterstützt Fettverbrennung und Regeneration"
                ]}
              />
            </div>
            <div className="mt-10 rounded-2xl border border-slate-100 bg-white px-6 py-5 text-sm text-slate-700 md:flex md:items-center md:justify-between">
              <div>
                <h3 className="text-base font-semibold text-slate-900">
                  Welche Behandlung passt zu mir?
                </h3>
                <p className="mt-1 text-sm text-slate-600">
                  In der kostenlosen Erstberatung analysieren wir Ihre Ausgangssituation
                  und empfehlen Ihnen die passende Kombination aus Anwendungen.
                </p>
              </div>
              <div className="mt-4 md:mt-0">
                <Link
                  href="/termin"
                  className="inline-flex items-center rounded-full bg-slate-900 px-5 py-2.5 text-sm font-medium text-white hover:bg-slate-800"
                >
                  Beratungstermin sichern
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

