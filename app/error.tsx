"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Application error:", error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-paper px-4">
      <div className="text-center max-w-md">
        <h1 className="text-2xl font-bold text-ink mb-2">Une erreur est survenue</h1>
        <p className="text-gray-600 mb-6">{error.message}</p>
        <button
          onClick={reset}
          className="bg-brand text-white px-6 py-3 rounded-2xl font-medium hover:opacity-90"
        >
          Réessayer
        </button>
      </div>
    </div>
  );
}
