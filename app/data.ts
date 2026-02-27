export interface ProgramItem {
  time: string;
  title: string;
}

/** Structure des données d’édition (partagée entre édition courante et archive). */
export interface EventData {
  name: string;
  nameParts: { prefix: string; highlight: string };
  date: string;
  city: string;
  cityShort: string;
  venue: string;
  mapUrl: string;
  nearbyLabel: string;
  contactEmail: string;
  applyUrl: string;
  programIntro: string;
  program: ProgramItem[];
  exhibitorNote: string;
  downloadPoster: string;
  facebookEvent: string;
  instagram: string;
  /** Affiché à côté du lien Instagram (ex. @vintagelesalon43) */
  instagramHandle: string;
  instagramHashtag: string;
  year: number;
  heroImage: string;
  logo: string;
}

/** Données de l’édition courante (page d’accueil). Modifier titre, logo, heroImage pour l’édition de l’année. */
export const EVENT = {
  name: "2e édition Vintage le Salon à Brives-Charensac",
  nameParts: {
    prefix: "2e édition ",
    highlight: "Vintage le Salon à Brives-Charensac"
  },
  date: "31 octobre – 1er novembre 2026",
  city: "Brives-Charensac (Haute-Loire)",
  /** Court pour Hero / Navbar (ex. « À Blavozy », « À Brives-Charensac ») */
  cityShort: "Brives-Charensac",
  venue: "Maison Pour Tous - Centre Social de Brives-Charensac",
  mapUrl: "https://www.google.com/maps/place//data=!4m2!3m1!1s0x47f5f07e3b450c95:0x2366aa8b6eed2b92",
  /** Badge Hero (ex. « À 10 min du Puy-en-Velay », « 5 min du Puy-en-Velay ») */
  nearbyLabel: "5 min du Puy-en-Velay",
  contactEmail: "conventionvintage43@gmail.com",
  applyUrl: "https://forms.gle/XXXX",
  programIntro: "Années 60–80：concerts, battle de danse, défilé, blind test, tatouage, restauration, jeux rétro, etc.",
  program: [] as ProgramItem[],
  exhibitorNote: "ファミリー向けの温かい雰囲気。ヴィンテージ／ブロカント／モードレトロ／レコード／フード等歓迎。",
  downloadPoster: "/images/poster.jpg",
  facebookEvent: "https://fb.me/e/efozMBrJO",
  /** Instagram du salon (édition courante) */
  instagram: "https://www.instagram.com/vintagelesalon43",
  instagramHandle: "@vintagelesalon43",
  instagramHashtag: "#vintagelesalon43",
  year: 2026,
  heroImage: "/hero-2026.png",
  logo: "/logo-2026.png",
} as const satisfies EventData;
