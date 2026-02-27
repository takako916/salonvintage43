"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="fr">
      <body style={{ fontFamily: "system-ui", padding: "2rem", background: "#f1f5f9", color: "#374151" }}>
        <h1 style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>Erreur serveur</h1>
        <p style={{ marginBottom: "1rem", color: "#64748b" }}>{error.message}</p>
        <button
          onClick={reset}
          style={{ background: "#f97316", color: "white", padding: "0.75rem 1.5rem", border: "none", borderRadius: "0.5rem", cursor: "pointer" }}
        >
          Réessayer
        </button>
      </body>
    </html>
  );
}
