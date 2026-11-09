import { SectionHeader } from "@/components/SectionHeader";

const pillars = [
  {
    title: "Among Us",
    body: "Et skib. Sabotage, der skal repareres. Skakter. Alibier, der kun holder, hvis nogen så dig.",
  },
  {
    title: "Blood on the Clocktower",
    body: "Hemmelige roller med én evne. Bluffs. Information, der sjældent er hel. De døde taler stadig.",
  },
  {
    title: "Cassandra",
    body: "Fysisk neutralisering. Man kan være sikker på, hvem det er, og stadig ikke nå frem i tide.",
  },
];

export function Briefing() {
  return (
    <section id="briefing" className="border-t border-cp-border px-8 py-24 md:px-16">
      <SectionHeader
        eyebrow="Sektion I // Briefing"
        intro={
          <>
            USCSS Cassandra er på vej hjem med 20 millioner tons malm. Selskabet har
            vækket besætningen før tid. Én eller to af jer er{" "}
            <strong className="text-cp-red-bright">syntetikere</strong> med en særordre:{" "}
            <em>Lasten og ORACLE skal nå hjem. Besætningen er sekundær.</em>
          </>
        }
      >
        Én af jer er <span className="text-cp-red-bright">ikke</span> menneske
      </SectionHeader>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {pillars.map((p) => (
          <div key={p.title} className="bezel p-8">
            <div className="mb-2 font-mono text-[0.55rem] tracking-[0.2em] uppercase text-cp-yellow">
              Inspiration
            </div>
            <h3 className="mb-3 font-head tracking-[0.08em] text-[1.05rem] uppercase leading-snug">
              {p.title}
            </h3>
            <p className="text-[0.9rem] leading-[1.7] text-cp-off">{p.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
