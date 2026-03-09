import { useRole } from "@/context/RoleContext";

const heatIntro = {
  player:
    "Heat is persistent. It represents how visible and targeted you are across Night City's overlapping power structures. It degrades every column score globally. It doesn't reset between rounds. It compounds. Managing your heat is as important as running jobs — ignore it and the city will bury you.",
  gm:
    "Heat is the city's memory. You track it per player. It degrades their column scores globally and triggers escalating consequences. Heat is your primary balancing lever — if a player is dominating, their heat will catch up. If they're playing careful, reward it with low heat.",
  default:
    "Heat is persistent. It represents how visible and targeted you are across Night City's overlapping power structures. It degrades every column score globally. It doesn't reset between rounds. It compounds.",
};

const heatLevels = [
  {
    num: "0",
    word: "Cold",
    effect: "// No modifiers active",
    desc: "No column penalties. Factions are not tracking you. Enjoy it while it lasts.",
    mod: "—",
    colorClass: "text-cp-mid",
  },
  {
    num: "1",
    word: "Warm",
    effect: "// Soft surveillance active",
    desc: "Someone has your description. Not your name. All column scores degraded.",
    mod: "–1",
    colorClass: "text-[#c89000]",
  },
  {
    num: "2",
    word: "Hot",
    effect: "// NCPD open file",
    desc: "NCPD has an open file. Corporate intel is comparing notes. Contacts become unreliable.",
    mod: "–2",
    colorClass: "text-[#e06020]",
  },
  {
    num: "3",
    word: "Burning",
    effect: "// Public dispatch reference",
    desc: 'You appear in the Public Dispatch anonymised as a "person of interest". Contacts go cold.',
    mod: "–3",
    colorClass: "text-[#cc4020]",
  },
  {
    num: "4+",
    word: "Flatlined",
    effect: "// Active bounty / corporate sanction",
    desc: "Active bounty. Cannot take jobs in affected district without Ghost/Approach rated 4+.",
    mod: "–4",
    colorClass: "text-cp-red-bright",
  },
];

const triggers = [
  "Any STRIKE column result of POOR or below",
  "Any FLATLINED or NONE phase outcome",
  "Crew member captured or killed (+2)",
  "Running Strike-dominant grid (more Strike than Ghost + Anchor combined)",
];

const cooling = [
  "GHOST action (full dark, both slots committed)",
  "ED-3k+ spent on dedicated Heat suppression operation",
  "FA-4+ deployed in relationship maintenance action",
];

export function Heat() {
  const { role } = useRole();
  const r = role ?? "default";

  return (
    <section id="heat" className="px-8 py-24 bg-cp-dark md:px-16">
      <div className="mb-2 flex items-center gap-3 font-mono text-[0.65rem] tracking-[0.3em] uppercase text-cp-red">
        <span>Section VII // Visibility Engine</span>
        <span className="h-px flex-1 bg-gradient-to-r from-cp-border-bright to-transparent" />
      </div>
      <h2 className="font-head text-[clamp(2.5rem,5vw,4.5rem)] font-extrabold uppercase leading-[0.95] tracking-tight mb-4">
        <span className="text-cp-red-bright">Heat</span> — The City's Memory
      </h2>
      <p className="max-w-[680px] text-[1.05rem] leading-[1.75] text-cp-off mb-12">
        {heatIntro[r]}
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
        {/* Heat bar list */}
        <div className="flex flex-col gap-px border border-cp-border-bright">
          {heatLevels.map((h) => (
            <div
              key={h.num}
              className="flex items-stretch bg-cp-panel transition-colors hover:bg-cp-panel2"
            >
              <div className="w-20 flex flex-col items-center justify-center p-4 border-r border-cp-border-bright bg-cp-dark">
                <span
                  className={`font-head font-black text-[2rem] leading-none ${h.colorClass}`}
                  style={
                    h.num === "4+"
                      ? { textShadow: "0 0 20px rgba(204,0,0,0.6)" }
                      : undefined
                  }
                >
                  {h.num}
                </span>
                <span className="font-mono text-[0.5rem] tracking-[0.1em] uppercase mt-1 text-cp-mid">
                  {h.word}
                </span>
              </div>
              <div className="flex-1 p-4">
                <div className="font-mono text-[0.65rem] text-cp-mid tracking-[0.05em] mb-1.5">
                  {h.effect}
                </div>
                <div className="text-[0.85rem] text-cp-off leading-snug">
                  {h.desc}
                </div>
              </div>
              <div className="w-15 flex items-center justify-center font-head font-extrabold text-[1.4rem] border-l border-cp-border-bright text-cp-red-bright bg-cp-red/5 px-4">
                {h.mod}
              </div>
            </div>
          ))}
        </div>

        {/* Triggers + Cooling */}
        <div>
          <h3 className="font-head font-bold text-[1.3rem] tracking-[0.05em] text-cp-red-bright mb-4 uppercase">
            Heat Triggers
          </h3>
          <div className="flex flex-col gap-px border border-cp-border-bright mb-8">
            {triggers.map((t) => (
              <div
                key={t}
                className="p-3 bg-cp-panel font-mono text-[0.7rem] text-cp-off border-b border-cp-border last:border-b-0"
              >
                <span className="text-cp-red-bright">▲ +1</span> &nbsp; {t}
              </div>
            ))}
          </div>

          <h3 className="font-head font-bold text-[1.3rem] tracking-[0.05em] text-cp-green mb-4 uppercase">
            Cooling Methods
          </h3>
          <div className="flex flex-col gap-px border border-cp-border-bright">
            {cooling.map((c) => (
              <div
                key={c}
                className="p-3 bg-cp-panel font-mono text-[0.7rem] text-cp-off border-b border-cp-border last:border-b-0"
              >
                <span className="text-cp-green">▼ –1</span> &nbsp; {c}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
