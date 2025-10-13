import Link from "next/link";
import { EVENT } from "../app/data";

export default function Footer() {
  return (
    <footer className="bg-slate-800 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Event Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{EVENT.name}</h3>
            <p className="text-gray-300 mb-2">{EVENT.date}</p>
            <p className="text-gray-300">{EVENT.city}</p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <a
              href={`mailto:${EVENT.contactEmail}`}
              className="text-gray-300 hover:text-orange-400 transition-colors block mb-2"
            >
              {EVENT.contactEmail}
            </a>
            <p className="text-gray-300 text-sm">
              Réponse sous 48h
            </p>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Suivez-nous</h3>
            <Link
              href={EVENT.facebookEvent}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-gray-300 hover:text-orange-400 transition-colors"
              aria-label="Événement Facebook"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
              <span>Événement Facebook</span>
            </Link>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2025 {EVENT.name}. Tous droits réservés.
            </p>
            <p className="text-gray-500 text-xs">
              Made with Next.js / Vercel
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
