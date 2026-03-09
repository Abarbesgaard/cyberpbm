import { useRole } from "@/context/RoleContext";

const paragraphs = {
  player: [
    "The game is played via mails or in strictly governed chat fora. This means that this game will be at a quite slow pace. You will never have all the information you need to make the best decision — but if you align with other players, hack into the right servers, or blow up the right building, you just might get ahead of the competition to rule Night City.",
    "This game revolves around the operation grid. You will be submitting this each round to your gamemaster, and then wait to see how the world responds to your actions. The Grid is explained in detail in its dedicated section.",
    "The GM acts as the city — breathing life into it and making it believable. Your job is to read the world, place your bets, and live with the consequences.",
  ],
  gm: [
    "The game is played via mails or in strictly governed chat fora. This means that this game will be at a quite slow pace. Players operate under incomplete information — they see what you choose to reveal, and no more. Your job is to make the scares information feel alive.",
    "The core mechanic is the Operation Grid Matrix. Players submit theirs each round by submitting I mean that they would be sending you the grid via mail or in the chat forum; you build the opposition grid in secret. The collision between the two produces the story. The Grid is explained in detail in its dedicated section.",
    "You are the city. You design missions, seed complications, manage factions, and track heat. There are tables to roll on, but the real craft is in knowing when to let the dice decide and when the city simply acts.",
  ],
  default: [
    "The game is played via mails or in strictly governed chat fora. The idea is to make a world where you don't have all the information you need to make the best decision, but if you align yourself with other players, hack into the right servers, or blow up the right building you just might get ahead of the competition to rule Night City!",
    "This game revolves around the operation grid. Players submit this each round to the gamemaster, and then wait to see how the world responds. The Grid is explained in detail in its dedicated section.",
    "The GM acts as the city, making sure to breathe life into this world and make it believable. But don't worry — there are of course LOTS of tables to roll on!",
  ],
};

export function DesignPhilosophy() {
  const { role } = useRole();
  const r = role ?? "default";

  return (
    <section
      id="design-philosophy"
      className="reveal-section relative border-t border-cp-border px-8 py-24 md:px-16"
    >
      <div className="mx-auto max-w-4xl">
        <p className="mb-3 font-mono text-[0.65rem] tracking-[0.3em] uppercase text-cp-cyan">
          // Section I
        </p>
        <h2
          className="mb-10 font-head text-[clamp(2rem,5vw,3.5rem)] font-black leading-[0.95] uppercase text-foreground"
          style={{ textShadow: "0 0 30px rgba(204,0,0,0.3)" }}
        >
          Design Philosophy
        </h2>

        <div className="space-y-6">
          {paragraphs[r].map((p, i) => (
            <p
              key={i}
              className="text-[1.05rem] leading-[1.8] text-cp-off"
            >
              {p}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
