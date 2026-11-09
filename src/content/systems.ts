import {
  NEGLECT_WEEKS,
  NEGLECT_LOSS,
  REPAIR_GAIN,
  SABOTAGE_LOSS,
  SYSTEM_MAX,
  SYSTEM_START,
  WORK_GAIN,
  sectionIds,
  type Scenario,
  type SectionId,
} from "./game.ts";
import { BREAKDOWN_AT } from "./rooms.ts";

export type SystemStatus = Record<SectionId, number>;

export interface SystemWeek {
  week: number;
  /** Players who stayed in a section and chose to work, per section. */
  workers?: Partial<Record<SectionId, number>>;
  /** Sections where the Engineer repaired. */
  repairs?: SectionId[];
  /** Sections where Særordre sabotaged. */
  sabotage?: SectionId[];
  /** Sections an Ekko maintained. Stops neglect, adds nothing. */
  maintained?: SectionId[];
  /** Targets of Omdirigér: Motorrum −1, the target +1 each. */
  rerouted?: SectionId[];
  /** Sections where a worker used last week's Værktøj: +1 extra each. */
  tools?: SectionId[];
}

export interface SystemResult {
  status: SystemStatus;
  delta: SystemStatus;
  /** Systems that reached 0 this week: KRITISK, one week to save them. */
  critical: SectionId[];
  /** Systems at 0 two resolutions in a row. Any entry means the synthetics win. */
  failed: SectionId[];
}

export function startStatus(): SystemStatus {
  return Object.fromEntries(sectionIds.map((id) => [id, SYSTEM_START])) as SystemStatus;
}

/**
 * Work, repair, sabotage and neglect resolve simultaneously; the result is clamped to 0–SYSTEM_MAX.
 * A sabotaged section takes no neglect on top. Repair gives +1 while Lastrum is broken down (≤1).
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
    const tended = workers > 0 || repaired > 0 || (week.maintained?.includes(id) ?? false);
    const neglect = !tended && sabotaged === 0 && NEGLECT_WEEKS.includes(week.week) ? NEGLECT_LOSS : 0;
    const next = before[id] + workers * WORK_GAIN + tools + repaired * repairGain + rerouteIn - rerouteOut - sabotaged * SABOTAGE_LOSS - neglect;
    status[id] = Math.max(0, Math.min(SYSTEM_MAX, next));
    delta[id] = status[id] - before[id];
  }
  return {
    status,
    delta,
    critical: sectionIds.filter((id) => status[id] === 0 && before[id] > 0),
    failed: sectionIds.filter((id) => status[id] === 0 && before[id] === 0),
  };
}

export function scenarioMet(scenario: Scenario, status: SystemStatus): boolean {
  return Object.entries(scenario.targets).every(([id, min]) => status[id as SectionId] >= (min ?? 0));
}
