import { useRole, type Role } from "@/context/RoleContext";

const options: { value: Role; label: string; sub: string }[] = [
  { value: "player", label: "Besætning", sub: "Jeg spiller" },
  { value: "gm", label: "ORACLE", sub: "Jeg er skibets AI (spilleder)" },
];

const boot = [
  "ORACLE 2.1.7 // INTERFACE 2037",
  "KESSLER-TANAKA PROPRIETARY",
  "-------------------------------",
  "> HYPERSØVN ....... AFBRUDT",
  "> BESÆTNING ....... VÅGEN",
  "> LIVSSTØTTE ...... NOMINEL",
  "> SYSTEMER ........ 3/5",
  "> SÆRORDRE ........ ████████",
  "> MENNESKER ....... UKENDT",
  "-------------------------------",
];

const keys = ["#C4682C", "#D3D1C9", "#D3D1C9", "#3E3F39", "#D3D1C9", "#A8321E"];

export function RoleSelector() {
  const { role, setRole } = useRole();

  return (
    <section className="hull-alt relative px-5 py-16 sm:px-8 md:px-16">
      <div className="console mx-auto grid max-w-[1100px] grid-cols-1 gap-8 p-5 sm:p-7 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] [--chamfer:22px]">
        <div>
          <div className="mb-3 flex items-center justify-between">
            <span className="plate">ORACLE // Terminal 04</span>
            <span className="flex gap-2" aria-hidden><span className="lamp lamp-green" /><span className="lamp lamp-red blink-slow" /></span>
          </div>
          <div className="crt m-[10px] p-5 text-[0.9rem] leading-[1.35] sm:p-6 sm:text-[1.15rem]" aria-label="ORACLE terminal">
            {boot.map((line, i) => (
              <div key={i} className="boot-line whitespace-pre" style={{ animationDelay: `${i * 0.18}s` }}>
                {line}
              </div>
            ))}
            <div className="boot-line mt-2" style={{ animationDelay: `${boot.length * 0.18}s` }}>
              &gt; IDENTIFIKATION PÅKRÆVET<span className="blink">█</span>
            </div>
          </div>
          <div className="mt-4 grid grid-cols-6 gap-2" aria-hidden>
            {keys.map((c, i) => (
              <span key={i} className="key h-6" style={{ background: c }} />
            ))}
          </div>
        </div>

        <div className="flex flex-col justify-center">
          <span className="plate self-start">Identifikation påkrævet</span>
          <h2 className="glow-amber mt-5 mb-3 font-head text-[clamp(1.2rem,2.5vw,1.7rem)] uppercase tracking-[0.12em] text-cp-white">
            Angiv din funktion
          </h2>
          <p className="mb-8 max-w-md text-[0.95rem] leading-relaxed text-cp-off">
            De følgende sektioner tilpasser sig dit valg.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row lg:flex-col xl:flex-row">
            {options.map((o) => {
              const active = role === o.value;
              return (
                <button
                  key={o.value}
                  onClick={() => setRole(o.value)}
                  aria-pressed={active}
                  className={`key relative flex-1 cursor-pointer px-6 py-5 text-left ${
                    active ? "text-cp-yellow translate-y-[2px] !shadow-[inset_0_2px_6px_rgba(0,0,0,0.25),0_1px_0_#8E8C84]" : "text-cp-off"
                  }`}
                >
                  <span className={`lamp absolute top-4 right-4 ${active ? "lamp-amber" : "lamp-off"}`} />
                  <span className="block font-head text-[0.95rem] tracking-[0.15em] uppercase">{o.label}</span>
                  <span className="mt-1 block font-mono text-[0.7rem] opacity-70">{o.sub}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
