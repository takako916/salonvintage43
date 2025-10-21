import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import JuryDJSection from "../../components/JuryDJSection";
import { EVENT } from "../data";

export const metadata: Metadata = {
  title: "Battle All Styles Old School",
  description: "Après plusieurs années d'absence, le RKD Battle Rien Ke L'Debout fait son grand retour au Vintage le Salon ! Un concept revisité autour du All Style Old School, sur des sons Hip-Hop d'époque. Dimanche 14h au Centre socio-culturel de Blavozy.",
  openGraph: {
    title: "Battle All Styles Old School | Vintage le Salon",
    description: "RKD Battle Rien Ke L'Debout - All Style Old School sur des sons Hip-Hop d'époque. Dimanche 14h à Blavozy.",
    images: ["/images/animations/danse/battle-hiphop.png"],
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
            src="/images/animations/danse/battle-hiphop.png"
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
                    <li><strong>Inscription :</strong> 5 € par danseur</li>
                    <li><strong>Format :</strong> 1 vs 1</li>
                    <li><strong>Style :</strong> All Style Old School sur musique Hip-Hop</li>
                    <li><strong>🏆 Prize money :</strong> 100 €</li>
                    <li><strong>Spectateurs :</strong> Entrée gratuite</li>
                  </ul>
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

