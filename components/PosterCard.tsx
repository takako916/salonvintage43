import Image from "next/image";
import Link from "next/link";
import { EVENT } from "../app/data";

export default function PosterCard() {
  return (
    <div className="card max-w-md mx-auto">
      <div className="text-center">
        <div className="mb-6">
          <Image
            src={EVENT.downloadPoster}
            alt={`Affiche de ${EVENT.name}`}
            width={300}
            height={400}
            className="rounded-lg shadow-md mx-auto"
            sizes="(max-width: 768px) 100vw, 300px"
          />
        </div>
        
        <h3 className="text-xl font-semibold text-ink mb-4">
          Télécharger l&apos;affiche
        </h3>
        
        <p className="text-gray-600 mb-6">
          Partagez l&apos;événement avec vos amis et votre famille
        </p>
        
        <Link
          href={EVENT.downloadPoster}
          download={`${EVENT.name}-affiche.jpg`}
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
              d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
          </svg>
          <span>Télécharger</span>
        </Link>
      </div>
    </div>
  );
}
