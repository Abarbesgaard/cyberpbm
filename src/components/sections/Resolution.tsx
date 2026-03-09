import { useRole } from "@/context/RoleContext";

const ratings = [
  {
    name: "Superior",
    cls: "bg-cp-green/[0.12] text-cp-green border border-cp-green/40",
    meaning:
      "Dominating success. Bonus narrative outcomes, faction reputation gains, zero Heat generated.",
  },
  {
    name: "Excellent",
    cls: "bg-[rgba(100,220,80,0.1)] text-[#90dd60] border border-[rgba(100,220,80,0.3)]",
    meaning:
      "Clean execution. Objective achieved as planned. Minimal complications.",
  },
  {
    name: "Good",
    cls: "bg-cp-yellow/10 text-cp-yellow border border-cp-yellow/30",
    meaning:
      "Success with minor complications. The job is done but something is bent.",
  },
  {
    name: "Adequate",
    cls: "bg-[rgba(200,160,0,0.1)] text-[#c89000] border border-[rgba(200,160,0,0.3)]",
    meaning:
      "Bare success. Costs attached — crew stress, partial objective, or resources lost.",
  },
  {
    name: "Poor",
    cls: "bg-[rgba(200,80,0,0.1)] text-[#e06020] border border-[rgba(200,80,0,0.3)]",
    meaning:
      "Failure with consequences. Objective not achieved. Heat generated. Crew may be exposed.",
  },
  {
    name: "None",
    cls: "bg-[rgba(200,20,0,0.12)] text-[#cc4020] border border-[rgba(200,20,0,0.4)]",
    meaning:
      "Total failure. Operation collapses at this phase. Cascading penalties downstream.",
  },
  {
    name: "Flatlined",
    cls: "bg-[rgba(180,0,0,0.15)] text-cp-red-bright border border-cp-red-dim",
    meaning:
      "Catastrophic. Crew loss possible. Faction retaliation likely. Heat +2 minimum.",
  },
];

const modifiers = [
  { mod: "+1 per phase", effect: "Asset in its Phase Affinity — the right tool for the right moment" },
  { mod: "+1 bonus", effect: "Asset rating 4+ in its dominant column — exceptional individuals bend probability" },
  { mod: "−1 per Heat", effect: "Each point of your current Heat level degrades all column scores globally" },
  { mod: "+1 / −1", effect: "Environmental and faction modifiers set by the GM per district and per target" },
];

export function Resolution() {
  const { role } = useRole();
  if (role === "player") return null;

  return (
    <section id="resolution" className="px-8 py-24 bg-cp-panel md:px-16">
      <div className="mb-2 flex items-center gap-3 font-mono text-[0.65rem] tracking-[0.3em] uppercase text-cp-red">
        <span>Section VI // How the City Decides</span>
        <span className="h-px flex-1 bg-gradient-to-r from-cp-border-bright to-transparent" />
      </div>
      <h2 className="font-head text-[clamp(2.5rem,5vw,4.5rem)] font-extrabold uppercase leading-[0.95] tracking-tight mb-4">
        <span className="text-cp-red-bright">Resolution</span>
      </h2>
      <p className="max-w-[680px] text-[1.05rem] leading-[1.75] text-cp-off mb-12">
        You resolve each phase in sequence. Within each phase, three column
        scores are calculated and compared against the opposition grid you
        built. The difference determines the outcome rating. This is your
        toolkit — the players never see these numbers.
      </p>

      {/* Modifiers */}
      <h3 className="font-head font-bold text-[1.3rem] uppercase text-cp-yellow tracking-[0.05em] mb-4">
        Score Modifiers
      </h3>
      <table className="w-full border-collapse mb-12 max-w-[800px]">
        <thead>
          <tr>
            <th className="bg-cp-yellow-dim/30 text-cp-yellow font-mono text-[0.6rem] tracking-[0.15em] uppercase p-3 text-left border-b-2 border-cp-yellow-dim">Modifier</th>
            <th className="bg-cp-yellow-dim/30 text-cp-yellow font-mono text-[0.6rem] tracking-[0.15em] uppercase p-3 text-left border-b-2 border-cp-yellow-dim">Effect</th>
          </tr>
        </thead>
        <tbody>
          {modifiers.map((m) => (
            <tr key={m.mod} className="hover:bg-white/[0.02]">
              <td className="p-3 border-b border-cp-border font-mono text-[0.75rem] text-cp-yellow whitespace-nowrap align-top">{m.mod}</td>
              <td className="p-3 border-b border-cp-border text-cp-off text-[0.85rem] leading-snug">{m.effect}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Ratings */}
      <h3 className="font-head font-bold text-[1.3rem] uppercase text-cp-red-bright tracking-[0.05em] mb-4">
        Outcome Ratings
      </h3>
      <table className="w-full border-collapse">
        <thead>
          <tr>
            <th className="bg-cp-red-dim text-cp-white font-mono text-[0.6rem] tracking-[0.15em] uppercase p-3 text-left border-b-2 border-cp-red">
              Rating
            </th>
            <th className="bg-cp-red-dim text-cp-white font-mono text-[0.6rem] tracking-[0.15em] uppercase p-3 text-left border-b-2 border-cp-red">
              Outcome
            </th>
          </tr>
        </thead>
        <tbody>
          {ratings.map((r) => (
            <tr key={r.name} className="hover:bg-white/[0.02]">
              <td className="p-3 border-b border-cp-border align-middle">
                <span
                  className={`inline-block font-mono text-[0.65rem] tracking-[0.1em] px-3 py-0.5 ${r.cls}`}
                  style={{
                    clipPath:
                      "polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 6px 100%, 0 calc(100% - 6px))",
                  }}
                >
                  {r.name.toUpperCase()}
                </span>
              </td>
              <td className="p-3 border-b border-cp-border text-cp-off text-[0.85rem] leading-snug">
                {r.meaning}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
