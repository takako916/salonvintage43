import type { EventData, ProgramItem } from "./data";

/** Données de l’édition 2025 (archive sous /2025) */
export const EVENT_ARCHIVE_2025 = {
  name: "1ère édition Vintage le Salon à Blavozy",
  nameParts: {
    prefix: "1ère édition ",
    highlight: "Vintage le Salon à Blavozy"
  },
  date: "14–16 novembre 2025",
  city: "Blavozy (Haute-Loire)",
  cityShort: "Blavozy",
  venue: "Centre socio-culturel de Blavozy",
  mapUrl: "https://maps.google.com/?q=Centre+socio-culturel+de+Blavozy",
  nearbyLabel: "À 10 min du Puy-en-Velay",
  contactEmail: "conventionvintage43@gmail.com",
  applyUrl: "https://forms.gle/XXXX",
  programIntro: "Années 60–80：concerts, battle de danse, défilé, blind test, tatouage, restauration, jeux rétro, etc.",
  program: [] as ProgramItem[],
  exhibitorNote: "ファミリー向けの温かい雰囲気。ヴィンテージ／ブロカント／モードレトロ／レコード／フード等歓迎。",
  downloadPoster: "/images/poster.jpg",
  facebookEvent: "https://www.facebook.com/events/1131371848951929",
  instagram: "https://www.instagram.com/productiondirecte",
  instagramHandle: "@productiondirecte",
  instagramHashtag: "#salonvintage43",
  year: 2025,
  heroImage: "/images/banner.jpg",
  logo: "/salonlevintagelogo.png",
} as const satisfies EventData;
