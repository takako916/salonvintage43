import { ReactNode } from "react";

interface SectionProps {
  id: string;
  title: string;
  children: ReactNode;
  className?: string;
}

export default function Section({ id, title, children, className = "" }: SectionProps) {
  return (
    <section id={id} className={`section-offset py-16 px-4 sm:px-6 lg:px-8 ${className}`}>
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-ink text-center mb-12">
          {title}
        </h2>
        {children}
      </div>
    </section>
  );
}

