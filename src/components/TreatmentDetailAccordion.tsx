"use client";
import { useState } from "react";
import Link from "next/link";

interface TreatmentDetail {
  title: string;
  shortDesc: string;
  benefits: string[];
  forWhom?: string;
  priceLink: string;
  bookLink: string;
  bookLabel?: string;
}

interface TreatmentDetailAccordionProps {
  treatments: TreatmentDetail[];
}

export function TreatmentDetailAccordion({ treatments }: TreatmentDetailAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="w-full max-w-4xl mx-auto space-y-4">
      {treatments.map((t, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div key={idx} className={`bg-white border rounded-2xl overflow-hidden transition-all duration-300 ${isOpen ? 'border-aqua/50 shadow-md' : 'border-line shadow-sm'}`}>
            <button
              onClick={() => toggle(idx)}
              className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none focus-visible:bg-shell group"
            >
              <div>
                <h3 className="text-xl font-bold text-ink group-hover:text-aqua transition-colors">{t.title}</h3>
                <p className="text-muted mt-1 pr-8">{t.shortDesc}</p>
              </div>
              <div className={`shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-colors ${isOpen ? 'bg-aqua text-white' : 'bg-shell text-ink group-hover:bg-line'}`}>
                <svg
                  className={`w-5 h-5 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                  fill="none" viewBox="0 0 24 24" stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </button>
            
            <div
              className={`transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}
              style={{ overflow: 'hidden' }}
            >
              <div className="px-6 pb-6 pt-2 border-t border-line/50">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-ink mb-2">Vorteile & Wirkung</h4>
                    <ul className="space-y-2">
                      {t.benefits.map((benefit, bIdx) => (
                        <li key={bIdx} className="flex items-start text-sm text-muted">
                          <svg className="w-4 h-4 text-aqua mr-2 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                    {t.forWhom && (
                      <div className="mt-4">
                        <h4 className="font-semibold text-ink mb-1">Für wen geeignet?</h4>
                        <p className="text-sm text-muted">{t.forWhom}</p>
                      </div>
                    )}
                  </div>
                  
                  <div className="flex flex-col justify-end space-y-3 bg-shell/50 p-5 rounded-xl border border-line/50">
                    <Link
                      href={t.bookLink}
                      className="w-full text-center rounded-xl bg-aqua py-3 px-4 text-sm font-medium text-white shadow-sm hover:opacity-90 transition-colors"
                    >
                      {t.bookLabel || "Beratung buchen"}
                    </Link>
                    <Link
                      href={t.priceLink}
                      className="w-full text-center rounded-xl bg-white border border-line py-3 px-4 text-sm font-medium text-ink hover:bg-line transition-colors"
                    >
                      Preise ansehen
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
