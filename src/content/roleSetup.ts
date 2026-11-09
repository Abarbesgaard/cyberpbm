import {
  BLUFFS_PER_SYNTH,
  ROLE_TAG_CAP,
  balance,
  crewRoles,
  type BalanceRow,
  type CrewRoleId,
  type RoleTag,
} from "./game.ts";

/** Returns a number in [0, 1). */
export type Rng = () => number;

export type Team = "crew" | "synth";

export interface PlayerAssignment {
  name: string;
  team: Team;
  /** Actual crew role. `null` for synthetics: their only ability is Særordre. */
  roleId: CrewRoleId | null;
}

export interface RoleSetup {
  players: PlayerAssignment[];
  activeCrewRoles: CrewRoleId[];
  unusedCrewRoles: CrewRoleId[];
  /** Bluff suggestions keyed by synthetic player name. Claims, not assignments. */
  bluffs: Record<string, CrewRoleId[]>;
}

export interface RolePool extends BalanceRow {
  catalogue: number;
  coreRoles: number;
  unused: number;
  bluffsNeeded: number;
  distinctBluffs: boolean;
}

export class RoleSetupError extends Error {
  readonly problems: string[];
  constructor(problems: string[]) {
    super(`Ugyldig rolleopsætning:\n- ${problems.join("\n- ")}`);
    this.name = "RoleSetupError";
    this.problems = problems;
  }
}

const roleById = new Map(crewRoles.map((r) => [r.id, r]));
const coreRoleIds = crewRoles.filter((r) => r.core).map((r) => r.id);

