import { Link } from "react-router-dom";

const stats = [
  { value: "6", label: "Uger" },
  { value: "7", label: "Zoner" },
  { value: "1", label: "Evne pr. spiller" },
  { value: "2", label: "Hænder til en pågribelse" },
];

const clip =
  "polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col justify-center overflow-hidden px-8 pt-28 pb-16 md:px-16"
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(125,255,160,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(125,255,160,0.05) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          animation: "gridScroll 20s linear infinite",
        }}
      />
      <div className="pointer-events-none absolute inset-0 scanlines" />

      <div className="relative z-10 mb-6 flex items-center gap-4 font-mono text-[0.7rem] tracking-[0.25em] uppercase text-cp-yellow">
        <span className="block h-px w-10 bg-cp-yellow" />
        <span>Kessler-Tanaka Corp.</span>
        <span>// Kommerciel slæber</span>
        <span className="blink">_</span>
      </div>

      <h1 className="relative z-10 max-w-[1000px] font-head font-black uppercase leading-[0.9] tracking-tight text-foreground text-[clamp(3.5rem,9vw,8rem)]">
        <span className="block text-[0.35em] tracking-[0.4em] text-cp-mid">USCSS</span>
        <span
          className="block text-cp-yellow"
          style={{ textShadow: "0 0 40px rgba(125,255,160,0.35)" }}
        >
          CASSANDRA
        </span>
        <span
          className="block text-[0.45em] text-cp-red-bright"
          style={{ textShadow: "0 0 30px rgba(255,59,48,0.4)" }}
        >
          Hunt Protocol v0.6
        </span>
      </h1>

      <p className="relative z-10 mt-8 max-w-[600px] border-l-[3px] border-cp-red pl-5 text-[1.1rem] leading-relaxed text-cp-off">
        I er vågnet for tidligt. ORACLE melder uregelmæssigheder.
        <br />
        Én af jer bløder hvidt.
        <br />
        At vide hvem er ikke nok. I skal finde dem på skibet.
      </p>

      <div className="relative z-10 mt-12 flex flex-wrap gap-12">
        {stats.map((s) => (
          <div key={s.label} className="flex flex-col gap-1">
            <span className="font-head text-[2.5rem] font-black leading-none text-cp-yellow">
              {s.value}
            </span>
            <span className="font-mono text-[0.6rem] tracking-[0.15em] uppercase text-cp-mid">
              {s.label}
            </span>
          </div>
        ))}
      </div>

      <div className="relative z-10 mt-12 flex flex-wrap gap-4">
        <Link
          to="/rules"
          className="inline-flex items-center px-8 py-4 font-mono text-[0.7rem] tracking-[0.15em] uppercase bg-cp-yellow text-cp-dark no-underline transition-all hover:shadow-[0_0_30px_rgba(125,255,160,0.4)]"
          style={{ clipPath: clip }}
        >
          Læs reglerne
        </Link>
        <a
          href="#hunt"
          className="inline-flex items-center px-8 py-4 font-mono text-[0.7rem] tracking-[0.15em] uppercase border border-cp-red text-cp-red-bright no-underline transition-all hover:bg-cp-red/10"
          style={{ clipPath: clip }}
        >
          Jagten
        </a>
      </div>
    </section>
  );
}
