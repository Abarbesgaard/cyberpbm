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
    <section id="ship" className="hull px-8 py-24 md:px-16">
      <SectionHeader
        eyebrow="Sektion III // Skibet"
        intro="Syv zoner. Hver uge: bliv, eller ryk én zone. Rygraden når alle sektioner — hurtig, men eksponeret. Klik en zone for at se, hvor du kan nå hen."
      >
        Deck <span className="text-cp-yellow">Layout</span>
      </SectionHeader>

      <div className="console max-w-[980px] p-4 sm:p-6 [--chamfer:22px]">
      <div className="mb-3 flex items-center justify-between gap-3"><span className="plate">Navigation // Deck C</span><span className="flex gap-2" aria-hidden><span className="lamp lamp-green" /><span className="lamp lamp-off" /></span></div>
      <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-[minmax(0,560px)_minmax(0,1fr)]">
        <div className="crt m-[10px] p-4 md:p-6">
          <div className="mb-2 flex justify-between text-[1rem] opacity-80">
            <span>DEKSKEMA // USCSS CASSANDRA</span>
            <span>{current ? `ZONE ${current.id}` : "STANDBY"}</span>
          </div>
        <svg viewBox="0 0 440 400" className="relative z-10 w-full" role="img" aria-label="Skibskort">
          {edges.map(([a, b]) => {
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
              {current.neighbours.map((n) => (
                <div key={n}>&nbsp;&nbsp;- {zones.find((z) => z.id === n)?.name}</div>
              ))}
              <div className="mt-2 opacity-60">&gt; Syntetiker m. Skakt: op til to zoner.</div>
            </>
          ) : (
            <div>&gt; VÆLG EN ZONE<span className="blink">_</span></div>
          )}
        </div>
      </div>
      </div>
    </section>
  );
}
