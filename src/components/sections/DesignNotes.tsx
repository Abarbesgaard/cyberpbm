import { SectionHeader } from "@/components/SectionHeader";

const changes = [
  { from: "Tre neutraliseringsmodeller", to: "Fysisk neutralisering + to-mands-reglen", why: "Jagten foregår på skibet. En tavs hånd i rummet bliver et spor." },
  { from: "Infiltratorer kan gemme sig", to: "Integritetsur", why: "Syntetikere skal handle for at vinde. Handlinger efterlader spor." },
  { from: "Evner fra uge 2", to: "Informationsevner fra uge 1", why: "Første tribunal skal bygge på data, ikke mavefornemmelse." },
  { from: "Skjult rolleliste", to: "Offentligt katalog + bluffs", why: "Påstande kan krydstjekkes. Dobbeltpåstande skaber drama." },
  { from: "AI-ekko", to: "AI-ekko + spøgelsesstemme", why: "Neutraliserede spillere betyder noget til sidste afstemning." },
];

const questions = [
  "Er to-mands-reglen for svær med 5 spillere?",
  "Er Skakt for stærk til flugt? Alternativ: først fra uge 3.",
  "Bliver integritetsuret syntetikernes eneste strategi?",
  "Er én pejling ved udstedelse nok til at starte en jagt?",
  "Er spøgelsesstemmen sjov, eller en formalitet?",
  "Er Final Protocol en nødvendig ventil — eller tager den luften ud af jagten?",
];

export function DesignNotes() {
  return (
    <section id="notes" className="border-t border-cp-border px-8 py-24 md:px-16">
      <SectionHeader eyebrow="Sektion XI // Designnoter">
        v0.5 → <span className="text-cp-yellow">v0.6</span>
      </SectionHeader>
      <div className="grid grid-cols-1 gap-px border border-cp-border-bright bg-cp-border">
        {changes.map((c) => (
          <div key={c.to} className="grid grid-cols-1 gap-2 bg-cp-dark p-5 md:grid-cols-[1fr_1fr_1.4fr] md:gap-6">
            <span className="font-mono text-[0.75rem] text-cp-mid line-through">{c.from}</span>
            <span className="font-head text-[1.1rem] font-bold uppercase text-cp-yellow">{c.to}</span>
            <span className="text-[0.9rem] text-cp-off">{c.why}</span>
          </div>
        ))}
      </div>
      <h3 className="mt-12 mb-4 font-head text-[1.6rem] font-extrabold uppercase">Åbne testspørgsmål</h3>
      <ol className="list-decimal space-y-2 pl-6 text-[0.95rem] text-cp-off">
        {questions.map((q) => <li key={q}>{q}</li>)}
      </ol>
    </section>
  );
}
