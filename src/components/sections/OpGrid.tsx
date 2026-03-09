import { useRole } from "@/context/RoleContext";

const intention = {
  label: "INTENTION",
  objective: "Extract the Relic prototype from Arasaka Industrial Storage",
  approach: "Stealth insertion via maintenance tunnels — go loud only if burned",
};

const phases = [
  {
    num: "PHASE 1",
    name: "APPROACH",
    desc: "Recon · Disguise\nInsertion",
    ghost: "NR-4 · T-Bug",
    strike: "FA-3 · Rache",
    anchor: "CT-2 · Dex",
  },
  {
    num: "PHASE 2",
    name: "BREACH",
    desc: "Entry · ICE · Suppress",
    ghost: "NR-4 · T-Bug",
    strike: "SO-5 · Brick",
    anchor: "TE-3 · Padre",
  },
  {
    num: "PHASE 3",
    name: "EXECUTE",
    desc: "Primary Objective",
    ghost: "——",
    strike: "SO-5 · Brick",
    anchor: "SO-3 · Ghost",
  },
  {
    num: "PHASE 4",
    name: "EXTRACT",
    desc: "Escape · Cover · Decoy",
    ghost: "NR-4 · T-Bug",
    strike: "ED-3k · Bribe",
    anchor: "SO-5 · Brick",
  },
];

function Token({
  value,
  type,
}: {
  value: string;
  type: "ghost" | "strike" | "anchor" | "empty";
}) {
  const colors = {
    ghost:
      "text-cp-cyan border-cp-cyan/40 bg-cp-cyan/[0.06]",
    strike:
      "text-cp-red-bright border-cp-red/40 bg-cp-red/[0.06]",
    anchor:
      "text-cp-green border-cp-green/40 bg-cp-green/[0.06]",
    empty: "text-cp-border-bright border-cp-border italic",
  };

  return (
    <span
      className={`inline-block font-mono text-[0.75rem] px-2.5 py-1 border ${colors[type]}`}
      style={{
        clipPath:
          "polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 6px 100%, 0 calc(100% - 6px))",
      }}
    >
      {value}
    </span>
  );
}

const gridIntro = {
  player: (
    <>
      The Operation Grid Matrix (OGM) is how you interact with the world. Every
      grid starts with an <strong>Intention</strong> — what you're trying to
      accomplish and how you plan to pull it off. You can only attempt missions
      the GM has made available. The rows are phases of an operation in time. The
      columns are modes of force. You assign your crew to cells before the round
      resolves. The GM holds the opposition grid in secret — you never see it.
      You read the world and bet.
    </>
  ),
  gm: (
    <>
      The Operation Grid Matrix (OGM) is the core structure players use to plan
      their operations. While they fill theirs out, you build an{" "}
      <strong>opposition grid</strong> in secret — placing corporate defences,
      patrols, ICE, and traps across the same phases and columns. When both
      grids are locked in, they collide. Wherever the player's force meets your
      resistance, the dice decide. Below is an example of a player's completed
      OGM.
    </>
  ),
  default: (
    <>
      An Operation Grid Matrix (OGM) is how players interact with the world.
      Every grid starts with an <strong>Intention</strong> — what you're trying
      to accomplish and how you plan to pull it off. The rows are phases of an
      operation in time. The columns are modes of force. Crew are assigned to
      cells before the round resolves. The GM holds the opposition grid in
      secret. Below is an example of a completed OGM.
    </>
  ),
};

