"use client";
import { useState, useEffect } from "react";

const reviews = [
  {
    name: "Vera La",
    text: "Ich bin wirklich überwältigt von Medfit! Schon beim Betreten merkt man, wie hervorragend alles organisiert ist und wie viel Liebe zum Detail hier steckt.",
    time: "vor 2 Monaten"
  },
  {
    name: "Julia M",
    text: "Herbert, Andrea und das ganze Team sind nicht nur extrem freundlich und herzlich, sondern auch richtig professionell und zuvorkommend.",
    time: "vor 1 Monat"
  },
  {
    name: "Daniela Pichler",
    text: "Sehr freundliche und kompetente Mitarbeiter. Immer auf dem neuesten Stand und sehr professionell in Ihrem Tun.",
    time: "vor 3 Monaten"
  },
  {
    name: "Corinna",
    text: "Super freundliches Team, super tolle Beratung. Behandlungen sind professionell, man fühlt sich von Anfang an wohl.",
    time: "vor 4 Monaten"
  },
  {
    name: "Timeja Jakupi",
    text: "Das Studio ist sehr modern und man fühlt sich sehr wohl. Alle sind sehr freundlich und meine Probleme wurden ernst genommen.",
    time: "vor 5 Monaten"
  },
  {
    name: "Jana Salome Bertsch",
    text: "Das Studio ist modern, hygienisch und das Team super freundlich. Die Behandlung war professionell, schmerzarm und wurde mir genau erklärt.",
    time: "vor 6 Monaten"
  },
  {
    name: "Florian Mayr",
    text: "Top Beratung und individuelle Behandlung der Problemzone. Danke an das gesamte Team.",
    time: "vor 2 Monaten"
  },
  {
    name: "Michael Matiz",
    text: "Sehr gute, kompetente und ausführliche Beratung. Die Behandlung wurde professionell und sorgfältig durchgeführt.",
    time: "vor 1 Monat"
  },
  {
    name: "Sidra1801 Isa Ahmed",
    text: "Egal ob Körper-, Gesichts- oder Haarentfernung – ich fühle mich jedes Mal bestens aufgehoben.",
    time: "vor 3 Monaten"
  }
];

export function ReviewCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-scroll on desktop
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const getVisibleReviews = () => {
    // Show 3 at a time on desktop
    const items = [];
    for (let i = 0; i < 3; i++) {
      items.push(reviews[(currentIndex + i) % reviews.length]);
    }
    return items;
  };

  return (
    <div className="w-full py-12">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-ink mb-4">Das sagen unsere Kunden</h2>
        <div className="flex justify-center items-center space-x-1 mb-2">
          {[1, 2, 3, 4, 5].map((s) => (
            <svg key={s} className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
        <p className="text-muted font-medium">Google Bewertungen ansehen</p>
      </div>

      <div className="relative max-w-6xl mx-auto px-4">
        {/* Mobile: Horizontal scroll snap */}
        <div className="flex md:hidden overflow-x-auto snap-x snap-mandatory pb-8 space-x-4 -mx-4 px-4 scrollbar-hide">
          {reviews.map((review, idx) => (
            <div key={idx} className="snap-center shrink-0 w-[85vw] max-w-sm bg-white rounded-3xl p-6 shadow-sm border border-line">
              <div className="flex items-center space-x-1 mb-3">
                {[1, 2, 3, 4, 5].map((s) => (
                  <svg key={s} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-muted mb-6 text-sm italic">&quot;{review.text}&quot;</p>
              <div className="flex justify-between items-end mt-auto">
                <div>
                  <p className="font-semibold text-ink">{review.name}</p>
                  <p className="text-xs text-muted/70">{review.time}</p>
                </div>
                <div className="bg-shell px-2 py-1 rounded text-xs font-medium text-muted">
                  Google Bewertung
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop: 3 cards display */}
        <div className="hidden md:grid grid-cols-3 gap-6 transition-all duration-500">
          {getVisibleReviews().map((review, idx) => (
            <div key={`${currentIndex}-${idx}`} className="bg-white rounded-3xl p-8 shadow-sm border border-line flex flex-col animate-in fade-in zoom-in-95 duration-500">
              <div className="flex items-center space-x-1 mb-4">
                {[1, 2, 3, 4, 5].map((s) => (
                  <svg key={s} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-muted flex-1 mb-8 italic">&quot;{review.text}&quot;</p>
              <div className="flex justify-between items-end">
                <div>
                  <p className="font-semibold text-ink">{review.name}</p>
                  <p className="text-sm text-muted/70">{review.time}</p>
                </div>
                <div className="bg-shell px-2 py-1 rounded text-xs font-medium text-muted">
                  Google Bewertung
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://www.google.com/maps/place/med+fit+wohlf%C3%BChlsch%C3%B6n./@47.4169536,9.7491651,1524m/data=!3m3!1e3!4b1!5s0x479b6b455c6bb0e9:0x5a787c663f178462!4m6!3m5!1s0x479b6b4556deae85:0x2e0b46353abcba0a!8m2!3d47.4169536!4d9.75174!16s%2Fg%2F1tjv2gxx?hl=de&entry=ttu"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3 rounded-xl border border-line bg-white text-ink font-medium hover:bg-shell transition-colors shadow-sm hover:shadow"
          >
            Alle Bewertungen auf Google ansehen
          </a>
        </div>
      </div>
    </div>
  );
}
