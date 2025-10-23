import { Metadata } from "next";
import Link from "next/link";
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
                MAH&rsquo;NA - Chanson française rétro
              </p>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="card">
              <h2 className="text-3xl font-bold text-brand mb-6">
                MAH&rsquo;NA revisite les classiques français
              </h2>
              
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed mb-4">
                  🎶 <strong>MAH&rsquo;NA</strong> revisite avec passion les plus grands classiques de la chanson française des années 60 à 80.
                </p>
                
                <p className="text-gray-700 leading-relaxed mb-6">
                  Plongez dans une ambiance rétro garantie avec des reprises qui vous feront voyager dans le temps ! Un moment musical inoubliable pour bien démarrer le weekend vintage.
                </p>

                {/* Artist Photo */}
                <div className="flex justify-center my-8">
                  <div className="w-full max-w-md">
                    <img 
                      src="/images/artists/mahnaetvladimir.jpg"
                      alt="MAH'NA - Artiste chanson française rétro"
                      className="w-full h-auto rounded-lg shadow-lg object-cover"
                    />
                    <p className="text-center text-sm text-gray-600 mt-3 font-medium">
                      Mah&rsquo;na et Vladimir
                    </p>
                    
                    {/* Social Media Links */}
                    <div className="flex justify-center gap-4 mt-4">
                      <a
                        href="https://www.instagram.com/mahnamusic/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-600 hover:text-pink-600 transition-colors"
                        aria-label="Instagram MAH'NA"
                      >
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                        </svg>
                      </a>
                      
                      <a
                        href="https://www.facebook.com/mahnamusic"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-600 hover:text-blue-600 transition-colors"
                        aria-label="Facebook MAH'NA"
                      >
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                        </svg>
                      </a>
                      
                      <a
                        href="https://www.youtube.com/@mahnamusique"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-600 hover:text-red-600 transition-colors"
                        aria-label="YouTube MAH'NA"
                      >
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="bg-orange-50 p-6 rounded-lg mb-6">
                  <h3 className="text-xl font-semibold text-brand mb-4">
                    📅 Informations pratiques
                  </h3>
                  <ul className="space-y-2 text-gray-700">
                    <li><strong>Date :</strong> Vendredi 14 novembre 2025</li>
                    <li><strong>Heure :</strong> 19h30 - 21h45</li>
                    <li><strong>Lieu :</strong> {EVENT.venue}, {EVENT.city}</li>
                    <li><strong>Artiste :</strong> MAH&rsquo;NA et Vladimir</li>
                    <li><strong>Répertoire :</strong> Chanson française années 60-80</li>
                
                  </ul>
                </div>

                <div className="bg-slate-50 p-6 rounded-lg mb-6">
                  <h3 className="text-xl font-semibold text-ink mb-4">
                    🎤 Au programme
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Venez découvrir ou redécouvrir les grands classiques de la chanson française dans une ambiance chaleureuse et conviviale. MAH&rsquo;NA vous propose un voyage musical dans le temps !
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
                    &ldquo;Une soirée parfaite pour lancer le weekend vintage ! Venez nombreux pour profiter de ce concert exceptionnel et démarrer l&rsquo;événement dans une ambiance musicale des années d&rsquo;or de la chanson française.&rdquo;
                  </p>
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

