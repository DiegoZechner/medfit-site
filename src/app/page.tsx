import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Section } from "@/components/Section";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <Section eyebrow="Bereiche" title="Was wir für Sie tun können">
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 bg-white p-5 text-sm text-slate-700">
              <h3 className="text-base font-semibold text-slate-900">Strahlendes Gesicht</h3>
              <p className="mt-2">
                Anti-Aging-Behandlungen wie CFU Èlife Lifting, Biolifting Byonik® oder
                Gesichtsbehandlungen für ein frisches, ebenmäßiges Hautbild.
              </p>
              <Link
                href="/gesicht"
                className="mt-3 inline-flex text-sm font-medium text-brand hover:text-brand-dark"
              >
                Mehr zu Gesichtsbehandlungen
              </Link>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-5 text-sm text-slate-700">
              <h3 className="text-base font-semibold text-slate-900">Definierter Körper</h3>
              <p className="mt-2">
                Körperformung, Fettabbau und Hautstraffung mit Kryolipolyse, RF-Sculpting,
                TriLipo, CFU-Hautstraffung, Wellentherapie und mehr.
              </p>
              <Link
                href="/koerperformung"
                className="mt-3 inline-flex text-sm font-medium text-brand hover:text-brand-dark"
              >
                Mehr zu Körperbehandlungen
              </Link>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-5 text-sm text-slate-700">
              <h3 className="text-base font-semibold text-slate-900">Seidig glatte Haut</h3>
              <p className="mt-2">
                Dauerhafte Haarentfernung für Gesicht und Körper, damit Rasur und Wachs
                im Alltag weniger Thema sind.
              </p>
              <Link
                href="/haarentfernung"
                className="mt-3 inline-flex text-sm font-medium text-brand hover:text-brand-dark"
              >
                Mehr zu Haarfreiheit
              </Link>
            </div>
          </div>
        </Section>
        <Section
          eyebrow="Behandlungen für Ihren Körper"
          title="Gezielte Körperformung ohne OP"
        >
          <p>
            Wir kombinieren moderne Technologien wie Kryolipolyse, RF-Sculpting, TriLipo,
            CFU-Hautstraffung und mehr, um Ihre Körperkonturen sanft zu formen und Ihre
            Haut zu straffen – ohne chirurgischen Eingriff.
          </p>
          <p>
            Ob Doppelkinn, Bauchfett, Hüftgold, Reiterhosen, Innenschenkel oder
            Cellulite: In einem persönlichen Gespräch finden wir heraus, welche
            Anwendung zu Ihrem Ziel passt.
          </p>
          <div className="mt-4">
            <Link
              href="/koerperformung"
              className="inline-flex items-center text-sm font-medium text-brand hover:text-brand-dark"
            >
              Mehr zu Körperbehandlungen
            </Link>
          </div>
        </Section>
        <Section
          eyebrow="Ablauf"
          title="In 3 Schritten zu sichtbaren Ergebnissen"
        >
          <ol className="space-y-3">
            <li>
              <strong className="font-semibold text-slate-800">
                1. Kostenlose Erstberatung
              </strong>
              <p>
                Wir nehmen uns Zeit für Ihre Wünsche, klären mögliche Behandlungsoptionen
                und beantworten alle Fragen – unverbindlich und transparent.
              </p>
            </li>
            <li>
              <strong className="font-semibold text-slate-800">
                2. Individueller Behandlungsplan
              </strong>
              <p>
                Gemeinsam legen wir fest, welche Technologie für Ihre Ausgangssituation
                am sinnvollsten ist und wie viele Sitzungen empfohlen werden.
              </p>
            </li>
            <li>
              <strong className="font-semibold text-slate-800">
                3. Schonende Behandlung
              </strong>
              <p>
                Die Anwendungen sind schonend, benötigen in der Regel keine Ausfallzeit
                und lassen sich gut in den Alltag integrieren.
              </p>
            </li>
          </ol>
        </Section>
      </main>
      <Footer />
    </>
  );
}

