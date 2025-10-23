import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import JuryDJSection from "../../components/JuryDJSection";
import CollaborationSection from "../../components/CollaborationSection";
import { EVENT } from "../data";

export const metadata: Metadata = {
  title: "Battle All Styles Old School",
  description: "Après plusieurs années d'absence, le RKD Battle Rien Ke L'Debout fait son grand retour au Vintage le Salon ! Un concept revisité autour du All Style Old School, sur des sons Hip-Hop d'époque. Dimanche 14h au Centre socio-culturel de Blavozy.",
  openGraph: {
    title: "Battle All Styles Old School | Vintage le Salon",
    description: "RKD Battle Rien Ke L'Debout - All Style Old School sur des sons Hip-Hop d'époque. Dimanche 14h à Blavozy.",
    images: ["/images/animations/danse/battleflyer.jpeg"],
  },
};

export default function BattleHipHop() {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main id="main" className="pt-20">
        {/* Hero Section */}
        <section className="relative h-[400px] bg-gray-900">
          <img 
            src="/images/animations/danse/battleflyer.jpeg"
            alt="Battle All Styles Old School"
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
            <div className="container mx-auto px-4 pb-12">
              <div className="bg-black/80 text-white px-4 py-2 rounded inline-block mb-4">
                <span className="text-sm font-semibold">🕺 Dimanche 14h</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
                Battle All Styles Old School
              </h1>
              <p className="text-xl text-gray-200">
                RKD Battle &ldquo;Rien Ke L&rsquo;Debout&rdquo;
              </p>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            {/* Collaboration Section */}
            <CollaborationSection />

            <div className="card">
              <h2 className="text-3xl font-bold text-brand mb-6">
                Le grand retour du RKD Battle !
              </h2>
              
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed mb-4">
                  Après plusieurs années d&rsquo;absence, le <strong>RKD Battle &ldquo;Rien Ke L&rsquo;Debout&rdquo;</strong> fait son grand retour au Vintage le Salon ! 💥
                </p>
                
                <p className="text-gray-700 leading-relaxed mb-4">
                  Un concept revisité autour du <strong>All Style Old School</strong>, sur des sons Hip-Hop d&rsquo;époque.
                </p>
                
                <p className="text-gray-700 leading-relaxed mb-6">
                  🕺 Danseurs, sortez vos plus belles tenues Old School et montrez votre style !
                </p>

                {/* Jury & DJ Section */}
                <JuryDJSection />

                <div className="bg-orange-50 p-6 rounded-lg mb-6">
                  <h3 className="text-xl font-semibold text-brand mb-4">
                    📅 Informations Battle
                  </h3>
                  <ul className="space-y-2 text-gray-700">
                    <li><strong>Date :</strong> Dimanche 16 novembre 2025</li>
                    <li><strong>Heure :</strong> 14h00</li>
                    <li><strong>Lieu :</strong> {EVENT.venue}<br />
                        <span className="text-sm">8 Pl. Félix Tempère, 43700 Blavozy</span>
                    </li>
                    <li><strong>Inscription :</strong> 5 € par danseur<br />
                        <span className="text-sm">Pour vous inscrire, veuillez nous contacter par email à <a href="mailto:conventionvintage43@gmail.com" className="text-brand hover:underline">conventionvintage43@gmail.com</a></span>
                    </li>
                    <li><strong>Format :</strong> 1 vs 1</li>
                    <li><strong>Style :</strong> All Style Old School sur musique Hip-Hop</li>
                    <li><strong>🏆 Prize money :</strong> 100 €</li>
                  </ul>
                  
                  <div className="text-center mt-6">
                    <a
                      href="https://www.facebook.com/events/1507911597125324"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                      </svg>
                      <span>Événement Facebook</span>
                    </a>
                  </div>
                </div>

                <div className="bg-slate-50 p-6 rounded-lg mb-6">
                  <h3 className="text-xl font-semibold text-ink mb-4">
                    🎯 Pour les danseurs
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Vous êtes danseur et souhaitez participer au battle ? Venez montrer votre talent dans une ambiance compétitive mais amicale !
                  </p>
                  <ul className="space-y-2 text-gray-700 list-disc list-inside">
                    <li>Inscription : 5 € (sur place ou en ligne)</li>
                    <li>Format : 1 contre 1</li>
                    <li>Prize money de 100 € pour le gagnant 🏆</li>
                    <li>Tous niveaux bienvenus</li>
                    <li>Ambiance Old School garantie</li>
                    <li>Tenue vintage appréciée</li>
                    <li>Fair-play et respect avant tout</li>
                  </ul>
                </div>

                <div className="text-center mt-8">
                  <Link
                    href="/#animations"
                    className="btn-primary inline-flex items-center gap-2"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 19l-7-7 7-7"
                      />
                    </svg>
                    <span>Retour aux animations</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