const gridOutro = {
  player: (
    <>
      Notice how the Intention shapes every choice. Your crew leans on Ghost and
      Anchor early to stay quiet, only committing Strike power at the breach
      point. If the GM's hidden opposition grid is heavy on Strike, this
      stealth-first plan might slip through untouched — or it might crumble the
      moment someone rolls badly in Phase 2. You won't know until it resolves.
    </>
  ),
  gm: (
    <>
      From your side of the screen, you'd be looking at this grid and comparing
      it against the opposition grid you built. Where the player committed Ghost
      and you placed ICE, there's a clash. Where they left a column empty, your
      defences there go uncontested. The drama comes from the mismatch — and
      from what neither side anticipated.
    </>
  ),
  default: (
    <>
      Notice how the Intention shapes every choice. The crew leans on Ghost and
      Anchor early to stay quiet, only committing Strike power at the breach
      point. If the GM's hidden opposition grid is heavy on Strike, this
      stealth-first plan might slip through untouched — or it might crumble the
      moment someone rolls badly in Phase 2.
    </>
  ),
};

export function OpGrid() {
  const { role } = useRole();
  const r = role ?? "default";

  return (
    <section id="grid-section" className="px-8 py-24 bg-cp-panel md:px-16">
      <div className="mb-2 flex items-center gap-3 font-mono text-[0.65rem] tracking-[0.3em] uppercase text-cp-red">
        <span>Section I // Core Mechanic</span>
        <span className="h-px flex-1 bg-gradient-to-r from-cp-border-bright to-transparent" />
      </div>
      <h2 className="font-head text-[clamp(2.5rem,5vw,4.5rem)] font-extrabold uppercase leading-[0.95] tracking-tight mb-4">
        The <span className="text-cp-red-bright">Operation</span> Grid Matrix
      </h2>
      <p className="max-w-[680px] text-[1.05rem] leading-[1.75] text-cp-off mb-12">
        {gridIntro[r]}
      </p>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse font-mono text-[0.8rem]">
          <thead>
            <tr>
              <th className="bg-cp-dark text-cp-yellow font-mono text-[0.65rem] tracking-[0.15em] p-3 w-[120px] border border-cp-border-bright">
                OP
                <br />
                GRID
              </th>
              <th className="p-4 font-head font-extrabold text-[1.3rem] tracking-[0.1em] uppercase bg-cp-cyan/[0.08] text-cp-cyan border-b-[3px] border-cp-cyan border border-cp-border-bright">
                GHOST{" "}
                <span className="block font-mono text-[1rem] font-normal opacity-60 mt-0.5 tracking-[0.08em]">
                  Stealth · Intel · Net
                </span>
              </th>
              <th className="p-4 font-head font-extrabold text-[1.3rem] tracking-[0.1em] uppercase bg-cp-red/[0.08] text-cp-red-bright border-b-[3px] border-cp-red border border-cp-border-bright">
                STRIKE{" "}
                <span className="block font-mono text-[1rem] font-normal opacity-60 mt-0.5 tracking-[0.08em]">
                  Force · Speed · Breach
                </span>
              </th>
              <th className="p-4 font-head font-extrabold text-[1.3rem] tracking-[0.1em] uppercase bg-cp-green/[0.08] text-cp-green border-b-[3px] border-cp-green border border-cp-border-bright">
                ANCHOR{" "}
                <span className="block font-mono text-[1rem] font-normal opacity-60 mt-0.5 tracking-[0.08em]">
                  Hold · Presence · Control
                </span>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="bg-cp-dark p-3 align-middle text-left w-[120px] border-r-[3px] border-cp-yellow border border-cp-border-bright">
                <span className="block font-mono text-[1rem] text-cp-yellow tracking-[0.15em]">
                  {intention.label}
                </span>
              </td>
              <td
                colSpan={3}
                className="p-5 align-middle border border-cp-border-bright bg-cp-yellow/[0.04]"
              >
                <span className="block font-head font-extrabold text-[1.1rem] text-cp-yellow tracking-wide uppercase">
                  {intention.objective}
                </span>
                <span className="block font-mono text-[0.8rem] text-cp-mid mt-1.5 leading-snug">
                  {intention.approach}
                </span>
              </td>
            </tr>
            {phases.map((p, i) => (
              <tr key={p.name}>
                <td className="bg-cp-dark p-3 align-middle text-left w-[120px] border-r-[3px] border-cp-yellow border border-cp-border-bright">
                  <span className="block font-mono text-[1rem] text-cp-yellow tracking-[0.15em]">
                    {p.num}
                  </span>
                  <span className="block font-head font-extrabold text-base text-cp-white tracking-[0.08em]">
                    {p.name}
                  </span>
                  <span className="block font-mono text-[1rem] text-cp-mid mt-0.5 leading-snug whitespace-pre-line">
                    {p.desc}
                  </span>
                </td>
                <td
                  className={`p-5 align-middle text-center border border-cp-border-bright transition-colors hover:bg-cp-yellow/[0.04] ${i % 2 === 0 ? "bg-black/20" : "bg-white/[0.01]"}`}
                >
                  <Token
                    value={p.ghost}
                    type={p.ghost === "——" ? "empty" : "ghost"}
                  />
                </td>
                <td
                  className={`p-5 align-middle text-center border border-cp-border-bright transition-colors hover:bg-cp-yellow/[0.04] ${i % 2 === 0 ? "bg-black/20" : "bg-white/[0.01]"}`}
                >
                  <Token value={p.strike} type="strike" />
                </td>
                <td
                  className={`p-5 align-middle text-center border border-cp-border-bright transition-colors hover:bg-cp-yellow/[0.04] ${i % 2 === 0 ? "bg-black/20" : "bg-white/[0.01]"}`}
                >
                  <Token value={p.anchor} type="anchor" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-10 max-w-[780px] space-y-6 text-[0.95rem] leading-[1.8] text-cp-off">
        <div className="flex items-center gap-3 font-mono text-[0.65rem] tracking-[0.3em] uppercase text-cp-mid">
          <span>Reading the Example</span>
          <span className="h-px flex-1 bg-gradient-to-r from-cp-border-bright to-transparent" />
        </div>

        <p>
          The crew's <strong className="text-cp-yellow">Intention</strong> is to
          extract the Relic prototype from Arasaka Industrial Storage — stealth
          first, violence only as a fallback. This is a mission that is made available by the gamemaster 
          earlier the same week.
        </p>

        <p>
          In <strong className="text-cp-white">Phase 1 — Approach</strong>,
          T-Bug (<span className="text-cp-cyan">Ghost</span>) jacks into the
          facility net to map cameras and suppresses alarms. Rache (
          <span className="text-cp-red-bright">Strike</span>) stages the
          getaway vehicle and preps breaching charges. Dex (
          <span className="text-cp-green">Anchor</span>) works his contacts to
          keep external security distracted.
        </p>

        <p>
          <strong className="text-cp-white">Phase 2 — Breach</strong> shifts
          the weight. T-Bug stays on net to crack internal ICE, Brick (
          <span className="text-cp-red-bright">Strike</span>) blows the
          maintenance hatch, and Padre (
          <span className="text-cp-green">Anchor</span>) holds the corridor so
          no one flanks the team.
        </p>

        <p>
          <strong className="text-cp-white">Phase 3 — Execute</strong> is the
          grab. Ghost is empty (<span className="text-cp-mid italic">——</span>)
          — the net is already compromised, no further hacking needed. Brick (
          <span className="text-cp-red-bright">Strike</span>) cracks the vault,
          and Ghost the operative (
          <span className="text-cp-green">Anchor</span>) secures the Relic and
          holds the room.
        </p>

        <p>
          In <strong className="text-cp-white">Phase 4 — Extract</strong>,
          T-Bug (<span className="text-cp-cyan">Ghost</span>) loops the cameras
          to cover the exit. The crew burns eddies on a Bribe (
          <span className="text-cp-red-bright">Strike</span>) to buy off a
          checkpoint guard, and Brick (
          <span className="text-cp-green">Anchor</span>) runs rear-guard to
          make sure nobody follows.
        </p>

        <p className="text-cp-mid font-mono text-[0.8rem] border-l-2 border-cp-yellow/40 pl-4">
          {gridOutro[r]}
        </p>
      </div>
    </section>
  );
}
