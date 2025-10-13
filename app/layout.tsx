import type { Metadata } from "next";
import "./globals.css";
import { EVENT } from "./data";

export const metadata: Metadata = {
  title: EVENT.name,
  description: `${EVENT.programIntro} ${EVENT.date} à ${EVENT.city}`,
  keywords: ["vintage", "salon", "Blavozy", "Haute-Loire", "brocante", "mode", "retro"],
  authors: [{ name: "Salon Vintage de Blavozy" }],
  openGraph: {
    title: EVENT.name,
    description: `${EVENT.programIntro} ${EVENT.date} à ${EVENT.city}`,
    url: "https://salonvintage43.vercel.app",
    siteName: EVENT.name,
    images: [
      {
        url: "/images/banner.jpg",
        width: 1200,
        height: 630,
        alt: EVENT.name,
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: EVENT.name,
    description: `${EVENT.programIntro} ${EVENT.date} à ${EVENT.city}`,
    images: ["/images/banner.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className="antialiased">
        <a href="#main" className="skip-link">
          Aller au contenu principal
        </a>
        {children}
      </body>
    </html>
  );
}
