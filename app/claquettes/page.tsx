import { Metadata } from "next";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { EVENT } from "../data";

export const metadata: Metadata = {
  title: "Démo & Initiation de Claquettes",
  description: "Assistez à une démonstration de claquettes et essayez quelques pas vous-même dans une ambiance conviviale. En collaboration avec Metal tap au Vintage le Salon à Blavozy.",
  openGraph: {
    title: "Démo & Initiation de Claquettes | Vintage le Salon",
    description: "Assistez à une démonstration de claquettes et essayez quelques pas vous-même dans une ambiance conviviale. En collaboration avec Metal tap.",
    images: ["/images/animations/danse/claquettes.png"],
  },
};

export default function Claquettes() {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main id="main" className="pt-20">
        {/* Hero Section */}
        <section className="relative h-[400px] bg-gray-900">
          <img 
            src="/images/animations/danse/metaltap.png"
            alt="Démo & Initiation de Claquettes - avec Isabelle Roux de Metal tap"
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
            <div className="container mx-auto px-4 pb-12">
              <div className="bg-black/80 text-white px-4 py-2 rounded inline-block mb-4">
                <span className="text-sm font-semibold">🗓️ Samedi 15 novembre 2025 - Journée unique</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
                Démo &amp; Initiation de Claquettes
              </h1>
              <p className="text-xl text-gray-200">
                Metal tap
              </p>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="card">
              <h2 className="text-3xl font-bold text-brand mb-6">
                Ateliers de claquettes avec Metal tap
              </h2>
              
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed mb-4">
                  👟 <strong>Une journée complète dédiée aux claquettes !</strong> Le samedi 15 novembre, participez aux ateliers et cours proposés par <strong>Isabelle Roux de Metal tap</strong> au sein du salon vintage.
                </p>
                
                <p className="text-gray-700 leading-relaxed mb-4">
                  Que vous soyez <strong>débutant complet</strong> avec les séances « 1ers pas », <strong>jeune danseur</strong> avec l&rsquo;atelier jeunes, ou <strong>danseur expérimenté</strong> cherchant à perfectionner sa technique, il y a un atelier pour vous !
                </p>

                <p className="text-gray-700 leading-relaxed mb-6">
                  Vous pourrez également assister à une <strong>démonstration professionnelle</strong> pour découvrir toute la richesse de cette discipline qui transforme vos pieds en véritables instruments de musique. 🎵
                </p>

                <div className="bg-orange-50 p-6 rounded-lg mb-6">
                  <h3 className="text-xl font-semibold text-brand mb-4">
                    📅 Informations pratiques
                  </h3>
                  <ul className="space-y-2 text-gray-700">
                    <li><strong>Date :</strong> Samedi 15 novembre 2025 uniquement</li>
                    <li><strong>Lieu :</strong> {EVENT.venue}, {EVENT.city}</li>
                    <li><strong>Animé par :</strong> Metal tap (Isabelle Roux)</li>
                    <li><strong>Niveau :</strong> Tous niveaux - débutants bienvenus</li>
                  </ul>
                  
                  <div className="mt-4 pt-4 border-t border-orange-200">
                    <h4 className="font-semibold text-gray-800 mb-3">💰 Tarifs des ateliers :</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• <strong>Séance « 1ers pas » :</strong> 7 € adultes / 5 € moins de 18 ans</li>
                      <li>• <strong>Cours claquettes :</strong> 22 € adultes (1h30)</li>
                      <li>• <strong>Atelier claquettes jeunes :</strong> 14 €</li>
                    </ul>
                    <p className="mt-3 text-sm italic text-gray-600">
                      🎟️ Bonus : La participation à un atelier claquettes vous offre l&rsquo;entrée gratuite au salon !
                    </p>
                  </div>

                  <div className="mt-4 pt-4 border-t border-orange-200">
                    <p className="text-gray-700 flex items-start gap-2">
                      <span className="text-lg">👟</span>
                      <span><strong>Chaussures de claquettes</strong> fournies sur réservation - n&rsquo;oubliez pas d&rsquo;apporter vos chaussettes !</span>
                    </p>
                  </div>
                </div>

                <div className="bg-slate-50 p-6 rounded-lg mb-6">
                  <h3 className="text-xl font-semibold text-ink mb-4">
                    👟 Programme de la journée
                  </h3>
                  <div className="space-y-4 text-gray-700">
                    <div className="flex gap-3">
                      <div className="font-semibold text-brand min-w-[120px]">13h - 14h</div>
                      <div>
                        <strong>Atelier Claquettes jeunes et ados</strong>
                        <p className="text-sm text-gray-600 mt-1">Spécialement conçu pour les jeunes danseurs</p>
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <div className="font-semibold text-brand min-w-[120px]">14h15 - 15h15</div>
                      <div>
                        <strong>Démo de claquettes sur le salon Vintage</strong>
                        <p className="text-sm text-gray-600 mt-1">Assistez à une démonstration professionnelle</p>
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <div className="font-semibold text-brand min-w-[120px]">15h15 - 15h45</div>
                      <div>
                        <strong>« 1ers pas » - Séance découverte des claquettes</strong>
                        <p className="text-sm text-gray-600 mt-1">Initiation pour débutants - venez essayer !</p>
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <div className="font-semibold text-brand min-w-[120px]">16h - 17h30</div>
                      <div>
                        <strong>Cours claquettes</strong>
                        <p className="text-sm text-gray-600 mt-1">Accessible avec connaissance des frappes de base</p>
                        <p className="text-sm text-gray-600">Pour ceux ayant déjà pratiqué les claquettes ou ayant bon niveau de danse</p>
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <div className="font-semibold text-brand min-w-[120px]">17h30 - 18h</div>
                      <div>
                        <strong>« 1ers pas » - Séance découverte des claquettes</strong>
                        <p className="text-sm text-gray-600 mt-1">Dernière session découverte de la journée</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-red-50 p-6 rounded-lg mb-6 border-l-4 border-red-500">
                  <h3 className="text-xl font-semibold text-red-700 mb-4 flex items-center gap-2">
                    <span>📝</span>
                    <span>Inscription obligatoire</span>
                  </h3>
                  <p className="text-gray-700 mb-4">
                    La réservation est <strong>obligatoire</strong> pour participer aux ateliers de claquettes. Places limitées !
                  </p>
                  <div className="space-y-2">
                    <p className="text-gray-700">
                      <strong>📞 Informations :</strong>{" "}
                      <a href="tel:0682085718" className="text-brand hover:text-brand/80 underline transition-colors">
                        06 82 08 57 18
                      </a>
                    </p>
                    <p className="text-gray-700">
                      <strong>✉️ Inscriptions :</strong>{" "}
                      <a href="mailto:hiphop1.academie@gmail.com" className="text-brand hover:text-brand/80 underline transition-colors">
                        hiphop1.academie@gmail.com
                      </a>
                    </p>
                  </div>
                </div>

                <div className="bg-brand/5 p-6 rounded-lg mb-6 border-l-4 border-brand">
                  <p className="text-gray-700 italic">
                    &ldquo;Les claquettes sont un mélange parfait de danse et de percussion ! Venez découvrir cette discipline unique qui transforme vos pieds en instruments de musique.&rdquo;
                  </p>
                </div>

                {/* Social Media Links */}
                <div className="bg-white p-6 rounded-lg mb-6 border border-gray-200">
                  <h3 className="text-lg font-semibold text-brand mb-3">
                    En collaboration avec Metal tap
                  </h3>
                  <p className="text-gray-700 mb-4 text-sm">
                    Suivez Metal tap sur les réseaux sociaux :
                  </p>
                  <div className="flex gap-4">
                    <a
                      href="https://www.facebook.com/p/Metal-tap-100036657864329"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-600 hover:text-blue-600 transition-colors"
                      aria-label="Facebook Metal tap"
                    >
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                      </svg>
                    </a>
                  </div>
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

