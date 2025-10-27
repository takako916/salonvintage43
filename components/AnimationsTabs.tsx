"use client";

import { useState } from "react";
import { EVENT } from "../app/data";

interface TabContent {
  id: string;
  title: string;
  icon: string;
  content: {
    title: string;
    description: string | string[];
    image: string;
    link: string;
    showMoreLink?: boolean;
    dateTime?: string;
    collaboration?: {
      name: string;
      website?: string;
      socials?: {
        instagram?: string;
        facebook?: string;
        youtube?: string;
      };
    };
  }[];
}

const tabContents: TabContent[] = [
  {
    id: "musique",
    title: "Musique & Concerts",
    icon: "🎵",
    content: [
      {
        title: "Concerts Live",
        description: [
          "MAH'NA revisite avec passion les plus grands classiques de la chanson française des années 60 à 80.",
          "Ambiance rétro garantie ! 🎶"
        ],
        image: "/images/animations/musique/concerts-live.png",
        link: "/concerts",
        showMoreLink: true,
        dateTime: "Vendredi 19h30-21h45",
        collaboration: {
          name: "Mah’na et Vladimir",
          socials: {
            instagram: "https://www.instagram.com/mahnamusic",
            facebook: "https://www.facebook.com/mahnamusic",
            youtube: "https://www.youtube.com/@mahnamusic"
          }
        }
      },
      {
        title: "Blind test spécial années 80",
        description: [
          "Teste tes connaissances musicales et amuse-toi entre amis !",
          "Cadeaux à la clé ! 🎧"
        ],
        image: "/images/animations/musique/blind-test.png",
        link: "/blindtest",
        showMoreLink: false,
        dateTime: "Dimanche 13h"
      }
    ]
  },
  {
    id: "danse",
    title: "Danse & Performance",
    icon: "🕺",
    content: [
      {
        title: "Battle All Styles Old School",
        description: [
          "Après plusieurs années d'absence, le RKD Battle \"Rien Ke L'Debout\" fait son grand retour au Vintage le Salon ! 💥",
          "Un concept revisité autour du All Style Old School, sur des sons Hip-Hop d'époque.",
          "🕺 Danseurs, sortez vos plus belles tenues Old School et montrez votre style !"
        ],
        image: "/images/animations/danse/battle-hiphop.png",
        link: "/battlehiphop",
        showMoreLink: true,
        dateTime: "Dimanche 14h",
        collaboration: {
          name: "Septième Précepte",
          socials: {
            instagram: "https://www.instagram.com/7eme.precepte/"
          }
        }
      },
      {
        title: "Défilé de Mode Vintage",
        description: [
          "Admirez les plus beaux looks vintage défilant sur scène.",
          "Participe au défilé de mode vintage du salon ! Inscris-toi dès maintenant via notre page officielle.",
          "🎟️ Entrée gratuite pour les participants.",
          "👗 Nous recherchons 2 modèles femmes et 2 modèles hommes – Pass week-end offert."
        ],
        image: "/images/animations/danse/defile-mode.png",
        link: "/defile",
        showMoreLink: false,
        dateTime: "Samedi 15h"      
      },
      {
        title: "Concours Miss & Mister Vintage 2025",
        description: "Élection de beauté avec jury de professionnels et couronnement officiel.",
        image: "/images/animations/danse/concours-vintage.png",
        link: "/concours",
        showMoreLink: false, 
      },
      {
        title: "Démo & Initiation de Claquettes",
        description: "Assistez à une démonstration de claquettes et essayez quelques pas vous-même dans une ambiance conviviale.",
        image: "/images/animations/danse/claquettes.png",
        link: "/claquettes",
        showMoreLink: false,
        collaboration: {
          name: "Metal tap",
          socials: {
            facebook: "https://www.facebook.com/p/Metal-tap-100036657864329"
          }
        }
      },
      {
        title: "Initiation au Lindy Hop",
        description: "Découvre ce swing des années folles avec nos danseurs passionnés.",
        image: "/images/animations/danse/lindyhop.png",
        link: "/lindyhop",
        showMoreLink: false,
        dateTime: "Samedi 18h-19h",
        collaboration: {
          name: "Olivier RIONDET - Association N'Swing",
          socials: {
            facebook: "https://www.facebook.com/asso.nswing.9"
          }
        }
      },
      {
        title: "Bal Swing",
        description: [
          "Place à la danse ! Enfile ta plus belle tenue rétro et viens partager un moment festif sur les rythmes swing ! 🎷"
        ],
        image: "/images/animations/danse/swing.png",
        link: "/balswing",
        showMoreLink: false,
        dateTime: "Samedi 19h-21h",
        collaboration: {
          name: "Olivier RIONDET - Association N'Swing",
          socials: {
            facebook: "https://www.facebook.com/asso.nswing.9"
          }
        }
      },
    ]
  },
  {
    id: "jeux",
    title: "Jeux & Activités",
    icon: "🎮",
    content: [
      {
        title: "Bornes d'Arcade Rétro",
        description: "Retrouvez les sensations d'antan avec nos bornes d'arcade authentiques.",
        image: "/images/animations/jeux/arcade-retro.png",
        link: "/arcade",
        showMoreLink: false,
        dateTime: "Tout le weekend"
      },
      {
        title: "Tournoi de baby foot",
        description: [
          "Forme ton équipe et rejoins le tournoi !",
          "💸 Inscription : 10 € par équipe",
          "🏆 L'équipe gagnante repart avec 50 € de prize money.",
          "Les inscriptions sont ouvertes !"
        ],
        image: "/images/animations/jeux/babyfoot.png",
        link: "/babyfoot",
        showMoreLink: false,
        dateTime: "Samedi 16h"
      },
      {
        title: "Concours de Hula Hoop",
        description: [
          "Viens défier tes amis dans une ambiance fun et décontractée !",
          "🎁 Cadeaux à gagner pour les finalistes.",
          "👉 Battle Hula Hoop Top 8 : qui sera le grand gagnant ?"
        ],
        image: "/images/animations/jeux/hulahoop.png",
        link: "/hulahoop",
        showMoreLink: false,
        dateTime: "Samedi 14h"
      }
    ]
  },
  {
    id: "art",
    title: "Art & Création",
    icon: "🎨",
    content: [
      {
        title: "Tatouage",
        description: "Offrez-vous un tatouage unique dans l'esprit vintage de l'événement.",
        image: "/images/animations/art/tatoo.png",
        link: "/tatouage",
        showMoreLink: false,
        dateTime: "Tout le weekend",
        collaboration: {
          name: "La Nébuleuse Cléa & SOV_TT",
          socials: {
            instagram: "https://www.instagram.com/_clea_ttt"
          }
        }
      },
      {
        title: "Bijoux Vintage Réinventés",
        description: [
          "Créations uniques à partir de boutons anciens et bijoux chinés, transformés en accessoires au charme rétro."
        ],
        image: "/images/animations/art/bijoux-vintage.png",
        link: "/bijoux",
        showMoreLink: false,
        dateTime: "Tout le weekend",
        collaboration: {
          name: "CHIZOUKOU Bijoux Origami",
          socials: {
            instagram: "https://www.instagram.com/origamichizoukou",
            facebook: "https://www.facebook.com/chizoukou"
          }
        }
      },
      {
        title: "Atelier Code Gaming",
        description: [
          "Plonge dans la peau d'un programmeur de jeux !",
          "Découvre la programmation informatique à travers l'univers du rétrogaming.",
          "Atelier ludique et accessible à tous."
        ],
        image: "/images/animations/art/robotique.png",
        link: "/robotique",
        showMoreLink: false,
        dateTime: "Samedi 10h",
        collaboration: {
          name: "Campus26",
          socials: {
            instagram: "https://www.instagram.com/ecole_du_numerique_43/",
            facebook: "https://www.facebook.com/lecoledunumerique43"
          }
        }
      },
      {
        "title": "Univers photo vintage & boudoir",
        "description": [
          "Découvrez deux univers : vintage rétro et boudoir intime sexy.",
          "Shooting photo sur place et développement instantané 13x15 pour 8€."
        ],
        "image": "/images/animations/art/elphoto.png",
        "link": "/photoshooting",
        "showMoreLink": false,
        "dateTime": "Tout le weekend",
        "collaboration": {
          "name": "El photo",
          "socials": {
            "facebook": "https://www.facebook.com/p/El-photo-100066882163007/"
          }
        }
      },
      {
        "title": "Vinyles, jeux rétro et trésors geek à collectionner",
        "description": [
          "Des vinyles aux jeux vidéo, tout pour les vrais geeks vintage !"
        ],
        "image": "/images/animations/art/culturegeek.png",
        "link": "/geek",
        "showMoreLink": false,
        "dateTime": "Tout le weekend",
        "collaboration": {
          "name": "Culture geek",
          "socials": {
            "facebook": "https://www.facebook.com/profile.php?id=100064169885580"
          }
        }
      },
      {
        "title": "Bijoux et accessoires rétro – rockabilly",
        "description": [
          "Des bijoux et accessoires rétro, inspirés du style rockabilly et pin’up, pour toutes celles et ceux qui aiment la touche vintage avec du caractère 🎀"
        ],
        "image": "/images/animations/art/choubidou.png",
        "link": "/geek",
        "showMoreLink": false,
        "dateTime": "Tout le weekend",
        "collaboration": {
          "name": "Choubidou WHOUA Créations",
          "website": "https://choubidouwhoua.fr/"
        }
      },
      {
        "title": "Créations uniques à partir de tissus anciens, revisitées avec style ♻️",
        "description": [
          "Donne une seconde vie aux tissus anciens ! Des accessoires upcyclés aux couleurs pop et vibes rétro, 100 % faits main ♻️✨"
        ],
        "image": "/images/animations/art/biboune.png",
        "link": "/biboune",
        "showMoreLink": false,
        "dateTime": "Tout le weekend",
        "collaboration": {
          "name": "Façon Biboune",
          "socials": {
           instagram: "https://www.instagram.com/facon_biboune/"
          }
        }
      }
    ]
  }
];

