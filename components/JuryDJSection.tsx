"use client";

interface Person {
  name: string;
  role: string;
  imagePath: string;
  placeholder: string;
  instagram?: {
    username: string;
    url: string;
  };
}

export default function JuryDJSection() {
  const jury: Person[] = [
    {
      name: "Léyon",
      role: "Jury",
      imagePath: "/images/jury/Leyon.jpeg?v=2",
      placeholder: "👤",
      instagram: {
        username: "@leo.paul_m",
        url: "https://www.instagram.com/leo.paul_m/"
      }
    },
    {
      name: "Lego",
      role: "Jury",
      imagePath: "/images/jury/Adilo.jpeg?v=2",
      placeholder: "👤",
      instagram: {
        username: "@lego_adilo",
        url: "https://www.instagram.com/lego_adilo/"
      }
    }
  ];

  const dj: Person = {
    name: "Honesty",
    role: "DJ Hip-Hop",
    imagePath: "/images/dj/honesty.png",
    placeholder: "🎧",
    instagram: {
      username: "@honesty.by.nature",
      url: "https://www.instagram.com/honesty.by.nature/"
    }
  };

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    const target = e.currentTarget;
    const parent = target.parentElement;
    if (parent) {
      target.style.display = 'none';
      const placeholder = parent.querySelector('.placeholder') as HTMLElement;
      if (placeholder) {
        placeholder.style.display = 'flex';
      }
    }
  };

  return (
    <div className="bg-white border-2 border-brand/20 p-6 rounded-lg mb-6">
      <h3 className="text-2xl font-semibold text-brand mb-6 text-center">
        👥 Jury & DJ
      </h3>
      
      {/* Jury */}
      <div className="mb-8">
        <h4 className="text-lg font-semibold text-ink mb-4 text-center">
          Jury
        </h4>
        <div className="flex flex-wrap justify-center gap-8">
          {jury.map((person) => (
            <div key={person.name} className="text-center">
              <div className="w-48 h-64 mx-auto mb-3 overflow-hidden rounded-lg bg-gray-200 flex items-center justify-center relative shadow-md">
                <img 
                  src={person.imagePath} 
                  alt={`${person.name} - ${person.role}`}
                  className="w-full h-full object-cover"
                  onError={handleImageError}
                />
                <div className="placeholder absolute inset-0 hidden items-center justify-center text-6xl text-gray-400">
                  {person.placeholder}
                </div>
              </div>
              <p className="font-semibold text-gray-800 text-lg">{person.name}</p>
              <p className="text-sm text-gray-600 mb-1">{person.role}</p>
              {person.instagram && (
                <a
                  href={person.instagram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-slate-600 hover:text-pink-600 transition-colors inline-flex items-center gap-1"
                >
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                  {person.instagram.username}
                </a>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* DJ */}
      <div>
        <h4 className="text-lg font-semibold text-ink mb-4 text-center">
          DJ
        </h4>
        <div className="flex justify-center">
          <div className="text-center">
            <div className="w-48 h-64 mx-auto mb-3 overflow-hidden rounded-lg bg-gray-200 flex items-center justify-center relative shadow-md">
              <img 
                src={dj.imagePath} 
                alt={`${dj.name} - ${dj.role}`}
                className="w-full h-full object-cover"
                onError={handleImageError}
              />
              <div className="placeholder absolute inset-0 hidden items-center justify-center text-6xl text-gray-400">
                {dj.placeholder}
              </div>
            </div>
            <p className="font-semibold text-gray-800 text-lg">{dj.name}</p>
            <p className="text-sm text-gray-600 mb-1">{dj.role}</p>
            {dj.instagram && (
              <a
                href={dj.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-slate-600 hover:text-pink-600 transition-colors inline-flex items-center gap-1"
              >
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                {dj.instagram.username}
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

