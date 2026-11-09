import { KILL_FROM_WEEK, KILLS_PER_SYNTH, type ZoneId } from "./game.ts";

export type Team = "crew" | "synth";

export interface KillAttempt {
  week: number;
  killer: string;
  target: string;
  /** Zones of all active players after movement. */
  positions: Record<string, ZoneId>;
  teams: Record<string, Team>;
  /** Kills each synthetic has already made this campaign. */
  used?: Record<string, number>;
}

export type KillResult =
  | { ok: true; zone: ZoneId }
  | { ok: false; reason: string };

/**
 * A kill succeeds only when killer and target are the only active players in the zone.
 * A failed attempt is not spent. The victim is never told who the killer was.
 */
export function resolveKill(a: KillAttempt): KillResult {
  if (a.teams[a.killer] !== "synth") return { ok: false, reason: `${a.killer} er ikke syntetiker.` };
  if (a.week < KILL_FROM_WEEK) return { ok: false, reason: `Drab er først muligt fra uge ${KILL_FROM_WEEK}.` };
  if ((a.used?.[a.killer] ?? 0) >= KILLS_PER_SYNTH) return { ok: false, reason: `${a.killer} har allerede brugt sit drab.` };
  const zone = a.positions[a.killer];
  const targetZone = a.positions[a.target];
  if (zone === undefined || targetZone === undefined) return { ok: false, reason: "Drabsmand og mål skal være aktive." };
  if (a.teams[a.target] !== "crew") return { ok: false, reason: "Målet skal være besætning." };
  if (targetZone !== zone) return { ok: false, reason: "Målet står ikke i samme zone." };
  const others = Object.entries(a.positions).filter(([p, z]) => z === zone && p !== a.killer && p !== a.target);
  if (others.length > 0) return { ok: false, reason: "Der er vidner i zonen." };
  return { ok: true, zone };
}