export default function AnimationsTabs() {
  const [activeTab, setActiveTab] = useState("tout");

  return (
    <div className="w-full">
      {/* Tab Navigation */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2 mb-8 max-w-4xl mx-auto">
        {/* Tout Tab */}
        <button
          onClick={() => setActiveTab("tout")}
          className={`px-3 py-2 rounded-lg font-medium transition-all duration-200 text-sm sm:text-base ${
            activeTab === "tout"
              ? "bg-brand text-white shadow-md"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          }`}
        >
          <span className="mr-1 sm:mr-2">🌟</span>
          <span className="hidden sm:inline">Tout</span>
          <span className="sm:hidden">Tout</span>
        </button>
        
        {/* Other Tabs */}
        {tabContents.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-3 py-2 rounded-lg font-medium transition-all duration-200 text-sm sm:text-base ${
              activeTab === tab.id
                ? "bg-brand text-white shadow-md"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            <span className="mr-1 sm:mr-2">{tab.icon}</span>
            <span className="hidden lg:inline">{tab.title}</span>
            <span className="lg:hidden">
              {tab.title.split(' ')[0]}
              {tab.title.includes('&') && ' &'}
            </span>
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {activeTab === "tout" ? (
          // Show all content from all tabs
          tabContents.flatMap(tab => 
            tab.content.map((section, index) => (
              <div key={`${tab.id}-${index}`} className="card h-full flex flex-col">
                {/* Image Section - Takes more than half the card */}
                {section.showMoreLink !== false ? (
                  <a href={section.link} className="block w-full h-64 rounded-lg overflow-hidden mb-4 relative group">
                    <img 
                      src={section.image} 
                      alt={`${section.title} - Animation du Salon Vintage de Blavozy ${EVENT.date}`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    {/* Date/Time Badge */}
                    {section.dateTime && (
                      <div className="absolute top-3 left-3 bg-black/80 text-white px-3 py-1.5 rounded text-xs font-semibold">
                        {section.dateTime}
                      </div>
                    )}
                  </a>
                ) : (
                  <div className="w-full h-64 rounded-lg overflow-hidden mb-4 relative">
                    <img 
                      src={section.image} 
                      alt={`${section.title} - Animation du Salon Vintage de Blavozy ${EVENT.date}`}
                      className="w-full h-full object-cover"
                    />
                    {/* Date/Time Badge */}
                    {section.dateTime && (
                      <div className="absolute top-3 left-3 bg-black/80 text-white px-3 py-1.5 rounded text-xs font-semibold">
                        {section.dateTime}
                      </div>
                    )}
                  </div>
                )}
                
                {/* Content Section */}
                <div className="flex flex-col flex-grow">
                  {/* Title - Clickable only if showMoreLink is true */}
                  {section.showMoreLink !== false ? (
                    <a 
                      href={section.link}
                      className="text-lg font-semibold text-brand hover:text-brand/80 underline mb-2 transition-colors"
                    >
                      {section.title}
                    </a>
                  ) : (
                    <h3 className="text-lg font-semibold text-brand mb-2">
                      {section.title}
                    </h3>
                  )}
                  
                  {/* Description */}
                  <div className="text-gray-700 text-sm mb-4 space-y-2">
                    {Array.isArray(section.description) ? (
                      section.description.map((paragraph, idx) => (
                        <p key={idx}>{paragraph}</p>
                      ))
                    ) : (
                      <p>{section.description}</p>
                    )}
                  </div>
                  
                  {/* Collaboration */}
                  {section.collaboration && (
                    <div className="mt-2 mb-4 pb-3 border-t border-gray-200 pt-3">
                      <p className="text-xs text-gray-500 mb-1">En collaboration avec</p>
                      <div className="flex items-center gap-2">
                        {section.collaboration.website ? (
                          <a
                            href={section.collaboration.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm font-semibold text-brand hover:text-brand/80 underline transition-colors"
                          >
                            {section.collaboration.name}
                          </a>
                        ) : (
                          <p className="text-sm font-semibold text-slate-700">{section.collaboration.name}</p>
                        )}
                        {section.collaboration.socials && (
                          <div className="flex gap-2">
                            {section.collaboration.socials.instagram && (
                              <a
                                href={section.collaboration.socials.instagram}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-slate-500 hover:text-pink-600 transition-colors"
                                aria-label={`Instagram ${section.collaboration.name}`}
                              >
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                                </svg>
                              </a>
                            )}
                            {section.collaboration.socials.facebook && (
                              <a
                                href={section.collaboration.socials.facebook}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-slate-500 hover:text-blue-600 transition-colors"
                                aria-label={`Facebook ${section.collaboration.name}`}
                              >
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                </svg>
                              </a>
                            )}
                            {section.collaboration.socials.youtube && (
                              <a
                                href={section.collaboration.socials.youtube}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-slate-500 hover:text-red-600 transition-colors"
                                aria-label={`YouTube ${section.collaboration.name}`}
                              >
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                                </svg>
                              </a>
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                  
                  {/* En savoir + Link */}
                  {section.showMoreLink !== false && (
                    <div className="mt-auto">
                      <a 
                        href={section.link}
                        className="text-red-600 hover:text-red-800 text-sm font-medium transition-colors"
                      >
                        en savoir + →
                      </a>
                    </div>
                  )}
                </div>
              </div>
            ))
          )
        ) : (
          // Show content from selected tab
          tabContents
            .find((tab) => tab.id === activeTab)
            ?.content.map((section, index) => (
              <div key={index} className="card h-full flex flex-col">
                {/* Image Section - Takes more than half the card */}
                {section.showMoreLink !== false ? (
                  <a href={section.link} className="block w-full h-64 rounded-lg overflow-hidden mb-4 relative group">
                    <img 
                      src={section.image} 
                      alt={`${section.title} - Animation du Salon Vintage de Blavozy ${EVENT.date}`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    {/* Date/Time Badge */}
                    {section.dateTime && (
                      <div className="absolute top-3 left-3 bg-black/80 text-white px-3 py-1.5 rounded text-xs font-semibold">
                        {section.dateTime}
                      </div>
                    )}
                  </a>
                ) : (
                  <div className="w-full h-64 rounded-lg overflow-hidden mb-4 relative">
                    <img 
                      src={section.image} 
                      alt={`${section.title} - Animation du Salon Vintage de Blavozy ${EVENT.date}`}
                      className="w-full h-full object-cover"
                    />
                    {/* Date/Time Badge */}
                    {section.dateTime && (
                      <div className="absolute top-3 left-3 bg-black/80 text-white px-3 py-1.5 rounded text-xs font-semibold">
                        {section.dateTime}
                      </div>
                    )}
                  </div>
                )}
                
                {/* Content Section */}
                <div className="flex flex-col flex-grow">
                  {/* Title - Clickable only if showMoreLink is true */}
                  {section.showMoreLink !== false ? (
                    <a 
                      href={section.link}
                      className="text-lg font-semibold text-brand hover:text-brand/80 underline mb-2 transition-colors"
                    >
                      {section.title}
                    </a>
                  ) : (
                    <h3 className="text-lg font-semibold text-brand mb-2">
                      {section.title}
                    </h3>
                  )}
                  
                  {/* Description */}
                  <div className="text-gray-700 text-sm mb-4 space-y-2">
                    {Array.isArray(section.description) ? (
                      section.description.map((paragraph, idx) => (
                        <p key={idx}>{paragraph}</p>
                      ))
                    ) : (
                      <p>{section.description}</p>
                    )}
                  </div>
                  
                  {/* Collaboration */}
                  {section.collaboration && (
                    <div className="mt-2 mb-4 pb-3 border-t border-gray-200 pt-3">
                      <p className="text-xs text-gray-500 mb-1">En collaboration avec</p>
                      <div className="flex items-center gap-2">
                        {section.collaboration.website ? (
                          <a
                            href={section.collaboration.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm font-semibold text-brand hover:text-brand/80 underline transition-colors"
                          >
                            {section.collaboration.name}
                          </a>
                        ) : (
                          <p className="text-sm font-semibold text-slate-700">{section.collaboration.name}</p>
                        )}
                        {section.collaboration.socials && (
                          <div className="flex gap-2">
                            {section.collaboration.socials.instagram && (
                              <a
                                href={section.collaboration.socials.instagram}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-slate-500 hover:text-pink-600 transition-colors"
                                aria-label={`Instagram ${section.collaboration.name}`}
                              >
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                                </svg>
                              </a>
                            )}
                            {section.collaboration.socials.facebook && (
                              <a
                                href={section.collaboration.socials.facebook}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-slate-500 hover:text-blue-600 transition-colors"
                                aria-label={`Facebook ${section.collaboration.name}`}
                              >
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                </svg>
                              </a>
                            )}
                            {section.collaboration.socials.youtube && (
                              <a
                                href={section.collaboration.socials.youtube}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-slate-500 hover:text-red-600 transition-colors"
                                aria-label={`YouTube ${section.collaboration.name}`}
                              >
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                                </svg>
                              </a>
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                  
                  {/* En savoir + Link */}
                  {section.showMoreLink !== false && (
                    <div className="mt-auto">
                      <a 
                        href={section.link}
                        className="text-red-600 hover:text-red-800 text-sm font-medium transition-colors"
                      >
                        en savoir + →
                      </a>
                    </div>
                  )}
                </div>
              </div>
            ))
        )}
      </div>
    </div>
  );
}