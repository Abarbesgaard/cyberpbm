import { SectionHeader } from "@/components/SectionHeader";
import {
  NEGLECT_LOSS,
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

const example: Record<SectionId, [number, number]> = {
  A: [3, 2],
  B: [3, 4],
  C: [3, 2],
  D: [3, 4],
  E: [4, 5],
  F: [1, 0],
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
  "ANOMALI: Uautoriseret adgang i Livsstøtte.",
  "KRITISK: Motorrum. Én uge til nedbrud.",
].join("\n");

const rules = [
  { label: "Arbejde", body: `Bliver du i en sektion, kan du arbejde: systemet +${WORK_GAIN}. Syntetikere kan lade være — i hemmelighed.` },
  { label: "Forfald", body: `I uge 2, 4 og 6 mister et system ${NEGLECT_LOSS}, hvis ingen arbejdede, reparerede eller vedligeholdt der.` },
  { label: "Sabotage", body: `Særordre: systemet i sektionen −${SABOTAGE_LOSS}, men intet forfald oveni. ORACLE oplyser sektionen, aldrig navnet.` },
  { label: "Reparation", body: `Ingeniøren: systemet i sektionen +${REPAIR_GAIN}. Rygraden har intet system.` },
];

export function Systems() {
  return (
    <section id="systems" className="hull-alt px-8 py-24 md:px-16">
      <SectionHeader
        eyebrow="Sektion III // Skibssystemer"
        intro={`Hver sektion har et system fra 0 til ${SYSTEM_MAX}. Alle starter på ${SYSTEM_START}. Hver mandag offentliggør ORACLE status og ændring i #shipwide. Når et system rammer 0, er det KRITISK. Står det stadig på 0 efter næste uge, vinder syntetikerne.`}
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
            To blev i Medlab, men Medlab steg kun 1. Hvem arbejdede ikke?
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
        <span className="plate plate-orange">Scenarie</span>
        <span className="font-mono text-[0.65rem] tracking-[0.15em] uppercase text-cp-mid">
          Ét pr. kampagne. Offentligt fra uge 1. Tjekkes efter uge 6.
        </span>
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {scenarios.map((s) => (
          <div key={s.id} className="bezel bezel-screws border-t-[6px] border-cp-yellow p-6">
            <div className="mb-1 font-mono text-[0.55rem] tracking-[0.2em] uppercase text-cp-mid">
              {Object.entries(s.targets).map(([id, min]) => `${id}≥${min}`).join(" · ")}
            </div>
            <h3 className="mb-2 font-head tracking-[0.08em] text-[1.05rem] uppercase text-cp-white">{s.name}</h3>
            <p className="text-[0.85rem] leading-[1.6] text-cp-off">{s.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
