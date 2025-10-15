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
        description: "Des concerts live avec des artistes locaux et régionaux.",
        image: "/images/animations/musique/concerts-live.png",
        link: "#concerts",
        showMoreLink: true
      },
      {
        title: "Blind test spécial années 80",
        description: "Testez vos connaissances musicales et gagnez des lots vintage !",
        image: "/images/animations/musique/blind-test.png",
        link: "#blindtest",
        showMoreLink: false
      }
    ]
  },
  {
    id: "danse",
    title: "Danse & Performance",
    icon: "🕺",
    content: [
      {
        title: "Battle Hip-Hop Old School",
        description: "Montrez vos talents de danse dans une ambiance compétitive mais amicale.",
        image: "/images/animations/danse/battle-hiphop.png",
        link: "#battle",
        showMoreLink: true
      },
      {
        title: "Défilé de Mode Vintage",
        description: "Admirez les plus beaux looks vintage défilant sur scène.",
        image: "/images/animations/danse/defile-mode.png",
        link: "#defile",
        showMoreLink: false
      },
      {
        title: "Concours Miss & Mister Vintage 2025",
        description: "Élection de beauté avec jury de professionnels et couronnement officiel.",
        image: "/images/animations/danse/concours-vintage.png",
        link: "#concours",
        showMoreLink: true
      },
      {
        title: "Démo & Initiation de Claquettes",
        description: "Assistez à une démonstration de claquettes et essayez quelques pas vous-même dans une ambiance conviviale.",
        image: "/images/animations/danse/claquettes.png",
        link: "#claquettes",
        showMoreLink: false
      }
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
        link: "#arcade",
        showMoreLink: true
      },
      {
        title: "Tournoi de baby foot",
        description: "Formez votre équipe et défiez vos amis dans un tournoi de baby-foot plein d’énergie et de bonne humeur !",
        image: "/images/animations/jeux/babyfoot.png",
        link: "#activites",
        showMoreLink: true
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
        link: "#tatouage",
        showMoreLink: true
      },
      {
        title: "Bijoux Vintage Réinventés",
        description: "Créations uniques à partir de boutons anciens et bijoux chinés, transformés en accessoires au charme rétro.",
        image: "/images/animations/art/bijoux-vintage.png",
        link: "#bijoux",
        showMoreLink: false
      },
      {
        title: "Atelier Robotique pour les enfants",
        description: "Découvrez comment construire, programmer (grâce à l'outil Scratch) et tester le bon fonctionnement d'une voiture intelligente.",
        image: "/images/animations/art/robotique.png",
        link: "#enfants",
        showMoreLink: true
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
                <div className="w-full h-64 rounded-lg overflow-hidden mb-4">
                  <img 
                    src={section.image} 
                    alt={`${section.title} - Animation du Salon Vintage de Blavozy ${EVENT.date}`}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Content Section */}
                <div className="flex flex-col flex-grow">
                  {/* Clickable Title */}
                  <a 
                    href={section.link}
                    className="text-lg font-semibold text-brand hover:text-brand/80 underline mb-2 transition-colors"
                  >
                    {section.title}
                  </a>
                  
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
                <div className="w-full h-64 rounded-lg overflow-hidden mb-4">
                  <img 
                    src={section.image} 
                    alt={`${section.title} - Animation du Salon Vintage de Blavozy ${EVENT.date}`}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Content Section */}
                <div className="flex flex-col flex-grow">
                  {/* Clickable Title */}
                  <a 
                    href={section.link}
                    className="text-lg font-semibold text-brand hover:text-brand/80 underline mb-2 transition-colors"
                  >
                    {section.title}
                  </a>
                  
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