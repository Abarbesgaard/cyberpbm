import { useRole } from "@/context/RoleContext";

const protocolIntro = {
  player:
    "Night City rewards coordination and punishes trust. PROTOCOL messages are sent between players — encrypted, deniable, and interceptable. Every message has an ICE level. The higher the ICE, the harder to crack. Use Protocol to build alliances, set traps, or just see who bites.",
  gm:
    "PROTOCOL messages flow between players — you see every one of them. You also decide what happens when someone tries to intercept. A failed interception attempt at ICE-5 can fry a Netrunner. A successful one can unravel an alliance. Manage this channel carefully.",
  default:
    "Night City rewards coordination and punishes trust. PROTOCOL messages are sent between players — encrypted, deniable, and interceptable. Every message has an ICE level. The higher the ICE, the harder to crack.",
};

const iceTable = [
  {
    level: "ICE-1",
    desc: "Plaintext. Any Netrunner can intercept. Free.",
  },
  {
    level: "ICE-2",
    desc: "Basic encryption. NR-2+ to intercept. Costs ED-500.",
  },
  {
    level: "ICE-3",
    desc: "Hardened channel. NR-3+ to intercept. Costs ED-1k. Standard for operational comms.",
  },
  {
    level: "ICE-4",
    desc: "Military-grade. NR-4+ to intercept. Costs ED-3k. Recipient needs NR-2+ to decrypt.",
  },
  {
    level: "ICE-5",
    desc: "Black ICE wrapper. NR-5 to intercept (and takes damage on failure). Costs ED-5k. Recipient needs NR-3+.",
  },
];

export function Protocol() {
  const { role } = useRole();
  const r = role ?? "default";

  return (
    <section
      id="protocol"
      className="relative px-8 py-24 bg-cp-dark overflow-hidden md:px-16"
    >
      <div
        className="pointer-events-none absolute top-0 right-0 w-[40%] h-full"
        style={{
          background:
            "linear-gradient(135deg, transparent 60%, rgba(0,212,255,0.03) 60%)",
        }}
      />

      <div className="mb-2 flex items-center gap-3 font-mono text-[0.65rem] tracking-[0.3em] uppercase text-cp-red">
        <span>Section V // Secure Comms</span>
        <span className="h-px flex-1 bg-gradient-to-r from-cp-border-bright to-transparent" />
      </div>
      <h2 className="font-head text-[clamp(2.5rem,5vw,4.5rem)] font-extrabold uppercase leading-[0.95] tracking-tight mb-4">
        <span className="text-cp-cyan">Protocol</span> — Inter-Player Comms
      </h2>
      <p className="max-w-[680px] text-[1.05rem] leading-[1.75] text-cp-off mb-12">
        {protocolIntro[r]}
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-start">
        <div>
          <table className="w-full border-collapse font-mono text-[0.75rem]">
            <thead>
              <tr>
                <th className="bg-cp-cyan/10 text-cp-cyan text-[0.6rem] tracking-[0.15em] uppercase p-3 text-left border-b-2 border-cp-cyan-dim">
                  ICE Level
                </th>
                <th className="bg-cp-cyan/10 text-cp-cyan text-[0.6rem] tracking-[0.15em] uppercase p-3 text-left border-b-2 border-cp-cyan-dim">
                  Description
                </th>
              </tr>
            </thead>
            <tbody>
              {iceTable.map((row) => (
                <tr key={row.level} className="hover:bg-white/[0.02]">
                  <td className="p-3 border-b border-cp-border font-mono text-[0.75rem] text-cp-cyan whitespace-nowrap align-top">
                    {row.level}
                  </td>
                  <td className="p-3 border-b border-cp-border text-cp-off text-[0.85rem] leading-snug font-sans">
                    {row.desc}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div>
          <div className="bg-cp-panel border border-cp-border-bright border-l-[3px] border-l-cp-cyan p-7 font-mono text-[0.75rem] text-cp-off leading-relaxed">
            <span className="block text-[0.55rem] text-cp-cyan tracking-[0.2em] uppercase mb-4 border-b border-cp-border pb-3">
              // EXAMPLE PROTOCOL MESSAGE
            </span>
            <div>
              <span className="text-cp-yellow">&gt; </span>TO: PLAYER_02
              <br />
              <span className="text-cp-yellow">&gt; </span>ICE: 3
              <br />
              <span className="text-cp-yellow">&gt; </span>ROUND: 08
              <br />
              <span className="text-cp-yellow">&gt; </span>---
              <br />
              <span className="text-cp-yellow">&gt; </span>I am running Corpo
              Plaza this round.
              <br />
              <span className="text-cp-yellow">&gt; </span>Stay clear or
              coordinate. Your call.
              <br />
              <span className="text-cp-yellow">&gt; </span>Reply at ICE-3 or
              higher if interested.
              <br />
              <span
                className="inline-block w-2 h-3.5 bg-cp-cyan align-middle ml-0.5"
                style={{ animation: "blink 1s step-end infinite" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
