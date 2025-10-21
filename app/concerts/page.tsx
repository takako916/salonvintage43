import { Metadata } from "next";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { EVENT } from "../data";

export const metadata: Metadata = {
  title: "Concerts Live",
  description: "MAH'NA revisite avec passion les plus grands classiques de la chanson française des années 60 à 80. Ambiance rétro garantie ! Vendredi 19h30-21h45 au Centre socio-culturel de Blavozy.",
  openGraph: {
    title: "Concerts Live | Vintage le Salon",
    description: "MAH'NA revisite avec passion les plus grands classiques de la chanson française des années 60 à 80. Vendredi 19h30-21h45 à Blavozy.",
    images: ["/images/animations/musique/concerts-live.png"],
  },
};

export default function Concerts() {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main id="main" className="pt-20">
        {/* Hero Section */}
        <section className="relative h-[400px] bg-gray-900">
          <img 
            src="/images/animations/musique/concerts-live.png"
            alt="Concerts Live - MAH'NA"
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
            <div className="container mx-auto px-4 pb-12">
              <div className="bg-black/80 text-white px-4 py-2 rounded inline-block mb-4">
                <span className="text-sm font-semibold">🎵 Vendredi 19h30-21h45</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
                Concerts Live
              </h1>
              <p className="text-xl text-gray-200">
                MAH'NA - Chanson française rétro
              </p>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="card">
              <h2 className="text-3xl font-bold text-brand mb-6">
                MAH'NA revisite les classiques français
              </h2>
              
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed mb-4">
                  🎶 <strong>MAH'NA</strong> revisite avec passion les plus grands classiques de la chanson française des années 60 à 80.
                </p>
                
                <p className="text-gray-700 leading-relaxed mb-6">
                  Plongez dans une ambiance rétro garantie avec des reprises qui vous feront voyager dans le temps ! Un moment musical inoubliable pour bien démarrer le weekend vintage.
                </p>

                <div className="bg-orange-50 p-6 rounded-lg mb-6">
                  <h3 className="text-xl font-semibold text-brand mb-4">
                    📅 Informations pratiques
                  </h3>
                  <ul className="space-y-2 text-gray-700">
                    <li><strong>Date :</strong> Vendredi 14 novembre 2025</li>
                    <li><strong>Heure :</strong> 19h30 - 21h45</li>
                    <li><strong>Lieu :</strong> {EVENT.venue}, {EVENT.city}</li>
                    <li><strong>Artiste :</strong> MAH'NA</li>
                    <li><strong>Répertoire :</strong> Chanson française années 60-80</li>
                    <li><strong>Entrée :</strong> Gratuit</li>
                  </ul>
                </div>

                <div className="bg-slate-50 p-6 rounded-lg mb-6">
                  <h3 className="text-xl font-semibold text-ink mb-4">
                    🎤 Au programme
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Venez découvrir ou redécouvrir les grands classiques de la chanson française dans une ambiance chaleureuse et conviviale. MAH'NA vous propose un voyage musical dans le temps !
                  </p>
                  <ul className="space-y-2 text-gray-700 list-disc list-inside">
                    <li>Reprises des plus grands tubes français</li>
                    <li>Ambiance rétro et conviviale</li>
                    <li>Performance live acoustique</li>
                    <li>Ouverture officielle du salon vintage</li>
                  </ul>
                </div>

                <div className="bg-brand/5 p-6 rounded-lg mb-6 border-l-4 border-brand">
                  <p className="text-gray-700 italic">
                    "Une soirée parfaite pour lancer le weekend vintage ! Venez nombreux pour profiter de ce concert exceptionnel et démarrer l'événement dans une ambiance musicale des années d'or de la chanson française."
                  </p>
                </div>

                <div className="text-center mt-8">
                  <a
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
                  </a>
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

