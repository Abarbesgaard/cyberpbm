import type { Team } from "./kills.ts";

/** A lone crew member dies on this d6 result or higher. */
export const ALIEN_KILL_ROLL = 4;
/** Fighters needed in the alien's zone to expel it. */
export const FIGHTERS_TO_EXPEL = 2;

export interface AlienEncounter {
  /** The alien's zone after movement. */
  zone: string;
  /** Zones of all active players after movement. */
  positions: Record<string, string>;
  teams: Record<string, Team>;
  /** Players who wrote EVNE: Bekæmp. */
  fighters?: string[];
  /** Players the Security Chief guards this week. */
  guarded?: string[];
  /** ORACLE's d6 for the attack. */
  roll: number;
}

export type AlienResult =
  | { kind: "expelled" }
  | { kind: "killed"; victim: string }
  | { kind: "none" };

/**
 * Two or more fighters in the zone expel the alien. A lone player is attacked:
 * crew dies on 4–6, synthetics are ignored, and guarded players are safe.
 */
export function resolveAlien(e: AlienEncounter): AlienResult {
  const here = Object.keys(e.positions).filter((p) => e.positions[p] === e.zone);
  const fighting = here.filter((p) => e.fighters?.includes(p));
  if (fighting.length >= FIGHTERS_TO_EXPEL) return { kind: "expelled" };
  if (here.length !== 1) return { kind: "none" };
  const [lone] = here;
  if (e.teams[lone] !== "crew" || e.guarded?.includes(lone) || e.roll < ALIEN_KILL_ROLL) return { kind: "none" };
  return { kind: "killed", victim: lone };
}
