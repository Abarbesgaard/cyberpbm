import { SectionHeader } from "@/components/SectionHeader";

const changes = [
  { from: "Samme rolle kunne i princippet deles", to: "Hver rolle findes højst én gang", why: "En dobbeltpåstand betyder altid, at mindst én lyver. Det gør påstande til spillets valuta." },
  { from: "Fast rolleliste pr. spillerantal", to: "Ingeniør + hemmelig trækning", why: "v0.6 offentliggjorde, hvilke roller der var i spil. Nu er kun kataloget og trækningsreglerne offentlige." },
  { from: "7 roller i kataloget", to: "11 roller i kataloget", why: "Ved 8 spillere var der kun 1 ubrugt rolle til 4 bluffs. Nu er der mindst 5." },
  { from: "To bluff-roller", to: "To bluff-forslag fra ubrugte roller", why: "Forslag, ikke roller. Syntetikere kan påstå hvad som helst, men aldrig bruge evnen." },
  { from: "Ingen grænse for informationsroller", to: "Højst to roller pr. tag", why: "Forhindrer, at tre positionsroller kortlægger hele skibet." },
];

const questions = [
  "Er 11 roller for mange at holde styr på for nye spillere?",
  "Er Revisor (stemmerevision) for stærk mod syntetikere, der koordinerer stemmer?",
  "Gør det, at Ingeniør altid er i spil, rollen for let at bekræfte via reparationer?",
  "Afslører fasthold-point Sikkerhedschefen? (2 point med 1 til stede beviser rollen.)",
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
        v0.6 → <span className="text-cp-yellow">v0.7</span>
      </SectionHeader>
      <div className="grid grid-cols-1 gap-px border border-cp-border-bright bg-cp-border">
        {changes.map((c) => (
          <div key={c.to} className="grid grid-cols-1 gap-2 bg-cp-dark p-5 md:grid-cols-[1fr_1fr_1.4fr] md:gap-6">
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
