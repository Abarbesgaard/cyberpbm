import { useRole } from "@/context/RoleContext";

const actionIntro = {
  player: (
    <>
      Each round you have <strong className="text-cp-white">two action slots</strong>. This is
      the pulse of Night City. Every slot commits you. Every empty slot is a
      missed opportunity. The eight available actions are the verbs of your
      game — choose the ones that serve your crew's goals this round.
    </>
  ),
  gm: (
    <>
      Each player gets <strong className="text-cp-white">two action slots</strong> per round.
      When you receive order sheets, you'll see which actions they picked.
      Understanding all eight lets you anticipate player behaviour and design
      opposition that punishes predictability.
    </>
  ),
  default: (
    <>
      Each round you have two action slots. This is the pulse of Night City.
      Every slot commits you. Every empty slot is a missed opportunity. The
      eight available actions are the verbs of the game — each one opens doors
      and closes others.
    </>
  ),
};

const actions = [
  {
    code: "ACT-01",
    name: "Engage",
    desc: "Run a full operation against a target. Fill the Operation Grid, assign crew to cells, declare contingencies. This is the core action — the job.",
    tags: [
      { label: "GRID REQUIRED", type: "risk" },
      { label: "PRIMARY", type: "econ" },
    ],
  },
  {
    code: "ACT-02",
    name: "Protocol",
    desc: "Send an encrypted message to another player. Declare ICE level (1–5). Higher ICE = harder to intercept but costs more. The recipient decrypts next round.",
    tags: [
      { label: "COMMS", type: "intel" },
      { label: "ICE COST", type: "econ" },
    ],
  },
  {
    code: "ACT-03",
    name: "Transfer",
    desc: "Move a crew member or resource to another player. The transferred asset becomes theirs. Loyalty is hidden — the GM tracks it. Transfers can be poisoned.",
    tags: [
      { label: "CREW MOVE", type: "safe" },
      { label: "LOYALTY RISK", type: "risk" },
    ],
  },
  {
    code: "ACT-04",
    name: "Ghost",
    desc: "Go completely dark. Costs both action slots. Heat drops by 1. You cannot be targeted by LEVERAGE or SURVEIL. Your name vanishes from the Public Dispatch.",
    tags: [
      { label: "2 SLOTS", type: "risk" },
      { label: "HEAT −1", type: "safe" },
    ],
  },
  {
    code: "ACT-05",
    name: "Acquire",
    desc: "Recruit a new crew member or upgrade an existing one. Declare type and budget. Higher-rated recruits cost more and take longer. All recruits carry hidden loyalty.",
    tags: [
      { label: "INVESTMENT", type: "econ" },
      { label: "CREW BUILD", type: "safe" },
    ],
  },
  {
    code: "ACT-06",
    name: "Leverage",
    desc: "Apply pressure to a faction, contact, or another player without running a full operation. Requires FA-3+ or SO-3+. If it fails, the target knows you tried.",
    tags: [
      { label: "SOCIAL", type: "intel" },
      { label: "BLOWBACK RISK", type: "risk" },
    ],
  },
  {
    code: "ACT-07",
    name: "Surveil",
    desc: "Watch a target, faction, or player without committing. Requires NR or CT asset. Intel feeds your next round's decisions. Mutual surveillance is noted but anonymous.",
    tags: [
      { label: "RECON", type: "intel" },
      { label: "PASSIVE", type: "safe" },
    ],
  },
  {
    code: "ACT-08",
    name: "Uplink",
    desc: "Harden your defences for the round. Protocol ICE doubled. Surveil attempts return minimal intel. Leverage effectiveness reduced. Signals defensive posture to NR-4+ observers.",
    tags: [
      { label: "DEFENSIVE", type: "safe" },
      { label: "NR REQUIRED", type: "intel" },
    ],
  },
];

const tagColors: Record<string, string> = {
  risk: "border-cp-red/40 text-cp-red-bright",
  intel: "border-cp-cyan/30 text-cp-cyan",
  safe: "border-cp-green/30 text-cp-green",
  econ: "border-cp-yellow/30 text-cp-yellow",
};

export function Actions() {
  const { role } = useRole();
  const r = role ?? "default";

  return (
    <section id="actions" className="px-8 py-24 bg-cp-panel md:px-16">
      <div className="mb-2 flex items-center gap-3 font-mono text-[0.65rem] tracking-[0.3em] uppercase text-cp-red">
        <span>Section IV // Action Economy</span>
        <span className="h-px flex-1 bg-gradient-to-r from-cp-border-bright to-transparent" />
      </div>
      <h2 className="font-head text-[clamp(2.5rem,5vw,4.5rem)] font-extrabold uppercase leading-[0.95] tracking-tight mb-4">
        <span className="text-cp-red-bright">Actions</span> — Two Slots
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 items-start">
        <div>
          <p className="text-[1.05rem] leading-[1.75] text-cp-off">
            {actionIntro[r]}
          </p>
        </div>
        <div>
          <span
            className="font-head font-black text-[8rem] leading-none text-cp-red-bright inline-block"
            style={{ textShadow: "0 0 60px rgba(204,0,0,0.3)" }}
          >
            2
          </span>
          <span className="block font-mono text-[0.6rem] text-cp-mid tracking-[0.2em] font-normal -mt-2">
            ACTION SLOTS PER ROUND
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-cp-border border border-cp-border-bright">
        {actions.map((a) => (
          <div
            key={a.code}
            className="relative bg-cp-dark p-7 transition-colors hover:bg-cp-panel2 overflow-hidden group"
          >
            <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-cp-border transition-all group-hover:bg-cp-yellow group-hover:shadow-[0_0_10px_rgba(240,192,0,0.4)]" />
            <div className="font-mono text-[0.6rem] text-cp-mid tracking-[0.15em] uppercase mb-2">
              {a.code}
            </div>
            <h3 className="font-head font-extrabold text-[1.5rem] uppercase text-cp-yellow mb-3 leading-none">
              {a.name}
            </h3>
            <p className="text-[0.82rem] text-cp-off leading-[1.6] mb-4">
              {a.desc}
            </p>
            <div className="flex flex-wrap gap-1">
              {a.tags.map((tag) => (
                <span
                  key={tag.label}
                  className={`inline-block font-mono text-[0.55rem] px-2 py-0.5 border tracking-[0.08em] uppercase ${tagColors[tag.type]}`}
                >
                  {tag.label}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
