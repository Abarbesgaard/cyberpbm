import { useRole } from "@/context/RoleContext";
import { SectionHeader } from "@/components/SectionHeader";
import { crewRoles, synthModes } from "@/content/game";

const intro = {
  player: "Hele kataloget er offentligt. Hvilke roller der er i spil, er hemmeligt. To spillere, der påstår samme rolle? Mindst én af dem lyver.",
  gm: "Vælg roller efter balancetabellen. Rollerne, der ikke er i spil, bliver syntetikernes bluffs.",
  default: "Én evne pr. spiller. Hele kataloget er offentligt — hvilke roller der faktisk er om bord, er ikke.",
};

export function Roles() {
  const { role } = useRole();
  return (
    <section id="roles" className="border-t border-cp-border px-8 py-24 md:px-16">
      <SectionHeader eyebrow="Sektion VII // Manifest" intro={intro[role ?? "default"]}>
        Crew <span className="text-cp-yellow">Manifest</span>
      </SectionHeader>

      <div className="grid grid-cols-1 gap-px border border-cp-border-bright bg-cp-border md:grid-cols-2 lg:grid-cols-4">
        {crewRoles.map((r) => (
          <div key={r.name} className="bg-cp-dark p-6">
            <div className="mb-3 flex items-center justify-between font-mono text-[0.55rem] tracking-[0.2em] uppercase">
              <span className="text-cp-yellow">{r.ability}</span>
              <span className="border border-cp-border-bright px-1.5 py-0.5 text-cp-mid">{r.tag}</span>
            </div>
            <h3 className="mb-3 break-words font-head text-[0.8rem] tracking-[0.06em] uppercase leading-snug text-cp-white">{r.name}</h3>
            <p className="text-[0.85rem] leading-[1.6] text-cp-off">{r.text}</p>
          </div>
        ))}
        <div className="flex flex-col justify-center bg-cp-dark p-6 font-mono text-[0.75rem] leading-[1.7] text-cp-mid">
          <span className="text-cp-red-bright">&gt; MANIFEST UFULDSTÆNDIGT</span>
          <span>Hvem er om bord? Hvem lyver?</span>
        </div>
      </div>

      <div className="mt-12 border border-cp-red bg-cp-dark p-8">
        <div className="mb-2 font-mono text-[0.6rem] tracking-[0.2em] uppercase text-cp-red-bright">
          // Klassificeret — Syntetiker
        </div>
        <h3 className="mb-2 font-head tracking-[0.08em] text-[1.25rem] uppercase leading-snug">Særordre</h3>
        <p className="mb-6 max-w-[680px] text-[0.9rem] leading-[1.6] text-cp-off">
          Én evne, tre tilstande. Vælg én om ugen. Syntetikere kender hinanden, men kan kun
          tale privat, når de står samme sted. Hver får to bluff-roller.
        </p>
        <div className="grid grid-cols-1 gap-px bg-cp-border md:grid-cols-3">
          {synthModes.map((m) => (
            <div key={m.name} className="bg-cp-panel p-6">
              <div className="mb-1 font-mono text-[0.55rem] tracking-[0.2em] uppercase text-cp-mid">Fra uge {m.from}</div>
              <h4 className="mb-2 font-head tracking-[0.08em] text-[0.95rem] uppercase text-cp-red-bright">{m.name}</h4>
              <p className="text-[0.85rem] leading-[1.6] text-cp-off">{m.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
