"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export function StickyMobileCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show CTA after scrolling down a bit
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 z-40 w-full border-t border-line bg-white px-4 py-3 pb-safe shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)] md:hidden">
      <div className="flex gap-3">
        <a
          href="tel:+436781330011"
          className="flex flex-1 items-center justify-center rounded-xl border border-line bg-shell px-4 py-3 text-sm font-medium text-ink shadow-sm"
        >
          Anrufen
        </a>
        <Link
          href="/termin"
          className="flex flex-[2] items-center justify-center rounded-xl bg-aqua px-4 py-3 text-sm font-medium text-white shadow-sm"
        >
          Beratung buchen
        </Link>
      </div>
    </div>
  );
}
