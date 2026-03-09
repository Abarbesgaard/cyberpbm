export function NightCity() {
  return (
    <section
      id="night-city"
      className="reveal-section relative border-t border-cp-border px-8 py-24 md:px-16"
    >
      <div className="mx-auto max-w-4xl">
        <p className="mb-3 font-mono text-[0.65rem] tracking-[0.3em] uppercase text-cp-cyan">
          // The Setting
        </p>
        <h2
          className="mb-10 font-head text-[clamp(2rem,5vw,3.5rem)] font-black leading-[0.95] uppercase text-foreground"
          style={{ textShadow: "0 0 30px rgba(204,0,0,0.3)" }}
        >
          Night <span className="text-cp-red-bright">City</span>
        </h2>

        <p className="text-lg leading-relaxed text-cp-off italic">
          This section is coming soon.
        </p>
      </div>
    </section>
  );
}
