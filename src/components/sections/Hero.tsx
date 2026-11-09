import { Link } from "react-router-dom";

const readouts = [
  { value: "06", label: "Uger" },
  { value: "07", label: "Zoner" },
  { value: "01", label: "Evne pr. spiller" },
  { value: "02", label: "Hænder pr. pågribelse" },
];

const boot = [
  "ORACLE 2.1.7 // INTERFACE 2037",
  "KESSLER-TANAKA PROPRIETARY",
  "-------------------------------",
  "> HYPERSØVN ....... AFBRUDT",
  "> BESÆTNING ....... VÅGEN",
  "> LIVSSTØTTE ...... NOMINEL",
  "> INTEGRITET ...... 4/4",
  "> SÆRORDRE ........ ████████",
  "> MENNESKER ....... UKENDT",
  "-------------------------------",
];

export function Hero() {
  return (
    <section id="hero" className="relative flex min-h-screen flex-col justify-center overflow-hidden px-8 pt-28 pb-16 md:px-16">
      <div className="grid grid-cols-1 items-center gap-14 xl:grid-cols-[minmax(0,1fr)_420px]">
        <div>
          <div className="mb-8 font-mono text-[0.7rem] tracking-[0.3em] uppercase text-cp-mid">
            Kessler-Tanaka Corp. — Kommerciel slæber — Reg. 247-319-55
          </div>

          <h1 className="font-head uppercase text-cp-white">
            <span className="block text-[clamp(0.9rem,1.6vw,1.2rem)] tracking-[0.6em] text-cp-off">USCSS</span>
            <span className="glow-amber mt-2 block text-[clamp(1.5rem,7.5vw,5.5rem)] xl:text-[min(4.6vw,5rem)] leading-[1.05] tracking-[0.04em] sm:tracking-[0.12em] text-cp-yellow">
              Cassandra
            </span>
          </h1>
          <div className="mt-4 inline-block border border-cp-red px-3 py-1 font-mono text-[0.7rem] tracking-[0.3em] uppercase text-cp-red-bright">
            Hunt Protocol v0.7
          </div>

          <p className="mt-8 max-w-[560px] text-[1.08rem] leading-relaxed text-cp-off">
            I er vækket før tid, 19 måneder fra Jorden. ORACLE melder uregelmæssigheder.
            Én af jer bløder hvidt. At vide hvem er ikke nok — I skal finde dem på skibet.
          </p>

          <div className="mt-10 grid max-w-[560px] grid-cols-2 gap-3 sm:grid-cols-4">
            {readouts.map((r) => (
              <div key={r.label} className="bezel px-3 py-3">
                <div className="font-crt text-[2.2rem] leading-none text-cp-cyan [text-shadow:0_0_8px_rgba(124,242,154,0.5)]">
                  {r.value}
                </div>
                <div className="mt-1 font-mono text-[0.55rem] tracking-[0.12em] uppercase text-cp-mid">
                  {r.label}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              to="/rules"
              className="inline-flex items-center bg-cp-yellow px-7 py-3.5 font-mono text-[0.72rem] tracking-[0.2em] uppercase text-cp-dark no-underline transition-colors hover:bg-cp-white"
            >
              Læs reglerne
            </Link>
            <a
              href="#hunt"
              className="inline-flex items-center border border-cp-border-bright px-7 py-3.5 font-mono text-[0.72rem] tracking-[0.2em] uppercase text-cp-off no-underline transition-colors hover:border-cp-yellow hover:text-cp-yellow"
            >
              Jagten
            </a>
          </div>
        </div>

        <div className="crt p-6 text-[0.95rem] leading-[1.35] sm:text-[1.2rem] md:p-8" aria-label="ORACLE terminal">
          {boot.map((line, i) => (
            <div key={i} className="boot-line whitespace-pre" style={{ animationDelay: `${i * 0.18}s` }}>
              {line}
            </div>
          ))}
          <div className="boot-line mt-2" style={{ animationDelay: `${boot.length * 0.18}s` }}>
            &gt; ÉN AF JER ER IKKE MENNESKE<span className="blink">█</span>
          </div>
        </div>
      </div>
    </section>
  );
}
