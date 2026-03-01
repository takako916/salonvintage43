import Navbar from "../../components/Navbar";
import Hero from "../../components/Hero";
import Section from "../../components/Section";
import Footer from "../../components/Footer";
import { EVENT } from "../data";

export default function Home() {
  return (
    <div className="min-h-screen bg-paper text-ink">
      <Navbar />
      
      <main id="main">
        <Hero />
        
        {/* Animations Section — Prochainement */}
        <Section id="animations" title="ANIMATIONS & EXPOSANTS" className="bg-orange-50">
          <div className="max-w-2xl mx-auto text-center py-12">
            <p className="text-2xl font-semibold text-brand">Prochainement</p>
            <p className="text-gray-600 mt-2">Cette section sera bientôt disponible.</p>
          </div>
        </Section>
        
        {/* Informations Section — Prochainement */}
        <Section id="info" title="INFOS PRATIQUES" className="bg-slate-50">
          <div className="max-w-2xl mx-auto text-center py-12">
            <p className="text-2xl font-semibold text-brand">Prochainement</p>
            <p className="text-gray-600 mt-2">Cette section sera bientôt disponible.</p>
          </div>
        </Section>

        {/* Programme Section — Prochainement */}
        <Section id="program" title="PROGRAMME" className="bg-orange-50">
          <div className="max-w-2xl mx-auto text-center py-12">
            <p className="text-2xl font-semibold text-brand">Prochainement</p>
            <p className="text-gray-600 mt-2">Cette section sera bientôt disponible.</p>
          </div>
        </Section>

        {/* Exposants Section */}
        <Section id="exhibitors" title="APPEL AUX EXPOSANTS" className="bg-slate-50">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="card text-center">
              <h3 className="text-xl font-semibold text-ink mb-6">Rejoignez-nous !</h3>
              <div className="text-gray-700 leading-relaxed space-y-5 text-left">
                <p>
                  La <strong className="text-ink">2e édition du Salon du Vintage Haute-Loire</strong> se tiendra à <strong className="text-ink">Brives-Charensac</strong>, les <strong className="text-ink">31 octobre et 1er novembre 2026</strong>, à la <strong className="text-ink">Maison Pour Tous – Centre Social de Brives-Charensac</strong>, à seulement <strong className="text-brand">5 minutes du Puy-en-Velay</strong>.
                </p>
                <p>
                  Pendant deux jours, ce <strong className="text-ink">grand rendez-vous vintage en Haute-Loire</strong> plongera les visiteurs dans l&apos;univers des <strong className="text-brand">années 60 à 80</strong> :<br />
                  <span className="text-slate-800"><strong>concerts</strong>, <strong>battle de danse hip-hop old school</strong>, défilé, blind test, tatouage, restauration, <strong>déco rétro</strong> et espace <strong>vide-grenier</strong>.</span>
                </p>
                <p>
                  Pensé comme un <strong className="text-ink">événement familial et convivial</strong>, le salon accueille petits et grands dans une <strong className="text-brand">ambiance chaleureuse et festive</strong>.
                </p>
                <p>
                  <strong className="text-ink">Nous lançons notre appel aux exposants</strong> :<br />
                  passionnés de <strong>vinyles</strong>, <strong>affiches et posters</strong>, <strong>vêtements vintage</strong>, <strong>objets rétro et décoration</strong>… vous êtes les bienvenus pour faire vivre cette <strong className="text-brand">brocante vintage en Haute-Loire</strong> aux côtés d&apos;un public enthousiaste.
                </p>
                <p className="pt-2">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 text-brand font-semibold hover:text-orange-600 transition-colors"
                  >
                    <span>👉 Contactez-nous pour recevoir les informations et le dossier d&apos;inscription.</span>
                    <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </p>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <a
                href={EVENT.facebookEvent}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary-gray inline-flex items-center gap-2"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
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
            <div className="card text-center mb-8">
              <h3 className="text-xl font-semibold text-ink mb-4">Une question ?</h3>
              <p className="text-gray-700 mb-6">
                N&apos;hésitez pas à nous contacter pour toute information complémentaire.
              </p>
              <a
                href={`mailto:${EVENT.contactEmail}`}
                className="btn-primary inline-flex items-center gap-2"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>{EVENT.contactEmail}</span>
              </a>
              <p className="text-gray-600 text-sm mt-4">Nous vous répondrons dans les 48 heures</p>
            </div>
            <div className="card">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="text-center">
                    <div className="w-24 h-24 rounded-full mx-auto mb-2 overflow-hidden">
                      <img src="/images/victor-moutbeka.jpg" alt="Victor MOUTBEKA" className="w-full h-full object-cover" />
                    </div>
                    <p className="text-sm text-gray-600">Victor MOUTBEKA</p>
                  </div>
                  <div className="text-center">
                    <img src="/images/production_directe_logo.jpg" alt="Production Directe" className="w-20 h-24 mx-auto mb-2 rounded-lg object-contain" />
                    <p className="text-sm text-gray-600">Production Directe</p>
                  </div>
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h4 className="text-lg font-semibold text-ink mb-2">Organisateur & Concepteur d&apos;Événement</h4>
                  <p className="text-gray-700 mb-2"><strong>Production Directe</strong> (Victor MOUTBEKA)</p>
                  <p className="text-gray-600 text-sm">
                    Spécialisé dans la création et l&apos;organisation d&apos;événements culturels, Production Directe vous propose une expérience unique dans l&apos;univers des années 60-80.
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
