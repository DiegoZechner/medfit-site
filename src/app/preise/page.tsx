import { ContactCTA } from "@/components/ContactCTA";
import { TrustChips } from "@/components/TrustChips";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Preise für Haarentfernung, Gesicht & Körper | med fit Dornbirn",
  description: "Transparente Preise für dauerhafte Haarentfernung, Gesichtsbehandlungen, Anti-Aging und Körperbehandlungen bei med fit wohlfühlschön in Dornbirn.",
};

export default function PricesPage() {
  return (
    <>
      {/* 1. Hero section */}
      <section className="bg-white py-16 md:py-24 border-b border-line">
        <div className="page-container max-w-4xl text-center">
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-ink sm:text-5xl md:text-6xl">
            Preise & Behandlungen
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-muted md:text-xl">
            Transparente Preise für Haarentfernung, Gesichtsbehandlungen und Körperbehandlungen in Dornbirn. Gemeinsam erstellen wir im Beratungsgespräch ein individuelles Behandlungskonzept.
          </p>
          
          <div className="mb-10 flex justify-center">
            <TrustChips items={[
              "Alle Preise inkl. 20 % MwSt.",
              "Individuelle Beratung",
              "Standort Dornbirn",
              "Online-Terminbuchung"
            ]} />
          </div>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/termin"
              className="w-full sm:w-auto rounded-xl bg-aqua px-8 py-3.5 text-base font-medium text-white shadow-sm hover:opacity-90 transition-colors text-center"
            >
              Kostenlose Beratung buchen
            </Link>
            <Link
              href="#haarentfernung"
              className="w-full sm:w-auto rounded-xl border border-line bg-white px-8 py-3.5 text-base font-medium text-slate hover:bg-shell transition-colors text-center"
            >
              Haarentfernung ansehen
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Pricing navigation */}
      <div className="sticky top-[72px] z-10 border-b border-line bg-white/95 backdrop-blur shadow-sm hidden md:block">
        <div className="page-container max-w-5xl">
          <nav className="flex justify-center gap-8 py-4 text-sm font-medium text-ink">
            <a href="#haarentfernung" className="hover:text-aqua transition-colors">Haarentfernung</a>
            <a href="#gesicht" className="hover:text-aqua transition-colors">Gesicht</a>
            <a href="#koerper" className="hover:text-aqua transition-colors">Körper</a>
            <a href="#pakete" className="hover:text-aqua transition-colors">Pakete & Hinweise</a>
          </nav>
        </div>
      </div>

      {/* 3. Section: Haarentfernung */}
      <section id="haarentfernung" className="bg-shell py-16 md:py-24 border-b border-line scroll-mt-24">
        <div className="page-container max-w-5xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-ink md:text-4xl">Preise für dauerhafte Haarentfernung</h2>
            <p className="mx-auto max-w-3xl text-lg text-muted">
              Unsere Preise gelten pro Behandlung. Wählen Sie eine Hauptzone zum regulären Preis und sichern Sie sich 50 % Rabatt auf bis zu zwei weitere Zonen. Die passende Kombination besprechen wir gerne in der kostenlosen Beratung.
            </p>
          </div>

          <div className="mb-12 rounded-2xl border border-line bg-white p-6 shadow-sm">
            <p className="text-sm text-muted">
              <strong>Wichtiger Hinweis:</strong> Laser-Haarentfernung wird aufgrund hormoneller Veränderungen erst ab 18 Jahren empfohlen. Für dauerhaft sichtbare Ergebnisse sind in der Regel 6 bis 10 Behandlungen notwendig – abhängig von Hauttyp, Haartyp und Behandlungszone.
            </p>
          </div>

          {/* Rabattstaffelung Highlight */}
          <div className="mb-12 rounded-2xl border border-aqua bg-white p-8 shadow-sm md:flex items-center justify-between">
            <div>
              <h3 className="mb-2 text-xl font-bold text-ink">Rabattstaffelung Haarentfernung</h3>
              <ul className="space-y-1 text-sm text-muted">
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-aqua" /> Hauptzone: voller Preis
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-aqua" /> Bis zu zwei weitere Zonen: 50 % Rabatt
                </li>
              </ul>
            </div>
            <div className="mt-6 md:mt-0">
              <Link
                href="/termin?behandlung=haarentfernung"
                className="inline-flex rounded-xl bg-aqua px-6 py-3 text-sm font-medium text-white shadow-sm hover:opacity-90 transition-colors"
              >
                Beratung zur Haarentfernung buchen
              </Link>
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {/* A. Damen Gesicht */}
            <div className="rounded-2xl border border-line bg-white p-6 shadow-sm">
              <h3 className="mb-6 text-xl font-bold text-slate">Damen Gesicht</h3>
              <ul className="space-y-4">
                <PriceRow label="Wangen" price="€ 88,-" />
                <PriceRow label="Oberlippe" price="€ 68,-" />
                <PriceRow label="Kinn" price="€ 68,-" />
                <PriceRow label="Kinn & Hals" price="€ 88,-" />
                <PriceRow label="Gesicht-Kombi 4 Zonen" price="€ 138,-" isBold />
              </ul>
            </div>

            {/* B. Herren Gesicht */}
            <div className="rounded-2xl border border-line bg-white p-6 shadow-sm">
              <h3 className="mb-6 text-xl font-bold text-slate">Herren Gesicht</h3>
              <ul className="space-y-4 mb-6">
                <PriceRow label="Hals" price="€ 88,-" />
                <PriceRow label="Nacken" price="€ 96,-" />
              </ul>
              <p className="text-xs text-muted border-t border-line pt-4">
                Bei Männern wird keine Barthaar-Entfernung angeboten.
              </p>
            </div>

            {/* C. Körperpreise Damen */}
            <div className="rounded-2xl border border-line bg-white p-6 shadow-sm">
              <h3 className="mb-6 text-xl font-bold text-slate">Körper Damen</h3>
              <ul className="space-y-4 mb-6">
                <PriceRow label="Achsel" price="€ 88,-" />
                <PriceRow label="Nabel + Medianlinie" price="€ 68,-" />
                <PriceRow label="Bikini" price="€ 108,-" />
                <PriceRow label="Intim ohne Bikini" price="€ 108,-" />
                <PriceRow label="Bikini + Intim + Po / Intim komplett" price="€ 188,-" />
                <PriceRow label="Gesäß + Po" price="€ 138,-" />
                <PriceRow label="Oberarme" price="€ 138,-" />
                <PriceRow label="Unterarme" price="€ 128,-" />
                <PriceRow label="Oberschenkel" price="€ 188,-" />
                <PriceRow label="Unterschenkel" price="€ 178,-" />
              </ul>
              <p className="text-xs text-muted border-t border-line pt-4">
                Die Intimbehandlung wird bei Damen von einer weiblichen Fachkraft durchgeführt.
              </p>
            </div>

            {/* D. Körperpreise Herren */}
            <div className="rounded-2xl border border-line bg-white p-6 shadow-sm">
              <h3 className="mb-6 text-xl font-bold text-slate">Körper Herren</h3>
              <ul className="space-y-4">
                <PriceRow label="Achsel" price="€ 88,-" />
                <PriceRow label="Brust" price="€ 158,-" />
                <PriceRow label="Handrücken" price="€ 84,-" />
                <PriceRow label="Schultern" price="€ 138,-" />
                <PriceRow label="Oberarme" price="€ 138,-" />
                <PriceRow label="Unterarme" price="€ 128,-" />
                <PriceRow label="Bauch" price="€ 128,-" />
                <PriceRow label="Rücken oben" price="€ 218,-" />
                <PriceRow label="Rücken unten" price="€ 148,-" />
                <PriceRow label="Rücken ganz" price="€ 248,-" />
              </ul>
            </div>

            {/* E. Kombi-Pakete Damen */}
            <div className="rounded-2xl border border-line bg-white p-6 shadow-sm">
              <h3 className="mb-6 text-xl font-bold text-slate">Kombi-Pakete Damen</h3>
              <ul className="space-y-4">
                <PriceRow label="Bikini + Achsel" price="€ 152,-" />
                <PriceRow label="Achsel + Intim inkl. Bikini" price="€ 206,-" />
                <PriceRow label="Unterschenkel + Achsel" price="€ 222,-" />
                <PriceRow label="Unterschenkel + Achsel + Intim komplett" price="€ 321,-" />
                <PriceRow label="Ganze Beine" price="€ 277,-" />
              </ul>
            </div>

            {/* F. Kombi-Pakete Herren */}
            <div className="rounded-2xl border border-line bg-white p-6 shadow-sm">
              <h3 className="mb-6 text-xl font-bold text-slate">Kombi-Pakete Herren</h3>
              <ul className="space-y-4">
                <PriceRow label="Rücken + Brust" price="€ 327,-" />
                <PriceRow label="Brust + Bauch" price="€ 222,-" />
                <PriceRow label="Rücken + Brust + Bauch" price="€ 391,-" />
                <PriceRow label="Rücken + Achsel + Oberarme" price="€ 361,-" />
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Section: Gesichtsbehandlungen */}
      <section id="gesicht" className="bg-white py-16 md:py-24 border-b border-line scroll-mt-24">
        <div className="page-container max-w-5xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-ink md:text-4xl">Preise für Gesichtsbehandlungen</h2>
            <p className="mx-auto max-w-3xl text-lg text-muted">
              Moderne Gesichtsbehandlungen für Anti-Aging, Hautstraffung, frischen Glow und ein verfeinertes Hautbild – ganz ohne OP und ohne lange Ausfallzeiten.
            </p>
          </div>

          <div className="grid gap-8">
            {/* A. CFU-ÈLIFE */}
            <div className="rounded-2xl border border-line bg-shell p-6 md:p-8 shadow-sm">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-8 border-b border-line pb-8">
                <div className="flex-1">
                  <div className="inline-block rounded-full bg-aqua/10 px-3 py-1 text-xs font-medium text-aqua mb-4">
                    Aktionspreis zur Neueinführung
                  </div>
                  <h3 className="mb-2 text-2xl font-bold text-slate">CFU-ÈLIFE – Hautstraffung & Lifting ohne OP</h3>
                  <p className="text-muted text-sm md:text-base">
                    Hautstraffung und definierte Konturen mit hochfokussiertem Ultraschall für Gesicht, Hals und Dekolleté.
                  </p>
                </div>
                <div className="shrink-0">
                  <Link
                    href="/termin?behandlung=cfu-elife"
                    className="inline-flex rounded-xl bg-aqua px-6 py-3 text-sm font-medium text-white shadow-sm hover:opacity-90 transition-colors"
                  >
                    Beratung zu CFU-ÈLIFE buchen
                  </Link>
                </div>
              </div>
              <ul className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                <PriceRow label="Full Face" price="€ 420,-" oldPrice="€ 560,-" isBold />
                <PriceRow label="Obergesicht" price="€ 280,-" />
                <PriceRow label="Untergesicht" price="€ 380,-" />
                <PriceRow label="Hals" price="€ 300,-" />
                <PriceRow label="Dekolleté" price="€ 360,-" />
              </ul>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              {/* B. BYONIK */}
              <div className="rounded-2xl border border-line bg-white p-6 md:p-8 shadow-sm flex flex-col">
                <div className="mb-6 flex-1">
                  <h3 className="mb-2 text-2xl font-bold text-slate">BYONIK® Laserbehandlung</h3>
                  <p className="text-muted text-sm mb-6">
                    Bio-Lifting mit Laserlicht und Hyaluron für straffere Haut und einen frischen Teint.
                  </p>
                  <ul className="space-y-4">
                    <PriceRow label="BYONIK Anti-Aging Facial Classic" price="€ 185,-" />
                    <PriceRow label="BYONIK Anti-Aging Gesicht & Hals" price="€ 225,-" />
                    <PriceRow label="BYONIK Gesicht & Hals & Dekolleté" price="€ 275,-" />
                    <PriceRow label="BYONIK Glowing Skin" price="€ 135,-" />
                    <PriceRow label="BYONIK Akne und Problemhaut" price="€ 135,-" />
                  </ul>
                </div>
                <div className="mt-4 border-t border-line pt-6">
                  <Link
                    href="/termin?behandlung=byonik"
                    className="inline-flex w-full justify-center rounded-xl border border-line bg-white px-6 py-3 text-sm font-medium text-slate shadow-sm hover:bg-shell transition-colors"
                  >
                    BYONIK Termin buchen
                  </Link>
                </div>
              </div>

              {/* C. Microdermabrasion */}
              <div className="rounded-2xl border border-line bg-white p-6 md:p-8 shadow-sm flex flex-col">
                <div className="mb-6 flex-1">
                  <h3 className="mb-2 text-2xl font-bold text-slate">Microdermabrasion – Tiefenreinigung</h3>
                  <p className="text-muted text-sm mb-6">
                    Sanftes Skin Resurfacing zur Hautglättung, Tiefenreinigung und Hautbildverbesserung.
                  </p>
                  <ul className="space-y-4">
                    <PriceRow label="Einzelbehandlung" price="€ 135,-" />
                    <PriceRow label="3er Kur Gesicht" price="€ 390,-" isBold />
                  </ul>
                </div>
                <div className="mt-4 border-t border-line pt-6">
                  <Link
                    href="/termin?behandlung=microdermabrasion"
                    className="inline-flex w-full justify-center rounded-xl border border-line bg-white px-6 py-3 text-sm font-medium text-slate shadow-sm hover:bg-shell transition-colors"
                  >
                    Microdermabrasion buchen
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Section: Körperbehandlungen */}
      <section id="koerper" className="bg-shell py-16 md:py-24 border-b border-line scroll-mt-24">
        <div className="page-container max-w-5xl">
          <div className="mb-12 text-center flex flex-col items-center">
            <h2 className="mb-4 text-3xl font-bold text-ink md:text-4xl">Preise für Körperbehandlungen</h2>
            <p className="max-w-3xl text-lg text-muted">
              Für gezielte Körperformung, Hautstraffung und Behandlung von Problemzonen – ohne OP und individuell auf Ihre Ziele abgestimmt.
            </p>
            <div className="mt-8">
              <Link
                href="/termin?behandlung=koerper"
                className="inline-flex rounded-xl bg-aqua px-8 py-3.5 text-base font-medium text-white shadow-sm hover:opacity-90 transition-colors"
              >
                Körperberatung buchen
              </Link>
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <TreatmentPriceCard 
              title="KryoShape® – Fettzellen einfrieren"
              description="Kryolipolyse zur gezielten Behandlung hartnäckiger Fettpolster."
              prices={[
                { label: "Eine Zone je nach Areal", price: "ab € 350,- bis € 660,-" }
              ]}
            />
            <TreatmentPriceCard 
              title="RF-SCULPTING – Fettabbau & Muskelaufbau"
              description="Kombiniert Fettreduktion und Muskelaufbau in einer Behandlung."
              prices={[
                { label: "1 Zone", price: "€ 180,-" },
                { label: "2 Zonen", price: "€ 200,-" },
                { label: "3 Zonen", price: "€ 220,-" },
                { label: "4 Zonen", price: "€ 240,-" },
              ]}
            />
            <TreatmentPriceCard 
              title="TriLipo™ Maximus – Fettabbau & Hautstraffung"
              description="Kombiniert Hautstraffung, Fettreduktion und Körperformung."
              prices={[
                { label: "Einzelanwendung", price: "€ 210,-" },
                { label: "3er Karte", price: "€ 585,-" },
              ]}
            />
            <TreatmentPriceCard 
              title="Akustische Wellentherapie"
              description="Behandlung für Cellulite, schlaffes Gewebe und verhärtete Fettdepots."
              prices={[
                { label: "Einzelsitzung", price: "€ 185,-" },
                { label: "3er Karte", price: "€ 525,-" },
              ]}
            />
            <TreatmentPriceCard 
              title="Ultratone Futura Pro"
              description="Bioelektrische Impulse zur Körperstraffung und Formung."
              prices={[
                { label: "Einzelbehandlung", price: "€ 150,-" },
                { label: "8er Karte", price: "€ 880,-" },
              ]}
            />
            <TreatmentPriceCard 
              title="SLIMYONIK AIR Bodystyler"
              description="Druckwellenmassage und Sauerstoffanwendung zur Unterstützung der Fettverbrennung."
              prices={[
                { label: "Einzelbehandlung", price: "€ 95,-" },
                { label: "3er Karte", price: "€ 240,-" },
              ]}
            />
          </div>
        </div>
      </section>

      {/* 6. Section: Paketbeispiel & 7. Hinweise */}
      <section id="pakete" className="bg-white py-16 md:py-24 border-b border-line scroll-mt-24">
        <div className="page-container max-w-5xl">
          <div className="grid gap-12 md:grid-cols-2">
            
            {/* Pakete */}
            <div>
              <h2 className="mb-4 text-3xl font-bold text-ink">Individuell abgestimmte Pakete</h2>
              <p className="mb-8 text-lg text-muted">
                Unsere Behandlungspakete kombinieren passende Methoden für Ihre Ziele. Die genaue Empfehlung erfolgt nach persönlicher Beratung.
              </p>

              <div className="rounded-2xl border border-line bg-shell p-6 shadow-sm">
                <div className="inline-block rounded-full bg-sand/20 px-3 py-1 text-xs font-medium text-slate mb-4">
                  Beispielpaket
                </div>
                <h3 className="mb-4 text-xl font-bold text-slate">Paket Bauch</h3>
                <div className="mb-6 space-y-2 text-sm text-ink">
                  <p>• 1 x KryoShape – Fett einfrieren</p>
                  <p>• 1 x RF Sculpting Ultra – Stoffwechselaktivierung</p>
                  <p>• 1 x Akustische Wellentherapie</p>
                  <p>• 1 x Körperanalyse / Bioimpedanzmessung</p>
                </div>
                <div className="border-t border-line pt-4 space-y-2">
                  <div className="flex justify-between text-sm text-muted">
                    <span>Statt einzeln</span>
                    <span className="line-through">€ 1.145,-</span>
                  </div>
                  <div className="flex justify-between text-sm font-medium text-aqua">
                    <span>Ersparnis</span>
                    <span>€ 265,-</span>
                  </div>
                  <div className="flex justify-between text-lg font-bold text-slate pt-2 border-t border-line mt-2">
                    <span>Paketpreis Bauch</span>
                    <span>€ 880,-</span>
                  </div>
                </div>
                <div className="mt-6">
                  <Link
                    href="/termin"
                    className="inline-flex w-full justify-center rounded-xl bg-aqua px-6 py-3 text-sm font-medium text-white shadow-sm hover:opacity-90 transition-colors"
                  >
                    Individuelles Paket anfragen
                  </Link>
                </div>
              </div>
            </div>

            {/* Hinweise */}
            <div>
              <h2 className="mb-6 text-3xl font-bold text-ink">Wichtig zu wissen</h2>
              <div className="rounded-2xl border border-line bg-white p-6 shadow-sm">
                <ul className="space-y-4 text-sm text-muted">
                  <li className="flex gap-3">
                    <span className="shrink-0 mt-0.5 w-1.5 h-1.5 rounded-full bg-sand"></span>
                    <span>Alle Preise verstehen sich inklusive 20 % gesetzlicher Mehrwertsteuer.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="shrink-0 mt-0.5 w-1.5 h-1.5 rounded-full bg-sand"></span>
                    <span>Angebots- und Preisänderungen sind vorbehalten.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="shrink-0 mt-0.5 w-1.5 h-1.5 rounded-full bg-sand"></span>
                    <span>Termine, die nicht mindestens 24 Stunden vorher abgesagt werden, können in Rechnung gestellt werden.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="shrink-0 mt-0.5 w-1.5 h-1.5 rounded-full bg-sand"></span>
                    <span>Für Haarentfernung sollte das Behandlungsareal idealerweise einen Tag vor dem Termin gründlich rasiert werden.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="shrink-0 mt-0.5 w-1.5 h-1.5 rounded-full bg-sand"></span>
                    <span>Für dauerhafte Haarreduktion sind meist mehrere Sitzungen notwendig.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="shrink-0 mt-0.5 w-1.5 h-1.5 rounded-full bg-sand"></span>
                    <span>Die genaue Behandlungsempfehlung erfolgt im persönlichen Beratungsgespräch.</span>
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 8. Final CTA */}
      <ContactCTA 
        title="Nicht sicher, welche Behandlung passt?"
        subtitle="Wir beraten Sie kostenlos und erstellen gemeinsam einen Behandlungsplan, der zu Ihren Zielen, Ihrer Haut und Ihrem Alltag passt."
        primaryLabel="Kostenlose Beratung buchen"
        secondaryLabel="Jetzt anrufen"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "BreadcrumbList",
                "itemListElement": [
                  {
                    "@type": "ListItem",
                    "position": 1,
                    "name": "Home",
                    "item": "https://www.med-fit.com"
                  },
                  {
                    "@type": "ListItem",
                    "position": 2,
                    "name": "Preise",
                    "item": "https://www.med-fit.com/preise"
                  }
                ]
              },
              {
                "@type": "Service",
                "name": "Dauerhafte Haarentfernung",
                "provider": {
                  "@type": "LocalBusiness",
                  "name": "med fit wohlfühlschön"
                },
                "offers": {
                  "@type": "Offer",
                  "price": "68.00",
                  "priceCurrency": "EUR",
                  "description": "Ab 68 € pro Zone, 50% Rabatt auf weitere Zonen"
                }
              },
              {
                "@type": "Service",
                "name": "CFU-ÈLIFE Hautstraffung",
                "provider": {
                  "@type": "LocalBusiness",
                  "name": "med fit wohlfühlschön"
                },
                "offers": {
                  "@type": "Offer",
                  "price": "420.00",
                  "priceCurrency": "EUR",
                  "description": "Aktionspreis Full Face"
                }
              }
            ]
          })
        }}
      />
    </>
  );
}

// Helper Components
function PriceRow({ label, price, oldPrice, isBold = false }: { label: string, price: string, oldPrice?: string, isBold?: boolean }) {

  return (
    <li className="flex items-center justify-between border-b border-line pb-3 last:border-0 last:pb-0">
      <span className={`text-sm ${isBold ? 'font-semibold text-ink' : 'text-ink'}`}>{label}</span>
      <div className="flex items-center gap-3">
        {oldPrice && <span className="text-sm line-through text-muted">{oldPrice}</span>}
        <span className={`text-base font-semibold text-aqua`}>{price}</span>
      </div>
    </li>
  );
}

function TreatmentPriceCard({ title, description, prices }: { title: string, description: string, prices: { label: string, price: string }[] }) {
  return (
    <div className="rounded-2xl border border-line bg-white p-6 flex flex-col shadow-sm">
      <h3 className="mb-2 text-lg font-bold text-slate">{title}</h3>
      <p className="mb-6 text-sm text-muted flex-1">{description}</p>
      <ul className="space-y-3 border-t border-line pt-4">
        {prices.map((item, idx) => (
          <li key={idx} className="flex justify-between items-center text-sm">
            <span className="text-ink">{item.label}</span>
            <span className="font-semibold text-aqua">{item.price}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
