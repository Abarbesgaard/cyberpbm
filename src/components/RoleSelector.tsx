import { useRole, type Role } from "@/context/RoleContext";

const options: { value: Role; label: string; sub: string }[] = [
  { value: "player", label: "PLAYER", sub: "I run a crew" },
  { value: "gm", label: "GAME MASTER", sub: "I AM Nightcity" },
];

export function RoleSelector() {
  const { role, setRole } = useRole();

  return (
    <section className="relative border-t border-cp-border px-8 py-16 md:px-16">
      <div className="mx-auto max-w-4xl text-center">
        <p className="mb-3 font-mono text-[0.65rem] tracking-[0.3em] uppercase text-cp-yellow">
          // Choose Your Side
        </p>
        <h2
          className="mb-3 font-head text-[clamp(1.6rem,3.5vw,2.5rem)] font-black leading-[0.95] uppercase text-foreground"
          style={{ textShadow: "0 0 30px rgba(204,0,0,0.3)" }}
        >
          Wake Up <span className="text-cp-red-bright">Choomba</span>
        </h2>
        <p className="mx-auto mb-10 max-w-md text-[0.95rem] leading-relaxed text-cp-mid">
          The following sections will adapt to your choice.
        </p>

        <div className="flex justify-center gap-4">
          {options.map((o) => {
            const active = role === o.value;
            return (
              <button
                key={o.value}
                onClick={() => setRole(o.value)}
                className={`group relative min-w-[180px] border px-6 py-5 text-left font-mono transition-all duration-200
                  ${
                    active
                      ? "border-cp-yellow bg-cp-yellow/[0.08] text-cp-yellow"
                      : "border-cp-border bg-cp-dark/60 text-cp-mid hover:border-cp-border-bright hover:text-cp-off"
                  }`}
                style={{
                  clipPath:
                    "polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))",
                }}
              >
                <span className="block text-[1.1rem] font-head font-extrabold tracking-[0.12em] uppercase">
                  {o.label}
                </span>
                <span className="block mt-1 text-[0.75rem] opacity-60">
                  {o.sub}
                </span>
                {active && (
                  <span className="absolute top-2 right-3 text-[0.6rem] text-cp-yellow tracking-widest">
                    ▶ ACTIVE
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
