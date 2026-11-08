import { useState } from "react";
import { SectionHeader } from "@/components/SectionHeader";
import { zones, type ZoneId } from "@/content/game";

const CX = 220;
const CY = 200;
const RADIUS = 150;
const ringAngles: Record<Exclude<ZoneId, "R">, number> = {
  A: -120, B: -60, C: 0, D: 60, E: 120, F: 180,
};

function pos(id: ZoneId) {
  if (id === "R") return { x: CX, y: CY };
  const a = (ringAngles[id] * Math.PI) / 180;
  return { x: CX + RADIUS * Math.cos(a), y: CY + RADIUS * Math.sin(a) };
}

const edges: [ZoneId, ZoneId][] = zones.flatMap((z) =>
  z.neighbours.filter((n) => z.id < n).map((n) => [z.id, n] as [ZoneId, ZoneId])
);

export function ShipMap() {
  const [selected, setSelected] = useState<ZoneId | null>(null);
  const current = zones.find((z) => z.id === selected);
  const reachable = new Set(current?.neighbours ?? []);

  return (
    <section id="ship" className="border-t border-cp-border px-8 py-24 md:px-16">
      <SectionHeader
        eyebrow="Sektion III // Skibet"
        intro="Syv zoner. Hver uge: bliv, eller ryk én zone. Rygraden når alle sektioner — hurtig, men eksponeret. Klik en zone for at se, hvor du kan nå hen."
      >
        Deck <span className="text-cp-yellow">Layout</span>
      </SectionHeader>

      <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-[1fr_320px]">
        <svg viewBox="0 0 440 400" className="w-full max-w-[560px]" role="img" aria-label="Skibskort">
          {edges.map(([a, b]) => {
            const p = pos(a);
            const q = pos(b);
            const lit = selected !== null && (a === selected || b === selected);
            return (
              <line
                key={a + b}
                x1={p.x} y1={p.y} x2={q.x} y2={q.y}
                stroke={lit ? "var(--cp-yellow)" : "var(--cp-border-bright)"}
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
                  x={p.x - 52} y={p.y - 22} width={104} height={44}
                  fill={isSel ? "#0F2A1A" : "var(--cp-dark)"}
                  stroke={isSel || isReach ? "var(--cp-yellow)" : "var(--cp-border-bright)"}
                />
                <text x={p.x} y={p.y - 4} textAnchor="middle" className="fill-cp-yellow font-mono text-[10px]">
                  [{z.id}]
                </text>
                <text x={p.x} y={p.y + 12} textAnchor="middle" className="fill-cp-white font-head text-[13px] font-bold uppercase">
                  {z.name}
                </text>
              </g>
            );
          })}
        </svg>

        <div className="border border-cp-border-bright bg-cp-panel p-6 font-mono text-[0.75rem] leading-[1.9] text-cp-off">
          {current ? (
            <>
              <div className="text-cp-yellow">&gt; ZONE {current.id} // {current.name.toUpperCase()}</div>
              <div>&gt; KAN NÅ:</div>
              {current.neighbours.map((n) => (
                <div key={n}>&nbsp;&nbsp;- {zones.find((z) => z.id === n)?.name}</div>
              ))}
              <div className="mt-2 text-cp-mid">&gt; Syntetiker m. Skakt: op til to zoner.</div>
            </>
          ) : (
            <div>&gt; VÆLG EN ZONE<span className="blink">_</span></div>
          )}
        </div>
      </div>
    </section>
  );
}
