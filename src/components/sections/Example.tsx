import { SectionHeader } from "@/components/SectionHeader";

const testimony = [
  { who: "Anna", text: "Jeg var i Livsstøtte med Peter. Han sagde, han ville tjekke terminalen." },
  { who: "Peter", text: "Jeg er Sikkerhedschef. Jeg holdt ikke fast, fordi jeg ikke tror, Anna er syntetiker." },
  { who: "Sara", text: "Jeg er Sensortekniker. Min scan viste 2 personer i Livsstøtte." },
];

const facts = [
  "Broadcasten er sand: sabotagen skete i Livsstøtte, og der stod præcis to — Anna og Peter.",
  "Én af de to er altså syntetikeren. Den, der saboterede, tog en risiko.",
  "Peter kunne have pågrebet Anna alene. Han lod være. Beskytter han en uskyldig — eller sig selv?",
  "Livsstøtte faldt kun 1: sabotage −2, én arbejdede +1. Anna og Peter siger begge, at de arbejdede. Én af dem lyver.",
  "Saras scan bekræfter kun, hvad alle ved. Er hun ægte, eller bygger hun troværdighed?",
];

export function Example() {
  return (
    <section id="example" className="hull-alt px-8 py-24 md:px-16">
      <SectionHeader eyebrow="Sektion XI // Eksempel">
        Uge 04 — <span className="text-cp-red-bright">Containment Failure</span>
      </SectionHeader>
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        <div>
          <div className="console mb-6 p-4 sm:p-5 [--chamfer:16px]">
          <div className="mb-3 flex items-center justify-between gap-3"><span className="plate">#shipwide // Uge 04</span><span className="flex gap-2" aria-hidden><span className="lamp lamp-red blink-slow" /><span className="lamp lamp-off" /></span></div>
          <pre className="crt crt-red m-[10px] whitespace-pre-wrap p-6 text-[1.25rem] leading-[1.4]">
{`ORACLE // SHIPWIDE // UGE 4
LIVSSTØTTE: ██░░░ 2  −1
ANOMALI: Uautoriseret adgang i Livsstøtte.
PÅGRIBELSE: Forsøgt i Livsstøtte.
1 til stede ud over målet.
0 fasthold-point. Mislykket.`}
          </pre>
          </div>
          <p className="mb-4 font-mono text-[0.65rem] tracking-[0.15em] uppercase text-cp-mid">
            Kryo-ordren fra uge 3 var på Anna.
          </p>
          <div className="space-y-3">
            {testimony.map((t) => (
              <div key={t.who} className="bezel p-4">
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
            Behold ordren på Anna — eller flyt den til Peter? Begge ved, hvad der kommer.
          </p>
        </div>
      </div>
    </section>
  );
}
