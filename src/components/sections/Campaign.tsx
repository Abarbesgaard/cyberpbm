import { SectionHeader } from "@/components/SectionHeader";
import { weeks } from "@/content/game";

export function Campaign() {
  return (
    <section id="campaign" className="hull-alt px-8 py-24 md:px-16">
      <SectionHeader
        eyebrow="Sektion VIII // Kampagne"
        intro="Seks uger. Hver uge tilføjer data eller pres — ikke nye regler."
      >
        Flight <span className="text-cp-yellow">Log</span>
      </SectionHeader>
      <ol className="relative border-l border-cp-border-bright">
        {weeks.map((w) => (
          <li key={w.n} className="relative mb-8 pl-8 last:mb-0">
            <span
              className={`absolute top-1 -left-[7px] block h-3 w-3 border ${
                w.n === 6 ? "border-cp-red bg-cp-red" : "border-cp-yellow bg-cp-dark"
              }`}
            />
            <div className="font-mono text-[0.6rem] tracking-[0.2em] uppercase text-cp-mid">Uge 0{w.n}</div>
            <h3 className="font-head tracking-[0.08em] text-[1.05rem] uppercase leading-tight">{w.name}</h3>
            <p className="max-w-[640px] text-[0.95rem] leading-[1.6] text-cp-off">{w.text}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
