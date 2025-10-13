import { EVENT, ProgramItem } from "../app/data";

export default function ProgramList() {
  const { program } = EVENT;

  if (program.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="card max-w-md mx-auto">
          <div className="text-center">
            <svg
              className="w-16 h-16 text-slate-600 mx-auto mb-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <h3 className="text-xl font-semibold text-ink mb-2">
              Programme à venir
            </h3>
            <p className="text-gray-600">
              Le programme détaillé sera bientôt disponible. 
              Restez connectés !
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      <dl className="space-y-4">
        {program.map((item: ProgramItem, index: number) => (
          <div key={index} className="card-md">
            <dt className="text-lg font-semibold text-slate-600 mb-1">
              {item.time}
            </dt>
            <dd className="text-ink">
              {item.title}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
