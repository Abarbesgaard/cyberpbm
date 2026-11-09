import {
  NEGLECT_FROM_WEEK,
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
}

export interface SystemResult {
  status: SystemStatus;
  delta: SystemStatus;
  /** Systems at 0. Any entry means the synthetics win. */
  failed: SectionId[];
}

export function startStatus(): SystemStatus {
  return Object.fromEntries(sectionIds.map((id) => [id, SYSTEM_START])) as SystemStatus;
}

/** Work, repair, sabotage and neglect resolve simultaneously; the result is clamped to 0–SYSTEM_MAX. */
export function resolveSystems(before: SystemStatus, week: SystemWeek): SystemResult {
  const status = { ...before };
  const delta = {} as SystemStatus;
  for (const id of sectionIds) {
    const workers = week.workers?.[id] ?? 0;
    const repaired = week.repairs?.filter((r) => r === id).length ?? 0;
    const sabotaged = week.sabotage?.filter((r) => r === id).length ?? 0;
    const tended = workers > 0 || repaired > 0 || (week.maintained?.includes(id) ?? false);
    const neglect = !tended && week.week >= NEGLECT_FROM_WEEK ? NEGLECT_LOSS : 0;
    const next = before[id] + workers * WORK_GAIN + repaired * REPAIR_GAIN - sabotaged * SABOTAGE_LOSS - neglect;
    status[id] = Math.max(0, Math.min(SYSTEM_MAX, next));
    delta[id] = status[id] - before[id];
  }
  return { status, delta, failed: sectionIds.filter((id) => status[id] === 0) };
}

export function scenarioMet(scenario: Scenario, status: SystemStatus): boolean {
  return Object.entries(scenario.targets).every(([id, min]) => status[id as SectionId] >= (min ?? 0));
}
