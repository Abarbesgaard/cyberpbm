export function Footer() {
  return (
    <footer className="relative">
      <div className="bulkhead" aria-hidden>
        <span className="lamp lamp-red blink-slow" />
        <span className="plate">Aft bulkhead</span>
        <span className="lamp lamp-red blink-slow" />
      </div>
      <div className="quilt relative flex flex-wrap items-center justify-between gap-6 px-8 py-12">
        <div className="relative flex flex-col gap-2">
          <span className="plate !text-[0.75rem]">USCSS Cassandra</span>
          <span className="plate">Kessler-Tanaka Corp. // Reg. 247-319-55</span>
        </div>
        <div className="relative flex flex-col items-end gap-2">
          <span className="plate">Hunt Protocol v0.14 // Social deduction i Slack</span>
          <span className="plate !text-[#FF8A6E]">Besætningen er sekundær</span>
        </div>
      </div>
      <div className="hazard h-[8px]" />
    </footer>
  );
}
