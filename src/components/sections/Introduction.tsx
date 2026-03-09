import { useRole } from "@/context/RoleContext";

const body = {
  player:
    "Welcome, operator. This manual contains everything you need to build a crew, plan operations, and survive Night City's play-by-mail underworld. Read it carefully — the rules won't repeat themselves, and neither will the city.",
  gm:
    "Welcome to the game. The following sections will provide you with enough information to get you started. This manual is your operating guide for running CyberPBM — designing missions, building opposition grids, managing heat, and keeping the world alive between rounds.",
  default:
    "This manual covers the core rules of CyberPBM — a play-by-mail tabletop game set in Night City. Whether you're running a crew or running the world, everything you need is in the sections that follow.",
};

export function Introduction() {
  const { role } = useRole();
  const r = role ?? "default";

  return (
    <section
      id="introduction"
      className="reveal-section relative border-t border-cp-border px-8 py-24 md:px-16"
    >
      <div className="mx-auto max-w-4xl">
        <p className="mb-3 font-mono text-[0.65rem] tracking-[0.3em] uppercase text-cp-cyan">
          // Introduction
        </p>
        <h2
          className="mb-10 font-head text-[clamp(2rem,5vw,3.5rem)] font-black leading-[0.95] uppercase text-foreground"
          style={{ textShadow: "0 0 30px rgba(204,0,0,0.3)" }}
        >
          Welcome to Nightcity
        </h2>

        <p className="text-lg leading-relaxed text-cp-off">
          {body[r]}
        </p>
      </div>
    </section>
  );
}
