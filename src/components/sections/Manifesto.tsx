export function Manifesto() {
  return (
    <section
      id="manifesto"
      className="relative overflow-hidden min-h-[60vh] flex items-center bg-cp-dark"
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 20% 50%, rgba(204,0,0,0.08) 0%, transparent 60%), radial-gradient(ellipse at 80% 50%, rgba(240,192,0,0.05) 0%, transparent 60%)",
        }}
      />

      <div className="relative px-8 py-24 max-w-[800px] md:px-16">
        <p className="font-head font-bold italic text-[clamp(1.8rem,4vw,3rem)] leading-[1.2] text-cp-white mb-8 border-l-4 border-cp-red pl-8">
          "Night City does not care about your plan.
          <br />
          It cares about what you committed to."
        </p>
        <p className="font-mono text-[0.75rem] text-cp-mid tracking-[0.1em] leading-[1.8] max-w-[560px] pl-8 border-l border-cp-border-bright">
          The grid is not a guarantee. It is a bet.
          <br />
          The best bets are specific, pre-contingencied,
          <br />
          and honest about loss acceptance.
          <br />
          <br />
          Vague bets produce vague outcomes.
          <br />
          Greedy bets produce obituaries.
          <br />
          <br />
          Fill the grid. Lock the plan. Send the email.
        </p>
      </div>
    </section>
  );
}
