import { useRole } from "@/context/RoleContext";

const intro = {
  player: (
    <>
      All communication in the game flows through two types of channels you see below.
      Understanding what goes where is key — leak the wrong thing on the wrong
      channel and you might find a rival crew waiting at your extraction point. 
      But making this clear is the role of the GM.
    </>
  ),
  gm: (
    <>
      You control the flow of information through two channel types. The public
      channel is your broadcast tool — missions, world events, faction moves.
      Private channels can be used to deliver personal intel,
      negotiate deals, or reveal information that only the two parties should know about.
      You are <strong>REQUIRED</strong> to setup a private channel for each player you want to communicate with and a public channel for each player.
    </>
  ),
  default: (
    <>
      All communication in the game flows through two types of channels. What
      gets shared publicly and what stays private is a core tension in every
      round.
    </>
  ),
};

const channels = [
  {
    name: "Public Channel",
    tag: "// Open Broadcast",
    color: "cp-cyan",
    description: {
      player:
        "The main feed every Player monitors. This is where your GM posts mission briefs, news, faction movements, and any public declarations. Everyone sees everything here.",
      gm: "Your primary broadcast tool. Post mission briefs, city events, faction activity, and anything you want every player to see. Use it to set the tone for each round and seed information that drives player decision-making. Ypu'll be able to Roll on a table to see what events happens",
      default:
        "The shared feed visible to all players. The GM uses it to post mission briefs, world events, and public information. Everything on this channel is common knowledge.",
    },
  },
  {
    name: "Private Channel",
    tag: "// Encrypted Line",
    color: "cp-red-bright",
    description: {
      player:
        "A secure line between you and the GM — no one else can see it. Use it to ask questions, report secret actions, or receive intel meant only for your eyes. What you share here stays between you and the GM.",
      gm: "A one-on-one encrypted line between you and a single player. Use these to deliver private intel, respond to secret actions, reveal consequences only they should know about. Important, you can write freely on this channel, but when you use the protocol action another channnel will have to be made for this purpose.",
      default:
        "A direct, encrypted line between the GM and a single player. No other crew can see what's said here. It's used for secret actions, private intel, and one-on-one negotiations.",
    },
  },
];

export function Channels() {
  const { role } = useRole();
  const r = role ?? "default";

  return (
    <section
      id="channels"
      className="reveal-section relative border-t border-cp-border px-8 py-24 md:px-16"
    >
      <div className="mx-auto max-w-4xl">
        <p className="mb-3 font-mono text-[0.65rem] tracking-[0.3em] uppercase text-cp-cyan">
          // Comms
        </p>
        <h2
          className="mb-4 font-head text-[clamp(2rem,5vw,3.5rem)] font-black leading-[0.95] uppercase text-foreground"
          style={{ textShadow: "0 0 30px rgba(204,0,0,0.3)" }}
        >
          Channels
        </h2>
        <p className="max-w-[680px] text-[1.05rem] leading-[1.75] text-cp-off mb-12">
          {intro[r]}
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          {channels.map((ch) => (
            <div
              key={ch.name}
              className="border border-cp-border bg-black/40 p-6"
            >
              <p
                className={`mb-3 font-mono text-[0.65rem] tracking-[0.3em] uppercase text-${ch.color}`}
              >
                {ch.tag}
              </p>
              <h3
                className={`font-head font-extrabold text-[1.35rem] uppercase tracking-wide text-${ch.color} mb-3`}
              >
                {ch.name}
              </h3>
              <p className="text-[0.95rem] leading-[1.75] text-cp-off">
                {ch.description[r]}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
