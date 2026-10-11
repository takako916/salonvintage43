import { PROGRAM_2026, type ProgramSlot } from "../app/program2026";

function formatTime(value: string) {
  const [hours, minutes] = value.split(":");
  return `${hours}h${minutes}`;
}

function formatRange(slot: ProgramSlot) {
  return `${formatTime(slot.debut)} – ${formatTime(slot.fin)}`;
}

function telHref(phone: string) {
  const digits = phone.replace(/\D/g, "");
  const national = digits.startsWith("0") ? digits.slice(1) : digits;
  return `tel:+33${national}`;
}

function SlotDetails({ slot }: { slot: ProgramSlot }) {
  const details = [
    ...(slot.infos ?? []),
    slot.tarifEuros != null ? `Tarif : ${slot.tarifEuros} €` : null,
    slot.prizeMoneyEuros != null ? `Prize money : ${slot.prizeMoneyEuros} €` : null,
  ].filter((detail): detail is string => detail != null);

  if (!slot.precision && details.length === 0 && !slot.inscription) return null;

  return (
    <>
      {slot.precision && (
        <p className="text-gray-700 text-sm">{slot.precision}</p>
      )}
      {(details.length > 0 || slot.inscription) && (
        <div className="bg-orange-50 p-4 rounded-lg mt-3">
          <ul className="space-y-1 text-sm text-gray-700">
            {details.map((detail) => (
              <li key={detail}>• {detail}</li>
            ))}
            {slot.inscription && (
              <li>
                • Inscription :{" "}
                <a
                  href={telHref(slot.inscription)}
                  className="text-brand hover:text-brand/80 underline transition-colors"
                >
                  {slot.inscription}
                </a>
              </li>
            )}
          </ul>
        </div>
      )}
    </>
  );
}

export default function ProgramList2026() {
  return (
    <div className="max-w-5xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-ink mb-2">
          🕰️ PROGRAMME — VINTAGE LE SALON
        </h2>

        <div className="mt-6">
          <a
            href="/images/2026/programme2026.pdf"
            download="programme2026.pdf"
            className="inline-flex items-center gap-3 px-6 py-3 bg-brand text-white rounded-lg hover:bg-brand/90 transition-all duration-200 shadow-md hover:shadow-lg"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            <span className="font-semibold">Télécharger le programme (PDF)</span>
          </a>
          <p className="text-sm text-gray-600 mt-2">
            Téléchargez le programme complet imprimable
          </p>
        </div>
      </div>

      <div className="space-y-8">
        {PROGRAM_2026.map((day) => (
          <div key={day.id} className="card">
            <h3 className="text-2xl font-bold text-brand mb-6 border-b-2 border-brand/20 pb-3">
              {day.label}
            </h3>
            <div className="space-y-6">
              {day.slots.map((slot) => (
                <div key={`${slot.debut}-${slot.contenu}`} className="flex gap-4">
                  <div className="flex-shrink-0 w-36 font-semibold text-slate-700 whitespace-nowrap">
                    {formatRange(slot)}
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-ink mb-1">{slot.contenu}</p>
                    <SlotDetails slot={slot} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
