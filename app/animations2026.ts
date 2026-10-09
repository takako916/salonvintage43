import type { TabContent } from "../components/AnimationsTabs";

/** Cartes de l'édition 2026. Ajouter les entrées dans `content` de chaque catégorie. */
export const ANIMATIONS_2026: TabContent[] = [
  {
    id: "musique",
    title: "Musique & Concerts",
    icon: "🎵",
    content: [
      {
        title: "Spectacle de chansons nostalgiques",
        description: [
          "Retrouvez les chansons d’hier le temps d’un spectacle avec La Troupe A Tribute To, une association de passionnés de chant. Un moment convivial pour fredonner, chanter et raviver de beaux souvenirs !",
        ],
        image: "/images/2026/animations/musique/chant.png",
        link: "/concerts",
        showMoreLink: false,
        dateTime: "Samedi 16h",
        collaboration: {
          name: "La Troupe A Tribute To : Bande de passionnés de chant",
          socials: {
            facebook: "https://www.facebook.com/profile.php?id=100039886706341",
          },
        },
      },
    ],
  },
  {
    id: "danse",
    title: "Danse & Performance",
    icon: "🕺",
    content: [],
  },
  {
    id: "jeux",
    title: "Jeux & Activités",
    icon: "🎮",
    content: [
      {
        title: "Concours de Rubik’s Cube",
        description: [
          "Testez votre rapidité lors d’un concours de Rubik’s Cube !",
          "Venez relever le défi et tentez de remporter un prix !",
        ],
        image: "/images/2026/animations/jeux/rubikscube.png",
        showMoreLink: false,
        dateTime: ["Samedi 10h30", "Dimanche 11h00"],
      },
    ],
  },
  {
    id: "art",
    title: "Art & Création",
    icon: "🎨",
    content: [
      {
        title: "Esprit 20e – Déco vintage",
        description: [
          "Découvrez une sélection d’objets de décoration de 1890 à 1980 pour donner du caractère à votre intérieur. Mélangez les époques et les styles, et laissez chaque objet raconter son histoire !",
        ],
        image: "/images/2026/animations/art/esprit20e.jpg",
        showMoreLink: false,
        collaboration: {
          name: "Esprit 20e",
          socials: {
            instagram: "https://www.instagram.com/esprit20e/",
          },
        },
      },
    ],
  },
];
