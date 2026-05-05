import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { ContactCTA } from "@/components/ContactCTA";
import { TrustChips } from "@/components/TrustChips";
import { ReviewCarousel } from "@/components/ReviewCarousel";

export const metadata: Metadata = {
  title: "Über uns | med fit wohlfühlschön Dornbirn",
  description:
    "Lernen Sie das Team von med fit wohlfühlschön in Dornbirn kennen. Seit dem Jahr 2000 begleiten wir Kundinnen und Kunden mit Erfahrung, Beratung und modernen Behandlungen.",
};

export default function AboutPage() {
  return (
    <>
      {/* 1. Hero section */}
      <section className="bg-white py-16 md:py-24 border-b border-line">
        <div className="page-container max-w-4xl text-center">
          <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-sand">
            Über uns
          </span>
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-ink sm:text-5xl md:text-6xl">
            med fit wohlfühlschön in Dornbirn
          </h1>
          <p className="mx-auto mb-8 max-w-3xl text-lg text-muted md:text-xl">
            Seit dem Jahr 2000 steht bei med fit wohlfühlschön der Mensch im Mittelpunkt. Unser Team verbindet Erfahrung, Fachwissen und Herzlichkeit, um Schönheit, Wohlbefinden und moderne Behandlungen individuell zu begleiten.
          </p>

          <div className="mb-10 flex justify-center">
            <TrustChips
              items={[
                "Seit 2000 in Dornbirn",
                "Persönliche Beratung",
                "Gesicht · Körper · Haarentfernung",
                "Moderne Technologien"
              ]}
            />
          </div>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/termin"
              className="w-full sm:w-auto rounded-xl bg-aqua px-8 py-3.5 text-base font-medium text-white shadow-sm hover:opacity-90 transition-colors text-center"
            >
              Kostenlose Beratung buchen
            </Link>
            <Link
              href="#team"
              className="w-full sm:w-auto rounded-xl border border-line bg-white px-8 py-3.5 text-base font-medium text-slate hover:bg-shell transition-colors text-center"
            >
              Team kennenlernen
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Intro section */}
      <section className="bg-shell py-16 md:py-24 border-b border-line">
        <div className="page-container max-w-5xl">
          <div className="grid gap-12 lg:grid-cols-[1fr_300px]">
            <div>
              <h2 className="mb-6 text-3xl font-bold text-ink md:text-4xl">
                Schönheit beginnt bei uns
              </h2>
              <div className="space-y-6 text-lg text-muted leading-relaxed">
                <p>
                  Mit Leidenschaft, Einfühlungsvermögen und Innovationsgeist setzen wir auf Qualität, Vertrauen und individuelle Betreuung. Ob klassische Anwendungen oder modernste apparative Behandlungen für dauerhafte Haarentfernung, Hautstraffung und Körperformung – wir freuen uns, Sie in unserer Praxis in Dornbirn begrüßen zu dürfen.
                </p>
                <p>
                  Sicherheit und Hygiene stehen dabei an oberster Stelle. Wir arbeiten ausschließlich mit zertifizierten, erprobten Technologien.
                </p>
              </div>
            </div>
            
            {/* Location Card */}
            <div className="rounded-2xl border border-line bg-white p-8 shadow-sm flex flex-col justify-center text-center">
              <h3 className="mb-4 text-xl font-bold text-slate">Unsere Praxis</h3>
              <div className="space-y-2 text-sm text-ink mb-6">
                <p className="font-semibold">med fit wohlfühlschön</p>
                <p>Am Kehlerpark 2</p>
                <p>A-6850 Dornbirn</p>
              </div>
              <a
                href="https://www.google.com/maps/place/med+fit+wohlf%C3%BChlsch%C3%B6n./@47.4169536,9.7491651,1524m/data=!3m3!1e3!4b1!5s0x479b6b455c6bb0e9:0x5a787c663f178462!4m6!3m5!1s0x479b6b4556deae85:0x2e0b46353abcba0a!8m2!3d47.4169536!4d9.75174!16s%2Fg%2F1tjv2gxx?hl=de&entry=ttu"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full justify-center rounded-xl bg-ink px-4 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-slate transition-colors"
              >
                Route planen
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Team section */}
      <section id="team" className="bg-white py-20 md:py-32 border-b border-line scroll-mt-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-20 text-center">
            <h2 className="mb-6 text-3xl font-bold text-ink md:text-4xl">Unser Team</h2>
            <p className="mx-auto max-w-2xl text-lg text-muted">
              Lernen Sie die Menschen kennen, die med fit wohlfühlschön prägen – mit Erfahrung, Fachwissen und einem offenen Blick für Ihre persönlichen Ziele.
            </p>
          </div>

          <div className="space-y-24 md:space-y-32">
            <TeamMemberRow
              name="Herbert F. Graf"
              role="Geschäftsführer · Bodyforming & KryoShape"
              imageSrc="/Pictures/Herbert%20F.%20Graf.jpg"
              imageAlt="Porträt von Herbert F. Graf, Geschäftsführer von med fit wohlfühlschön in Dornbirn"
              paragraphs={[
                "Herbert Graf ist Spezialist für Bodyforming und KryoShape-Behandlungen. Mit Erfahrung, technischem Know-how und einem ganzheitlichen Blick erstellt er individuelle Behandlungskonzepte für persönliche Ziele.",
                "Als ausgebildeter Sporttherapeut, Heilpraktiker und Golf-Physio-Instructor verbindet er moderne Methoden mit einem klaren Verständnis für Körper, Ästhetik und Wohlbefinden."
              ]}
              tags={["Bodyforming", "KryoShape", "Sporttherapie"]}
            />

            <TeamMemberRow
              name="Andrea Graf"
              role="Byonik · Hautpflege · Organisation"
              imageSrc="/Pictures/Andrea%20Graf.jpg"
              imageAlt="Porträt von Andrea Graf, Expertin für Byonik und Gesichtsbehandlungen bei med fit wohlfühlschön in Dornbirn"
              paragraphs={[
                "Andrea Graf ist Expertin für Byonik-Anwendungen und ganzheitliche Hautpflege. Mit Feingefühl, Fachwissen und einem geschulten Blick begleitet sie Kundinnen und Kunden zu einem frischen Hautgefühl.",
                "Zusätzlich verantwortet sie Terminmanagement, Social Media, Marketing und Organisation bei med fit wohlfühlschön."
              ]}
              tags={["Byonik", "Hautpflege", "Organisation"]}
              reverse
            />

            <TeamMemberRow
              name="Gabriele Strobl"
              role="Dauerhafte Haarentfernung"
              imageSrc="/Pictures/Gabriele%20Strobl.jpg"
              imageAlt="Porträt von Gabriele Strobl, Expertin für Haarlaser-Behandlungen bei med fit wohlfühlschön in Dornbirn"
              paragraphs={[
                "Gabi Strobl ist Expertin für dauerhafte Haarentfernung. Mit ruhiger Hand, technischem Know-how und viel Feingefühl begleitet sie Kundinnen und Kunden auf dem Weg zu glatter, gepflegter Haut.",
                "Ihre Behandlungen sind individuell abgestimmt auf Hauttyp, Wunschregion und persönliches Wohlbefinden."
              ]}
              tags={["Haarentfernung", "Laser", "Beratung"]}
            />

            <TeamMemberRow
              name="Yvonne Wetzel"
              role="Kosmetik · Haarentfernung · CFU-HIFU"
              imageSrc="/Pictures/Yvonne%20Wetzel.jpg"
              imageAlt="Porträt von Yvonne Wetzel, Expertin für Haarlaser- und CFU-Behandlungen bei med fit wohlfühlschön in Dornbirn"
              paragraphs={[
                "Yvonne ist Expertin für Kosmetik, dauerhafte Haarentfernung und hautstraffende Behandlungen mit CFU-HIFU. Seit November 2024 ergänzt sie das Team mit Erfahrung und Begeisterung für moderne Hautpflege.",
                "Ihr Fokus liegt auf Anti-Aging, individueller Hautpflege und persönlicher Beratung."
              ]}
              tags={["Kosmetik", "CFU-HIFU", "Anti-Aging"]}
              reverse
            />

            <TeamMemberRow
              name="Linda Graf"
              role="Back Office · Terminverwaltung · Onlinemarketing"
              imageSrc="/Pictures/Linda%20Graf.jpg"
              imageAlt="Porträt von Linda Graf, Freelancerin für Terminverwaltung und Marketing bei med fit wohlfühlschön"
              paragraphs={[
                "Linda unterstützt das Team im Back Office, vor allem in der Terminkoordination und im Onlinemarketing. Sie bringt Struktur, analytisches Denken und frische Impulse in die Organisation ein.",
                "Mit ihrem Hintergrund in Psychologie und Rechtspsychologie unterstützt sie med fit als freie Mitarbeiterin."
              ]}
              tags={["Back Office", "Terminverwaltung", "Marketing"]}
            />
          </div>
        </div>
      </section>

      {/* 4. Values section */}
      <section className="bg-shell py-16 md:py-24 border-b border-line">
        <div className="page-container max-w-5xl">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-ink md:text-4xl">Was uns wichtig ist</h2>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <ValueCard 
              title="Persönliche Beratung"
              text="Jede Behandlung beginnt mit einem klaren Blick auf Ihre Wünsche, Ihre Haut und Ihre Ziele."
            />
            <ValueCard 
              title="Moderne Methoden"
              text="Wir kombinieren Erfahrung mit apparativen Behandlungen für Gesicht, Körper und Haarentfernung."
            />
            <ValueCard 
              title="Ehrliche Erwartungen"
              text="Wir beraten transparent und erklären, welche Ergebnisse realistisch zu erwarten sind."
            />
            <ValueCard 
              title="Wohlfühlatmosphäre"
              text="Diskretion, Vertrauen und ein angenehmes Umfeld stehen bei jeder Behandlung im Mittelpunkt."
            />
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24 border-b border-line">
        <div className="page-container">
          <ReviewCarousel />
        </div>
      </section>

      {/* 5. Final CTA section */}
      <section className="bg-aqua py-16 md:py-24 text-white text-center px-4">
        <div className="page-container max-w-3xl">
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Lernen Sie uns persönlich kennen
          </h2>
          <p className="mx-auto mb-8 text-lg text-white/90">
            Ob Haarentfernung, Gesichtsbehandlung oder Körperformung – wir nehmen uns Zeit für Ihre Fragen und beraten Sie individuell.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/termin"
              className="w-full sm:w-auto rounded-xl bg-white px-8 py-3.5 text-base font-medium text-ink shadow-sm hover:bg-shell transition-colors"
            >
              Kostenlose Beratung buchen
            </Link>
            <a
              href="tel:+436781330011"
              className="w-full sm:w-auto rounded-xl border-2 border-white/30 bg-transparent px-8 py-3.5 text-base font-medium text-white hover:bg-white/10 transition-colors"
            >
              Jetzt anrufen
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

