import Image from "next/image";
import Link from "next/link";
import { EVENT } from "../app/data";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/banner.jpg"
          alt={`Salon Vintage de Blavozy - ${EVENT.date} à ${EVENT.city}. Événement culturel avec animations, exposants, concerts et jeux rétro des années 60-80.`}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        {/* Main Content Container */}
        <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 shadow-2xl">
          {/* Event Badge */}
          <div className="mb-6">
            <span className="inline-block bg-brand/90 text-white px-4 py-2 rounded-full text-sm font-medium font-oswald" style={{ fontFamily: 'var(--font-oswald), sans-serif' }}>
              À 10 min du Puy-en-Velay
            </span>
            <p className="text-lg sm:text-xl text-gray-200 mt-2 flex items-center justify-center gap-2 font-oswald" style={{ fontFamily: 'var(--font-oswald), sans-serif' }}>
              Organisé par Production Directe
            <img 
              src="/images/production_directe_logo.jpg" 
              alt="Logo Production Directe - Organisateur du Salon Vintage de Blavozy" 
              className="h-12 w-auto"
            />
            </p>
          </div>

          {/* Event Title */}
          <h1 
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 leading-tight text-white drop-shadow-lg font-bebas-neue tracking-wider"
            style={{ fontFamily: 'var(--font-bebas-neue), sans-serif' }}
          >
            {EVENT.name}
          </h1>

          {/* Event Date */}
          <p className="text-xl sm:text-2xl mb-2 font-medium text-white drop-shadow-md font-oswald" style={{ fontFamily: 'var(--font-oswald), sans-serif' }}>
            {EVENT.date}
          </p>

          {/* Event Location */}
          <p className="text-lg sm:text-xl mb-8 text-gray-100 drop-shadow-md font-oswald" style={{ fontFamily: 'var(--font-oswald), sans-serif' }}>
            {EVENT.city}
          </p>

          {/* Navigation Buttons */}
          <div className="flex flex-wrap justify-center items-center gap-4">
          <Link
            href="#animations"
            className="bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white px-6 py-3 rounded-2xl font-medium transition-all duration-200 shadow-lg hover:shadow-xl inline-flex items-center gap-2"
          >
            <span>🎭</span>
            <span>ANIMATIONS & EXPOSANTS</span>
          </Link>
          
          <Link
            href="#info"
            className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-6 py-3 rounded-2xl font-medium transition-all duration-200 shadow-lg hover:shadow-xl inline-flex items-center gap-2"
          >
            <span>ℹ️</span>
            <span>INFOS PRATIQUES</span>
          </Link>
          
          <Link
            href="#program"
            className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-6 py-3 rounded-2xl font-medium transition-all duration-200 shadow-lg hover:shadow-xl inline-flex items-center gap-2"
          >
            <span>📅</span>
            <span>PROGRAMME</span>
          </Link>
          
          <Link
            href="#contact"
            className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-6 py-3 rounded-2xl font-medium transition-all duration-200 shadow-lg hover:shadow-xl inline-flex items-center gap-2"
          >
            <span>📧</span>
            <span>CONTACT</span>
          </Link>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-bounce">
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
