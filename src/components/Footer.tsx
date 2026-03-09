export function Footer() {
  return (
    <footer className="flex items-center justify-between border-t border-cp-border-bright bg-cp-panel px-8 py-8">
      <div className="font-head font-black text-base tracking-[0.2em] uppercase text-cp-red">
        Night City Dispatch
      </div>
      <div className="text-right font-mono text-[0.6rem] leading-relaxed tracking-[0.1em] text-cp-mid">
        OPERATIONS MANUAL v1.0 // PLAY-BY-EMAIL
        <br />
        <span className="text-cp-red">ALL FIXERS ACCEPT THE RISK</span>
      </div>
    </footer>
  );
}
