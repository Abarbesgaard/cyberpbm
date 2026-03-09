import { useRole } from "@/context/RoleContext";

const roles = [
  {
    code: "SO",
    name: "Solo",
    column: "Strike",
    colorClass: "text-cp-red-bright border-cp-red/30",
    desc: "Combat specialists. High damage, breach capability, suppression. Fragile plans, strong fists.",
  },
  {
    code: "NR",
    name: "Netrunner",
    column: "Ghost",
    colorClass: "text-cp-cyan border-cp-cyan/30",
    desc: "Net operators. ICE cracking, camera loops, data extraction. Essential for stealth-heavy grids.",
  },
  {
    code: "TE",
    name: "Tech",
    column: "Anchor",
    colorClass: "text-cp-green border-cp-green/30",
    desc: "Engineers and medics. Fortify positions, patch crew, rig devices. Slow but durable.",
  },
  {
    code: "FA",
    name: "Fixer / Assault",
    column: "Strike",
    colorClass: "text-cp-red-bright border-cp-red/30",
    desc: "Wheelman, demo, logistics. Stages vehicles, preps charges, runs interference on the ground.",
  },
  {
    code: "CT",
    name: "Contact",
    column: "Anchor",
    colorClass: "text-cp-green border-cp-green/30",
    desc: "Social operators. Bribe, distract, manage relationships. Keep external pressure off the crew.",
  },
];

const ratingScale = [
  { rating: "1–2", label: "Green", cost: "Low", note: "Cheap but unreliable. Filler slots." },
  { rating: "3", label: "Competent", cost: "Medium", note: "Baseline professional. Can hold a column." },
  { rating: "4", label: "Elite", cost: "High", note: "+1 bonus in dominant column. Worth protecting." },
  { rating: "5", label: "Legendary", cost: "Very High", note: "Game-changing. Draws attention. Everyone wants them." },
];

export function CrewCreation() {
  const { role } = useRole();
  if (role === "gm") return null;

  return (
    <section
      id="crew-creation"
      className="reveal-section relative border-t border-cp-border px-8 py-24 md:px-16"
    >
      <div className="mx-auto max-w-4xl">
        <p className="mb-3 font-mono text-[0.65rem] tracking-[0.3em] uppercase text-cp-cyan">
          // Your Crew
        </p>
        <h2
          className="mb-4 font-head text-[clamp(2rem,5vw,3.5rem)] font-black leading-[0.95] uppercase text-foreground"
          style={{ textShadow: "0 0 30px rgba(204,0,0,0.3)" }}
        >
          Crew <span className="text-cp-red-bright">Creation</span>
        </h2>
        <p className="max-w-[680px] text-[1.05rem] leading-[1.75] text-cp-off mb-12">
          Your crew is your instrument. Each member has a <strong className="text-cp-white">role</strong> that
          determines their column affinity, and a <strong className="text-cp-white">skill rating</strong> (1–5)
          that determines how hard they hit in that column. You start with a
          budget and build from there. Choose carefully — a crew built for Ghost
          will struggle if the GM throws Strike-heavy opposition at you.
        </p>

        {/* Roles */}
        <div className="mb-14">
          <div className="flex items-center gap-3 mb-6 font-mono text-[0.65rem] tracking-[0.3em] uppercase text-cp-mid">
            <span>Available Roles</span>
            <span className="h-px flex-1 bg-gradient-to-r from-cp-border-bright to-transparent" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-cp-border border border-cp-border-bright">
            {roles.map((r) => (
              <div
                key={r.code}
                className="bg-cp-dark p-6 transition-colors hover:bg-cp-panel2"
              >
                <div className="flex items-baseline justify-between mb-2">
                  <h3 className="font-head font-extrabold text-[1.2rem] uppercase tracking-wide text-cp-white">
                    {r.name}
                  </h3>
                  <span
                    className={`font-mono text-[0.65rem] px-2 py-0.5 border ${r.colorClass}`}
                  >
                    {r.code}
                  </span>
                </div>
                <span className="block font-mono text-[0.6rem] tracking-[0.15em] uppercase text-cp-mid mb-2">
                  Primary: {r.column}
                </span>
                <p className="text-[0.85rem] leading-snug text-cp-off">
                  {r.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Rating scale */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-6 font-mono text-[0.65rem] tracking-[0.3em] uppercase text-cp-mid">
            <span>Skill Rating Scale</span>
            <span className="h-px flex-1 bg-gradient-to-r from-cp-border-bright to-transparent" />
          </div>

          <table className="w-full border-collapse font-mono text-[0.8rem]">
            <thead>
              <tr>
                <th className="bg-cp-yellow-dim/30 text-cp-yellow font-mono text-[0.6rem] tracking-[0.15em] uppercase p-3 text-left border-b-2 border-cp-yellow-dim">
                  Rating
                </th>
                <th className="bg-cp-yellow-dim/30 text-cp-yellow font-mono text-[0.6rem] tracking-[0.15em] uppercase p-3 text-left border-b-2 border-cp-yellow-dim">
                  Tier
                </th>
                <th className="bg-cp-yellow-dim/30 text-cp-yellow font-mono text-[0.6rem] tracking-[0.15em] uppercase p-3 text-left border-b-2 border-cp-yellow-dim">
                  Cost
                </th>
                <th className="bg-cp-yellow-dim/30 text-cp-yellow font-mono text-[0.6rem] tracking-[0.15em] uppercase p-3 text-left border-b-2 border-cp-yellow-dim">
                  Notes
                </th>
              </tr>
            </thead>
            <tbody>
              {ratingScale.map((r) => (
                <tr key={r.rating} className="hover:bg-white/[0.02]">
                  <td className="p-3 border-b border-cp-border text-cp-yellow font-bold whitespace-nowrap">
                    {r.rating}
                  </td>
                  <td className="p-3 border-b border-cp-border text-cp-white">
                    {r.label}
                  </td>
                  <td className="p-3 border-b border-cp-border text-cp-mid">
                    {r.cost}
                  </td>
                  <td className="p-3 border-b border-cp-border text-cp-off text-[0.85rem]">
                    {r.note}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-cp-mid font-mono text-[0.8rem] border-l-2 border-cp-yellow/40 pl-4 leading-relaxed">
          A balanced crew covers all three columns. A specialised crew dominates
          one but bleeds in the others. There's no right answer — only the
          answer that matches how you want to play Night City.
        </p>
      </div>
    </section>
  );
}
