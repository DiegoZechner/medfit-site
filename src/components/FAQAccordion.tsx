"use client";

import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
}

export function FAQAccordion({ items }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="divide-y divide-line rounded-xl border border-line bg-white">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={index} className="px-6 py-4">
            <button
              className="flex w-full items-center justify-between text-left text-base font-semibold text-ink outline-none focus-visible:ring-2 focus-visible:ring-aqua focus-visible:ring-offset-2"
              onClick={() => toggle(index)}
              aria-expanded={isOpen}
            >
              <span className="pr-4">{item.question}</span>
              <svg
                className={`h-5 w-5 text-muted transition-transform ${
                  isOpen ? "rotate-180" : ""
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {isOpen && (
              <div className="mt-4 pr-12 text-sm text-muted leading-relaxed">
                {item.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
