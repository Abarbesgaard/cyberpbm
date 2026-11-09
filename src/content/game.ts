export type ZoneId = "A" | "B" | "C" | "D" | "E" | "F" | "R";

export interface Zone {
  id: ZoneId;
  name: string;
  neighbours: ZoneId[];
}

export const zones: Zone[] = [
  { id: "A", name: "Hypersøvn", neighbours: ["B", "F", "R"] },
  { id: "B", name: "Medlab", neighbours: ["A", "C", "R"] },
  { id: "C", name: "Livsstøtte", neighbours: ["B", "D", "R"] },
  { id: "D", name: "Lastrum", neighbours: ["C", "E", "R"] },
  { id: "E", name: "Broen", neighbours: ["D", "F", "R"] },
  { id: "F", name: "Motorrum", neighbours: ["E", "A", "R"] },
  { id: "R", name: "Rygraden", neighbours: ["A", "B", "C", "D", "E", "F"] },
];

export type RoleTag = "OBSERVATION" | "ANALYSE" | "SIKKERHED" | "URET" | "SOCIAL";

export type CrewRoleId =
  | "security_chief"
  | "navigator"
  | "sensor_tech"
  | "medic"
  | "engineer"
  | "archivist"
  | "comms_officer"
  | "quartermaster"
  | "psychologist"
  | "auditor"
  | "radar_operator";

export interface RoleDef {
  id: CrewRoleId;
  name: string;
  ability: string;
  text: string;
  /** What the player writes after EVNE in the order. */
  pick: string;
  /** Example of ORACLE's private reply on Monday. */
  reply: string;
  tag: RoleTag;
  /** Always in play. Publicly known to be active. */
  core?: boolean;
  /** Added in this version. */
  isNew?: boolean;
}

export const crewRoles: RoleDef[] = [
  { id: "security_chief", name: "Sikkerhedschef", ability: "Vagt", text: "Vælg en anden spiller. Vedkommende kan ikke dræbes denne uge.", pick: "En spiller", reply: "Du vogter Anna denne uge.", tag: "SIKKERHED" },
  { id: "navigator", name: "Navigatør", ability: "Pejling", text: "Vælg en spiller. ORACLE fortæller, hvor vedkommende står efter bevægelse.", pick: "En spiller", reply: "Peter står i Lastrum.", tag: "SIKKERHED" },
  { id: "sensor_tech", name: "Sensortekniker", ability: "Scan", text: "Vælg en zone. ORACLE fortæller, hvor mange der står der. Ingen navne.", pick: "En zone", reply: "Medlab: 3 personer.", tag: "OBSERVATION" },
  { id: "quartermaster", name: "Kvartermester", ability: "Adgangslog", text: "Vælg en zone. ORACLE fortæller, hvor mange der gik ind i den denne uge. Ingen navne.", pick: "En zone", reply: "Broen: 2 gik ind.", tag: "OBSERVATION", isNew: true },
  { id: "radar_operator", name: "Radaroperatør", ability: "Afstand", text: "Vælg en spiller. ORACLE fortæller, hvor tæt på vedkommende står: samme zone, nabozone eller langt væk.", pick: "En spiller", reply: "Anna: nabozone.", tag: "OBSERVATION", isNew: true },
  { id: "medic", name: "Læge", ability: "Biometri", text: "Vælg en spiller i din zone. ORACLE fortæller, hvor vedkommende stod ugen før.", pick: "En spiller", reply: "Peter stod i Motorrum.", tag: "ANALYSE" },
  { id: "archivist", name: "Arkivar", ability: "Krydsreference", text: "Vælg to spillere. ORACLE fortæller, om de nogensinde har stået i samme zone.", pick: "To spillere", reply: "Anna og Peter: ja.", tag: "ANALYSE" },
  { id: "psychologist", name: "Psykolog", ability: "Afhøring", text: "Vælg en spiller i din zone. ORACLE fortæller, hvor mange andre der stod sammen med vedkommende ugen før.", pick: "En spiller", reply: "Sara stod med 2 andre.", tag: "ANALYSE", isNew: true },
  { id: "engineer", name: "Ingeniør", ability: "Reparér", text: "Systemet i din sektion får +2. ORACLE fortæller også, om sektionen blev saboteret sidste uge, og om sabotøren stadig står der.", pick: "Ingen — din sektion", reply: "Livsstøtte 1 → 3. Saboteret: ja. Sabotøren her: nej.", tag: "URET", core: true },
  { id: "comms_officer", name: "Kommunikationsofficer", ability: "Åben linje", text: "Vælg en spiller. ORACLE åbner en privat kanal mellem jer i en uge, uanset placering.", pick: "En spiller", reply: "Kanal åben: #linje-sara.", tag: "SOCIAL" },
  { id: "auditor", name: "Revisor", ability: "Stemmerevision", text: "Vælg en spiller. ORACLE fortæller, hvem vedkommende stemte på ved denne uges tribunal.", pick: "En spiller", reply: "Peter stemte på Anna.", tag: "SOCIAL", isNew: true },
];