// Subcomponents

interface TeamMemberRowProps {
  name: string;
  role: string;
  imageSrc?: string;
  imageAlt: string;
  paragraphs: string[];
  tags: string[];
  reverse?: boolean;
}

function TeamMemberRow({ name, role, imageSrc, imageAlt, paragraphs, tags, reverse = false }: TeamMemberRowProps) {
  return (
    <div className={`flex flex-col gap-10 md:items-center ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} md:gap-16 lg:gap-24`}>
      <div className="flex-shrink-0 flex justify-center md:block">
        <div className="relative h-56 w-56 sm:h-64 sm:w-64 lg:h-72 lg:w-72 overflow-hidden rounded-full border-4 border-white shadow-md ring-1 ring-sand/40">
          {imageSrc ? (
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 224px, (max-width: 1024px) 256px, 288px"
            />
          ) : (
            <div className="h-full w-full flex items-center justify-center bg-shell text-4xl font-semibold text-slate">
              LG
            </div>
          )}
        </div>
      </div>
      
      <div className="flex-1 text-center md:text-left max-w-2xl mx-auto md:mx-0">
        <h3 className="text-3xl font-bold text-slate mb-2">{name}</h3>
        <p className="text-base font-medium text-aqua mb-6">{role}</p>
        
        <div className="space-y-4 text-base text-muted mb-8 leading-relaxed">
          {paragraphs.map((p, idx) => (
            <p key={idx}>{p}</p>
          ))}
        </div>
        
        <div className="flex flex-wrap gap-2 justify-center md:justify-start">
          {tags.map((tag, idx) => (
            <span key={idx} className="rounded-full bg-shell border border-line px-4 py-1.5 text-sm font-medium text-slate">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function ValueCard({ title, text }: { title: string, text: string }) {
  return (
    <div className="rounded-2xl border border-line bg-white p-6 shadow-sm text-center flex flex-col items-center">
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-sand/20 text-slate">
        <span className="text-xl">✨</span>
      </div>
      <h3 className="mb-3 text-lg font-bold text-slate">{title}</h3>
      <p className="text-sm text-muted">{text}</p>
    </div>
  );
}
