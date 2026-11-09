import { useState } from "react";
import { SectionHeader } from "@/components/SectionHeader";
import { layouts, neighbours, zones, type ZoneId } from "@/content/game";

export function ShipMap() {
  const [layoutId, setLayoutId] = useState(layouts[0].id);
  const [selected, setSelected] = useState<ZoneId | null>(null);
  const layout = layouts.find((l) => l.id === layoutId) ?? layouts[0];
  const pos = (id: ZoneId) => layout.pos[id];
  const current = zones.find((z) => z.id === selected);
  const reach = current ? neighbours(layout, current.id) : [];
  const reachable = new Set(reach);

  return (
    <section id="ship" className="hull px-8 py-24 md:px-16">
      <SectionHeader
        eyebrow="Sektion IV // Skibet"
        intro="Syv zoner, fire mulige skibsplaner. GM vælger eller ruller planen på d4 før uge 1. Hver uge: bliv, eller ryk til en nabozone. Klik en zone for at se, hvor du kan nå hen."
      >
        Deck <span className="text-cp-yellow">Layout</span>
      </SectionHeader>

      <div className="mb-6 flex max-w-[980px] flex-wrap gap-3" role="tablist" aria-label="Skibsplan">
        {layouts.map((l) => (
          <button
            key={l.id}
            role="tab"
            aria-selected={l.id === layout.id}
            onClick={() => { setLayoutId(l.id); setSelected(null); }}
            className={`key cursor-pointer px-4 py-2.5 font-mono text-[0.68rem] tracking-[0.18em] uppercase [--chamfer:6px] ${l.id === layout.id ? "text-cp-yellow" : "text-cp-off"}`}
          >
            d4: {l.roll} // {l.name}
          </button>
        ))}
      </div>

      <div className="console max-w-[980px] p-4 sm:p-6 [--chamfer:22px]">
      <div className="mb-3 flex items-center justify-between gap-3"><span className="plate">Navigation // Deck C</span><span className="flex gap-2" aria-hidden><span className="lamp lamp-green" /><span className="lamp lamp-off" /></span></div>
      <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-[minmax(0,560px)_minmax(0,1fr)]">
        <div className="crt m-[10px] p-4 md:p-6">
          <div className="mb-2 flex justify-between text-[1rem] opacity-80">
            <span>DEKSKEMA // {layout.name.toUpperCase()}</span>
            <span>{current ? `ZONE ${current.id}` : "STANDBY"}</span>
          </div>
        <svg viewBox="0 0 440 400" className="relative z-10 w-full" role="img" aria-label="Skibskort">
          {layout.edges.map(([a, b]) => {
            const p = pos(a);
            const q = pos(b);
            const lit = selected !== null && (a === selected || b === selected);
            return (
              <line
                key={a + b}
                x1={p.x} y1={p.y} x2={q.x} y2={q.y}
                stroke={lit ? "var(--cp-yellow)" : "var(--cp-cyan-dim)"}
                strokeWidth={lit ? 2 : 1}
                strokeDasharray={a === "R" || b === "R" ? "4 4" : undefined}
              />
            );
          })}
          {zones.map((z) => {
            const p = pos(z.id);
            const isSel = z.id === selected;
            const isReach = reachable.has(z.id);
            return (
              <g
                key={z.id}
                onClick={() => setSelected(isSel ? null : z.id)}
                className="cursor-pointer"
              >
                <rect
                  x={p.x - 58} y={p.y - 22} width={116} height={44} rx={4}
                  fill={isSel ? "#2A1C08" : "#08110A"}
                  stroke={isSel || isReach ? "var(--cp-yellow)" : "var(--cp-cyan-dim)"}
                />
                <text x={p.x} y={p.y - 4} textAnchor="middle" className={`font-crt text-[14px] ${isSel || isReach ? "fill-cp-yellow" : "fill-cp-cyan"}`}>
                  [{z.id}]
                </text>
                <text x={p.x} y={p.y + 14} textAnchor="middle" className={`font-crt text-[18px] uppercase ${isSel || isReach ? "fill-cp-yellow" : "fill-cp-cyan"}`}>
                  {z.name}
                </text>
              </g>
            );
          })}
        </svg>
        </div>

        <div className="crt crt-amber m-[10px] min-h-[180px] p-6 text-[1.2rem] leading-[1.5]">
          {current ? (
            <>
              <div>&gt; ZONE {current.id} // {current.name.toUpperCase()}</div>
              <div>&gt; KAN NÅ:</div>
              {reach.map((n) => (
                <div key={n}>&nbsp;&nbsp;- {zones.find((z) => z.id === n)?.name}</div>
              ))}
              <div className="mt-2 opacity-60">&gt; Skaktløber: vilkårlig zone.</div>
            </>
          ) : (
            <>
              <div>&gt; {layout.name.toUpperCase()}</div>
              <div className="mt-2 opacity-80">{layout.text}</div>
              <div className="mt-3">&gt; VÆLG EN ZONE<span className="blink">_</span></div>
            </>
          )}
        </div>
      </div>
      </div>
    </section>
  );
}
