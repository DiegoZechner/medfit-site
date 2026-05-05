"use client";
import Link from "next/link";
import { SectionReveal } from "./SectionReveal";

interface AnimatedTreatmentCardsProps {}

export function AnimatedTreatmentCards({}: AnimatedTreatmentCardsProps) {
  return (
    <div className="relative w-full max-w-6xl mx-auto">
      {/* Background building block on scroll */}
      <SectionReveal className="absolute inset-0 top-12 -bottom-12 md:top-24 md:-bottom-24 bg-shell/50 md:bg-aqua/5 rounded-3xl -z-10" direction="none" delay={300}>
        <div className="w-full h-full" />
      </SectionReveal>

      <div className="grid gap-6 md:gap-8 md:grid-cols-3">
        {/* Card 1 */}
        <SectionReveal delay={100}>
          <Link href="/haarentfernung-dornbirn" className="group block h-full">
            <div className="flex flex-col h-full rounded-3xl border border-line bg-white/80 backdrop-blur-sm p-8 shadow-sm transition-all duration-300 hover:shadow-xl hover:border-aqua/30 hover:-translate-y-1">
              <div className="w-12 h-12 bg-shell rounded-full flex items-center justify-center mb-6 group-hover:bg-aqua/10 transition-colors">
                <span className="text-xl group-hover:scale-110 transition-transform">✨</span>
              </div>
              <h3 className="mb-3 text-2xl font-bold text-ink">Haarentfernung</h3>
              <p className="mb-8 flex-1 text-muted text-lg">
                Weniger Rasur, weniger Hautstress – glatte Haut mit moderner XLASE PLUS Technologie.
              </p>
              <div className="inline-flex items-center text-aqua font-medium group-hover:text-ink transition-colors">
                Haarentfernung ansehen
                <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </div>
          </Link>
        </SectionReveal>

        {/* Card 2 */}
        <SectionReveal delay={200}>
          <Link href="/gesichtsbehandlung-dornbirn" className="group block h-full">
            <div className="flex flex-col h-full rounded-3xl border border-line bg-white/80 backdrop-blur-sm p-8 shadow-sm transition-all duration-300 hover:shadow-xl hover:border-aqua/30 hover:-translate-y-1">
              <div className="w-12 h-12 bg-shell rounded-full flex items-center justify-center mb-6 group-hover:bg-aqua/10 transition-colors">
                <span className="text-xl group-hover:scale-110 transition-transform">💆‍♀️</span>
              </div>
              <h3 className="mb-3 text-2xl font-bold text-ink">Gesicht</h3>
              <p className="mb-8 flex-1 text-muted text-lg">
                Anti-Aging, Hautstraffung, Byonik, CFU ÈLIFE und Microdermabrasion für frischere Haut.
              </p>
              <div className="inline-flex items-center text-aqua font-medium group-hover:text-ink transition-colors">
                Gesicht ansehen
                <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </div>
          </Link>
        </SectionReveal>

        {/* Card 3 */}
        <SectionReveal delay={300}>
          <Link href="/koerperformung-dornbirn" className="group block h-full">
            <div className="flex flex-col h-full rounded-3xl border border-line bg-white/80 backdrop-blur-sm p-8 shadow-sm transition-all duration-300 hover:shadow-xl hover:border-aqua/30 hover:-translate-y-1">
              <div className="w-12 h-12 bg-shell rounded-full flex items-center justify-center mb-6 group-hover:bg-aqua/10 transition-colors">
                <span className="text-xl group-hover:scale-110 transition-transform">🌿</span>
              </div>
              <h3 className="mb-3 text-2xl font-bold text-ink">Körper</h3>
              <p className="mb-8 flex-1 text-muted text-lg">
                Körperformung, Hautstraffung, Fettabbau und Cellulite-Behandlungen ohne OP.
              </p>
              <div className="inline-flex items-center text-aqua font-medium group-hover:text-ink transition-colors">
                Körper ansehen
                <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </div>
          </Link>
        </SectionReveal>
      </div>
    </div>
  );
}
