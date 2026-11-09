import type { ReactNode } from "react";

interface Props {
  eyebrow: string;
  children: ReactNode;
  intro?: ReactNode;
}

export function SectionHeader({ eyebrow, children, intro }: Props) {
  return (
    <>
      <div className="mb-6 flex items-stretch">
        <span className="hazard-sm block w-8 shrink-0" aria-hidden />
        <span className="border border-l-0 border-cp-border-bright bg-cp-panel2 px-3 py-1 font-mono text-[0.65rem] tracking-[0.25em] uppercase text-cp-yellow">
          {eyebrow}
        </span>
        <span className="ml-3 h-px flex-1 self-center bg-cp-border-bright" />
      </div>
      <h2 className="mb-5 font-head text-[clamp(1.5rem,3.2vw,2.6rem)] uppercase leading-[1.15] tracking-[0.08em] text-cp-white">
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
