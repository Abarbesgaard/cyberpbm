import { useRole } from "@/context/RoleContext";

const missionBrief = {
  name: "Operation: Cold Steal",
  client: "Zero Render — Fixer",
  target: "Arasaka Industrial Storage, Watson district",
  objective: "Extract the Relic prototype before Arasaka moves it off-site at dawn",
  complications: [
    "Facility has 3 layers of Arasaka ICE on the internal net",
    "Two-man roving patrol on a 4-minute cycle",
    "Vault uses biometric + keycard — need both to open",
    "Arasaka Quick-Response team staged 6 blocks away — 8 minutes once alarm trips",
  ],
  payout: "€$50,000 split + first crack at whatever data is on the chip",
};

const intro = {
  player: (
    <>
      The City never sleeps. Each round the GM will be presenting missions and
      the state of the city. These missions are made available to all players
      through the public channel — the main feed that every crew is connected
      to. Your aim is to choose the best mission for your crew. But be careful
      not to overcommit yourself; every other player is doing the same, and some
      may see you as a threat. Here's an example of a mission brief.
    </>
  ),
  gm: (
    <>
      Each round you publish missions to the public channel — the shared feed
      every crew monitors. A good mission has a clear objective, meaningful
      complications, and a payout that tempts players into risk. You control the
      difficulty by tuning the opposition grid and the complications you seed.
      Here's an example of how a mission brief looks when it reaches the
      players.
    </>
  ),
  default: (
    <>
      The City never sleeps. Each round the GM presents missions and the state
      of the city. These missions are made available to all players through the
      public channel. Players choose the best mission for their crew — but every
      other player is doing the same. Here's an example of a mission brief.
    </>
  ),
};

const outro = {
  player:
    "With the mission briefed and your crew assessed, the next step is filling out the Operation Grid Matrix — deciding who does what, in which phase, and through which mode of force. That's where the game lives.",
  gm:
    "Once players receive this brief, they'll build their OGM in secret. Meanwhile, you build the opposition grid — placing Arasaka's defences across the same phases and columns. The collision between the two grids is where the drama happens.",
  default:
    "With the mission briefed and the crew known, the next step is filling out the Operation Grid Matrix — deciding who does what, in which phase, and through which mode of force. That's where the game lives.",
};

export function Mission() {
  const { role } = useRole();
  const r = role ?? "default";

  return (
    <section
      id="mission"
      className="reveal-section relative border-t border-cp-border px-8 py-24 md:px-16"
    >
      <div className="mx-auto max-w-4xl">
        <p className="mb-3 font-mono text-[0.65rem] tracking-[0.3em] uppercase text-cp-cyan">
          // The Job
        </p>
        <h2
          className="mb-4 font-head text-[clamp(2rem,5vw,3.5rem)] font-black leading-[0.95] uppercase text-foreground"
          style={{ textShadow: "0 0 30px rgba(204,0,0,0.3)" }}
        >
          Mission <span className="text-cp-red-bright">Briefing</span>
        </h2>
        <p className="max-w-[680px] text-[1.05rem] leading-[1.75] text-cp-off mb-12">
          {intro[r]}
        </p>

        {/* Mission brief */}
        <div className="mb-14 border border-cp-border bg-black/40 p-6 md:p-8">
          <div className="flex items-center gap-3 mb-5 font-mono text-[0.65rem] tracking-[0.3em] uppercase text-cp-yellow">
            <span>Mission File</span>
            <span className="h-px flex-1 bg-gradient-to-r from-cp-yellow/40 to-transparent" />
          </div>

          <h3 className="font-head font-extrabold text-[1.5rem] uppercase tracking-wide text-cp-yellow mb-1">
            {missionBrief.name}
          </h3>
          <p className="font-mono text-[0.8rem] text-cp-mid mb-6">
            Client: {missionBrief.client}
          </p>

          <div className="grid gap-4 md:grid-cols-2 mb-6">
            <div>
              <span className="block font-mono text-[0.65rem] tracking-[0.2em] uppercase text-cp-cyan mb-1">
                Target
              </span>
              <p className="text-[0.95rem] text-cp-off">
                {missionBrief.target}
              </p>
            </div>
            <div>
              <span className="block font-mono text-[0.65rem] tracking-[0.2em] uppercase text-cp-cyan mb-1">
                Objective
              </span>
              <p className="text-[0.95rem] text-cp-off">
                {missionBrief.objective}
              </p>
            </div>
          </div>

          <div className="mb-5">
            <span className="block font-mono text-[0.65rem] tracking-[0.2em] uppercase text-cp-red mb-2">
              Known Complications
            </span>
            <ul className="space-y-1.5">
              {missionBrief.complications.map((c) => (
                <li
                  key={c}
                  className="flex items-start gap-2 text-[0.9rem] text-cp-off"
                >
                  <span className="text-cp-red-bright mt-0.5 shrink-0">▸</span>
                  {c}
                </li>
              ))}
            </ul>
          </div>

          <div className="border-t border-cp-border pt-4">
            <span className="block font-mono text-[0.65rem] tracking-[0.2em] uppercase text-cp-green mb-1">
              Payout
            </span>
            <p className="text-[0.95rem] text-cp-off">{missionBrief.payout}</p>
          </div>
        </div>

        <p className="mt-10 text-cp-mid font-mono text-[0.8rem] border-l-2 border-cp-yellow/40 pl-4 leading-relaxed">
          {outro[r]}
        </p>
      </div>
    </section>
  );
}
