import { useRole } from "@/context/RoleContext";

const columnIntro = {
  player:
    "Every operation you plan unfolds across three simultaneous lines of effort. These are not roles — they are modes of operating. When you assign crew to the grid, you're choosing which line to push. Knowing how the columns interact is the difference between a clean job and a flatline.",
  gm:
    "Every operation unfolds across three lines of effort. When building your opposition grid, you're placing defences along these same columns. Understanding how they interact lets you design opposition that challenges the players without being unbeatable.",
  default:
    "Every operation unfolds across three simultaneous lines of effort. These are not roles. They are not job classes. They are modes of operating — ways of applying pressure, presence, and capability to a problem.",
};

const columns = [
  {
    id: "ghost",
    label: "THE INVISIBLE LINE",
    title: "Ghost",
    color: "cp-cyan",
    borderClass: "bg-cp-cyan shadow-[0_0_20px_rgba(0,212,255,0.5)]",
    labelClass: "text-cp-cyan",
    body: "Ghost encompasses everything that works by not being seen: electronic intrusion, social manipulation, surveillance, disguise, and the placement of assets before the opposition knows the job has started. A strong Ghost line means the target never fully understood what hit them.",
    beats: "Ghost is strong against Anchor. A defender who holds ground cannot hold what they cannot see coming.",
  },
  {
    id: "strike",
    label: "THE KINETIC LINE",
    title: "Strike",
    color: "cp-red",
    borderClass: "bg-cp-red shadow-[0_0_20px_rgba(204,0,0,0.5)]",
    labelClass: "text-cp-red-bright",
    body: "Strike is speed, violence, and the direct application of overwhelming capability. It is the Solo kicking in the door at the exact right moment, the breaching charge on the server room wall. Strike does not win by being subtle. It wins by being faster and harder than the opposition can respond to.",
    beats: "Strike is strong against Ghost. Overwhelming force flushes concealment. You cannot stay invisible in a firefight.",
  },
  {
    id: "anchor",
    label: "THE WEIGHT LINE",
    title: "Anchor",
    color: "cp-green",
    borderClass: "bg-cp-green shadow-[0_0_20px_rgba(0,255,136,0.5)]",
    labelClass: "text-cp-green",
    body: "Anchor is presence, control, and sustained hold. It is the Tech hardwiring a back-door into the security system that will still work in three rounds. It is the fixer's standing arrangement with the local Valentinos that means this block stays quiet tonight. Anchor operations are slow, durable, and compound.",
    beats: "Anchor is strong against Strike. A prepared position bleeds an assault. Maelstrom knows this. Arasaka knows this better.",
  },
];

export function Columns() {
  const { role } = useRole();
  const r = role ?? "default";

  return (
    <section id="columns" className="px-8 py-24 bg-cp-dark md:px-16">
      <div className="mb-2 flex items-center gap-3 font-mono text-[0.65rem] tracking-[0.3em] uppercase text-cp-red">
        <span>Section II // Lines of Effort</span>
        <span className="h-px flex-1 bg-gradient-to-r from-cp-border-bright to-transparent" />
      </div>
      <h2 className="font-head text-[clamp(2.5rem,5vw,4.5rem)] font-extrabold uppercase leading-[0.95] tracking-tight mb-4">
        The Three <span className="text-cp-red-bright">Columns</span>
      </h2>
      <p className="max-w-[680px] text-[1.05rem] leading-[1.75] text-cp-off mb-12">
        {columnIntro[r]}
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-cp-border border border-cp-border">
        {columns.map((col) => (
          <div
            key={col.id}
            className="relative overflow-hidden bg-cp-panel p-10 transition-colors hover:bg-cp-panel2"
          >
            <div
              className={`absolute top-0 left-0 right-0 h-[3px] ${col.borderClass}`}
            />
            <div
              className={`font-mono text-[0.6rem] tracking-[0.25em] uppercase mb-2 ${col.labelClass}`}
            >
              {col.label}
            </div>
            <h3 className="font-head font-extrabold text-[2.2rem] uppercase mb-4 leading-none">
              {col.title}
            </h3>
            <p className="text-[0.9rem] text-cp-off leading-[1.7] mb-6">
              {col.body}
            </p>
            <div className="border-t border-cp-border pt-4 font-mono text-[0.6rem] text-cp-mid tracking-[0.05em]">
              <strong className="text-cp-yellow font-normal">
                {col.beats}
              </strong>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