/** Deterministic PRNG for reproducible setups and tests. */
export function seededRng(seed: number): Rng {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function shuffle<T>(items: readonly T[], rng: Rng): T[] {
  const out = [...items];
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
}

export function balanceFor(players: number): BalanceRow | undefined {
  return balance.find((b) => b.players === players);
}

/** Public, assignment-free numbers for a player count. */
export function rolePool(players: number): RolePool {
  const row = balanceFor(players);
  if (!row) throw new RoleSetupError([unsupportedCount(players)]);
  const unused = crewRoles.length - row.crew;
  const bluffsNeeded = row.synths * BLUFFS_PER_SYNTH;
  return {
    ...row,
    catalogue: crewRoles.length,
    coreRoles: coreRoleIds.length,
    unused,
    bluffsNeeded,
    distinctBluffs: unused >= bluffsNeeded,
  };
}

function unsupportedCount(players: number): string {
  const counts = balance.map((b) => b.players);
  return `${players} spillere understøttes ikke. Vælg ${counts[0]}–${counts[counts.length - 1]}.`;
}

/** Core roles first, then a random draw that respects ROLE_TAG_CAP. */
export function selectActiveCrewRoles(count: number, rng: Rng): CrewRoleId[] {
  if (count < coreRoleIds.length || count > crewRoles.length) {
    throw new RoleSetupError([`Kan ikke vælge ${count} besætningsroller fra et katalog på ${crewRoles.length}.`]);
  }
  const chosen: CrewRoleId[] = [...coreRoleIds];
  const tagCount = new Map<RoleTag, number>();
  for (const id of chosen) {
    const tag = roleById.get(id)!.tag;
    tagCount.set(tag, (tagCount.get(tag) ?? 0) + 1);
  }
  const candidates = shuffle(
    crewRoles.filter((r) => !r.core),
    rng,
  );
  for (const r of candidates) {
    if (chosen.length === count) break;
    const used = tagCount.get(r.tag) ?? 0;
    if (used >= ROLE_TAG_CAP) continue;
    chosen.push(r.id);
    tagCount.set(r.tag, used + 1);
  }
  if (chosen.length < count) {
    throw new RoleSetupError([`Katalogets tag-grænse (${ROLE_TAG_CAP}) tillader ikke ${count} besætningsroller.`]);
  }
  return chosen;
}

/**
 * Two distinct suggestions per synthetic, drawn only from unused roles.
 * Synthetics get disjoint suggestions when the pool allows; otherwise they may overlap.
 */
export function assignBluffs(
  unused: readonly CrewRoleId[],
  synthNames: readonly string[],
  rng: Rng,
): Record<string, CrewRoleId[]> {
  if (unused.length < BLUFFS_PER_SYNTH && synthNames.length > 0) {
    throw new RoleSetupError([
      `Kun ${unused.length} ubrugte roller. Hver syntetiker skal have ${BLUFFS_PER_SYNTH} forskellige bluff-forslag.`,
    ]);
  }
  const out: Record<string, CrewRoleId[]> = {};
  const disjoint = unused.length >= synthNames.length * BLUFFS_PER_SYNTH;
  const pool = shuffle(unused, rng);
  synthNames.forEach((name, i) => {
    out[name] = disjoint
      ? pool.slice(i * BLUFFS_PER_SYNTH, (i + 1) * BLUFFS_PER_SYNTH)
      : shuffle(unused, rng).slice(0, BLUFFS_PER_SYNTH);
  });
  return out;
}

/** Full setup: teams, actual roles without replacement, unused pool, bluff suggestions. */
export function createRoleSetup(playerNames: readonly string[], rng: Rng = Math.random): RoleSetup {
  const pre: string[] = [];
  const row = balanceFor(playerNames.length);
  if (!row) pre.push(unsupportedCount(playerNames.length));
  if (playerNames.some((n) => n.trim() === "")) pre.push("Alle spillere skal have et navn.");
  if (new Set(playerNames).size !== playerNames.length) pre.push("Spillernavne skal være unikke.");
  if (pre.length || !row) throw new RoleSetupError(pre);

  const active = selectActiveCrewRoles(row.crew, rng);
  const unused = crewRoles.map((r) => r.id).filter((id) => !active.includes(id));

  const order = shuffle(playerNames, rng);
  const synthNames = order.slice(0, row.synths);
  const crewNames = order.slice(row.synths);
  const roleDeck = shuffle(active, rng);

  const players: PlayerAssignment[] = playerNames.map((name) => {
    const ci = crewNames.indexOf(name);
    return ci === -1
      ? { name, team: "synth", roleId: null }
      : { name, team: "crew", roleId: roleDeck[ci] };
  });

  const setup: RoleSetup = {
    players,
    activeCrewRoles: active,
    unusedCrewRoles: unused,
    bluffs: assignBluffs(unused, synthNames, rng),
  };

  const problems = validateRoleSetup(setup);
  if (problems.length) throw new RoleSetupError(problems);
  return setup;
}

/** Returns human-readable problems. Empty array means valid. */
export function validateRoleSetup(setup: RoleSetup): string[] {
  const problems: string[] = [];
  const name = (id: string) => roleById.get(id as CrewRoleId)?.name ?? id;

  const row = balanceFor(setup.players.length);
  if (!row) return [unsupportedCount(setup.players.length)];

  const names = setup.players.map((p) => p.name);
  if (new Set(names).size !== names.length) problems.push("Spillernavne skal være unikke.");

  const crew = setup.players.filter((p) => p.team === "crew");
  const synths = setup.players.filter((p) => p.team === "synth");
  if (crew.length !== row.crew || synths.length !== row.synths) {
    problems.push(
      `${row.players} spillere kræver ${row.crew} besætning og ${row.synths} syntetiker(e), fik ${crew.length} og ${synths.length}.`,
    );
  }

  for (const p of crew) {
    if (!p.roleId) problems.push(`${p.name} er besætning, men har ingen rolle.`);
    else if (!roleById.has(p.roleId)) problems.push(`${p.name} har en ukendt rolle: ${p.roleId}.`);
  }
  for (const p of synths) {
    if (p.roleId) problems.push(`${p.name} er syntetiker og må ikke have en besætningsrolle (${name(p.roleId)}).`);
  }

  const seen = new Map<CrewRoleId, string>();
  for (const p of crew) {
    if (!p.roleId) continue;
    const other = seen.get(p.roleId);
    if (other) problems.push(`${name(p.roleId)} er tildelt både ${other} og ${p.name}. Hver rolle må kun bruges én gang.`);
    else seen.set(p.roleId, p.name);
  }

  const assigned = [...seen.keys()].sort();
  const declared = [...setup.activeCrewRoles].sort();
  if (assigned.join() !== declared.join()) {
    problems.push("Listen over aktive roller passer ikke med de tildelte roller.");
  }

  for (const id of coreRoleIds) {
    if (!seen.has(id)) problems.push(`${name(id)} er en kernerolle og skal være i spil.`);
  }

  const tagCount = new Map<RoleTag, number>();
  for (const id of seen.keys()) {
    const tag = roleById.get(id)?.tag;
    if (tag) tagCount.set(tag, (tagCount.get(tag) ?? 0) + 1);
  }
  for (const [tag, n] of tagCount) {
    if (n > ROLE_TAG_CAP) problems.push(`${n} aktive ${tag}-roller. Højst ${ROLE_TAG_CAP} pr. tag.`);
  }

  const expectedUnused = crewRoles.map((r) => r.id).filter((id) => !seen.has(id)).sort();
  if ([...setup.unusedCrewRoles].sort().join() !== expectedUnused.join()) {
    problems.push("Listen over ubrugte roller skal være præcis kataloget minus de aktive roller.");
  }

  for (const p of setup.players) {
    const b = setup.bluffs[p.name];
    if (p.team === "crew") {
      if (b?.length) problems.push(`${p.name} er besætning og må ikke få bluff-forslag.`);
      continue;
    }
    if (!b || b.length !== BLUFFS_PER_SYNTH) {
      problems.push(`${p.name} skal have præcis ${BLUFFS_PER_SYNTH} bluff-forslag, fik ${b?.length ?? 0}.`);
      continue;
    }
    if (new Set(b).size !== b.length) problems.push(`${p.name} har samme bluff-forslag to gange.`);
    for (const id of b) {
      if (!roleById.has(id)) problems.push(`${p.name} har et ukendt bluff-forslag: ${id}.`);
      else if (seen.has(id)) problems.push(`${p.name} har ${name(id)} som bluff-forslag, men rollen er i spil.`);
    }
  }
  for (const key of Object.keys(setup.bluffs)) {
    if (!names.includes(key)) problems.push(`Bluff-forslag til ukendt spiller: ${key}.`);
  }

  return problems;
}
