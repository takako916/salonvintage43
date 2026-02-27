import type { Metadata } from "next";
import EventProviders from "../../components/EventProviders";
import { EVENT_ARCHIVE_2025 } from "../dataArchive2025";

export const metadata: Metadata = {
  title: {
    default: EVENT_ARCHIVE_2025.name,
    template: `%s | ${EVENT_ARCHIVE_2025.name}`,
  },
  description: `Salon du Vintage Haute-Loire - Édition 2025. Brocante et vide-grenier familial à Blavozy. ${EVENT_ARCHIVE_2025.date} au Centre socio-culturel de Blavozy.`,
  alternates: {
    canonical: "/2025",
  },
};

export default function Layout2025({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <EventProviders basePath="/2025" event={EVENT_ARCHIVE_2025}>
      {children}
    </EventProviders>
  );
}
