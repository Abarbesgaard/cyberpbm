import { memo } from "react";
import { useRole } from "@/context/RoleContext";
import { SectionHeader } from "@/components/SectionHeader";
import { balance, crewRoles, synthRoles } from "@/content/game";

const minCrew = Math.min(...balance.map((b) => b.crew));
const maxCrew = Math.max(...balance.map((b) => b.crew));

const intro = {
  player: "Hver rolle findes højst én gang. Kataloget er offentligt, men hvilke roller der er i spil, er hemmeligt. To spillere, der påstår samme rolle? Mindst én af dem lyver.",
  gm: "Træk rollerne uden tilbagelægning: Ingeniør plus et tilfældigt udvalg, højst to pr. tag. Kun ubrugte roller må blive bluff-forslag.",
  default: "Én evne pr. spiller. Vælg et mål, og ORACLE svarer. Hver rolle findes højst én gang, og hele kataloget er offentligt — hvilke roller der faktisk er om bord, er ikke.",
};

const AbilityIO = memo(function AbilityIO({ pick, reply, red }: { pick: string; reply: string; red?: boolean }) {
  return (
    <div className="mt-4 space-y-1.5 font-mono text-[0.68rem] leading-[1.5]">
      <div className="text-cp-mid">
        <span className="tracking-[0.2em] uppercase">Vælg</span> <span className="text-cp-off">{pick}</span>
      </div>
      <div className={`border-l-2 pl-2 ${red ? "border-cp-red text-cp-red-bright" : "border-cp-cyan text-cp-cyan"}`}>
        &gt; ORACLE: {reply}
      </div>
    </div>
  );
});

const howItWorks = [
  { n: "01", title: "Skriv målet", text: "Fredag skriver du én linje i ordren: EVNE → Peter. Eller: EVNE → Medlab. Eller: Ingen." },
  { n: "02", title: "ORACLE afgør", text: "ORACLE regner alt ud i weekenden. Du skal aldrig tælle point, holde styr på brugte evner eller huske, hvilken uge noget låses op." },
  { n: "03", title: "Læs svaret", text: "Mandag får du resultatet i din private rapport. Den fortæller også, hvad du kan i den kommende uge." },
];

const claimRules = [
  {
    title: "Unikke roller",
    text: "Hver faktisk rolle er unik. Kataloget er offentligt, men de roller, der er i spil, er hemmelige. Ikke alle roller er om bord.",
  },
  {
    title: "Dobbeltpåstand",
    text: "Alle må påstå enhver rolle. Påstår to spillere samme rolle, lyver mindst én af dem. ORACLE bekræfter eller afkræfter aldrig en påstand — I må selv finde ud af, hvem.",
  },
  {
    title: "Bluff-forslag",
    text: "Hver syntetiker får to forslag fra rollerne, der ikke er i spil. Det er forslag til påstande, ikke roller. En syntetiker kan aldrig bruge den evne, den påstår at have.",
  },
];

export function Roles() {
  const { role } = useRole();
  return (
    <section id="roles" className="hull px-8 py-24 md:px-16">
      <SectionHeader eyebrow="Sektion VIII // Manifest" intro={intro[role ?? "default"]}>
        Crew <span className="text-cp-yellow">Manifest</span>
      </SectionHeader>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        {crewRoles.map((r) => (
          <div key={r.id} className="bezel bezel-screws p-6">
            <div className="mb-3 flex items-center justify-between font-mono text-[0.55rem] tracking-[0.2em] uppercase">
              <span className="text-cp-yellow">{r.ability}</span>
              <span className="border border-cp-border-bright px-1.5 py-0.5 text-cp-mid">{r.tag}</span>
            </div>
            <h3 className="mb-3 font-head text-[clamp(0.62rem,1vw,0.8rem)] tracking-[0.02em] [overflow-wrap:anywhere] uppercase leading-snug text-cp-white">{r.name}</h3>
            {(r.core || r.isNew) && (
              <div className="mb-3 flex gap-2 font-mono text-[0.55rem] tracking-[0.2em] uppercase">
                {r.core && <span className="border border-cp-yellow px-1.5 py-0.5 text-cp-yellow">Altid i spil</span>}
                {r.isNew && <span className="border border-cp-cyan px-1.5 py-0.5 text-cp-cyan">Ny i v0.7</span>}
              </div>
            )}
            <p className="text-[0.85rem] leading-[1.6] text-cp-off">{r.text}</p>
            <AbilityIO pick={r.pick} reply={r.reply} />
          </div>
        ))}
        <div className="crt m-[10px] flex flex-col justify-center p-6 text-[1.15rem] leading-[1.3] text-cp-cyan">
          <span className="text-cp-red-bright">&gt; MANIFEST UFULDSTÆNDIGT</span>
          <span>{crewRoles.length} roller i kataloget. {minCrew}–{maxCrew} om bord. Hvem lyver?</span>
        </div>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-3">
        {howItWorks.map((h) => (
          <div key={h.n} className="bezel bezel-screws p-6">
            <div className="mb-2 font-mono text-[0.55rem] tracking-[0.2em] uppercase text-cp-cyan">// Evne {h.n}</div>
            <h3 className="mb-2 font-head text-[0.85rem] tracking-[0.08em] uppercase text-cp-white">{h.title}</h3>
            <p className="text-[0.85rem] leading-[1.6] text-cp-off">{h.text}</p>
          </div>
        ))}
      </div>

      <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-3">
        {claimRules.map((c) => (
          <div key={c.title} className="bezel bezel-screws p-6">
            <div className="mb-2 font-mono text-[0.55rem] tracking-[0.2em] uppercase text-cp-yellow">// Protokol</div>
            <h3 className="mb-2 font-head text-[0.85rem] tracking-[0.08em] uppercase text-cp-white">{c.title}</h3>
            <p className="text-[0.85rem] leading-[1.6] text-cp-off">{c.text}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 bezel bezel-screws border-t-[6px] border-cp-red p-8">
        <div className="mb-2 font-mono text-[0.6rem] tracking-[0.2em] uppercase text-cp-red-bright">
          // Klassificeret — Syntetiker
        </div>
        <h3 className="mb-2 font-head tracking-[0.08em] text-[1.25rem] uppercase leading-snug">Syntetikerroller</h3>
        <p className="mb-6 max-w-[680px] text-[0.9rem] leading-[1.6] text-cp-off">
          Én evne pr. syntetiker, og hver rolle findes højst én gang. Særordre er altid i spil.
          Ved to syntetikere trækkes den anden rolle tilfældigt. Syntetikere kender hinanden og
          hinandens roller, men kan kun tale privat, når de står samme sted. Hver får to
          bluff-forslag fra de ubrugte besætningsroller.
        </p>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {synthRoles.map((m) => (
            <div key={m.id} className="bezel bezel-screws p-6">
              <div className="mb-1 flex items-center justify-between font-mono text-[0.55rem] tracking-[0.2em] uppercase text-cp-mid">
                <span>{m.ability} · fra uge {m.from}</span>
                {m.core && <span className="border border-cp-red px-1.5 py-0.5 text-cp-red-bright">Altid</span>}
              </div>
              <h4 className="mb-2 font-head tracking-[0.08em] text-[0.95rem] uppercase text-cp-red-bright">{m.name}</h4>
              <p className="text-[0.85rem] leading-[1.6] text-cp-off">{m.text}</p>
              <AbilityIO pick={m.pick} reply={m.reply} red />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
