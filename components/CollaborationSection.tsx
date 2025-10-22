"use client";

export default function CollaborationSection() {
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    const target = e.currentTarget;
    const parent = target.parentElement;
    if (parent) {
      target.style.display = 'none';
      parent.innerHTML = '<div class="text-3xl">🎭</div>';
    }
  };

  return (
    <div className="bg-gradient-to-r from-slate-50 to-orange-50 p-6 rounded-lg mb-8 border-2 border-slate-200">
      <h3 className="text-xl font-semibold text-ink mb-4 text-center">
        🤝 En collaboration avec
      </h3>
      <div className="flex flex-col md:flex-row items-center justify-center gap-6">
        <div className="flex items-center gap-4">
          <div className="w-20 h-20 bg-white rounded-full overflow-hidden shadow-md flex items-center justify-center">
            <img 
              src="/images/partners/septieme-precepte-logo.jpg"
              alt="Septième Précepte Logo"
              className="w-full h-full object-cover"
              onError={handleImageError}
            />
          </div>
          <div>
            <p className="font-bold text-lg text-ink">Septième Précepte</p>
            <a
              href="https://www.instagram.com/7eme.precepte/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-slate-600 hover:text-pink-600 transition-colors inline-flex items-center gap-1"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              @7eme.precepte
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

