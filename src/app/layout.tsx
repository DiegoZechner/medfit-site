import type { Metadata } from "next";
import { Cormorant_Garamond, Montserrat } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AnalyticsEvents } from "@/components/AnalyticsEvents";
import { UtmCapture } from "@/components/UtmCapture";
import { Suspense } from "react";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cormorant",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "med fit wohlfühlschön – Körperformung & Hautstraffung in Dornbirn",
  description:
    "Moderne Körperformung und Hautstraffung ohne OP in Dornbirn. Kryolipolyse, RF-Sculpting, TriLipo, CFU-Hautstraffung und mehr bei med fit wohlfühlschön.",
  metadataBase: new URL("https://www.med-fit.com")
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de" className={`${cormorant.variable} ${montserrat.variable}`}>
      <body className="page-shell">
        <Suspense fallback={null}>
          <AnalyticsEvents />
          <UtmCapture />
        </Suspense>
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}

