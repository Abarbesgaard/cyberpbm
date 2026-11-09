import { SectionHeader } from "@/components/SectionHeader";

const changes = [
  { from: "Alle syntetikere har Særordre med tre tilstande", to: "Én unik syntetikerrolle pr. syntetiker", why: "Samme princip som besætningen: én evne pr. spiller, hver rolle højst én gang." },
  { from: "Sabotage er en tilstand", to: "Særordre er altid i spil og saboterer", why: "Integritetsuret skal altid have en syntetiker, der kan trække det. Spejler Ingeniøren." },
  { from: "Skakt: op til to zoner", to: "Skaktløber: vilkårlig zone", why: "To zoner via Rygraden nåede allerede alle zoner. Nu siger reglen det ærligt." },
  { from: "Forfalskning fra uge 3", to: "Forfalsker fra uge 2", why: "En rolle med kun én evne må ikke stå stille i to uger." },
  { from: "—", to: "Ny: Støjsender", why: "Blokerer information i én zone. Synligt — besætningen ved, at nogen forstyrrer, men ikke hvem." },
];

const questions = [
  "Er Særordre alene for svag ved 5–6 spillere, hvor der kun er én syntetiker?",
  "Afslører \"Signal forstyrret\", at Støjsender er i spil, og er det et problem?",
  "Er 11 roller for mange at holde styr på for nye spillere?",
  "Er Revisor (stemmerevision) for stærk mod syntetikere, der koordinerer stemmer?",
  "Gør det, at Ingeniør altid er i spil, rollen for let at bekræfte via reparationer?",
  "Afslører fasthold-point Sikkerhedschefen? (2 point med 1 til stede beviser rollen.)",
  "Er to-mands-reglen for svær med 5 spillere?",
  "Er Skaktløber for stærk til flugt? Alternativ: først fra uge 3.",
  "Bliver integritetsuret syntetikernes eneste strategi?",
  "Er én pejling ved udstedelse nok til at starte en jagt?",
  "Er spøgelsesstemmen sjov, eller en formalitet?",
  "Er Final Protocol en nødvendig ventil — eller tager den luften ud af jagten?",
];

export function DesignNotes() {
  return (
    <section id="notes" className="hull px-8 py-24 md:px-16">
      <SectionHeader eyebrow="Sektion XI // Designnoter">
        v0.7 → <span className="text-cp-yellow">v0.8</span>
      </SectionHeader>
      <div className="grid grid-cols-1 gap-4">
        {changes.map((c) => (
          <div key={c.to} className="bezel grid grid-cols-1 gap-2 p-5 md:grid-cols-[1fr_1fr_1.4fr] md:gap-6">
            <span className="font-mono text-[0.75rem] text-cp-mid line-through">{c.from}</span>
            <span className="font-head tracking-[0.08em] text-[0.85rem] uppercase text-cp-yellow">{c.to}</span>
            <span className="text-[0.9rem] text-cp-off">{c.why}</span>
          </div>
        ))}
      </div>
      <h3 className="mt-12 mb-4 font-head tracking-[0.08em] text-[1.05rem] uppercase">Åbne testspørgsmål</h3>
      <ol className="list-decimal space-y-2 pl-6 text-[0.95rem] text-cp-off">
        {questions.map((q) => <li key={q}>{q}</li>)}
      </ol>
    </section>
  );
}
