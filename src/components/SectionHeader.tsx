import type { ReactNode } from "react";

interface Props {
  eyebrow: string;
  children: ReactNode;
  intro?: ReactNode;
}

export function SectionHeader({ eyebrow, children, intro }: Props) {
  return (
    <>
      <div className="mb-6 flex items-center gap-3">
        <span className="hazard-sm block h-5 w-6 shrink-0" aria-hidden />
        <span className="plate">{eyebrow}</span>
        <span className="h-[2px] flex-1 bg-[linear-gradient(to_bottom,var(--hull-shadow)_50%,var(--hull-light)_50%)]" />
        <span className="lamp lamp-off" aria-hidden />
      </div>
      <h2 className="glow-amber mb-5 font-head text-[clamp(1.5rem,3.2vw,2.6rem)] uppercase leading-[1.15] tracking-[0.08em] text-cp-white">
        {children}
      </h2>
      {intro && (
        <p className="mb-12 max-w-[680px] text-[1.02rem] leading-[1.75] text-cp-off">
          {intro}
        </p>
      )}
    </>
  );
}
