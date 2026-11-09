import { SectionHeader } from "@/components/SectionHeader";

const levels = [
  { name: "Observation", source: "ORACLE-broadcast og din sektor-manifest", truth: "Altid sandt", ex: "\"Uautoriseret adgang i Lastrum.\"", tone: "text-cp-yellow border-cp-yellow" },
  { name: "Analyse", source: "Dit private evneresultat", truth: "Sandt — medmindre forfalsket", ex: "\"Scan: 2 personer i Medlab.\"", tone: "text-cp-cyan border-cp-cyan" },
  { name: "Vidneudsagn", source: "Alt, hvad andre spillere siger", truth: "Ukontrolleret", ex: "\"Jeg var i Broen hele ugen.\"", tone: "text-cp-red-bright border-cp-red" },
];

export function Information() {
  return (
    <section id="information" className="hull-alt wainscot px-8 py-24 md:px-16">
      <SectionHeader
        eyebrow="Sektion VI // Information"
        intro="Ingen evne fanger en syntetiker med ét klik. Information er nyttig, men sjældent hel. Du ved kun gratis, hvem der står i dit eget rum — alt andet er vidneudsagn."
      >
        Signal / <span className="text-cp-red-bright">Noise</span>
      </SectionHeader>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {levels.map((l) => (
          <div key={l.name} className={`bezel bezel-screws border-t-[6px] p-8 ${l.tone}`}>
            <div className="mb-2 font-mono text-[0.6rem] tracking-[0.2em] uppercase">{l.truth}</div>
            <h3 className="mb-3 font-head tracking-[0.08em] text-[1.1rem] uppercase leading-snug text-cp-white">{l.name}</h3>
            <p className="mb-4 text-[0.9rem] leading-[1.6] text-cp-off">{l.source}</p>
            <p className="font-mono text-[0.75rem] text-cp-mid">{l.ex}</p>
          </div>
        ))}
      </div>
      <div className="mt-10 max-w-[760px] border-l-[3px] border-cp-red pl-5 text-[0.95rem] leading-[1.75] text-cp-off">
        <strong className="text-cp-white">Ingen kan bevise sin rolle.</strong> Alle må lyve. Screenshots
        og videresendte ORACLE-beskeder er forbudt — gengiv med egne ord. Og fordi
        syntetikere kan forfalske resultater og har bluff-forslag, beviser en ægte besked
        alligevel ikke loyalitet.
      </div>
    </section>
  );
}
