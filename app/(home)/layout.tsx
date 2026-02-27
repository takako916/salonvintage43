import EventProviders from "../../components/EventProviders";
import { EVENT } from "../data";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <EventProviders basePath="" event={EVENT}>
      {children}
    </EventProviders>
  );
}
