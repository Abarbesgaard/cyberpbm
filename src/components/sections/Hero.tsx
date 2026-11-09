import { Link } from "react-router-dom";

const readouts = [
  { value: "06", label: "Uger" },
  { value: "07", label: "Zoner" },
  { value: "01", label: "Evne pr. spiller" },
  { value: "06", label: "Skibssystemer" },
];


export function Hero() {
  return (
    <section id="hero" className="hull relative flex min-h-screen flex-col justify-center overflow-hidden px-5 pt-28 sm:px-8 md:px-16">
      <div className="relative grid grid-cols-1 items-center gap-10 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)]">
        <div className="bezel bezel-screws p-7 sm:p-10 [--chamfer:22px]">
          <div className="flex flex-wrap items-center gap-3">
            <span className="plate">KT // Reg. 247-319-55</span>
            <span className="lamp lamp-green" />
            <span className="lamp lamp-amber blink-slow" />
          </div>

          <h1 className="mt-7 font-head uppercase text-cp-white">
            <span className="block text-[clamp(0.85rem,1.6vw,1.15rem)] tracking-[0.6em] text-cp-yellow">USCSS</span>
            <span className="glow-amber mt-2 block text-[clamp(1.5rem,7.5vw,4rem)] lg:text-[min(4.2vw,4.4rem)] leading-[1.05] tracking-[0.04em] sm:tracking-[0.08em] text-cp-white">
              Cassandra
            </span>
          </h1>
          <div className="mt-3 font-mono text-[0.68rem] tracking-[0.28em] uppercase text-cp-mid">
            Kessler-Tanaka Corp. — Kommerciel slæber
          </div>
          <div className="mt-5 inline-flex items-stretch">
            <span className="hazard-red-sm block w-6" aria-hidden />
            <span className="border border-l-0 border-cp-red px-3 py-1 font-mono text-[0.7rem] tracking-[0.3em] uppercase text-cp-red-bright">
              Social deduction // v0.21
            </span>
          </div>

          <p className="mt-7 max-w-[560px] text-[1.05rem] leading-relaxed text-cp-off">
            Kapslen åbner for tidligt. Skibsuret viser 19 måneder fra Jorden.
            Lyset i korridoren blinker, og kapslen ved siden af din står allerede tom.
            ORACLE svarer ikke på hvorfor.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              to="/rules"
              className="padding-orange chamfer inline-flex items-center px-7 py-3.5 font-mono text-[0.72rem] tracking-[0.2em] uppercase text-[#FFF3E6] no-underline transition-[filter] hover:brightness-110 [--chamfer:8px]"
            >
              Læs reglerne
            </Link>
            <a
              href="#tribunal"
              className="key inline-flex items-center px-7 py-3.5 font-mono text-[0.72rem] tracking-[0.2em] uppercase text-cp-off no-underline [--chamfer:8px]"
            >
              Tribunalet
            </a>
          </div>
        </div>

        <div className="console p-5 sm:p-6 [--chamfer:22px]">
          <div className="mb-3 flex items-center justify-between gap-3">
            <span className="plate">Status // ORACLE</span>
            <span className="flex gap-2" aria-hidden><span className="lamp lamp-green" /><span className="lamp lamp-amber blink-slow" /></span>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {readouts.map((r) => (
              <div key={r.label} className="crt m-[10px] px-4 py-4">
                <div className="font-crt text-[3rem] leading-none text-cp-cyan">{r.value}</div>
                <div className="mt-1 font-mono text-[0.55rem] tracking-[0.12em] uppercase text-cp-mid">{r.label}</div>
              </div>
            ))}
          </div>

          <div className="mt-4 grid grid-cols-6 gap-2" aria-hidden>
            {["#C4682C", "#D3D1C9", "#D3D1C9", "#3E3F39", "#D3D1C9", "#A8321E"].map((c, i) => (
              <span key={i} className="key h-6" style={{ background: c }} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
