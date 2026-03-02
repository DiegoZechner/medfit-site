"use client";

import Link from "next/link";
import { useState } from "react";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-20 border-b border-slate-100/80 bg-white/80 backdrop-blur">
      <div className="page-container flex items-center justify-between py-4">
        <Link href="/" className="flex items-baseline gap-2">
          <span className="text-sm font-semibold tracking-wide uppercase text-slate-700">
            med fit
          </span>
          <span className="text-xs text-slate-400">wohlfühlschön</span>
        </Link>
        <nav className="hidden items-center gap-6 text-sm text-slate-600 md:flex">
          <Link href="/koerperformung" className="hover:text-slate-900">
            Körperformung
          </Link>
          <Link href="/gesicht" className="hover:text-slate-900">
            Gesicht
          </Link>
          <Link href="/haarentfernung" className="hover:text-slate-900">
            Haarfreiheit
          </Link>
          <Link href="/preise" className="hover:text-slate-900">
            Preise
          </Link>
          <Link href="/faq" className="hover:text-slate-900">
            FAQ
          </Link>
          <Link href="/ueber-uns" className="hover:text-slate-900">
            Über uns
          </Link>
          <Link
            href="/termin"
            className="rounded-full bg-slate-900 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-slate-800"
          >
            Termin buchen
          </Link>
        </nav>
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-3 py-1.5 text-xs font-medium text-slate-700 shadow-sm hover:bg-slate-50 md:hidden"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Menü öffnen"
        >
          Menü
        </button>
      </div>
      {open && (
        <div className="border-t border-slate-100 bg-white md:hidden">
          <nav className="page-container flex flex-col gap-3 py-4 text-sm text-slate-700">
            <Link href="/koerperformung" onClick={() => setOpen(false)}>
              Körperformung
            </Link>
            <Link href="/gesicht" onClick={() => setOpen(false)}>
              Gesicht
            </Link>
            <Link href="/haarentfernung" onClick={() => setOpen(false)}>
              Haarfreiheit
            </Link>
            <Link href="/preise" onClick={() => setOpen(false)}>
              Preise
            </Link>
            <Link href="/faq" onClick={() => setOpen(false)}>
              FAQ
            </Link>
            <Link href="/ueber-uns" onClick={() => setOpen(false)}>
              Über uns
            </Link>
            <Link
              href="/termin"
              onClick={() => setOpen(false)}
              className="mt-1 inline-flex items-center justify-center rounded-full bg-slate-900 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-slate-800"
            >
              Termin buchen
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

