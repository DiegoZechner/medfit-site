import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="de">
      <body className="page-shell">
        <div className="flex min-h-screen flex-col">{children}</div>
      </body>
    </html>
  );
}

