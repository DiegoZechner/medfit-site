import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-slate pt-12 pb-8">
      <div className="page-container">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-12 lg:gap-16">
          {/* Kontakt / NAP */}
          <div className="flex flex-col gap-4 text-sm text-shell/80">
            <h3 className="text-base font-semibold text-white">Kontakt</h3>
            <div className="flex flex-col gap-1">
              <span className="font-medium text-white">med fit wohlfühlschön</span>
              <span>Am Kehlerpark 2</span>
              <span>A-6850 Dornbirn</span>
            </div>
            <div className="flex flex-col gap-1 mt-2">
              <a href="tel:+436781330011" className="hover:text-aqua transition-colors">
                +43 678 133 00 11
              </a>
              <a href="mailto:office@med-fit.com" className="hover:text-aqua transition-colors">
                office@med-fit.com
              </a>
            </div>
          </div>

          {/* Behandlungen */}
          <div className="flex flex-col gap-4 text-sm text-shell/80">
            <h3 className="text-base font-semibold text-white">Behandlungen</h3>
            <div className="flex flex-col gap-2">
              <Link href="/haarentfernung-dornbirn" className="hover:text-aqua transition-colors">
                Haarentfernung Dornbirn
              </Link>
              <Link href="/gesichtsbehandlung-dornbirn" className="hover:text-aqua transition-colors">
                Gesichtsbehandlungen
              </Link>
              <Link href="/koerperformung-dornbirn" className="hover:text-aqua transition-colors">
                Körperformung
              </Link>
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-col gap-4 text-sm text-shell/80">
            <h3 className="text-base font-semibold text-white">Informationen</h3>
            <div className="flex flex-col gap-2">
              <Link href="/preise" className="hover:text-aqua transition-colors">
                Preise
              </Link>
              <Link href="/faq" className="hover:text-aqua transition-colors">
                FAQ
              </Link>
              <Link href="/termin" className="hover:text-aqua transition-colors">
                Beratung buchen
              </Link>
              <Link href="/ueber-uns" className="hover:text-aqua transition-colors">
                Über uns
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-shell/20 pt-8 text-xs text-shell/60 md:flex-row">
          <p>© {new Date().getFullYear()} med fit wohlfühlschön in Dornbirn</p>
          <div className="flex gap-4">
            <Link href="/impressum" className="hover:text-aqua transition-colors">
              Impressum
            </Link>
            <Link href="/datenschutz" className="hover:text-aqua transition-colors">
              Datenschutz
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