/** Max active crew roles that share a tag. Stops information stacking. */
export const ROLE_TAG_CAP = 2;

/** Bluff suggestions each synthetic receives. */
export const BLUFFS_PER_SYNTH = 2;

export type SynthRoleId = "special_order" | "forger" | "crawler" | "jammer";

export interface SynthRoleDef {
  id: SynthRoleId;
  name: string;
  ability: string;
  from: number;
  text: string;
  pick: string;
  reply: string;
  /** Always in play: the lead synthetic. */
  core?: boolean;
}

/** One ability per synthetic. Drawn without replacement, like crew roles. */
export const synthRoles: SynthRoleDef[] = [
  { id: "special_order", name: "Særordre", ability: "Sabotage", from: 2, core: true, text: "Systemet i din sektion får −2. ORACLE broadcaster sektionen — aldrig navnet.", pick: "Ingen — din sektion", reply: "Sabotage udført. Livsstøtte 3 → 1." },
  { id: "forger", name: "Forfalsker", ability: "Forfalskning", from: 2, text: "Vælg en spiller. ORACLE sender vedkommende et falsk, men troværdigt resultat og viser dig, hvad der blev sendt.", pick: "En spiller", reply: "Sendt til Sara: \"Medlab: 1 person.\"" },
  { id: "crawler", name: "Skaktløber", ability: "Skakt", from: 1, text: "Vælg en zone. Du kravler derhen gennem vedligeholdelsesskakterne i stedet for at gå.", pick: "En zone", reply: "Du står i Lastrum." },
  { id: "jammer", name: "Støjsender", ability: "Støj", from: 2, text: "Vælg en zone. Alle informationsevner i eller på zonen giver: \"Signal forstyrret.\"", pick: "En zone", reply: "Støj aktiv i Broen." },
];

export type RoleId = CrewRoleId | SynthRoleId;

export interface BalanceRow {
  players: number;
  crew: number;
  synths: number;
}

export const balance: BalanceRow[] = [
  { players: 5, crew: 4, synths: 1 },
  { players: 6, crew: 5, synths: 1 },
  { players: 7, crew: 5, synths: 2 },
  { players: 8, crew: 6, synths: 2 },
];

export type SectionId = Exclude<ZoneId, "R">;
export const sectionIds: SectionId[] = ["A", "B", "C", "D", "E", "F"];

/** Ship systems: one per section, public status 0–SYSTEM_MAX. */
export const SYSTEM_MAX = 5;
export const SYSTEM_START = 3;
export const WORK_GAIN = 1;
export const REPAIR_GAIN = 2;
export const SABOTAGE_LOSS = 2;
export const NEGLECT_LOSS = 1;
/** Neglect hits untended sections in even weeks only. */
export const NEGLECT_WEEKS = [2, 4, 6];

/** Kills: a shared synthetic action, not a role ability. */
export const KILL_FROM_WEEK = 3;
export const KILLS_PER_SYNTH = 1;

export interface Scenario {
  id: string;
  name: string;
  text: string;
  /** Minimum status per system after week 6. */
  targets: Partial<Record<SectionId, number>>;
  /** Week 5 archive release. Public with the scenario. The week 4 crisis is rolled (see crises.ts). */
  archive: { name: string; text: string };
}

/** One scenario per campaign. Public from week 1. */
export const scenarios: Scenario[] = [
  { id: "distress", name: "Nødsignal", text: "Send et nødsignal hjem. Broen og Motorrum skal stå på 5.", targets: { E: 5, F: 5 }, archive: { name: "Sortboks", text: "ORACLE frigiver hele positionsloggen fra uge 1." } },
  { id: "quarantine", name: "Karantæne", text: "Hold besætningen i live til redningen. Medlab og Hypersøvn skal stå på 5.", targets: { B: 5, A: 5 }, archive: { name: "Dørlog", text: "ORACLE frigiver de 10 seneste bevægelser: navn, fra og til, uden uge. Skakter har ingen døre og logges ikke." } },
  { id: "homeward", name: "Hjemrejse", text: "Få skibet hjem i ét stykke. Alle seks systemer skal stå på mindst 4.", targets: { A: 4, B: 4, C: 4, D: 4, E: 4, F: 4 }, archive: { name: "Arbejdslog", text: "ORACLE frigiver, hvem der arbejdede i hvilken sektion i uge 3." } },
];
