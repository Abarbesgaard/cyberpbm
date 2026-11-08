import type { ReactNode } from "react";

interface Props {
  eyebrow: string;
  children: ReactNode;
  intro?: ReactNode;
}

export function SectionHeader({ eyebrow, children, intro }: Props) {
  return (
    <>
      <div className="mb-2 flex items-center gap-3 font-mono text-[0.65rem] tracking-[0.3em] uppercase text-cp-red">
        <span>{eyebrow}</span>
        <span className="h-px flex-1 bg-gradient-to-r from-cp-border-bright to-transparent" />
      </div>
      <h2 className="mb-4 font-head text-[clamp(2.5rem,5vw,4.5rem)] font-extrabold uppercase leading-[0.95] tracking-tight">
        {children}
      </h2>
      {intro && (
        <p className="mb-12 max-w-[680px] text-[1.05rem] leading-[1.75] text-cp-off">
          {intro}
        </p>
      )}
    </>
  );
}
