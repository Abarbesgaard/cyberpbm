import { Link } from "react-router-dom";
import { SectionHeader } from "@/components/SectionHeader";
import {
  EXTRA_REPAIR_GAIN,
  INTEGRITY_FROM_WEEK,
  NEGLECT_LOSS,
  PRESENCE_GAIN,
  REPAIR_GAIN,
  SABOTAGE_FROM_WEEK,
  SYSTEM_MAX,
  SYSTEM_START,
  scenarios,
  zones,
  type SectionId,
} from "@/content/game";
import { rooms } from "@/content/rooms";
import { integrityReport } from "@/content/systems";

const zoneName = (id: SectionId) => zones.find((z) => z.id === id)!.name;

const board = integrityReport(4, { A: 2, B: 4, C: 2, D: 4, E: 5, F: 1, R: 3 });

const rules = [
  { label: "Vedligehold", body: `Fra uge ${INTEGRITY_FROM_WEEK}, hver fredag: står mindst ét levende menneske i sektionen, +${PRESENCE_GAIN}. Ellers −${NEGLECT_LOSS}. Flere mennesker giver ikke mere. Syntetikere tæller ikke. Automatisk — det koster intet.` },
  { label: "Bevægelse", body: "Fredagens beregning bruger, hvor du stod i ugen. Din nye zone gælder fra mandag. Du vedligeholder højst én sektion om ugen." },
  { label: "Sabotage", body: `Alle syntetikere, fra uge ${SABOTAGE_FROM_WEEK}: brug ugens aktivering i din egen sektion. Næste uge virker sektionens evne ikke. Integriteten rammes ikke. Ingen broadcast.` },
  { label: "Reparation", body: `Ingeniøren: din sektion +${REPAIR_GAIN}. Ekstra reparation i Motorrum: en sektion +${EXTRA_REPAIR_GAIN}. Aldrig over ${SYSTEM_MAX}.` },
];

export function Systems() {
  return (
    <section id="systems" className="hull-alt px-8 py-24 md:px-16">
      <SectionHeader
        eyebrow="Sektion III // Skibssystemer"
        intro={`Alle syv sektioner har en integritet fra 0 til ${SYSTEM_MAX}. Skibet starter delvist nedbrudt: scenariet sætter nogle sektioner lavere end ${SYSTEM_START}. Hver mandag offentliggør ORACLE de aktuelle værdier — ikke ændringer, ikke årsager. Rammer en sektion 0 ved fredagens beregning, vinder syntetikerne med det samme.`}
      >
        Ship <span className="text-cp-red-bright">Systems</span>
      </SectionHeader>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]">
        <div className="console p-4 sm:p-5 [--chamfer:16px]">
          <div className="mb-3 flex items-center justify-between gap-3">
            <span className="plate">#shipwide // Integritet</span>
            <span className="flex gap-2" aria-hidden><span className="lamp lamp-green" /><span className="lamp lamp-red blink-slow" /></span>
          </div>
          <pre className="crt m-[10px] overflow-x-auto whitespace-pre-wrap p-4 sm:p-6 text-[1.1rem] leading-[1.45] text-cp-cyan sm:text-[1.25rem]">{board}</pre>
          <p className="px-3 pb-1 font-mono text-[0.6rem] tracking-[0.12em] uppercase text-cp-mid">
            Kun tallene. Sammenlign med sidste mandag: hvilke sektioner stod ingen i?
          </p>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {rules.map((r) => (
            <div key={r.label} className="bezel bezel-screws p-6">
              <div className="mb-2 font-mono text-[0.6rem] tracking-[0.2em] uppercase text-cp-yellow">// {r.label}</div>
              <p className="text-[0.85rem] leading-[1.6] text-cp-off">{r.body}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-12 mb-4 flex flex-wrap items-center gap-3">
        <span className="plate plate-orange">Rum</span>
        <span className="font-mono text-[0.65rem] tracking-[0.15em] uppercase text-cp-mid">
          Én evne pr. sektion. Kun fra sektionen selv, i stedet for din rolleevne. Saboteret: "Systemet er saboteret."
        </span>
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {rooms.map((r) => (
          <div key={r.id} className="bezel bezel-screws p-6">
            <h3 className="mb-3 font-head tracking-[0.08em] text-[1.05rem] uppercase text-cp-white">{zoneName(r.id)}</h3>
            <div className="font-mono text-[0.6rem] tracking-[0.15em] uppercase text-cp-yellow">{r.ability.name} // {r.ability.target}</div>
            <p className="mt-1 text-[0.85rem] leading-[1.6] text-cp-off">{r.ability.text}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 mb-4 flex flex-wrap items-center gap-3">
        <span className="plate plate-orange">Scenarie</span>
        <span className="font-mono text-[0.65rem] tracking-[0.15em] uppercase text-cp-mid">
          Ét pr. kampagne. Historie og arkiv — afgør ikke spillet. Krisen i uge 4 rulles på d20.
        </span>
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {scenarios.map((s) => (
          <div key={s.id} className="bezel bezel-screws border-t-[6px] border-cp-yellow p-6">
            <h3 className="mb-2 font-head tracking-[0.08em] text-[1.05rem] uppercase text-cp-white">{s.name}</h3>
            <p className="text-[0.85rem] leading-[1.6] text-cp-off">{s.text}</p>
            <p className="mt-3 font-mono text-[0.6rem] tracking-[0.15em] uppercase text-cp-red-bright">
              Start: {Object.entries(s.start).map(([id, v]) => `${zoneName(id as SectionId)} ${v}`).join(", ")}. Resten {SYSTEM_START}.
            </p>
            <dl className="mt-4 border-t border-cp-border pt-4">
              <dt className="font-mono text-[0.6rem] tracking-[0.15em] uppercase text-cp-yellow">Uge 5 // {s.archive.name}</dt>
              <dd className="mt-1 text-[0.8rem] leading-[1.55] text-cp-off">{s.archive.text}</dd>
            </dl>
          </div>
        ))}
      </div>
      <Link
        to="/rules?tab=scenarios"
        className="key mt-6 inline-flex px-5 py-2.5 font-mono text-[0.65rem] tracking-[0.2em] uppercase text-cp-yellow no-underline"
      >
        Scenariebog // Krisetabel d20
      </Link>
    </section>
  );
}
