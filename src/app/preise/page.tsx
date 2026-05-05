"use client";
import { useState } from "react";
import { LandingHero } from "@/components/LandingHero";
import { PackagePricingCards } from "@/components/PackagePricingCards";
import Link from "next/link";

export default function PreisePage() {
  const [activeTab, setActiveTab] = useState("haarentfernung");

  return (
    <>
      <LandingHero
        title="Transparente Preise & individuelle Beratung"
        subtitle="Alle Preise verstehen sich als Orientierung laut Preisliste. Die konkrete Empfehlung richtet sich nach Behandlungszone, Umfang und gewünschtem Ergebnis. In der kostenlosen Beratung klären wir, welche Behandlung wirklich sinnvoll ist."
        primaryCtaLabel="Kostenlose Beratung buchen"
        primaryCtaHref="/termin"
      />

      <section className="bg-shell py-12 md:py-16">
        <div className="page-container max-w-5xl">
          
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {[
              { id: "haarentfernung", label: "Haarentfernung" },
              { id: "gesicht", label: "Gesicht" },
              { id: "koerper", label: "Körper" },
              { id: "pakete", label: "Pakete" }
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`px-6 py-3 rounded-full text-sm font-bold transition-all shadow-sm ${
                  activeTab === cat.id
                    ? "bg-aqua text-white shadow-md scale-105"
                    : "bg-white text-ink border border-line hover:bg-line"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="bg-white rounded-3xl p-6 md:p-10 shadow-sm border border-line min-h-[500px]">
            
            {activeTab === "haarentfernung" && (
              <div className="animate-in fade-in duration-500">
                <div className="mb-10 text-center">
                  <h2 className="text-2xl font-bold text-ink mb-2">Dauerhafte Haarentfernung</h2>
                  <p className="text-muted">Preise pro Sitzung. Profitieren Sie von unseren Kombi-Angeboten bei mehreren Zonen.</p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold text-slate mb-4 border-b border-line pb-2">Damen Gesicht</h3>
                    <ul className="space-y-3">
                      <li className="flex justify-between text-sm"><span className="text-ink">Oberlippe / Kinn</span><span className="font-semibold text-aqua">ab € 68,-</span></li>
                      <li className="flex justify-between text-sm"><span className="text-ink">Wangen</span><span className="font-semibold text-aqua">€ 88,-</span></li>
                      <li className="flex justify-between text-sm"><span className="text-ink font-medium">Gesicht-Kombi (4 Zonen)</span><span className="font-bold text-aqua">€ 138,-</span></li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate mb-4 border-b border-line pb-2">Herren Gesicht</h3>
                    <ul className="space-y-3">
                      <li className="flex justify-between text-sm"><span className="text-ink">Hals</span><span className="font-semibold text-aqua">€ 88,-</span></li>
                      <li className="flex justify-between text-sm"><span className="text-ink">Nacken</span><span className="font-semibold text-aqua">€ 96,-</span></li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate mb-4 border-b border-line pb-2">Körper Damen</h3>
                    <ul className="space-y-3">
                      <li className="flex justify-between text-sm"><span className="text-ink">Achseln</span><span className="font-semibold text-aqua">€ 88,-</span></li>
                      <li className="flex justify-between text-sm"><span className="text-ink">Bikini</span><span className="font-semibold text-aqua">€ 108,-</span></li>
                      <li className="flex justify-between text-sm"><span className="text-ink">Unterschenkel</span><span className="font-semibold text-aqua">€ 178,-</span></li>
                      <li className="flex justify-between text-sm"><span className="text-ink">Ganze Beine</span><span className="font-semibold text-aqua">€ 277,-</span></li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate mb-4 border-b border-line pb-2">Körper Herren</h3>
                    <ul className="space-y-3">
                      <li className="flex justify-between text-sm"><span className="text-ink">Achseln</span><span className="font-semibold text-aqua">€ 88,-</span></li>
                      <li className="flex justify-between text-sm"><span className="text-ink">Brust</span><span className="font-semibold text-aqua">€ 158,-</span></li>
                      <li className="flex justify-between text-sm"><span className="text-ink">Bauch</span><span className="font-semibold text-aqua">€ 128,-</span></li>
                      <li className="flex justify-between text-sm"><span className="text-ink">Rücken ganz</span><span className="font-semibold text-aqua">€ 248,-</span></li>
                    </ul>
                  </div>
                </div>

                <div className="mt-12 p-6 bg-shell rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-6">
                  <div>
                    <h4 className="font-bold text-ink mb-1">Paket-Angebot Haarentfernung</h4>
                    <p className="text-sm text-muted">1 Hauptzone voll, bis zu 2 weitere Zonen 50% Rabatt.</p>
                  </div>
                  <Link href="/termin" className="shrink-0 bg-aqua text-white px-6 py-2.5 rounded-xl font-medium shadow-sm hover:opacity-90 transition-colors text-sm">
                    Beratung buchen
                  </Link>
                </div>
              </div>
            )}

            {activeTab === "gesicht" && (
              <div className="animate-in fade-in duration-500">
                <div className="mb-10 text-center">
                  <h2 className="text-2xl font-bold text-ink mb-2">Gesicht & Anti-Aging</h2>
                  <p className="text-muted">Effektive Methoden für ein frisches, strahlendes Hautbild.</p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-shell/50 p-6 rounded-2xl border border-line">
                    <h3 className="text-xl font-bold text-slate mb-2">CFU ÈLIFE Facelifting</h3>
                    <p className="text-sm text-muted mb-4">Hautstraffung mit Ultraschall.</p>
                    <ul className="space-y-3">
                      <li className="flex justify-between text-sm"><span className="text-ink">Full Face</span><span className="font-semibold text-aqua">€ 420,-</span></li>
                      <li className="flex justify-between text-sm"><span className="text-ink">Untergesicht</span><span className="font-semibold text-aqua">€ 380,-</span></li>
                      <li className="flex justify-between text-sm"><span className="text-ink">Hals</span><span className="font-semibold text-aqua">€ 300,-</span></li>
                    </ul>
                  </div>
                  
                  <div className="bg-shell/50 p-6 rounded-2xl border border-line">
                    <h3 className="text-xl font-bold text-slate mb-2">BYONIK Biolifting</h3>
                    <p className="text-sm text-muted mb-4">Laser & Hyaluron für Volumen und Glow.</p>
                    <ul className="space-y-3">
                      <li className="flex justify-between text-sm"><span className="text-ink">Classic Facial</span><span className="font-semibold text-aqua">€ 185,-</span></li>
                      <li className="flex justify-between text-sm"><span className="text-ink">Gesicht & Hals</span><span className="font-semibold text-aqua">€ 225,-</span></li>
                      <li className="flex justify-between text-sm"><span className="text-ink">Glowing Skin</span><span className="font-semibold text-aqua">€ 135,-</span></li>
                    </ul>
                  </div>

                  <div className="bg-shell/50 p-6 rounded-2xl border border-line">
                    <h3 className="text-xl font-bold text-slate mb-2">Microdermabrasion</h3>
                    <p className="text-sm text-muted mb-4">Hauterneuerung und Tiefenreinigung.</p>
                    <ul className="space-y-3">
                      <li className="flex justify-between text-sm"><span className="text-ink">Einzelbehandlung</span><span className="font-semibold text-aqua">€ 135,-</span></li>
                      <li className="flex justify-between text-sm"><span className="text-ink font-medium">3er Kur Gesicht</span><span className="font-bold text-aqua">€ 390,-</span></li>
                    </ul>
                  </div>
                </div>

                <div className="mt-12 flex justify-center gap-4">
                  <Link href="/termin" className="bg-aqua text-white px-8 py-3 rounded-xl font-medium shadow-sm hover:opacity-90 transition-colors">
                    Beratung zu diesen Preisen buchen
                  </Link>
                  <a href="https://api.whatsapp.com/send/?phone=436781330011" target="_blank" rel="noopener noreferrer" className="border border-line bg-white text-ink px-8 py-3 rounded-xl font-medium shadow-sm hover:bg-shell transition-colors">
                    WhatsApp-Frage stellen
                  </a>
                </div>
              </div>
            )}

            {activeTab === "koerper" && (
              <div className="animate-in fade-in duration-500">
                <div className="mb-10 text-center">
                  <h2 className="text-2xl font-bold text-ink mb-2">Körperformung & Straffung</h2>
                  <p className="text-muted">Gezielte Anwendungen für Bauch, Beine, Po und mehr.</p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-lg font-bold text-slate mb-2">KryoShape</h3>
                    <ul className="space-y-2">
                      <li className="flex justify-between text-sm border-b border-line pb-2"><span className="text-ink">Eine Zone je nach Areal</span><span className="font-semibold text-aqua">ab € 350,-</span></li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate mb-2">RF-SCULPTING ULTRA</h3>
                    <ul className="space-y-2">
                      <li className="flex justify-between text-sm border-b border-line pb-2"><span className="text-ink">1 Zone</span><span className="font-semibold text-aqua">€ 180,-</span></li>
                      <li className="flex justify-between text-sm border-b border-line pb-2"><span className="text-ink">2 Zonen</span><span className="font-semibold text-aqua">€ 200,-</span></li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate mb-2">TriLipo Maximus</h3>
                    <ul className="space-y-2">
                      <li className="flex justify-between text-sm border-b border-line pb-2"><span className="text-ink">Einzelanwendung</span><span className="font-semibold text-aqua">€ 210,-</span></li>
                      <li className="flex justify-between text-sm border-b border-line pb-2"><span className="text-ink font-medium">3er Karte</span><span className="font-semibold text-aqua">€ 585,-</span></li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate mb-2">Akustische Wellentherapie</h3>
                    <ul className="space-y-2">
                      <li className="flex justify-between text-sm border-b border-line pb-2"><span className="text-ink">Einzelsitzung</span><span className="font-semibold text-aqua">€ 185,-</span></li>
                      <li className="flex justify-between text-sm border-b border-line pb-2"><span className="text-ink font-medium">3er Karte</span><span className="font-semibold text-aqua">€ 525,-</span></li>
                    </ul>
                  </div>
                </div>

                <div className="mt-12 flex justify-center gap-4">
                  <Link href="/termin" className="bg-aqua text-white px-8 py-3 rounded-xl font-medium shadow-sm hover:opacity-90 transition-colors">
                    Beratung zu diesen Preisen buchen
                  </Link>
                  <a href="https://api.whatsapp.com/send/?phone=436781330011" target="_blank" rel="noopener noreferrer" className="border border-line bg-white text-ink px-8 py-3 rounded-xl font-medium shadow-sm hover:bg-shell transition-colors">
                    WhatsApp-Frage stellen
                  </a>
                </div>
              </div>
            )}

            {activeTab === "pakete" && (
              <div className="animate-in fade-in duration-500">
                <div className="mb-10 text-center">
                  <h2 className="text-2xl font-bold text-ink mb-2">Individuelle Pakete</h2>
                  <p className="text-muted">Die besten Ergebnisse erzielen Sie durch Kombinationen.</p>
                </div>
                
                <PackagePricingCards />

              </div>
            )}

          </div>

        </div>
      </section>
    </>
  );
}
