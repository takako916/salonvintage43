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
          alt={`${EVENT.name} - ${EVENT.programIntro}`}
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
        {/* Event Badge */}
        <div className="mb-6">
          <span className="inline-block bg-brand/90 text-white px-4 py-2 rounded-full text-sm font-medium">
            À 10 min du Puy-en-Velay
          </span>
          <p className="text-sm text-gray-200 mt-2">
            Organisé par Production Directe
          </p>
        </div>

        {/* Event Title */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 leading-tight text-white drop-shadow-lg">
          {EVENT.name}
        </h1>

        {/* Event Date */}
        <p className="text-xl sm:text-2xl mb-2 font-medium text-white drop-shadow-md">
          {EVENT.date}
        </p>

        {/* Event Location */}
        <p className="text-lg sm:text-xl mb-8 text-gray-100 drop-shadow-md">
          {EVENT.city}
        </p>

        {/* CTA Button */}
        <div className="flex justify-center items-center">
          <Link
            href="#program"
            className="bg-brand hover:bg-orange-600 text-white px-6 py-3 rounded-2xl font-medium transition-all duration-200 shadow-lg hover:shadow-xl inline-flex items-center gap-2"
          >
            <span>Programme</span>
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
          </Link>
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
