export interface ProgramSlot {
  debut: string;
  fin: string;
  contenu: string;
  precision?: string;
  /** Lignes affichées dans l’encadré (inscription, jury, DJ, etc.). */
  infos?: string[];
  tarifEuros?: number;
  inscription?: string;
  prizeMoneyEuros?: number;
}

export interface ProgramDay {
  id: string;
  label: string;
  slots: ProgramSlot[];
}

/** Programme de l'édition 2026, affiché sur la page d'accueil. */
export const PROGRAM_2026: ProgramDay[] = [
  {
    id: "samedi",
    label: "Samedi 31 octobre",
    slots: [
      {
        debut: "10:00",
        fin: "12:00",
        contenu: "Atelier de programmation de jeux vidéo – Campus 26",
      },
      {
        debut: "10:30",
        fin: "11:00",
        contenu: "Concours de Rubik’s Cube – Cadeaux à gagner !",
      },
      {
        debut: "11:00",
        fin: "12:00",
        contenu: "Tournoi de baby-foot",
      },
      {
        debut: "13:30",
        fin: "14:00",
        contenu: "Défilé de mode vintage x Emmaüs",
      },
      {
        debut: "14:30",
        fin: "15:00",
        contenu: "Initiation au rock sauté et au boogie-woogie – La Clandestine",
      },
      {
        debut: "15:00",
        fin: "15:30",
        contenu: "Démonstration de rock sauté et de boogie-woogie – La Clandestine",
      },
      {
        debut: "16:00",
        fin: "17:00",
        contenu: "Spectacle de chansons nostalgiques – La troupe A Tribute To, des passionnés de chant",
      },
      {
        debut: "17:00",
        fin: "18:00",
        contenu: "Concours Just Dance – Matt Cosplay",
      },
      {
        debut: "17:30",
        fin: "20:00",
        contenu: "Cours d’initiation – Association N’Swing",
      },
      {
        debut: "20:00",
        fin: "22:00",
        contenu: "Soirée karaoké nostalgie",
        precision: "Entrée offerte aux personnes en tenue vintage !",
      },
    ],
  },
  {
    id: "dimanche",
    label: "Dimanche 1er novembre",
    slots: [
      {
        debut: "10:00",
        fin: "11:00",
        contenu: "Atelier de breakdance avec Nasty – Débutants dès 7 ans",
        tarifEuros: 15,
        inscription: "06.29.18.16.58",
      },
      {
        debut: "11:00",
        fin: "12:30",
        contenu: "Atelier de breakdance avec Nasty – Niveau confirmé",
        tarifEuros: 15,
        inscription: "06.29.18.16.58",
      },
      {
        debut: "11:00",
        fin: "11:30",
        contenu: "Concours de Rubik’s Cube – Cadeaux à gagner !",
      },
      {
        debut: "13:00",
        fin: "13:30",
        contenu: "Blind test des années 80 – Cadeaux à gagner !",
      },
      {
        debut: "14:00",
        fin: "16:00",
        contenu: "Battle RKD Hip-Hop All Styles Old School 1 vs 1",
        infos: [
          "Inscription des danseurs dès 13h30",
          "Participation : 5 € par danseur",
          "Prize money : 100 €",
          "Jury : Lego (7e Précepte), Tornad (Production Directe)",
          "DJ : Nasty (Supreme Legacy)",
        ],
      },
      {
        debut: "16:30",
        fin: "17:00",
        contenu: "Concours des plus belles tenues : hip-hop old school et vintage",
      },
    ],
  },
];
