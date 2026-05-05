import Link from "next/link";
import { SocialContactBar } from "./SocialContactBar";

export function LocationContactSection() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="page-container max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-ink mb-4">Hier finden Sie uns</h2>
              <p className="text-muted text-lg">
                Ihre Praxis für ästhetische Behandlungen im Herzen von Dornbirn.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-shell rounded-full flex items-center justify-center text-xl shrink-0 mt-1">📍</div>
                <div>
                  <h3 className="font-semibold text-ink text-lg mb-1">Adresse</h3>
                  <p className="text-muted">med fit wohlfühlschön<br/>Am Kehlerpark 2<br/>A-6850 Dornbirn</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-shell rounded-full flex items-center justify-center text-xl shrink-0 mt-1">📞</div>
                <div>
                  <h3 className="font-semibold text-ink text-lg mb-1">Kontakt</h3>
                  <p className="text-muted mb-2">Telefon: <a href="tel:+436781330011" className="text-aqua hover:underline">+43 678 133 00 11</a></p>
                  <p className="text-muted">E-Mail: <a href="mailto:office@med-fit.com" className="text-aqua hover:underline">office@med-fit.com</a></p>
                </div>
              </div>
            </div>

            <SocialContactBar />

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="https://www.google.com/maps/place/med+fit+wohlf%C3%BChlsch%C3%B6n./@47.4169536,9.7491651,1524m/data=!3m3!1e3!4b1!5s0x479b6b455c6bb0e9:0x5a787c663f178462!4m6!3m5!1s0x479b6b4556deae85:0x2e0b46353abcba0a!8m2!3d47.4169536!4d9.75174!16s%2Fg%2F1tjv2gxx?hl=de&entry=ttu"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex justify-center items-center rounded-xl bg-ink px-6 py-3 text-sm font-medium text-white shadow-sm hover:bg-slate transition-colors"
              >
                Route mit Google Maps
              </a>
              <a
                href="https://maps.apple.com/?q=med%20fit%20wohlf%C3%BChlsch%C3%B6n%20Am%20Kehlerpark%202%206850%20Dornbirn"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex justify-center items-center rounded-xl bg-white border border-line px-6 py-3 text-sm font-medium text-ink hover:bg-shell transition-colors"
              >
                Route mit Apple Maps
              </a>
            </div>
          </div>

          <div className="relative h-[400px] md:h-[500px] rounded-3xl overflow-hidden border border-line shadow-sm">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2691.077644917079!2d9.7491651!3d47.4169536!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479b6b4556deae85%3A0x2e0b46353abcba0a!2smed%20fit%20wohlf%C3%BChlsch%C3%B6n.!5e0!3m2!1sde!2sat!4v1700000000000!5m2!1sde!2sat" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={false} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0"
              title="Google Maps Location"
            ></iframe>
          </div>

        </div>
      </div>
    </section>
  );
}
