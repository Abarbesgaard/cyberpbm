import { useState } from "react";
import { rollCrisis, type CrisisRoll } from "@/content/crises";

export function CrisisRoller() {
  const [result, setResult] = useState<CrisisRoll[] | null>(null);

  return (
    <div className="console mx-auto mb-8 max-w-[900px] p-4 sm:p-5 [--chamfer:16px]">
      <div className="mb-3 flex items-center justify-between gap-3">
        <span className="plate">ORACLE // Krisetabel d20</span>
        <button
          type="button"
          onClick={() => setResult(rollCrisis())}
          className="key px-5 py-2 font-mono text-[0.65rem] tracking-[0.2em] uppercase text-cp-yellow"
        >
          Rul d20
        </button>
      </div>
      <div className="crt crt-amber m-[10px] min-h-[110px] p-5 text-[1.1rem] leading-[1.45]" aria-live="polite">
        {result ? (
          result.map((r) => (
            <div key={r.roll} className="mb-2 last:mb-0">
              <div>
                &gt; d20: {r.roll} // {r.crisis.name.toUpperCase()}
                {r.section && ` // d6: ${r.section.toUpperCase()}`}
              </div>
              <div className="opacity-80">{r.crisis.text}</div>
            </div>
          ))
        ) : (
          <div className="opacity-60">&gt; Afventer rul. Krisen rulles mandag i uge 3 og gælder i uge 4.</div>
        )}
      </div>
    </div>
  );
}
