import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Section } from "@/components/Section";

export default function PricesPage() {
  return (
    <>
      <Header />
      <main className="flex-1 bg-white">
        <Section eyebrow="Preise" title="Orientierung zu unseren Behandlungspreisen">
          <p>
            Die genauen Preise hängen von Behandlung, Zone und Umfang ab. Hier finden
            Sie eine grobe Orientierung, damit Sie ein Gefühl für den Rahmen der
            Investition bekommen. In der persönlichen Beratung erstellen wir Ihnen
            gerne ein individuelles Angebot.
          </p>
        </Section>
        <Section eyebrow="Gesicht" title="Preise für Gesichtsbehandlungen">
          <p>
            Je nach Behandlung (z. B. CFU Èlife, Biolifting Byonik®, klassische
            Gesichtsbehandlung) und Region variieren die Kosten. Die aktuellen Preise
            können Sie direkt bei uns im Studio oder telefonisch erfragen.
          </p>
        </Section>
        <Section eyebrow="Körper" title="Preise für Körperbehandlungen">
          <p>
            Körperbehandlungen wie Kryolipolyse, RF-Sculpting oder TriLipo werden meist
            in Behandlungspaketen geplant. Die Kosten richten sich nach Zone, Anzahl der
            Applikatoren und empfohlenen Sitzungen.
          </p>
        </Section>
        <Section eyebrow="Haarfreiheit" title="Preise für dauerhafte Haarentfernung">
          <p>
            Die Preise richten sich nach Behandlungsfläche und Anzahl der Sitzungen.
            Gerne besprechen wir im Beratungsgespräch ein für Sie passendes Paket.
          </p>
        </Section>
      </main>
      <Footer />
    </>
  );
}

