import type { TabContent } from "../components/AnimationsTabs";

/** Cartes de l'édition 2026. Ajouter les entrées dans `content` de chaque catégorie. */
export const ANIMATIONS_2026: TabContent[] = [
  {
    id: "musique",
    title: "Musique & Concerts",
    icon: "🎵",
    content: [
      {
        title: "Soirée karaoké nostalgie",
        description: [
          "Remontez le temps avec une soirée karaoké et disco au rythme des tubes d’hier ! Pour Halloween, venez faire la fête à Vintage Le Salon en tenue vintage : l’entrée est gratuite pour les personnes déguisées dans le thème !",
        ],
        image: "/images/2026/animations/musique/soireekaraoke.png",
        link: "/concerts",
        showMoreLink: false,
        dateTime: "Samedi 20h",
        collaboration: {
          name: "La Troupe A Tribute To : Bande de passionnés de chant",
          socials: {
            facebook: "https://www.facebook.com/profile.php?id=100039886706341",
          },
        },
      },
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
      {
        title: "Blind test spécial année 80 + tout style ",
        description: [
          "Testez vos connaissances musicales avec un blind test spécial années 80, ouvert à tous les styles ! Retrouvez les titres et les artistes, et tentez de remporter des lots !",
        ],
        image: "/images/2026/animations/musique/blindtest.png",
        showMoreLink: false,
        dateTime: "Dimanche 13h",
      },
    ],
  },
  {
    id: "danse",
    title: "Danse & Performance",
    icon: "🕺",
    content: [
      {
        title: "Workshop breakdance avec Nasty",
        description: [
          "À l’occasion de Vintage Le Salon, on vous donne aussi rendez-vous sur la piste avec un invité spécial : Nasty de Suprême Legacy !"
        ],
        image: "/images/2026/animations/danse/workshopnasty.png",
        showMoreLink: false,
        dateTime: "Dimanche 10h- & 11h-",
        collaboration: {
          name: "Nasty - Supreme Legacy",
          socials: {
            instagram: "https://www.instagram.com/nastyslimgz",
          },
        },
      },
      {
        title: "Cours d’initiation Lindy Hop – Association N’Swing",
        description: [
          "Découvre ce swing des années folles avec nos danseurs passionnés."
        ],
        image: "/images/2026/animations/danse/lindyhop.png",
        showMoreLink: false,
        dateTime: "Samedi 17h30- 20h",
        collaboration: {
          name: "Olivier RIONDET - Association N'Swing",
          socials: {
            facebook: "https://www.facebook.com/asso.nswing.9/",
          },
        },
      },
      {
        title: "Initiation & démonstration au rock sauté et au boogie-woogie – La Clandestine",
        description: [
          "Entrez dans la danse avec La Clandestine ! Samedi à 14h30, initiez-vous au rock sauté et au boogie-woogie, puis admirez la démonstration à 15h."
        ],
        image: "/images/2026/animations/danse/clandestine.png",
        showMoreLink: false,
        dateTime: "Samedi 14h30- & 15h-",
        collaboration: {
          name: "Asso la Clandestine",
          socials: {
            instagram: "https://www.instagram.com/asso_la_clandestine",
          },
        },
      },
      {
        title: "Défilé de mode vintage x Emmaüs",
        description: [
          "Découvrez des looks rétro lors d’un défilé de mode vintage organisé en partenariat avec Emmaüs Haute-Loire. Après le défilé, retrouvez les vêtements portés par les modèles à la vente et repartez avec vos pièces préférées !",
        ],
        image: "/images/2026/animations/danse/defiledemode.png",
        showMoreLink: false,
        dateTime: "Samedi 13h30",
        collaboration: {
          name: "Emmaüs 43",
          website: "https://emmaus43.fr/",
       },
      },
      {
        title: "Battle RKD Hip-Hop All Styles Old School 1 vs 1 – Prize money : 100 € ",
        description: [
          "Place au battle du dimanche ! Les danseurs de tous styles s’affrontent en un contre un sur les sons hip-hop des années 80 et 90. Une rencontre où chacun apporte son style, sa créativité et son énergie, dans l’esprit old school !",
          "Aux platines, DJ Nasty (Supreme Legacy) donne le rythme. Lego (7e Précepte) et Tornad (Production Directe) composent le jury et départagent les participants. À la clé : 100 € de prize money pour le vainqueur !",
          "Dimanche 1er novembre : début du battle à 14h, inscriptions des danseurs dès 13h30. Frais de participation : 5 € par danseur.",
        ],
        image: "/images/2026/animations/danse/rkd.png",
        showMoreLink: false,
        dateTime: "Dimanche 14h00- ",
        collaborations: [
          {
            name: "LEGO ADILO - 7eme precepte (Jury)",
            socials: {
              instagram: "https://www.instagram.com/lego_adilo",
            },
          },
          {
            name: "Nasty (DJ)",
            socials: {
              instagram: "https://www.instagram.com/nastyslimgz",
            },
          },
        ],
      },
      {
        title: "Concours des plus belles tenues : hip-hop old school ",
        description: [
          "Après le battle, place au style ! Les danseurs présentent leurs plus belles tenues hip-hop old school, inspirées des années 80 et 90. Sortez vos looks rétro et faites revivre l’esprit de ces décennies !",
        ],
        image: "/images/2026/animations/danse/oldschool.png",
        showMoreLink: false,
        dateTime: "Dimanche 16h30- ",
      },
      {
        title: "Concours des plus belles tenues : vintage ",
        description: [
          "Défilez sur le podium avec votre plus belle tenue vintage et tentez de remporter le titre du look le plus stylé du salon ! Qui remportera le concours cette année ?",
        ],
        image: "/images/2026/animations/danse/concours.png",
        showMoreLink: false,
        dateTime: "Dimanche 16h30- ",
      },
    ],
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
      {
        title: "Tournoi de baby-foot",
        description: [
          "Testez votre rapidité lors d’un concours de Rubik’s Cube !",
          "Venez relever le défi et tentez de remporter un prix !",
        ],
        image: "/images/2026/animations/jeux/babyfoot.png",
        showMoreLink: false,
        dateTime: "Samedi 11h00",
      },
      {
        title: "Concours Just Dance – MatthgoDance",
        description: [
          "Défiez-vous sur Just Dance et montrez vos meilleurs pas ! Invitez votre famille et vos amis à participer au tournoi pour un moment de danse et de bonne humeur !",
        ],
        image: "/images/2026/animations/jeux/justdance.png",
        showMoreLink: false,
        dateTime: "Samedi 17h00",
        collaboration: {
          name: "MatthgoDance",
          socials: {
            instagram: "https://www.instagram.com/matthgo.daance/",
          },
       },
      },
      {
        title: "Retro Gaming – PRESS START",
        description: [
          "Avec PRESS START, découvrez ou redécouvrez les consoles d’autrefois et leurs jeux cultes, manette en main !",
          "Un voyage rétro à partager en famille ou entre amis, samedi 31 octobre toute la journée.",
        ],
        image: "/images/2026/animations/jeux/retrogaming.png",
        showMoreLink: false,
        dateTime: "Samedi toute la journée",
        collaboration: {
          name: "PRESS START",
       },
      },
      {
        title: "Jeux d’arcade & machine de boxe",
        description: [
          "Retrouvez le plaisir des jeux d’autrefois sur nos bornes d’arcade et testez votre punch sur la machine de boxe ! Venez jouer librement et défier votre famille ou vos amis !",
        ],
        image: "/images/2026/animations/jeux/arcade.png",
        showMoreLink: false,
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
      {
        title: "Tattoo - Black Pearl Tattoo",
        description: [
          "Envie d’un tatouage d’inspiration vintage ou d’un autre style ? Venez échanger avec Black Pearl Tattoo et partager vos idées pour un projet qui vous ressemble !",
        ],
        image: "/images/2026/animations/art/tattoo.png",
        showMoreLink: false,        
        collaboration: {  
          name: "Black Pearl Tattoo",
          socials: {
          instagram: "https://www.instagram.com/black.pearl.tattoo.piercing",
          },
        },
      },
      {
        title: "Photo booth vintage",
        description: [
          "Venez dans votre plus belle tenue vintage et prenez la pose devant l’objectif de notre photographe ! Repartez avec un beau souvenir de votre voyage dans le temps.",
        ],
        image: "/images/2026/animations/art/photobooth.png",
        showMoreLink: false,   
        collaboration: {  
          name: "Lise Plazanet",
          website: "https://www.liseplazanetphotographie.fr/",
       },
      },
      {
        title: "Sac & valises en cuir au désign rétro",
        image: "/images/2026/animations/art/sacretro.png",
        showMoreLink: false,   
        collaboration: {  
          name: "Equateur",
       },
      },
      {
        title: "Plaque métal vintage",
        image: "/images/2026/animations/art/tofmobile.png",
        showMoreLink: false,   
        collaboration: {  
          name: "Tofmobile",
          socials: {
          facebook: "https://www.facebook.com/Tofmobile73/",
          },
       },
      },
      {
        title: "Démonstration de coiffures rétro",
        image: "/images/2026/animations/art/mrcoiffure.jpg",
        description: [
          "Avec M-R Coiffure, découvrez l’art des coiffures rétro lors de démonstrations de looks pin-up réalisés sur les modèles.Retrouvez-les lors des défilés du samedi matin et de l’après-midi !",
        ],
        showMoreLink: false,   
        collaboration: {  
          name: "M-R Coiffure",
          socials: {
          facebook: "https://www.facebook.com/profile.php?id=61580156046170",
          instagram: "https://www.instagram.com/rftmanon/",
          },
       },
      },
      {
        title: "Accessoires en cuir – Ratskin’studio",
        image: "/images/2026/animations/art/ratskinstudio.png",
        description: [
          "Découvrez les accessoires en cuir de Ratskin’studio : porte-monnaie, gants, portefeuilles et sacs à main. Des pièces de caractère pour compléter votre look ou vous faire plaisir !.",
        ],
        showMoreLink: false,   
        collaboration: {  
          name: "Ratskin’studio",
        },
      },
      {
        title: "Nail art – Lovadia Beauté des Ongles",
        image: "/images/2026/animations/art/lovadia.png",
        description: [
          "Découvrez l’univers créatif de Lovadia et ses décorations d’ongles personnalisées. Venez trouver l’inspiration et échanger sur vos envies pour compléter votre look jusqu’au bout des ongles !",
        ],
        showMoreLink: false,   
        collaboration: {  
          name: "Lovadia Beauté des Ongles",
          socials: {
            instagram: "https://www.instagram.com/lovadiabeautedesongles/",
          },
       },
      },
      {
        title: "Geek Vintage – Matthgo Cosplay",
        image: "/images/2026/animations/art/geekvintage.jpg",
        description: [
          "Plongez dans un univers coloré de jouets rétro et d’objets en tout genre ! Retrouvez vos souvenirs d’enfance et dénichez une pièce coup de cœur pour votre collection ou votre déco.",
        ],
        showMoreLink: false,   
        collaboration: {  
          name: "Matthgo Cosplay",
          socials: {
            instagram: "https://www.instagram.com/matthgocosplay/",
          },
       },
      },
      {
        title: "Confiseries en vrac – Bonbons",
        image: "/images/2026/animations/art/bonbons.png",
        showMoreLink: false,   
        collaboration: {  
          name: "Bonbons",
        },
      },
      {
        title: "Friprie – Saperlipops",
        image: "/images/2026/animations/art/friperie.png",
        description: [
          "Découvrez Saperlipops, la friperie de Brives-Charensac, et sa sélection de vêtements de seconde main. Venez dénicher vos coups de cœur et composer un look qui vous ressemble !",
        ],
        showMoreLink: false,   
        collaboration: {  
          name: "Saperlipops",
          socials: {
            instagram: "https://www.instagram.com/saperlipops/",
            facebook: "https://www.facebook.com/SaperlipopS/",
          },
        },
      },
    ],
  },
];
