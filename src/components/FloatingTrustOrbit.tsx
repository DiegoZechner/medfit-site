"use client";
import { useEffect, useState } from "react";

export function FloatingTrustOrbit() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const trustPoints = [
    { title: "Persönliche Beratung", icon: "💬" },
    { title: "Moderne Technologie", icon: "✨" },
    { title: "Erfahrung seit 2000", icon: "📅" },
    { title: "Natürliche Ergebnisse", icon: "🌿" },
  ];

  return (
    <div className="w-full py-16 flex flex-col items-center justify-center overflow-hidden">
      {/* Mobile view: Stacked cards */}
      <div className="md:hidden w-full max-w-sm px-4 space-y-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-ink">Warum med fit?</h2>
        </div>
        {trustPoints.map((point, idx) => (
          <div key={idx} className="flex items-center space-x-4 bg-white border border-line p-5 rounded-2xl shadow-sm">
            <span className="text-2xl bg-shell w-12 h-12 flex items-center justify-center rounded-full">{point.icon}</span>
            <span className="font-semibold text-ink">{point.title}</span>
          </div>
        ))}
      </div>

      {/* Desktop view: Orbit */}
      <div className="hidden md:flex relative w-[600px] h-[600px] items-center justify-center">
        {/* Center */}
        <div className="absolute z-10 bg-white shadow-xl border border-line/50 w-48 h-48 rounded-full flex flex-col items-center justify-center text-center">
          <h2 className="text-2xl font-bold text-ink font-serif leading-tight">Warum<br/>med fit?</h2>
        </div>

        {/* Orbit Rings */}
        <div className="absolute w-[400px] h-[400px] rounded-full border border-line/30"></div>
        <div className="absolute w-[550px] h-[550px] rounded-full border border-line/10"></div>

        {/* Floating Items */}
        {mounted && (
          <div className="absolute inset-0 motion-safe:animate-[spin_40s_linear_infinite]">
            {trustPoints.map((point, idx) => {
              const angle = (idx * 360) / trustPoints.length;
              return (
                <div
                  key={idx}
                  className="absolute top-1/2 left-1/2 w-[220px] h-[80px] -ml-[110px] -mt-[40px]"
                  style={{
                    transform: `rotate(${angle}deg) translateX(250px) rotate(-${angle}deg)`,
                  }}
                >
                  {/* Counter-rotate the inner content so it stays upright */}
                  <div className="w-full h-full motion-safe:animate-[spin_40s_linear_infinite_reverse]">
                    <div className="flex items-center space-x-3 bg-white/90 backdrop-blur-sm border border-aqua/20 px-5 py-4 rounded-2xl shadow-lg transition-transform hover:scale-105">
                      <span className="text-2xl">{point.icon}</span>
                      <span className="font-semibold text-ink text-sm">{point.title}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
