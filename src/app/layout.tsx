import type { Metadata } from "next";
import { Sora, Inter, Space_Grotesk } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Klaivia Agency — Sites Web Premium & Automatisations IA",
  description:
    "Klaivia conçoit des sites web premium et des systèmes d'intelligence artificielle qui génèrent des clients, automatisent vos tâches et font croître votre chiffre d'affaires — 24h/24.",
  keywords: [
    "agence web",
    "IA",
    "intelligence artificielle",
    "site web premium",
    "automatisation",
    "agent IA",
    "création site internet",
  ],
  openGraph: {
    title: "Klaivia Agency — Votre business tourne. Même quand vous dormez.",
    description:
      "Sites web premium. Automatisations IA. Résultats concrets.",
    type: "website",
    locale: "fr_FR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${sora.variable} ${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="font-inter bg-noir-profond text-blanc antialiased">
        <Script
          src="https://unpkg.com/@splinetool/viewer@1.12.81/build/spline-viewer.js"
          type="module"
          strategy="afterInteractive"
        />
        {children}
      </body>
    </html>
  );
}
