import {
  DECAY_FROM_WEEK,
  DECAY_LOSS,
  REPAIR_GAIN,
  SABOTAGE_LOSS,
  SYSTEM_MAX,
  SYSTEM_START,
  WORK_GAIN,
  sectionIds,
  type SectionId,
} from "./game.ts";
import { BREAKDOWN_AT } from "./rooms.ts";

export type SystemStatus = Record<SectionId, number>;

export interface SystemWeek {
  week: number;
  /** Active players standing in each section. Everyone there works automatically. */
  workers?: Partial<Record<SectionId, number>>;
  /** Sections where the Engineer repaired. */
  repairs?: SectionId[];
  /** Sections where Særordre sabotaged. */
  sabotage?: SectionId[];
  /** Sections an Ekko maintained. Stops decay, adds nothing. */
  maintained?: SectionId[];
  /** Targets of Omdirigér: Motorrum −1, the target +1 each. */
  rerouted?: SectionId[];
  /** Sections where a worker used last week's Værktøj: +1 extra each. */
  tools?: SectionId[];
}

export interface SystemResult {
  status: SystemStatus;
  delta: SystemStatus;
  /** Systems at 0 after this week. Any entry means the synthetics win. */
  failed: SectionId[];
}

export function startStatus(): SystemStatus {
  return Object.fromEntries(sectionIds.map((id) => [id, SYSTEM_START])) as SystemStatus;
}

/**
 * Work, repair, sabotage and decay resolve simultaneously; the result is clamped to 0–SYSTEM_MAX.
 * Decay hits every system from week 2 unless an Ekko maintained it. Repair gives +1 while Lastrum is broken down (≤1).
 */
export function resolveSystems(before: SystemStatus, week: SystemWeek): SystemResult {
  const status = { ...before };
  const delta = {} as SystemStatus;
  const repairGain = before.D <= BREAKDOWN_AT ? REPAIR_GAIN - 1 : REPAIR_GAIN;
  for (const id of sectionIds) {
    const workers = week.workers?.[id] ?? 0;
    const repaired = week.repairs?.filter((r) => r === id).length ?? 0;
    const sabotaged = week.sabotage?.filter((r) => r === id).length ?? 0;
    const rerouteIn = week.rerouted?.filter((r) => r === id).length ?? 0;
    const rerouteOut = id === "F" ? week.rerouted?.length ?? 0 : 0;
    const tools = week.tools?.filter((r) => r === id).length ?? 0;
    const decay = week.week >= DECAY_FROM_WEEK && !(week.maintained?.includes(id) ?? false) ? DECAY_LOSS : 0;
    const next = before[id] + workers * WORK_GAIN + tools + repaired * repairGain + rerouteIn - rerouteOut - sabotaged * SABOTAGE_LOSS - decay;
    status[id] = Math.max(0, Math.min(SYSTEM_MAX, next));
    delta[id] = status[id] - before[id];
  }
  return { status, delta, failed: sectionIds.filter((id) => status[id] === 0) };
}
