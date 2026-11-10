import { Link } from "react-router-dom";
import { SectionHeader } from "@/components/SectionHeader";
import {
  DECAY_FROM_WEEK,
  DECAY_LOSS,
  REPAIR_GAIN,
  SABOTAGE_LOSS,
  SYSTEM_MAX,
  SYSTEM_START,
  WORK_GAIN,
  scenarios,
  sectionIds,
  zones,
  type SectionId,
} from "@/content/game";
import { BREAKDOWN_AT, ROOM_ABILITY_MIN, rooms } from "@/content/rooms";

const example: Record<SectionId, [number, number]> = {
  A: [3, 2],
  B: [3, 4],
  C: [3, 2],
  D: [3, 4],
  E: [4, 5],
  F: [3, 1],
};

const zoneName = (id: SectionId) => zones.find((z) => z.id === id)!.name;
const bar = (n: number) => "█".repeat(n) + "░".repeat(SYSTEM_MAX - n);
const sign = (n: number) => (n > 0 ? `+${n}` : n === 0 ? "±0" : `${n}`);

const board = [
  "ORACLE // SYSTEMSTATUS // UGE 4",
  ...sectionIds.map((id) => {
    const [from, to] = example[id];
    return `${zoneName(id).padEnd(11)}${bar(to)} ${to}  ${sign(to - from)}`;
  }),
  "NEDBRUD: Skakter lukket. Rammer Motorrum 0, vinder syntetikerne.",
].join("\n");

const rules = [
  { label: "Arbejde", body: `Alle, der står i en sektion, arbejder automatisk: systemet +${WORK_GAIN} pr. spiller. Også syntetikere. Du skriver intet i ordren.` },
  { label: "Forfald", body: `Fra uge ${DECAY_FROM_WEEK} mister alle systemer ${DECAY_LOSS} hver uge, medmindre et ekko vedligeholdt dem.` },
  { label: "Sabotage", body: `Særordre: systemet i sektionen −${SABOTAGE_LOSS}. Ingen broadcast — kun tallet.` },
  { label: "Reparation", body: `Ingeniøren: systemet i sektionen +${REPAIR_GAIN}. Rygraden har intet system.` },
];

export function Systems() {
  return (
    <section id="systems" className="hull-alt px-8 py-24 md:px-16">
      <SectionHeader
        eyebrow="Sektion III // Skibssystemer"
        intro={`Hver sektion har et system fra 0 til ${SYSTEM_MAX}. Alle starter på ${SYSTEM_START}. Hver mandag offentliggør ORACLE status og ændring i #shipwide. Rammer et system 0, vinder syntetikerne med det samme. Systemerne er ikke målet — de er uret og jeres spor.`}
      >
        Ship <span className="text-cp-red-bright">Systems</span>
      </SectionHeader>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]">
        <div className="console p-4 sm:p-5 [--chamfer:16px]">
          <div className="mb-3 flex items-center justify-between gap-3">
            <span className="plate">#shipwide // Systemstatus</span>
            <span className="flex gap-2" aria-hidden><span className="lamp lamp-green" /><span className="lamp lamp-red blink-slow" /></span>
          </div>
          <pre className="crt m-[10px] overflow-x-auto whitespace-pre-wrap p-4 sm:p-6 text-[1.1rem] leading-[1.45] text-cp-cyan sm:text-[1.25rem]">{board}</pre>
          <p className="px-3 pb-1 font-mono text-[0.6rem] tracking-[0.12em] uppercase text-cp-mid">
            To stod i Livsstøtte. Med forfald burde den være steget 1. Den faldt 1. Hvem saboterede?
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
          Mandagens status gælder hele ugen. Rumevne ved ≥{ROOM_ABILITY_MIN} i stedet for din rolleevne. Nedbrud ved ≤{BREAKDOWN_AT} rammer hele skibet.
        </span>
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {rooms.map((r) => (
          <div key={r.id} className="bezel bezel-screws p-6">
            <h3 className="mb-3 font-head tracking-[0.08em] text-[1.05rem] uppercase text-cp-white">{zoneName(r.id)}</h3>
            <div className="font-mono text-[0.6rem] tracking-[0.15em] uppercase text-cp-yellow">≥{ROOM_ABILITY_MIN} // {r.ability.name}</div>
            <p className="mt-1 text-[0.85rem] leading-[1.6] text-cp-off">{r.ability.text}</p>
            <div className="mt-4 border-t border-cp-border pt-4 font-mono text-[0.6rem] tracking-[0.15em] uppercase text-cp-red-bright">≤{BREAKDOWN_AT} // {r.breakdown.name}</div>
            <p className="mt-1 text-[0.85rem] leading-[1.6] text-cp-off">{r.breakdown.text}</p>
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
