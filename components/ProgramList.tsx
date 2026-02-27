"use client";

import { useBasePath } from "./EventProviders";

export default function ProgramList() {
  const basePath = useBasePath();

  return (
    <div className="max-w-5xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-ink mb-2">
          🕰️ PROGRAMME — VINTAGE LE SALON
        </h2>
        
        {/* PDF Download Section */}
        <div className="mt-6">
          <a
            href="/programme.pdf"
            download
            className="inline-flex items-center gap-3 px-6 py-3 bg-brand text-white rounded-lg hover:bg-brand/90 transition-all duration-200 shadow-md hover:shadow-lg"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            <span className="font-semibold">Télécharger le programme (PDF)</span>
          </a>
          <p className="text-sm text-gray-600 mt-2">
            Téléchargez le programme complet imprimable
          </p>
        </div>
      </div>

      <div className="space-y-8">
        {/* Vendredi 14 novembre */}
        <div className="card">
          <h3 className="text-2xl font-bold text-brand mb-6 border-b-2 border-brand/20 pb-3">
            Vendredi 14 novembre
          </h3>
          
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-24 font-semibold text-slate-700">18h00</div>
              <div className="flex-1">
                <p className="font-semibold text-ink mb-1">Ouverture du salon</p>
                <p className="text-gray-700 text-sm">
                  Bienvenue dans l&rsquo;univers du Vintage ! Trois jours de musique, de mode et de bonne humeur vous attendent.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-24 font-semibold text-slate-700">19h30 – 21h45</div>
              <div className="flex-1">
                <p className="font-semibold text-ink mb-1">
                  <a href={`${basePath}/concerts`} className="text-brand hover:text-brand/80 underline transition-colors">
                    Concert MAH&rsquo;NA & Vladimir
                  </a>
                </p>
                <p className="text-gray-700 text-sm mb-2">
                  MAH&rsquo;NA revisite avec passion les plus grands classiques de la chanson française des années 60 à 80.
                </p>
                <p className="text-gray-700 text-sm">
                  Ambiance rétro garantie ! 🎶
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-24 font-semibold text-slate-700">22h00</div>
              <div className="flex-1">
                <p className="font-semibold text-ink">Fermeture du salon</p>
              </div>
            </div>
          </div>
        </div>

        {/* Samedi 15 novembre */}
        <div className="card">
          <h3 className="text-2xl font-bold text-brand mb-6 border-b-2 border-brand/20 pb-3">
            Samedi 15 novembre
          </h3>
          
          <div className="space-y-6">
            {/* <div className="flex gap-4">
              <div className="flex-shrink-0 w-24 font-semibold text-slate-700">10h00</div>
              <div className="flex-1">
                <p className="font-semibold text-ink mb-1">Atelier Code Gaming : &ldquo;Plonge dans la peau d&rsquo;un programmeur de jeux !&rdquo;</p>
                <p className="text-gray-700 text-sm">
                  Découvre la programmation informatique à travers l&rsquo;univers du rétrogaming. Atelier ludique et accessible à tous.
                </p>
              </div>
            </div> */}

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-24 font-semibold text-slate-700">13h00 – 18h00</div>
              <div className="flex-1">
                <p className="font-semibold text-ink mb-1">
                  <a href={`${basePath}/claquettes`} className="text-brand hover:text-brand/80 underline transition-colors">
                    Ateliers de claquettes avec Metal tap
                  </a>
                </p>
                <p className="text-gray-700 text-sm">
                  Une journée complète d&rsquo;ateliers pour tous les niveaux : découverte, jeunes, et cours avancés. Inscription obligatoire. 👟
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-24 font-semibold text-slate-700">14h00</div>
              <div className="flex-1">
                <p className="font-semibold text-ink mb-1">Concours de Hula Hoop</p>
                <p className="text-gray-700 text-sm mb-2">
                  Viens défier tes amis dans une ambiance fun et décontractée !
                </p>
                <p className="text-gray-700 text-sm mb-1">
                  🎁 Cadeaux à gagner pour les finalistes.
                </p>
                <p className="text-gray-700 text-sm">
                  👉 Battle Hula Hoop Top 8 : qui sera le grand gagnant ?
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-24 font-semibold text-slate-700">15h00</div>
              <div className="flex-1">
                <p className="font-semibold text-ink mb-1">Défilé Vintage</p>
                <p className="text-gray-700 text-sm mb-2">
                  Participe au défilé de mode vintage du salon ! Inscris-toi dès maintenant via notre page officielle.
                </p>
                <p className="text-gray-700 text-sm mb-1">
                  🎟️ Entrée gratuite pour les participants.
                </p>
                <p className="text-gray-700 text-sm">
                  👗 Nous recherchons 2 modèles femmes et 2 modèles hommes – Pass week-end offert.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-24 font-semibold text-slate-700">16h00</div>
              <div className="flex-1">
                <p className="font-semibold text-ink mb-1">Tournoi de Baby-foot</p>
                <p className="text-gray-700 text-sm mb-2">
                  Forme ton équipe et rejoins le tournoi !
                </p>
                <p className="text-gray-700 text-sm mb-1">
                  💸 Inscription : 10 € par équipe
                </p>
                <p className="text-gray-700 text-sm mb-2">
                  🏆 L&rsquo;équipe gagnante repart avec 50 € de prize money.
                </p>
                <p className="text-gray-700 text-sm">
                  Les inscriptions sont ouvertes !
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-24 font-semibold text-slate-700">18h00 – 19h00</div>
              <div className="flex-1">
                <p className="font-semibold text-ink mb-1">Initiation au Lindy Hop</p>
                <p className="text-gray-700 text-sm">
                  Découvre ce swing des années folles avec nos danseurs passionnés.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-24 font-semibold text-slate-700">19h00 – 21h00</div>
              <div className="flex-1">
                <p className="font-semibold text-ink mb-1">Bal Swing</p>
                <p className="text-gray-700 text-sm">
                  Place à la danse ! Enfile ta plus belle tenue rétro et viens partager un moment festif sur les rythmes swing ! 🎷
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Dimanche 16 novembre */}
        <div className="card">
          <h3 className="text-2xl font-bold text-brand mb-6 border-b-2 border-brand/20 pb-3">
            Dimanche 16 novembre
          </h3>
          
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-24 font-semibold text-slate-700">10h00</div>
              <div className="flex-1">
                <p className="font-semibold text-ink">Ouverture du salon</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-24 font-semibold text-slate-700">13h00</div>
              <div className="flex-1">
                <p className="font-semibold text-ink mb-1">Blind Test Années 80</p>
                <p className="text-gray-700 text-sm">
                  Teste tes connaissances musicales et amuse-toi entre amis ! Cadeaux à la clé ! 🎧
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-24 font-semibold text-slate-700">14h00</div>
              <div className="flex-1">
                <p className="font-semibold text-ink mb-1">
                  <a href={`${basePath}/battlehiphop`} className="text-brand hover:text-brand/80 underline transition-colors">
                    Battle RKD – All Style Old School
                  </a>
                </p>
                <p className="text-gray-700 text-sm mb-2">
                  Après plusieurs années d&rsquo;absence, le RKD Battle &ldquo;Rien Ke L&rsquo;Debout&rdquo; fait son grand retour au Vintage le Salon !
                </p>
                <p className="text-gray-700 text-sm mb-2">
                  💥 Un concept revisité autour du All Style Old School, sur des sons Hip-Hop d&rsquo;époque.
                </p>
                <p className="text-gray-700 text-sm mb-3">
                  🕺 Danseurs, sortez vos plus belles tenues Old School et montrez votre style !
                </p>
                
                <div className="bg-orange-50 p-4 rounded-lg mt-3">
                  <p className="font-semibold text-ink mb-2">Infos Battle :</p>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• Inscription : 5 €</li>
                    <li>• Format : 1 vs 1</li>
                    <li>• Style : All Style Old School sur musique Hip-Hop</li>
                    <li>• 🏆 Prize money : 100 €</li>
                    <li>• Jury : Léyon & Lego</li>
                    <li>• DJ : Honesty</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-24 font-semibold text-slate-700">17h00</div>
              <div className="flex-1">
                <p className="font-semibold text-ink mb-1">Best Dressed in Vintage Contest 👗</p>
                <p className="text-gray-700 text-sm">
                  Concours de la plus belle tenue du jour — surprises et cadeaux à gagner !
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-24 font-semibold text-slate-700">18h00</div>
              <div className="flex-1">
                <p className="font-semibold text-ink mb-1">Fermeture du salon</p>
                <p className="text-gray-700 text-sm">
                  Merci à tous et à l&rsquo;année prochaine ! ✨
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
