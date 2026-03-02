import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Section } from "@/components/Section";

export default function HairRemovalPage() {
  return (
    <>
      <Header />
      <main className="flex-1 bg-white">
        <Section eyebrow="Haarfreiheit" title="Dauerhafte Haarentfernung für glatte Haut">
          <p>
            Störende Haare können im Alltag sehr präsent sein – ob im Gesicht, an den
            Achseln, Beinen oder im Intimbereich. Mit moderner Technik zur dauerhaften
            Haarentfernung reduzieren wir die Behaarung gezielt an den Stellen, an denen
            sie Sie stört.
          </p>
          <p>
            Welche Methode bei Ihnen eingesetzt wird, hängt von Hauttyp, Haarstruktur
            und der jeweiligen Zone ab. In einem Beratungsgespräch besprechen wir Ablauf
            und realistische Ziele.
          </p>
        </Section>
        <Section eyebrow="Zonen" title="Typische Behandlungsbereiche">
          <ul className="space-y-2 text-sm text-slate-700 md:text-base">
            <li>• Gesicht (z. B. Oberlippe, Kinn, Wangen)</li>
            <li>• Achseln</li>
            <li>• Arme und Beine</li>
            <li>• Intimbereich / Bikinizone</li>
            <li>• Rücken und Brust</li>
          </ul>
          <p className="mt-4">
            Die Anzahl der nötigen Sitzungen ist individuell und wird im Rahmen der
            Beratung gemeinsam mit Ihnen geplant.
          </p>
        </Section>
      </main>
      <Footer />
    </>
  );
}

