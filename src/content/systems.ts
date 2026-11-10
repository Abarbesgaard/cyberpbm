import {
  EXTRA_REPAIR_GAIN,
  INTEGRITY_FROM_WEEK,
  NEGLECT_LOSS,
  PRESENCE_GAIN,
  REPAIR_GAIN,
  SYSTEM_MAX,
  SYSTEM_START,
  sectionIds,
  zones,
  type Scenario,
  type SectionId,
  type ZoneId,
} from "./game.ts";
import type { Team } from "./kills.ts";

export type SystemStatus = Record<SectionId, number>;

export interface SystemWeek {
  week: number;
  /** Living humans standing in each section this week (see `humansBySection`). */
  humans?: Partial<Record<SectionId, number>>;
  /** Sections where the Engineer repaired: +2 each. */
  repairs?: SectionId[];
  /** Targets of Motorrum's Ekstra reparation: +1 each. */
  extraRepairs?: SectionId[];
  /** Targets of Livsstøtte's Nødstrøm: the section loses nothing this calculation. */
  stabilized?: SectionId[];
}

export interface SystemResult {
  status: SystemStatus;
  /** For ORACLE only. Never broadcast. */
  delta: SystemStatus;
  /** Sections at 0 after this calculation. Any entry means the synthetics win at once. */
  failed: SectionId[];
}

export function startStatus(scenario?: Pick<Scenario, "start">): SystemStatus {
  return Object.fromEntries(sectionIds.map((id) => [id, scenario?.start[id] ?? SYSTEM_START])) as SystemStatus;
}

/**
 * Counts living humans per section from this week's positions (before Monday's movement).
 * Pass only active players: dead and frozen players are not in `positions`. Synthetics are neutral.
 */
export function humansBySection(positions: Record<string, ZoneId>, teams: Record<string, Team>): Partial<Record<SectionId, number>> {
  const out: Partial<Record<SectionId, number>> = {};
  for (const [player, zone] of Object.entries(positions)) {
    if (teams[player] === "crew") out[zone] = (out[zone] ?? 0) + 1;
  }
  return out;
}

/**
 * Friday's calculation. From week 2: +1 if at least one living human stands in the section, otherwise −1.
 * Repairs add on top, all simultaneously. Nødstrøm stops any net loss. Clamped to 0–SYSTEM_MAX.
 */
export function resolveSystems(before: SystemStatus, week: SystemWeek): SystemResult {
  const status = { ...before };
  const delta = {} as SystemStatus;
  for (const id of sectionIds) {
    let change = 0;
    if (week.week >= INTEGRITY_FROM_WEEK) change += (week.humans?.[id] ?? 0) > 0 ? PRESENCE_GAIN : -NEGLECT_LOSS;
    change += (week.repairs?.filter((r) => r === id).length ?? 0) * REPAIR_GAIN;
    change += (week.extraRepairs?.filter((r) => r === id).length ?? 0) * EXTRA_REPAIR_GAIN;
    if (change < 0 && week.stabilized?.includes(id)) change = 0;
    status[id] = Math.max(0, Math.min(SYSTEM_MAX, before[id] + change));
    delta[id] = status[id] - before[id];
  }
  return { status, delta, failed: sectionIds.filter((id) => status[id] === 0) };
}

/** Monday's public report: current integrity only. No changes, no reasons, no names. */
export function integrityReport(week: number, status: SystemStatus): string {
  const width = Math.max(...zones.map((z) => z.name.length));
  const lines = zones.map((z) => `${z.name.padEnd(width)} ${"█".repeat(status[z.id])}${"░".repeat(SYSTEM_MAX - status[z.id])} ${status[z.id]}`);
  return [`ORACLE // INTEGRITET // UGE ${week}`, ...lines].join("\n");
}
