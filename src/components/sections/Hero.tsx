import { GlitchText } from "@/components/ui/glitch-text";

const stats = [
  { value: "2", label: "Action Slots / Round" },
  { value: "8", label: "Available Actions" },
  { value: "Infinite", label: "Possible Outcomes" },
];

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col justify-center overflow-hidden px-8 pt-28 pb-16 md:px-16"
    >
      {/* Animated grid bg */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(204,0,0,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(204,0,0,0.07) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          animation: "gridScroll 20s linear infinite",
        }}
      />

      {/* Diagonal red accent */}
      <div
        className="pointer-events-none absolute top-[-10%] right-[-5%] h-[120%] w-[45%]"
        style={{
          background:
            "linear-gradient(135deg, transparent 45%, rgba(204,0,0,0.04) 45%)",
        }}
      />

      {/* Eyebrow */}
      <div className="relative z-10 mb-6 flex items-center gap-4 font-mono text-[0.7rem] tracking-[0.25em] uppercase text-cp-yellow">
        <span className="block h-px w-10 bg-cp-yellow" />
        <span>Cyber</span>
        <span>// Play-By-Email</span>
      </div>

      {/* Title */}
      <h1 className="relative z-10 max-w-[900px] font-head font-black text-foreground leading-[0.9] tracking-tight uppercase text-[clamp(4rem,10vw,8.5rem)]">
        <GlitchText
          words={["OPERATIONS", "OP3R4T10NS", "0P_RATIONS", "OPERATIONS"]}
          interval={4000}
          glitchDuration={400}
          className="block font-head font-black text-cp-red-bright text-[clamp(4rem,10vw,8.5rem)] leading-[0.9] tracking-tight uppercase"
          style={{
            textShadow:
              "0 0 40px rgba(204,0,0,0.5), 0 0 80px rgba(204,0,0,0.2)",
          }}
        />
        <span className="block">MANUAL</span>
        <span
          className="block text-cp-yellow"
          style={{ textShadow: "0 0 40px rgba(240,192,0,0.4)" }}
        >
          v1.0
        </span>
      </h1>

      {/* Subtitle */}
      <p className="relative z-10 mt-8 max-w-[560px] border-l-[3px] border-cp-red pl-5 text-[1.1rem] font-normal leading-[1.7] text-cp-off">
        A Play by Mail game.
        <br />
        Set in the universe of Cyberpunk 2077.
      </p>

      {/* Stats */}
      <div className="relative z-10 mt-12 flex flex-wrap gap-12">
        {stats.map((s) => (
          <div key={s.label} className="flex flex-col gap-1">
            <span
              className="font-head font-black text-[2.5rem] leading-none text-cp-yellow"
              style={{ textShadow: "0 0 20px rgba(240,192,0,0.3)" }}
            >
              {s.value}
            </span>
            <span className="font-mono text-[0.6rem] tracking-[0.15em] uppercase text-cp-mid">
              {s.label}
            </span>
          </div>
        ))}
      </div>

      {/* CTA Buttons */}
      <div className="relative z-10 mt-12 flex gap-4">
        <a
          href="#grid-section"
          className="inline-flex items-center justify-center font-mono text-[0.7rem] tracking-[0.15em] uppercase px-8 py-4 bg-cp-red text-cp-white no-underline hover:bg-cp-red-bright hover:shadow-[0_0_30px_rgba(204,0,0,0.5)] transition-all cursor-pointer"
          style={{
            clipPath:
              "polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))",
          }}
        >
          Read the Rules (soon link to pdf)
        </a>
        <a
          href="#orders"
          className="inline-flex items-center justify-center font-mono text-[0.7rem] tracking-[0.15em] uppercase px-8 py-4 bg-transparent text-cp-yellow border border-cp-yellow-dim no-underline hover:bg-cp-yellow/[0.08] hover:border-cp-yellow transition-all cursor-pointer"
          style={{
            clipPath:
              "polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))",
          }}
        >
          Get the Order Sheet (Coming Soon)
        </a>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-8 z-10 flex items-center gap-3 font-mono text-[0.6rem] tracking-[0.1em] uppercase text-cp-mid md:left-16">
        <span className="relative block h-px w-10 overflow-hidden bg-cp-mid">
          <span
            className="absolute top-0 left-[-100%] h-full w-full bg-cp-yellow"
            style={{ animation: "scrollPulse 2s ease-in-out infinite" }}
          />
        </span>
        <span>Scroll to begin</span>
      </div>
    </section>
  );
}