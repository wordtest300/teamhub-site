import type { Metadata } from "next";
import { Barlow_Condensed, Archivo } from "next/font/google";
import "./globals.css";

const barlowCondensed = Barlow_Condensed({
  variable: "--font-barlow-condensed",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Mijn TeamHub — Software voor jeugdopleidingen",
  description:
    "Mijn TeamHub houdt presentie, agenda, corvee, opstelling en spelersontwikkeling jarenlang bij voor jeugdopleidingen die serieus willen presteren.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nl" className={`${barlowCondensed.variable} ${archivo.variable}`}>
      <body className="min-h-full flex flex-col bg-cream text-ink">{children}</body>
    </html>
  );
}
