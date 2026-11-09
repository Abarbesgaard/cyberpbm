import { Link } from "react-router-dom";
import { Corridor } from "@/components/Corridor";

const readouts = [
  { value: "06", label: "Uger" },
  { value: "07", label: "Zoner" },
  { value: "01", label: "Evne pr. spiller" },
  { value: "02", label: "Hænder pr. pågribelse" },
];


export function Hero() {
  return (
    <section id="hero" className="relative flex min-h-screen flex-col justify-center overflow-hidden px-5 pt-28 pb-16 sm:px-8 md:px-16">
      <Corridor className="absolute inset-y-0 left-0 h-full w-full xl:w-[130%]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(26,26,22,0.35),transparent_45%)]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-[linear-gradient(to_top,var(--cp-dark),transparent)]" />

      <div className="relative grid grid-cols-1 items-center gap-10 xl:grid-cols-[560px_1fr]">
        <div className="bezel bezel-screws max-w-[640px] p-7 shadow-[0_30px_60px_rgba(0,0,0,0.35)] sm:p-10 [--chamfer:22px]">
          <div className="flex flex-wrap items-center gap-3">
            <span className="plate">KT // Reg. 247-319-55</span>
            <span className="lamp lamp-green" />
            <span className="lamp lamp-amber blink-slow" />
          </div>

          <h1 className="mt-7 font-head uppercase text-cp-white">
            <span className="block text-[clamp(0.85rem,1.6vw,1.15rem)] tracking-[0.6em] text-cp-yellow">USCSS</span>
            <span className="glow-amber mt-2 block text-[clamp(1.5rem,7.5vw,3rem)] leading-[1.05] tracking-[0.04em] sm:tracking-[0.08em] text-cp-white">
              Cassandra
            </span>
          </h1>
          <div className="mt-3 font-mono text-[0.68rem] tracking-[0.28em] uppercase text-cp-mid">
            Kessler-Tanaka Corp. — Kommerciel slæber
          </div>
          <div className="mt-5 inline-flex items-stretch">
            <span className="hazard-red-sm block w-6" aria-hidden />
            <span className="border border-l-0 border-cp-red px-3 py-1 font-mono text-[0.7rem] tracking-[0.3em] uppercase text-cp-red-bright">
              Hunt Protocol v0.7
            </span>
          </div>

          <p className="mt-7 max-w-[560px] text-[1.05rem] leading-relaxed text-cp-off">
            I er vækket før tid, 19 måneder fra Jorden. ORACLE melder uregelmæssigheder.
            Én af jer bløder hvidt. At vide hvem er ikke nok — I skal finde dem på skibet.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4 xl:grid-cols-2">
            {readouts.map((r) => (
              <div key={r.label} className="crt m-[10px] px-3 py-3">
                <div className="font-crt text-[2.2rem] leading-none text-cp-cyan">{r.value}</div>
                <div className="mt-1 font-mono text-[0.55rem] tracking-[0.12em] uppercase text-cp-mid">{r.label}</div>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              to="/rules"
              className="padding-orange chamfer inline-flex items-center px-7 py-3.5 font-mono text-[0.72rem] tracking-[0.2em] uppercase text-[#FFF3E6] no-underline transition-[filter] hover:brightness-110 [--chamfer:8px]"
            >
              Læs reglerne
            </Link>
            <a
              href="#hunt"
              className="key inline-flex items-center px-7 py-3.5 font-mono text-[0.72rem] tracking-[0.2em] uppercase text-cp-off no-underline [--chamfer:8px]"
            >
              Jagten
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
