import { useRole } from "@/context/RoleContext";

const phaseIntro = {
  player:
    "Every operation resolves across four phases. These are not separate scenes — they are simultaneous pressure points the GM evaluates in sequence. A failure in Phase 1 does not abort Phase 2 automatically. It degrades it. Plan for each one, because the opposition will.",
  gm:
    "Every operation resolves across four phases that you evaluate in sequence. When you build the opposition grid, you decide where the target is strongest. A well-designed opposition grid puts real pressure in Breach and lets Approach feel deceptively easy.",
  default:
    "Every operation resolves across four phases. These are not separate scenes. They are simultaneous pressure points that the GM evaluates in sequence. A failure in Phase 1 does not abort Phase 2 automatically. It degrades it.",
};

const phases = [
  {
    num: "01",
    label: "PHASE 1",
    title: "Approach",
    body: "Everything before the point of no return. Surveillance, cover identity construction, bribery of perimeter assets, Netrunner preparation, route scouting. This is the phase where intelligence becomes operational. Most Approach work is Ghost-dominant: the team that arrives invisible arrives ready.",
    tags: ["GHOST-DOMINANT", "INTEL → OPS", "RECON"],
  },
  {
    num: "02",
    label: "PHASE 2",
    title: "Breach",
    body: "The moment the operation becomes irreversible. Physical entry, ICE penetration, hostile contact suppression, access acquisition. This is the phase most sensitive to opposition grid collision — if a rival crew is running the same target, the Breach phase is where they collide.",
    tags: ["POINT OF NO RETURN", "ICE", "COLLISION RISK"],
  },
  {
    num: "03",
    label: "PHASE 3",
    title: "Execute",
    body: "The primary objective. The data pull. The extraction of the target. The deletion of the asset. The thing you were paid to do. A crew that bleeds through Breach arrives at Execute wounded, loud, and running out of time. The opposition's Execute defence is almost always Anchor-dominant.",
    tags: ["PRIMARY OBJ", "COMPOUND ADVANTAGE", "ANCHOR DEFENCE"],
  },
  {
    num: "04",
    label: "PHASE 4",
    title: "Extract",
    body: "Getting out. This phase is more dangerous than most crews plan for. Night City's factions do not always respond during Breach — sometimes they wait. Ghost in Extract means you exit without a signature. Anchor in Extract means you had a fallback position prepared before the job started.",
    tags: ["ESCAPE PLAN", "PURSUIT RISK", "FALLBACK"],
  },
];

export function Phases() {
  const { role } = useRole();
  const r = role ?? "default";

  return (
    <section id="phases" className="px-8 py-24 bg-cp-panel md:px-16">
      <div className="mb-2 flex items-center gap-3 font-mono text-[0.65rem] tracking-[0.3em] uppercase text-cp-red">
        <span>Section III // Temporal Architecture</span>
        <span className="h-px flex-1 bg-gradient-to-r from-cp-border-bright to-transparent" />
      </div>
      <h2 className="font-head text-[clamp(2.5rem,5vw,4.5rem)] font-extrabold uppercase leading-[0.95] tracking-tight mb-4">
        The Four <span className="text-cp-red-bright">Phases</span>
      </h2>
      <p className="max-w-[680px] text-[1.05rem] leading-[1.75] text-cp-off mb-12">
        {phaseIntro[r]}
      </p>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-px bg-cp-border border border-cp-border-bright mt-8">
        {phases.map((p) => (
          <div
            key={p.num}
            className="relative bg-cp-dark p-8 transition-colors hover:bg-cp-panel2"
            data-num={p.num}
          >
            <div className="absolute top-5 right-5 font-head font-black text-[4rem] leading-none text-cp-border-bright pointer-events-none">
              {p.num}
            </div>
            <div className="font-mono text-[0.55rem] text-cp-yellow tracking-[0.2em] uppercase mb-1.5">
              {p.label}
            </div>
            <h3 className="font-head font-extrabold text-[1.8rem] uppercase mb-4 leading-none">
              {p.title}
            </h3>
            <p className="text-[0.85rem] text-cp-off leading-[1.7] mb-5">
              {p.body}
            </p>
            <div className="flex flex-wrap gap-1.5 mt-5">
              {p.tags.map((tag) => (
                <span
                  key={tag}
                  className="font-mono text-[0.55rem] px-2 py-0.5 border border-cp-border-bright text-cp-mid tracking-[0.05em]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
