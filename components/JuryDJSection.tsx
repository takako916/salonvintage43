"use client";

interface Person {
  name: string;
  role: string;
  imagePath: string;
  placeholder: string;
}

export default function JuryDJSection() {
  const jury: Person[] = [
    {
      name: "Léyon",
      role: "Jury",
      imagePath: "/images/jury/Leyon.jpeg?v=2",
      placeholder: "👤"
    },
    {
      name: "Lego",
      role: "Jury",
      imagePath: "/images/jury/Adilo.jpeg?v=2",
      placeholder: "👤"
    }
  ];

  const dj: Person = {
    name: "Honesty",
    role: "DJ Hip-Hop",
    imagePath: "/images/dj/honesty.png",
    placeholder: "🎧"
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
              <p className="text-sm text-gray-600">{person.role}</p>
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
            <p className="text-sm text-gray-600">{dj.role}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

