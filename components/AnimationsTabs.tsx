"use client";

import { useState } from "react";
import { EVENT } from "../app/data";

interface TabContent {
  id: string;
  title: string;
  icon: string;
  content: {
    title: string;
    description: string;
    image: string;
    link: string;
    showMoreLink?: boolean;
    dateTime?: string;
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
        description: "MAH'NA revisite avec passion les plus grands classiques de la chanson française des années 60 à 80. Ambiance rétro garantie ! 🎶",
        image: "/images/animations/musique/concerts-live.png",
        link: "/concerts",
        showMoreLink: true,
        dateTime: "Vendredi 19h30-21h45"
      },
      {
        title: "Blind test spécial années 80",
        description: "Teste tes connaissances musicales et amuse-toi entre amis ! Cadeaux à la clé ! 🎧",
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
        description: "Après plusieurs années d'absence, le RKD Battle \"Rien Ke L'Debout\" fait son grand retour au Vintage le Salon ! 💥 Un concept revisité autour du All Style Old School, sur des sons Hip-Hop d'époque. 🕺 Danseurs, sortez vos plus belles tenues Old School et montrez votre style !",
        image: "/images/animations/danse/battle-hiphop.png",
        link: "/battlehiphop",
        showMoreLink: true,
        dateTime: "Dimanche 14h"
      },
      {
        title: "Défilé de Mode Vintage",
        description: "Admirez les plus beaux looks vintage défilant sur scène. Participe au défilé de mode vintage du salon !  Inscris-toi dès maintenant via notre page officielle.  🎟️ Entrée gratuite pour les participants.  👗 Nous recherchons 2 modèles femmes et 2 modèles hommes – Pass week-end offert.",
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
        showMoreLink: false
      },
      {
        title: "Initiation au Lindy Hop",
        description: "Découvre ce swing des années folles avec nos danseurs passionnés.",
        image: "/images/animations/danse/lindyhop.png",
        link: "/lindyhop",
        showMoreLink: false,
        dateTime: "Samedi 18h-19h"
      },
      {
        title: "Bal Swing",
        description: "Place à la danse ! Enfile ta plus belle tenue rétro et viens partager un moment festif sur les rythmes swing ! 🎷",
        image: "/images/animations/danse/swing.png",
        link: "/balswing",
        showMoreLink: false,
        dateTime: "Samedi 19h-21h"
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
        description: " Forme ton équipe et rejoins le tournoi !  💸 Inscription : 10 € par équipe  🏆 L'équipe gagnante repart avec 50 € de prize money.  Les inscriptions sont ouvertes !",
        image: "/images/animations/jeux/babyfoot.png",
        link: "/babyfoot",
        showMoreLink: false,
        dateTime: "Samedi 16h"
      },
      {
        title: "Concours de Hula Hoop",
        description: "Viens défier tes amis dans une ambiance fun et décontractée ! 🎁 Cadeaux à gagner pour les finalistes. 👉 Battle Hula Hoop Top 8 : qui sera le grand gagnant ?",
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
        dateTime: "Tout le weekend"
      },
      {
        title: "Bijoux Vintage Réinventés",
        description: "Créations uniques à partir de boutons anciens et bijoux chinés, transformés en accessoires au charme rétro.",
        image: "/images/animations/art/bijoux-vintage.png",
        link: "/bijoux",
        showMoreLink: false,
        dateTime: "Tout le weekend"
      },
      {
        title: "Atelier Robotique",
        description: "Plonge dans la peau d'un programmeur de jeux ! Découvre la programmation informatique à travers l'univers du rétrogaming. Atelier ludique et accessible à tous.",
        image: "/images/animations/art/robotique.png",
        link: "/robotique",
        showMoreLink: false,
        dateTime: "Samedi 10h"
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
                  <p className="text-gray-700 text-sm mb-4 flex-grow">
                    {section.description}
                  </p>
                  
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
                  <p className="text-gray-700 text-sm mb-4 flex-grow">
                    {section.description}
                  </p>
                  
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