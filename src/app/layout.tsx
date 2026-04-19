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
  title: "Klaivia | Agence Web & IA en Suisse — Sites qui convertissent 24/7",
  description:
    "Sites web premium, automatisations et agents IA pour PME, indépendants et startups en Suisse. Votre business tourne même quand vous dormez. Devis gratuit sous 48h.",
  keywords: [
    "agence web suisse",
    "création site internet",
    "agent IA",
    "automatisation IA",
    "site web PME",
    "chatbot entreprise",
  ],
  authors: [{ name: "Klaivia" }],
  openGraph: {
    title: "Klaivia | Votre business tourne. Même quand vous dormez.",
    description:
      "Sites web premium & agents IA sur mesure pour PME et indépendants en Suisse. Réponse sous 48h.",
    url: "https://klaivia.ch",
    siteName: "Klaivia",
    locale: "fr_CH",
    type: "website",
    images: [
      {
        url: "https://klaivia.ch/og-image.png",
        width: 1200,
        height: 630,
        alt: "Klaivia - Agence Web & IA",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Klaivia | Agence Web & IA en Suisse",
    description: "Sites premium & agents IA pour PME et indépendants.",
    images: ["https://klaivia.ch/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://klaivia.ch",
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
