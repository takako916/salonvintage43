export interface ProgramItem {
  time: string;
  title: string;
}

export const EVENT = {
  name: "1er edition Vintage le Salon",
  date: "14–16 novembre 2025",
  city: "Blavozy (Haute-Loire)",
  venue: "Centre socio-culturel de Blavozy",
  mapUrl: "https://maps.google.com/?q=Centre+socio-culturel+de+Blavozy",
  contactEmail: "conventionvintage43@gmail.com",
  applyUrl: "https://forms.gle/XXXX", // 出展者申込（Googleフォーム想定）
  programIntro: "Années 60–80：concerts, battle de danse, défilé, blind test, tatouage, restauration, jeux rétro, etc.",
  // 時間割が未確定なら空配列でOK
  program: [] as ProgramItem[],
  exhibitorNote: "ファミリー向けの温かい雰囲気。ヴィンテージ／ブロカント／モードレトロ／レコード／フード等歓迎。",
  downloadPoster: "/images/poster.jpg",
  facebookEvent: "https://www.facebook.com/events/1131371848951929"
} as const;

export type EventData = typeof EVENT;
