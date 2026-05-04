"use client";

import Link from "next/link";
import { useState } from "react";

export function Header() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <header className="sticky top-0 z-20 border-b border-line bg-white/90 backdrop-blur">
      <div className="page-container flex items-center justify-between py-4">
        <Link href="/" className="flex flex-col" onClick={closeMenu}>
          <span className="text-base font-semibold tracking-wide text-ink">
            med fit
          </span>
          <span className="text-xs text-muted">wohlfühlschön</span>
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium text-ink md:flex">
          <Link href="/haarentfernung-dornbirn" className="hover:text-aqua transition-colors">
            Haarentfernung
          </Link>
          <Link href="/gesichtsbehandlung-dornbirn" className="hover:text-aqua transition-colors">
            Gesicht
          </Link>
          <Link href="/koerperformung-dornbirn" className="hover:text-aqua transition-colors">
            Körper
          </Link>
          <Link href="/preise" className="hover:text-aqua transition-colors">
            Preise
          </Link>
          <Link href="/faq" className="hover:text-aqua transition-colors">
            FAQ
          </Link>
          <Link href="/ueber-uns" className="hover:text-aqua transition-colors">
            Über uns
          </Link>
          <Link
            href="/termin"
            className="rounded-xl bg-aqua px-5 py-2.5 text-sm font-medium text-white shadow-sm hover:opacity-90 transition-colors"
          >
            Kostenlose Beratung buchen
          </Link>
        </nav>
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-xl border border-line bg-white px-3 py-1.5 text-sm font-medium text-ink shadow-sm hover:bg-shell md:hidden"
          onClick={() => setOpen((prev) => !prev)}
          aria-expanded={open}
          aria-label="Menü öffnen"
        >
          {open ? "Schließen" : "Menü"}
        </button>
      </div>
      {open && (
        <div className="border-t border-line bg-white md:hidden shadow-lg absolute w-full">
          <nav className="page-container flex flex-col gap-4 py-6 text-base font-medium text-ink">
            <Link href="/haarentfernung-dornbirn" onClick={closeMenu} className="hover:text-aqua">
              Haarentfernung
            </Link>
            <Link href="/gesichtsbehandlung-dornbirn" onClick={closeMenu} className="hover:text-aqua">
              Gesicht
            </Link>
            <Link href="/koerperformung-dornbirn" onClick={closeMenu} className="hover:text-aqua">
              Körper
            </Link>
            <Link href="/preise" onClick={closeMenu} className="hover:text-aqua">
              Preise
            </Link>
            <Link href="/faq" onClick={closeMenu} className="hover:text-aqua">
              FAQ
            </Link>
            <Link href="/ueber-uns" onClick={closeMenu} className="hover:text-aqua">
              Über uns
            </Link>
            <Link
              href="/termin"
              onClick={closeMenu}
              className="mt-4 flex items-center justify-center rounded-xl bg-aqua px-4 py-3 text-sm font-medium text-white shadow-sm hover:opacity-90 text-center"
            >
              Kostenlose Beratung buchen
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

