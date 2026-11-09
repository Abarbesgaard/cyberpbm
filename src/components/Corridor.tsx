import { memo } from "react";

// Procedural Nostromo-style corridor: receding octagonal ribs, quilted
// orange wall padding, ceiling strip lights and floor grating.
// Geometry is static, so it is computed once at module load.

const VW = 1600;
const VH = 900;
const VX = 800;
const VY = 430;
const HW = 1050;
const HH = 640;
const CX = HW * 0.34;
const CY = HH * 0.36;

const BASE: [number, number][] = [
  [-HW + CX, -HH], [HW - CX, -HH], [HW, -HH + CY], [HW, HH - CY],
  [HW - CX, HH], [-HW + CX, HH], [-HW, HH - CY], [-HW, -HH + CY],
];

type Pt = [number, number];
const at = (j: number, z: number): Pt => {
  const s = 1 / (1 + z);
  const [x, y] = BASE[j % 8];
  return [VX + x * s, VY + y * s];
};
const lerp = (a: Pt, b: Pt, t: number): Pt => [a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t];
const pts = (p: Pt[]) => p.map(([x, y]) => `${x.toFixed(1)},${y.toFixed(1)}`).join(" ");

// Face j spans vertex j → j+1. 0 ceiling, 2/6 walls, 4 floor.
const BAY_FILL = ["#E9E7E1", "#CFCDC5", "#C4682C", "#A9541E", "#5B5A53", "#A9541E", "#C4682C", "#CFCDC5"];
const RIB_FILL = ["#F1F0EB", "#E2E0D9", "#D3D1C9", "#C3C1B9", "#8F8D86", "#C3C1B9", "#D3D1C9", "#E2E0D9"];

const BAY = 0.85;
const RIB = 0.14;
const BAYS = 7;

interface Poly { d: string; fill: string; fog: number }
interface Line { a: Pt; b: Pt; w: number; c: string }

const polys: Poly[] = [];
const lines: Line[] = [];
const lights: string[] = [];

let z = 0;
for (let k = 0; k < BAYS; k++) {
  const z1 = z + BAY;
  const z2 = z1 + RIB;
  const fogBay = Math.min(0.72, (z + BAY / 2) * 0.085);
  const fogRib = Math.min(0.72, z1 * 0.085);
  for (let j = 0; j < 8; j++) {
    const A = at(j, z), B = at(j + 1, z), C = at(j + 1, z1), D = at(j, z1);
    polys.push({ d: pts([A, B, C, D]), fill: BAY_FILL[j], fog: fogBay });
    const w = 1.6 / (1 + z);

    if (j === 2 || j === 3 || j === 5 || j === 6) {
      // quilted padding: depth seams + cross seams
      for (const u of [1 / 3, 2 / 3]) lines.push({ a: lerp(A, B, u), b: lerp(D, C, u), w, c: "rgba(60,20,4,0.45)" });
      for (const t of [0.5]) {
        const zm = z + BAY * t;
        lines.push({ a: at(j, zm), b: at(j + 1, zm), w, c: "rgba(60,20,4,0.45)" });
      }
    } else if (j === 4) {
      for (let g = 1; g < 6; g++) {
        const zm = z + (BAY * g) / 6;
        lines.push({ a: at(j, zm), b: at(j + 1, zm), w: w * 0.8, c: "rgba(0,0,0,0.45)" });
      }
    } else if (j === 1 || j === 7) {
      lines.push({ a: lerp(A, B, 0.5), b: lerp(D, C, 0.5), w, c: "rgba(90,88,80,0.35)" });
    } else if (j === 0) {
      const a = at(0, z + BAY * 0.15), b = at(1, z + BAY * 0.15);
      const c = at(1, z + BAY * 0.85), d = at(0, z + BAY * 0.85);
      lights.push(pts([lerp(a, b, 0.38), lerp(a, b, 0.62), lerp(d, c, 0.62), lerp(d, c, 0.38)]));
    }

    const E = at(j, z1), F = at(j + 1, z1), G = at(j + 1, z2), H = at(j, z2);
    polys.push({ d: pts([E, F, G, H]), fill: RIB_FILL[j], fog: fogRib });
  }
  // rib face highlight (the frame edge facing the viewer)
  lines.push(...Array.from({ length: 8 }, (_, j) => ({ a: at(j, z1), b: at(j + 1, z1), w: 2 / (1 + z1), c: "rgba(255,255,255,0.55)" })));
  z = z2;
}

const END = pts(Array.from({ length: 8 }, (_, j) => at(j, z)));
const DOOR = pts(Array.from({ length: 8 }, (_, j) => {
  const [x, y] = at(j, z);
  return [VX + (x - VX) * 0.62, VY + (y - VY) * 0.8] as Pt;
}));

export const Corridor = memo(function Corridor({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox={`0 0 ${VW} ${VH}`}
      preserveAspectRatio="xMidYMid slice"
      className={className}
      aria-hidden
    >
      <defs>
        <filter id="corr-glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="6" />
        </filter>
        <radialGradient id="corr-end" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#F8FBF6" />
          <stop offset="60%" stopColor="#C9D6CC" />
          <stop offset="100%" stopColor="#5E6A61" />
        </radialGradient>
        <radialGradient id="corr-haze" cx={VX / VW} cy={VY / VH} r="0.5">
          <stop offset="0%" stopColor="#F4F6F0" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#F4F6F0" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width={VW} height={VH} fill="#2A2A26" />
      {polys.map((p, i) => (
        <g key={i}>
          <polygon points={p.d} fill={p.fill} />
          <polygon points={p.d} fill="#1A1A16" fillOpacity={p.fog} />
        </g>
      ))}
      {lines.map((l, i) => (
        <line key={i} x1={l.a[0]} y1={l.a[1]} x2={l.b[0]} y2={l.b[1]} stroke={l.c} strokeWidth={l.w} />
      ))}
      <polygon points={END} fill="#3A3C36" />
      <polygon points={DOOR} fill="url(#corr-end)" />
      <g filter="url(#corr-glow)">
        {lights.map((d, i) => <polygon key={i} points={d} fill="#FFFFFF" />)}
      </g>
      {lights.map((d, i) => <polygon key={i} points={d} fill="#FBFDFB" />)}
      <rect width={VW} height={VH} fill="url(#corr-haze)" />
    </svg>
  );
});
