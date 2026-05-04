"use client";

import { useState } from "react";
import { trackEvent } from "@/components/AnalyticsEvents";
import { ContactCTA } from "@/components/ContactCTA";

export default function TerminPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    trackEvent("lead_form_submit");
    setIsSubmitted(true);
    // TODO: implement actual form submission
  };

  return (
    <>
      <section className="bg-shell py-16 md:py-24 border-b border-line">
        <div className="page-container max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-sand mb-4 block">
            Termin buchen
          </span>
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-ink sm:text-5xl">
            Kostenlose & unverbindliche Erstberatung
          </h1>
          <p className="text-lg text-muted">
            In der Erstberatung nehmen wir uns Zeit für Ihre Wünsche und Fragen. Wir
            prüfen gemeinsam, welche Behandlung für Sie geeignet ist und erstellen
            auf Wunsch einen persönlichen Behandlungsplan.
          </p>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="page-container max-w-5xl">
          <div className="grid gap-12 md:grid-cols-[2fr,1.5fr]">
            {isSubmitted ? (
              <div className="rounded-xl border border-line bg-shell p-12 text-center flex flex-col items-center justify-center">
                <div className="w-16 h-16 bg-sand/20 text-sand rounded-full flex items-center justify-center mb-6">
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-ink mb-4">Vielen Dank für Ihre Anfrage!</h2>
                <p className="text-muted">
                  Wir haben Ihre Daten erhalten und werden uns schnellstmöglich bei Ihnen melden, um einen passenden Termin zu finden.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 rounded-2xl border border-line bg-shell p-8 shadow-sm">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-ink mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    className="w-full rounded-xl border border-line bg-white px-4 py-3 text-sm text-ink outline-none focus:ring-2 focus:ring-aqua"
                    placeholder="Vor- und Nachname"
                  />
                </div>
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-ink mb-2">
                      E-Mail
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      className="w-full rounded-xl border border-line bg-white px-4 py-3 text-sm text-ink outline-none focus:ring-2 focus:ring-aqua"
                      placeholder="Ihre E-Mail-Adresse"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-ink mb-2">
                      Telefon
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      required
                      className="w-full rounded-xl border border-line bg-white px-4 py-3 text-sm text-ink outline-none focus:ring-2 focus:ring-aqua"
                      placeholder="+43 ..."
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="treatment" className="block text-sm font-medium text-ink mb-2">
                    Wunschbehandlung (optional)
                  </label>
                  <input
                    type="text"
                    id="treatment"
                    className="w-full rounded-xl border border-line bg-white px-4 py-3 text-sm text-ink outline-none focus:ring-2 focus:ring-aqua"
                    placeholder="z. B. Haarentfernung, Gesicht, Körperformung"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-ink mb-2">
                    Nachricht
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full rounded-xl border border-line bg-white px-4 py-3 text-sm text-ink outline-none focus:ring-2 focus:ring-aqua"
                    placeholder="Worum geht es? Wann sind Sie am besten erreichbar?"
                  />
                </div>
                
                {/* Hidden tracking fields handled by UtmCapture internally, 
                    but could also be appended to form data on submit */}
                
                <button
                  type="submit"
                  className="w-full rounded-xl bg-aqua px-6 py-4 text-base font-medium text-white shadow-sm hover:opacity-90 transition-colors"
                >
                  Anfrage unverbindlich absenden
                </button>
                <p className="text-xs text-muted text-center leading-relaxed">
                  Mit dem Absenden erklären Sie sich mit unserer Datenschutzerklärung einverstanden.
                </p>
              </form>
            )}

            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold text-ink mb-6">Schnellkontakt</h3>
                <div className="flex flex-col gap-4">
                  <a href="tel:+436781330011" className="flex items-center gap-4 rounded-xl border border-line bg-shell p-4 hover:border-aqua transition-colors">
                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shrink-0">
                      <svg className="w-5 h-5 text-aqua" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-sm text-muted">Anrufen</div>
                      <div className="font-medium text-ink">+43 678 133 00 11</div>
                    </div>
                  </a>
                  <a href="mailto:office@med-fit.com" className="flex items-center gap-4 rounded-xl border border-line bg-shell p-4 hover:border-aqua transition-colors">
                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shrink-0">
                      <svg className="w-5 h-5 text-aqua" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-sm text-muted">E-Mail schreiben</div>
                      <div className="font-medium text-ink">office@med-fit.com</div>
                    </div>
                  </a>
                </div>
              </div>

              <div className="rounded-xl border border-line bg-shell p-6">
                <h3 className="font-semibold text-ink mb-2">Standort</h3>
                <p className="text-sm text-muted leading-relaxed">
                  med fit wohlfühlschön<br />
                  Am Kehlerpark 2<br />
                  A-6850 Dornbirn
                </p>
              </div>
              
              <div className="rounded-xl border border-line bg-white p-6 text-sm text-muted">
                <p>
                  <strong>Wichtiger Hinweis:</strong> Die kostenlose Erstberatung ersetzt keine ärztliche
                  Diagnose. Bei bestehenden Erkrankungen wenden Sie sich bitte an Ihre behandelnde Ärztin/Ihren behandelnden
                  Arzt.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

