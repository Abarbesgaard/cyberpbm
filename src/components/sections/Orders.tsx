import { useRole } from "@/context/RoleContext";

export function Orders() {
  const { role } = useRole();
  if (role === "gm") return null;

  return (
    <section id="orders" className="px-8 py-24 bg-cp-panel md:px-16">
      <div className="mb-2 flex items-center gap-3 font-mono text-[0.65rem] tracking-[0.3em] uppercase text-cp-red">
        <span>Section VIII // Submit Your Orders</span>
        <span className="h-px flex-1 bg-gradient-to-r from-cp-border-bright to-transparent" />
      </div>
      <h2 className="font-head text-[clamp(2.5rem,5vw,4.5rem)] font-extrabold uppercase leading-[0.95] tracking-tight mb-4">
        The <span className="text-cp-yellow">Order Sheet</span>
      </h2>
      <p className="max-w-[680px] text-[1.05rem] leading-[1.75] text-cp-off mb-12">
        Submit this each round to the GM. The grid is the core. Everything else
        is context and commitment. Be specific. Vague orders produce vague
        outcomes — and in Night City, vague outcomes have teeth.
      </p>

      <div className="max-w-[900px] border border-cp-border-bright bg-cp-dark relative">
        {/* Corner brackets */}
        <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-cp-red" />
        <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-cp-red" />

        {/* Header */}
        <div className="bg-cp-red-dim px-6 py-4 flex justify-between items-center border-b-2 border-cp-red">
          <span className="font-head font-extrabold text-[1.1rem] tracking-[0.15em] uppercase">
            // Night City Dispatch — Order Submission
          </span>
          <span className="font-mono text-[0.65rem] text-cp-yellow tracking-[0.1em]">
            ROUND_08 · ACTIVE
          </span>
        </div>

        {/* Meta fields */}
        <div className="grid grid-cols-1 md:grid-cols-3 border-b border-cp-border">
          {[
            { label: "Operation Name", value: "GHOST IN THE MACHINE" },
            { label: "Target", value: "Arasaka Sub-Vault · Corpo Plaza LVL-3" },
            { label: "Player Handle", value: "[ ________________________ ]" },
          ].map((f, i) => (
            <div
              key={f.label}
              className={`p-5 ${i < 2 ? "border-r border-cp-border md:border-r" : ""}`}
            >
              <span className="block font-mono text-[0.55rem] text-cp-yellow tracking-[0.2em] uppercase mb-1.5">
                {f.label}
              </span>
              <span className="font-mono text-[0.85rem] text-cp-white">
                {f.value}
              </span>
            </div>
          ))}
        </div>

        {/* Mini grid */}
        <table className="w-full border-collapse border-b border-cp-border">
          <thead>
            <tr>
              <th className="bg-cp-panel font-mono text-[0.6rem] tracking-[0.1em] text-cp-mid p-3 border border-cp-border text-left">
                Phase
              </th>
              <th className="bg-cp-panel font-mono text-[0.6rem] tracking-[0.1em] text-cp-cyan p-3 border border-cp-border text-center">
                Ghost
              </th>
              <th className="bg-cp-panel font-mono text-[0.6rem] tracking-[0.1em] text-cp-red-bright p-3 border border-cp-border text-center">
                Strike
              </th>
              <th className="bg-cp-panel font-mono text-[0.6rem] tracking-[0.1em] text-cp-green p-3 border border-cp-border text-center">
                Anchor
              </th>
            </tr>
          </thead>
          <tbody>
            {[
              { phase: "APPROACH", g: "NR-4 · T-Bug", s: "FA-3 · Rache", a: "CT-2 · Dex" },
              { phase: "BREACH", g: "NR-4 · T-Bug", s: "SO-5 · Brick", a: "TE-3 · Padre" },
              { phase: "EXECUTE", g: "——", s: "SO-5 · Brick", a: "SO-3 · Ghost" },
              { phase: "EXTRACT", g: "NR-4 · T-Bug", s: "ED-3k", a: "SO-5 · Brick" },
            ].map((row) => (
              <tr key={row.phase}>
                <td className="bg-cp-panel text-cp-yellow font-mono text-[0.65rem] tracking-[0.1em] p-3 text-left border border-cp-border border-r-2 border-r-cp-yellow-dim">
                  {row.phase}
                </td>
                <td className="text-cp-cyan font-mono text-[0.72rem] p-3 text-center border border-cp-border">
                  {row.g}
                </td>
                <td className="text-cp-red-bright font-mono text-[0.72rem] p-3 text-center border border-cp-border">
                  {row.s}
                </td>
                <td className="text-cp-green font-mono text-[0.72rem] p-3 text-center border border-cp-border">
                  {row.a}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Contingencies */}
        <div className="p-5 border-b border-cp-border grid grid-cols-[auto_1fr] gap-4 items-start">
          <span className="font-mono text-[0.6rem] text-cp-cyan tracking-[0.15em] uppercase whitespace-nowrap border-l-2 border-cp-cyan pl-3 py-0.5">
            Contingency 1
          </span>
          <span className="font-mono text-[0.72rem] text-cp-off leading-relaxed">
            IF T-Bug's ICE penetration in Phase 2 fails (GM reads POOR or
            worse), THEN Brick holds at extraction point — do not breach without
            net cover. PRIORITY: Crew survival over timeline.
          </span>
        </div>
        <div className="p-5 border-b border-cp-border grid grid-cols-[auto_1fr] gap-4 items-start">
          <span className="font-mono text-[0.6rem] text-cp-cyan tracking-[0.15em] uppercase whitespace-nowrap border-l-2 border-cp-cyan pl-3 py-0.5">
            Contingency 2
          </span>
          <span className="font-mono text-[0.72rem] text-cp-off leading-relaxed">
            IF any crew member is taken in Phase 3 or 4, THEN all remaining
            assets pivot to extraction regardless of objective status. PRIORITY:
            Get Brick out.
          </span>
        </div>

        {/* Bottom stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 border-b border-cp-border">
          {[
            { label: "Loss Acceptance", value: "ACCEPTABLE" },
            { label: "Heat Budget", value: "Max +1" },
            { label: "Priority Signal", value: "Schema over timeline" },
          ].map((f, i) => (
            <div
              key={f.label}
              className={`p-4 ${i < 2 ? "border-r border-cp-border" : ""}`}
            >
              <span className="block font-mono text-[0.55rem] text-cp-mid tracking-[0.15em] uppercase mb-1.5">
                {f.label}
              </span>
              <span className="font-head font-bold text-base text-cp-white">
                {f.value}
              </span>
            </div>
          ))}
        </div>

        {/* GM Note */}
        <div className="p-5 border-l-[3px] border-cp-red">
          <span className="block font-mono text-[0.55rem] text-cp-red tracking-[0.2em] uppercase mb-2">
            // Private Note to GM — Eyes Only
          </span>
          <p className="font-mono text-[0.72rem] text-cp-mid leading-[1.7] italic">
            I believe Player 3 is running the same target this round. If T-Bug
            spots evidence of a prior crew during Approach — access logs, a
            body, anything — treat that as a POOR result trigger for Contingency
            1. I don't want to be in that vault at the same time as someone I
            don't know. Also: I sent a Protocol Round 8 to Player 2. ICE-3. If
            they respond by Round 9 I'll brief you on the joint op. If they
            don't respond — I go alone.
          </p>
        </div>
      </div>
    </section>
  );
}
