import type { Metadata } from "next";
import "./globals.css";
import { EVENT } from "./data";
import { Bebas_Neue, Oswald } from "next/font/google";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas-neue",
});

const oswald = Oswald({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-oswald",
});

export const metadata: Metadata = {
  title: {
    default: EVENT.name,
    template: `%s | ${EVENT.name}`,
  },
  description: `Salon du Vintage Haute-Loire - Brocante et événement familial à Blavozy près du Puy-en-Velay. ${EVENT.date} au Centre socio-culturel de Blavozy. Concerts rock, battle de danse hip-hop, déco rétro, vide-grenier et animations pour toute la famille.`,
  keywords: [
    "salon du vintage haute-loire", "brocante haute-loire", "vide-grenier 43", 
    "evenement puy en velay", "deco retro", "concert rock", "danse battle", "hip-hop",
    "vintage", "salon", "Blavozy", "Haute-Loire", "brocante", "mode", "retro",
    "années 60", "années 70", "années 80", "concerts", "danse", "jeux arcade",
    "tatouage", "fashion show", "miss mister vintage", "Production Directe",
    "Le Puy-en-Velay", "événement culturel", "festival", "exposants",
    "centre socio-culturel blavozy", "événement famille", "sortie famille",
    "activité famille haute-loire", "événement gratuit", "animation enfants",
    "rock français", "battle de danse", "hip-hop old school", "concours danse",
    "mode vintage", "déco vintage", "objets vintage", "accessoires vintage"
  ],
  authors: [{ name: "Production Directe", url: "https://www.facebook.com/productiondirecte" }],
  creator: "Production Directe",
  publisher: "Production Directe",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://salonvintage43.vercel.app"),
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/salonlevintagelogo.png",
    shortcut: "/salonlevintagelogo.png",
    apple: "/salonlevintagelogo.png",
  },
  openGraph: {
    title: EVENT.name,
    description: `Salon du Vintage Haute-Loire - Brocante et événement familial à Blavozy près du Puy-en-Velay. ${EVENT.date} au Centre socio-culturel de Blavozy. Concerts rock, battle de danse hip-hop, déco rétro, vide-grenier et animations pour toute la famille.`,
    url: "https://salonvintage43.vercel.app",
    siteName: EVENT.name,
    images: [
      {
        url: "/images/banner.jpg",
        width: 1200,
        height: 630,
        alt: `${EVENT.name} - ${EVENT.date} à ${EVENT.city}`,
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: EVENT.name,
    description: `Salon du Vintage Haute-Loire - Brocante et événement familial à Blavozy près du Puy-en-Velay. ${EVENT.date} au Centre socio-culturel de Blavozy. Concerts rock, battle de danse hip-hop, déco rétro, vide-grenier et animations pour toute la famille.`,
    images: ["/images/banner.jpg"],
    creator: "@productiondirecte",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code", // Google Search Console用
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Event",
    "name": EVENT.name,
    "description": `Salon du Vintage Haute-Loire - Brocante et événement familial à Blavozy près du Puy-en-Velay. ${EVENT.date} au Centre socio-culturel de Blavozy. Concerts rock, battle de danse hip-hop, déco rétro, vide-grenier et animations pour toute la famille.`,
    "startDate": "2025-11-14T18:00:00+01:00",
    "endDate": "2025-11-16T18:00:00+01:00",
    "eventStatus": "https://schema.org/EventScheduled",
    "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
    "location": {
      "@type": "Place",
      "name": "Centre socio-culturel de Blavozy",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Centre socio-culturel",
        "addressLocality": "Blavozy",
        "postalCode": "43700",
        "addressRegion": "Haute-Loire",
        "addressCountry": "FR"
      }
    },
    "organizer": {
      "@type": "Organization",
      "name": "Production Directe",
      "url": "https://www.facebook.com/productiondirecte",
      "sameAs": [
        "https://www.facebook.com/productiondirecte",
        "https://www.instagram.com/productiondirecte"
      ]
    },
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "EUR",
      "availability": "https://schema.org/InStock",
      "validFrom": "2025-01-01"
    },
    "image": "https://salonvintage43.vercel.app/images/banner.jpg",
    "url": "https://salonvintage43.vercel.app"
  };

  return (
    <html lang="fr">
      <head>
        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-TTHNXPZRHP"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-TTHNXPZRHP');
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className={`antialiased ${bebasNeue.variable} ${oswald.variable}`}>
        <a href="#main" className="skip-link">
          Aller au contenu principal
        </a>
        {children}
      </body>
    </html>
  );
}
