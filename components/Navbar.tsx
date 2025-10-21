"use client";

import { useState } from "react";
import Link from "next/link";
import { EVENT } from "../app/data";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { href: "/#animations", label: "ANIMATIONS & EXPOSANTS" },
    { href: "/#info", label: "INFOS PRATIQUES" },
    { href: "/#program", label: "PROGRAMME" },
    { href: "/#exhibitors", label: "APPEL AUX EXPOSANTS" },
    { href: "/#contact", label: "CONTACT" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-orange-50/90 backdrop-blur-sm border-b border-orange-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Event Name */}
          <Link href="/" className="flex items-center text-xl font-bold text-slate-700 hover:text-slate-900 transition-colors font-oswald font-medium">
            <img 
              src="/salonlevintagelogo.png" 
              alt="Salon Vintage Logo" 
              className="h-10 w-auto mr-3"
            />
            <span style={{ fontFamily: 'var(--font-oswald), sans-serif' }}>
              {EVENT.nameParts.prefix}
              <span className="text-orange-500">Vintage le Salon</span>
              <span className="text-slate-700"> à Blavozy</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-slate-700 hover:text-slate-500 hover:border-b-2 hover:border-slate-400 transition-all duration-200 font-medium pb-1 font-oswald font-light tracking-wide"
                style={{ fontFamily: 'var(--font-oswald), sans-serif' }}
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="md:hidden p-2 rounded-lg text-slate-700 hover:text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-600"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
            aria-label="Menu principal"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-orange-200">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-slate-700 hover:text-slate-500 hover:border-b-2 hover:border-slate-400 transition-all duration-200 font-medium pb-1 font-oswald font-light tracking-wide"
                  onClick={() => setIsMenuOpen(false)}
                  style={{ fontFamily: 'var(--font-oswald), sans-serif' }}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
