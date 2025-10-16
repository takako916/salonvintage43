import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Section from "../components/Section";
import ProgramList from "../components/ProgramList";
import PosterCard from "../components/PosterCard";
import Footer from "../components/Footer";
import AnimationsTabs from "../components/AnimationsTabs";
import { EVENT } from "./data";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main id="main">
        <Hero />
        
        {/* Animations Section */}
        <Section id="animations" title="ANIMATIONS & EXPOSANTS" className="bg-orange-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-semibold text-ink mb-4">
                🎭 Animations & Spectacles 🛍️
              </h2>
              <p className="text-lg text-brand font-medium">
                Un programme riche en animations et exposants pour tous les âges !
              </p>
            </div>
            <AnimationsTabs />
          </div>
        </Section>
        
        {/* Informations Section */}
        <Section id="info" title="INFOS PRATIQUES" className="bg-slate-50">
          <div className="max-w-4xl mx-auto space-y-8">
            {/* Event Overview */}
            <div className="card text-center">
              <div className="text-lg text-gray-700 leading-relaxed space-y-4">
                <h2 className="text-xl font-semibold text-brand mb-4">
                  Salon du Vintage Haute-Loire - Brocante et vide-grenier familial
                </h2>
                <p className="text-left">
                  Le <strong>Centre socio-culturel de Blavozy</strong> accueille le premier salon du vintage de Haute-Loire ! Ce <strong>vide-grenier haute-loire</strong> et cette <strong>brocante 43</strong> vous proposent un véritable voyage dans le temps avec leurs objets rétro, déco vintage et accessoires des années 60 à 80 🕺💃
                </p>
                <div className="text-left max-w-2xl mx-auto">
                  <h3 className="font-medium mb-2">🎵 Au programme :</h3>
                  <ul className="space-y-2 text-base">
                    <li>🎸 <strong>Concerts rock</strong> & animations musicales</li>
                    <li>💉 Tatouage & blind test spécial années 80</li>
                    <li>🕺 <strong>Battle de danse hip-hop</strong> Old School</li>
                    <li>👗 Défilé & concours Miss & Mister Vintage 2025</li>
                    <li>🎮 Bornes d&apos;arcade, baby-foot, <strong>déco rétro</strong> & bonne humeur garantie !</li>
                    <li>🍔 Espace restauration sur place</li>
                    <li>👨‍👩‍👧‍👦 <strong>Événement familial</strong> — il y en aura pour tous les âges !</li>
                  </ul>
                  <p className="mt-4 font-medium text-brand">
                    Et ce n&apos;est pas tout… 🤫
                  </p>
                </div>
              </div>
            </div>

            {/* Event Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="card">
                <h3 className="text-xl font-semibold text-ink mb-4">
                  Date et lieu
                </h3>
                <div className="space-y-3">
                  <div>
                    <span className="font-medium text-brand">Date :</span>
                    <p className="text-gray-700">{EVENT.date}</p>
                  </div>
                  <div>
                    <span className="font-medium text-brand">Horaires :</span>
                    <ul className="text-gray-700 text-sm space-y-1 mt-1">
                      <li>• Vendredi : 18h00 – 22h00</li>
                      <li>• Samedi : 10h00 – 21h00</li>
                      <li>• Dimanche : 10h00 – 18h00</li>
                    </ul>
                  </div>
                  <div>
                    <span className="font-medium text-brand">Lieu :</span>
                    <p className="text-gray-700">{EVENT.venue}</p>
                    <p className="text-gray-600 text-sm">{EVENT.city}</p>
                  </div>
                </div>
              </div>

              <div className="card">
                <h3 className="text-xl font-semibold text-ink mb-4">
                  Accès depuis Le Puy-en-Velay et la région Haute-Loire - Brocante et vide-grenier
                </h3>
                <div className="space-y-4 text-left">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">🚗 En voiture depuis Le Puy-en-Velay :</h4>
                    <ul className="space-y-1 text-gray-700">
                      <li><strong>Depuis Le Puy-en-Velay</strong> : 5 minutes (D590) - <em>Sortie famille idéale pour cette brocante haute-loire !</em></li>
                      <li>Depuis Brioude : 45 minutes (N102)</li>
                      <li>Depuis Yssingeaux : 30 minutes (D103)</li>
                      <li>Depuis Saint-Étienne : 1h15 (A72)</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">📍 Localisation - Centre socio-culturel Blavozy :</h4>
                    <ul className="space-y-1 text-gray-700">
                      <li><strong>Blavozy</strong> - Commune limitrophe du Puy-en-Velay</li>
                      <li><strong>Centre socio-culturel</strong> - Au cœur du village</li>
                      <li>Parking gratuit - À proximité immédiate</li>
                      <li>Accès handicapé - Site accessible</li>
                      <li><em>Événement familial parfait pour une sortie avec enfants</em></li>
                    </ul>
                  </div>
                  
                  <div className="pt-4">
                    <a
                      href={EVENT.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-secondary-gray inline-flex items-center gap-2"
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
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                      <span>Voir sur Google Maps</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Poster Download */}
            <div className="text-center">
              <PosterCard />
            </div>
          </div>
        </Section>

        {/* Programme Section */}
        <Section id="program" title="PROGRAMME" className="bg-orange-50">
          <ProgramList />
        </Section>

        {/* Exposants Section */}
        <Section id="exhibitors" title="APPEL AUX EXPOSANTS" className="bg-slate-50">
          <div className="max-w-4xl mx-auto space-y-8">
            {/* Introduction */}
            <div className="card text-center">
              <h3 className="text-xl font-semibold text-ink mb-6">
                Rejoignez-nous !
              </h3>
              <div className="text-gray-700 leading-relaxed space-y-4 text-left">
                <p>
                  Le <strong>Salon du Vintage Haute-Loire</strong> à Blavozy prépare sa 1ère édition les 14, 15 et 16 novembre 2025. Ce <strong>salon vintage le puy en velay</strong> et cette <strong>brocante haute-loire</strong> vous attendent 🎉
                </p>
                <p>
                  À seulement quelques minutes du <strong>Puy-en-Velay</strong>, cet <strong>événement familial</strong> fera voyager le public dans les années 60 à 80 : <strong>concerts rock</strong>, <strong>battle de danse hip-hop</strong> old school, défilé, blind test, tatouage, restauration, <strong>déco rétro</strong>, <strong>vide-grenier haute-loire</strong>, etc.
                </p>
                <p>
                  Une ambiance conviviale et familiale vous attend, idéale pour petits et grands 👨‍👩‍👧‍👦
                </p>
                <p className="text-brand font-medium">
                  Les exposants sont déjà nombreux, mais il reste encore quelques places — notamment pour les passionnés de vinyles 🎶, affiches & posters 🎨, vêtements vintage 👗, <strong>objets rétro & déco</strong> 🕰️.
                </p>
                <div className="mt-6">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-800 transition-colors font-medium"
                  >
                    <span>Contactez-nous pour plus d&apos;informations</span>
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
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
          </a>
        </div>
              </div>
            </div>


            {/* CTA Button */}
            <div className="flex justify-center items-center">
              <a
                href={EVENT.facebookEvent}
          target="_blank"
          rel="noopener noreferrer"
                className="btn-secondary-gray inline-flex items-center gap-2"
              >
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
                <span>Événement Facebook</span>
              </a>
            </div>
          </div>
        </Section>

        {/* Contact Section */}
        <Section id="contact" title="CONTACT" className="bg-orange-50">
          <div className="max-w-4xl mx-auto">
            {/* Main Contact Card */}
            <div className="card text-center mb-8">
              <h3 className="text-xl font-semibold text-ink mb-4">
                Une question ?
              </h3>
              <p className="text-gray-700 mb-6">
                N&apos;hésitez pas à nous contacter pour toute information complémentaire.
              </p>
              <a
                href={`mailto:${EVENT.contactEmail}`}
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
                    d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span>{EVENT.contactEmail}</span>
              </a>
              <p className="text-gray-600 text-sm mt-4">
                Nous vous répondrons dans les 48 heures
              </p>
            </div>

            {/* Production Directe Introduction */}
            <div className="card">
              <div className="flex flex-col md:flex-row items-center gap-6">
                {/* Photos */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="text-center">
                    <div className="w-24 h-24 rounded-full mx-auto mb-2 overflow-hidden">
                      <img 
                        src="/images/victor-moutbeka.jpg" 
                        alt="Victor MOUTBEKA - Organisateur du salon vintage haute-loire et brocante 43 Production Directe" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <p className="text-sm text-gray-600">Victor MOUTBEKA</p>
                  </div>
                  <div className="text-center">
                    <img 
                      src="/images/production_directe_logo.jpg" 
                      alt="Logo Production Directe - Organisateur du salon vintage haute-loire et vide-grenier Blavozy" 
                      className="w-20 h-24 mx-auto mb-2 rounded-lg object-contain"
                    />
                    <p className="text-sm text-gray-600">Production Directe</p>
                  </div>
                </div>
                
                {/* Text Content */}
                <div className="flex-1 text-center md:text-left">
                  <h4 className="text-lg font-semibold text-ink mb-2">
                    Organisateur & Concepteur d&apos;Événement
                  </h4>
                  <p className="text-gray-700 mb-2">
                    <strong>Production Directe</strong> (Victor MOUTBEKA)
                  </p>
                  <p className="text-gray-600 text-sm">
                    Spécialisé dans la création et l&apos;organisation d&apos;événements culturels, 
                    Production Directe vous propose une expérience unique dans l&apos;univers des années 60-80.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Section>
      </main>

      <Footer />
    </div>
  );
}
