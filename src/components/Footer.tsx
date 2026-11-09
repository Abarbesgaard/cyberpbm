export function Footer() {
  return (
    <footer className="bg-cp-panel">
      <div className="hazard h-[6px] opacity-80" />
      <div className="flex flex-wrap items-center justify-between gap-4 px-8 py-8">
        <div>
          <div className="font-head text-[0.85rem] tracking-[0.25em] uppercase text-cp-white">
            USCSS Cassandra
          </div>
          <div className="mt-1 font-mono text-[0.6rem] tracking-[0.15em] uppercase text-cp-mid">
            Kessler-Tanaka Corp. // Reg. 247-319-55
          </div>
        </div>
        <div className="text-right font-mono text-[0.6rem] leading-relaxed tracking-[0.15em] uppercase text-cp-mid">
          Hunt Protocol v0.6 // Social deduction i Slack
          <br />
          <span className="text-cp-red">Besætningen er sekundær</span>
        </div>
      </div>
    </footer>
  );
}
