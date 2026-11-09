import { SectionHeader } from "@/components/SectionHeader";

const testimony = [
  { who: "Højttaler", text: "Anna her. Jeg var i Livsstøtte med Peter. Han sagde, han ville tjekke terminalen." },
  { who: "Højttaler", text: "Peter her. Jeg er Sikkerhedschef. Jeg stemte ikke på Anna. Jeg tror ikke, hun er syntetiker." },
  { who: "Højttaler", text: "Jeg er Sensortekniker. Min scan viste 2 personer i Livsstøtte." },
];

const facts = [
  "Broadcasten er sand: Livsstøtte faldt 1. Den siger intet om sabotage.",
  "Er scannen ægte, stod der præcis to — Anna og Peter.",
  "Anna manglede én stemme. Peter siger, han stemte på Ingen. Stemmerne er hemmelige, så ingen kan tjekke det. Beskytter han en uskyldig — eller sig selv?",
  "Anna og Peter siger begge, at de arbejdede. Så skulle Livsstøtte være steget 2. Et fald på 1 passer kun med sabotage −2 og arbejde +1. Én af dem lyver.",
  "Højttaleren viser aldrig afsender. \"Anna her\" kan være skrevet af hvem som helst — også af Peter.",
  "Hele regnestykket hviler på den anonyme scan. Er afsenderen ægte — eller stod der en tredje, der saboterede?",
];

export function Example() {
  return (
    <section id="example" className="hull-alt px-8 py-24 md:px-16">
      <SectionHeader eyebrow="Sektion X // Eksempel">
        Uge 04 — <span className="text-cp-red-bright">Containment Failure</span>
      </SectionHeader>
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        <div>
          <div className="console mb-6 p-4 sm:p-5 [--chamfer:16px]">
          <div className="mb-3 flex items-center justify-between gap-3"><span className="plate">#shipwide // Uge 04</span><span className="flex gap-2" aria-hidden><span className="lamp lamp-red blink-slow" /><span className="lamp lamp-off" /></span></div>
          <pre className="crt crt-red m-[10px] whitespace-pre-wrap p-6 text-[1.25rem] leading-[1.4]">
{`ORACLE // SHIPWIDE // UGE 4
LIVSSTØTTE: ██░░░ 2  −1
TRIBUNAL: 3 af 6 stemmer mod Anna.
Intet flertal. Ingen dom.`}
          </pre>
          </div>
          <p className="mb-4 font-mono text-[0.65rem] tracking-[0.15em] uppercase text-cp-mid">
            Fredagens tribunal stemte om Anna.
          </p>
          <div className="space-y-3">
            {testimony.map((t) => (
              <div key={t.text} className="bezel p-4">
                <span className="font-mono text-[0.7rem] uppercase text-cp-yellow">{t.who}:</span>{" "}
                <span className="text-[0.9rem] text-cp-off">"{t.text}"</span>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h3 className="mb-4 font-head tracking-[0.08em] text-[1.05rem] uppercase">Hvad ved besætningen?</h3>
          <ul className="space-y-3">
            {facts.map((f) => (
              <li key={f} className="border-l-2 border-cp-yellow-dim pl-4 text-[0.95rem] leading-[1.6] text-cp-off">{f}</li>
            ))}
          </ul>
          <p className="mt-6 text-[0.95rem] leading-[1.6] text-cp-white">
            Stem på Anna igen — eller på Peter? Begge ved, hvad der kommer.
          </p>
        </div>
      </div>
    </section>
  );
}
