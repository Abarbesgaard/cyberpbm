import { useRole, type Role } from "@/context/RoleContext";

const options: { value: Role; label: string; sub: string }[] = [
  { value: "player", label: "Besætning", sub: "Jeg spiller" },
  { value: "gm", label: "ORACLE", sub: "Jeg er skibets AI (spilleder)" },
];

export function RoleSelector() {
  const { role, setRole } = useRole();

  return (
    <section className="relative border-t border-cp-border bg-cp-panel px-8 py-16 md:px-16">
      <div className="mx-auto max-w-4xl text-center">
        <p className="mb-3 font-mono text-[0.65rem] tracking-[0.3em] uppercase text-cp-yellow">
          Identifikation påkrævet
        </p>
        <h2 className="mb-3 font-head text-[clamp(1.2rem,2.5vw,1.8rem)] uppercase tracking-[0.12em] text-cp-white">
          Angiv din funktion
        </h2>
        <p className="mx-auto mb-10 max-w-md text-[0.95rem] leading-relaxed text-cp-mid">
          De følgende sektioner tilpasser sig dit valg.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          {options.map((o) => {
            const active = role === o.value;
            return (
              <button
                key={o.value}
                onClick={() => setRole(o.value)}
                aria-pressed={active}
                className={`bezel relative min-w-[220px] cursor-pointer px-6 py-5 text-left transition-colors ${
                  active ? "text-cp-yellow" : "text-cp-mid hover:text-cp-off"
                }`}
              >
                <span
                  className={`absolute top-4 right-4 block h-2.5 w-2.5 rounded-full border ${
                    active
                      ? "border-cp-yellow bg-cp-yellow shadow-[0_0_10px_var(--cp-yellow)]"
                      : "border-cp-border-bright bg-cp-dark"
                  }`}
                />
                <span className="block font-head text-[0.95rem] tracking-[0.15em] uppercase">
                  {o.label}
                </span>
                <span className="mt-1 block font-mono text-[0.7rem] opacity-70">{o.sub}</span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
