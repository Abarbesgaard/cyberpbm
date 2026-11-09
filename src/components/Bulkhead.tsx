import { memo } from "react";

export const Bulkhead = memo(function Bulkhead({ frame, deck }: { frame: string; deck: string }) {
  return (
    <div className="bulkhead" aria-hidden>
      <span className="lamp lamp-amber" />
      <span className="plate">Frame {frame}</span>
      <span className="font-stencil text-[1.3rem] leading-none tracking-[0.15em] text-[#2A2B26]/70">{deck}</span>
      <span className="lamp lamp-green" />
    </div>
  );
});
