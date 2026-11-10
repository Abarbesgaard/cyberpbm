import { SABOTAGE_FROM_WEEK, neighbours, zones, type Layout, type SectionId, type ZoneId } from "./game.ts";
import type { Team } from "./kills.ts";

export type RoomAbilityId = "shield" | "sensors" | "power" | "archive" | "camera" | "extra_repair" | "transport";

export interface Room {
  id: SectionId;
  ability: {
    id: RoomAbilityId;
    name: string;
    /** What the player writes after EVNE: Rum →. */
    target: string;
    text: string;
    /** Information abilities can be jammed and forged like role abilities. */
    info?: boolean;
  };
}

/** One ability per section. Usable only from inside the section, instead of the role ability. */
export const rooms: Room[] = [
  { id: "A", ability: { id: "shield", name: "Personlig beskyttelse", target: "Intet", text: "Du kan ikke dræbes denne uge, heller ikke af alienen. Kun dig. Tribunal og kryo er uændrede." } },
  { id: "B", ability: { id: "sensors", name: "Bevægelsessensorer", target: "En sektion", text: "ORACLE fortæller, hvor mange der ankom til og forlod sektionen ved seneste mandags bevægelse. Ingen navne. Skakt registreres ikke.", info: true } },
  { id: "C", ability: { id: "power", name: "Nødstrøm", target: "En sektion", text: "Sektionen mister ingen integritet ved fredagens beregning. Giver intet ekstra." } },
  { id: "D", ability: { id: "archive", name: "Arkiv", target: "En sektion og en afsluttet uge", text: "ORACLE fortæller, hvor mange spillere der stod i sektionen den uge. Ingen navne, ingen roller.", info: true } },
  { id: "E", ability: { id: "camera", name: "Kamera", target: "En anden sektion", text: "ORACLE fortæller, hvem der står i sektionen denne uge. Navne, aldrig roller, hold eller handlinger.", info: true } },
  { id: "F", ability: { id: "extra_repair", name: "Ekstra reparation", target: "En sektion", text: "Sektionen får +1 integritet ved fredagens beregning. Højst 5." } },
  { id: "R", ability: { id: "transport", name: "Transport", target: "Intet", text: "Næste uge må din bevægelse gå op til to zoner ad skibets gange. Kun den ene bevægelse." } },
];

export const roomOf = (id: SectionId): Room => rooms.find((r) => r.id === id)!;
const zoneName = (id: ZoneId) => zones.find((z) => z.id === id)!.name;

/** The private reply to an attempt on a sabotaged section. Nothing more, never public. */
export const SABOTAGED_REPLY = "Systemet er saboteret.";

export interface SabotageEntry {
  /** The week the synthetic sent the order. */
  week: number;
  section: SectionId;
}

/** Sabotage sent in week N disables the section's ability in week N+1 only, then expires by itself. */
export const sabotagedIn = (week: number, log: SabotageEntry[]): SectionId[] =>
  [...new Set(log.filter((s) => s.week === week - 1).map((s) => s.section))];

/** The one optional activation in a weekly order. */
export type Activation =
  | { kind: "none" }
  | { kind: "role" }
  | { kind: "room"; room: SectionId }
  | { kind: "fight" }
  | { kind: "sabotage"; section: SectionId }
  | { kind: "kill"; target: string };

export interface ActivationCheck {
  week: number;
  team: Team;
  /** The player's zone this week. */
  zone: ZoneId;
  activation: Activation;
  /** Sections sabotaged this week (see `sabotagedIn`). */
  sabotaged: SectionId[];
}

/**
 * Whether an activation may resolve. A refused activation is still spent.
 * `reply` is the private message, if any. Kills are checked in `resolveKill`, Bekæmp in `resolveAlien`.
 */
export function checkActivation(c: ActivationCheck): { ok: true } | { ok: false; reply?: string; reason: string } {
  const a = c.activation;
  if (a.kind === "room") {
    if (a.room !== c.zone) return { ok: false, reason: "Sektionens evne kan kun bruges fra sektionen selv." };
    if (c.sabotaged.includes(a.room)) return { ok: false, reply: SABOTAGED_REPLY, reason: "Sektionen er saboteret." };
  }
  if (a.kind === "sabotage") {
    if (c.team !== "synth") return { ok: false, reason: "Kun syntetikere kan sabotere." };
    if (c.week < SABOTAGE_FROM_WEEK) return { ok: false, reason: `Sabotage er først muligt fra uge ${SABOTAGE_FROM_WEEK}.` };
    if (a.section !== c.zone) return { ok: false, reason: "Man kan kun sabotere den sektion, man står i." };
  }
  return { ok: true };
}

/** One activation per player per week: only the first one ORACLE received counts. */
export function oneActivationEach<T extends { player: string }>(orders: T[]): T[] {
  const seen = new Set<string>();
  return orders.filter((o) => (seen.has(o.player) ? false : (seen.add(o.player), true)));
}

/** Kamera: names of the active players in another section this week. */
export function camera(user: string, target: SectionId, positions: Record<string, ZoneId>): string {
  if (positions[user] === target) throw new Error("Kamera skal pege på en anden sektion.");
  const here = Object.keys(positions).filter((p) => positions[p] === target).sort();
  return `${zoneName(target)}: ${here.length ? here.join(", ") : "ingen"}.`;
}

/** Arkiv: how many active players stood in the section in a completed week. */
export function archive(target: SectionId, week: number, currentWeek: number, history: Record<number, Record<string, ZoneId>>): string {
  if (week >= currentWeek || !history[week]) throw new Error("Arkivet har kun afsluttede uger.");
  const count = Object.values(history[week]).filter((z) => z === target).length;
  return `${zoneName(target)}, uge ${week}: ${count} ${count === 1 ? "person" : "personer"}.`;
}

/**
 * Bevægelsessensorer: counts of arrivals and departures at the latest Monday movement.
 * `before` is last week's positions, `after` this week's. Players who used Skakt are not registered.
 */
export function motionSensors(target: SectionId, before: Record<string, ZoneId>, after: Record<string, ZoneId>, shaft: string[] = []): string {
  const moved = Object.keys(after).filter((p) => p in before && before[p] !== after[p] && !shaft.includes(p));
  const arrived = moved.filter((p) => after[p] === target).length;
  const left = moved.filter((p) => before[p] === target).length;
  return `${zoneName(target)}: ${arrived} ankom, ${left} forlod.`;
}

/** Zones reachable along the ship's corridors in up to `steps` moves. Transport gives 2 for one movement. */
export function reachable(layout: Layout, from: ZoneId, steps: number): ZoneId[] {
  let frontier = new Set<ZoneId>([from]);
  const seen = new Set<ZoneId>([from]);
  for (let i = 0; i < steps; i++) {
    const next = new Set<ZoneId>();
    for (const z of frontier) {
      for (const n of neighbours(layout, z)) {
        if (seen.has(n)) continue;
        seen.add(n);
        next.add(n);
      }
    }
    frontier = next;
  }
  seen.delete(from);
  return [...seen];
}
