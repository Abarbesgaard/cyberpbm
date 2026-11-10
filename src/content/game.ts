export type ZoneId = "A" | "B" | "C" | "D" | "E" | "F" | "R";

export interface Zone {
  id: ZoneId;
  name: string;
}

export const zones: Zone[] = [
  { id: "A", name: "Hypersøvn" },
  { id: "B", name: "Medlab" },
  { id: "C", name: "Livsstøtte" },
  { id: "D", name: "Lastrum" },
  { id: "E", name: "Broen" },
  { id: "F", name: "Motorrum" },
  { id: "R", name: "Rygraden" },
];

/** A ship plan: same seven zones, different corridors. Chosen or rolled (d4) at setup. */
export interface Layout {
  id: string;
  roll: number;
  name: string;
  text: string;
  edges: [ZoneId, ZoneId][];
  /** Map coordinates in a 440×400 viewBox. */
  pos: Record<ZoneId, { x: number; y: number }>;
}

const ringPos = (() => {
  const angles: Record<Exclude<ZoneId, "R">, number> = { A: -120, B: -60, C: 0, D: 60, E: 120, F: 180 };
  const out = { R: { x: 220, y: 200 } } as Record<ZoneId, { x: number; y: number }>;
  for (const [id, deg] of Object.entries(angles)) {
    const a = (deg * Math.PI) / 180;
    out[id as ZoneId] = { x: Math.round(220 + 150 * Math.cos(a)), y: Math.round(200 + 150 * Math.sin(a)) };
  }
  return out;
})();

const spokes: [ZoneId, ZoneId][] = (["A", "B", "C", "D", "E", "F"] as const).map((z) => [z, "R"]);

export const layouts: Layout[] = [
  {
    id: "ring", roll: 1, name: "Ringen",
    text: "Seks sektioner i en ring om Rygraden. Rygraden når alle. Intet er mere end to uger væk.",
    edges: [["A", "B"], ["B", "C"], ["C", "D"], ["D", "E"], ["E", "F"], ["F", "A"], ...spokes],
    pos: ringPos,
  },
  {
    id: "hub", roll: 2, name: "Knudepunktet",
    text: "Sektionerne har kun dør til Rygraden. Al trafik går gennem midten, så man ser hinanden dér — og en forseglet Rygrad lammer skibet.",
    edges: spokes,
    pos: ringPos,
  },
  {
    id: "long", roll: 3, name: "Langskibet",
    text: "To parallelle gange langs skibet, bagbord og styrbord, med tværgange imellem. Op til tre uger fra ende til ende, men der er altid mere end én vej.",
    edges: [["E", "B"], ["B", "A"], ["A", "R"], ["R", "C"], ["C", "D"], ["D", "F"], ["E", "A"], ["A", "C"], ["C", "F"], ["B", "R"], ["R", "D"]],
    pos: { E: { x: 110, y: 30 }, B: { x: 330, y: 86 }, A: { x: 110, y: 142 }, R: { x: 330, y: 198 }, C: { x: 110, y: 254 }, D: { x: 330, y: 310 }, F: { x: 110, y: 366 } },
  },
  {
    id: "twin", roll: 4, name: "Tvillingeskroget",
    text: "To skrog med tre sektioner hver, forbundet af Rygraden. Inden for et skrog når alle hinanden. Mellem skrogene er Rygraden eneste vej.",
    edges: [["E", "B"], ["B", "A"], ["A", "E"], ["A", "R"], ["R", "C"], ["C", "D"], ["D", "F"], ["F", "C"]],
    pos: { E: { x: 100, y: 50 }, B: { x: 340, y: 50 }, A: { x: 220, y: 125 }, R: { x: 220, y: 200 }, C: { x: 220, y: 275 }, D: { x: 100, y: 350 }, F: { x: 340, y: 350 } },
  },
];

export function neighbours(layout: Layout, id: ZoneId): ZoneId[] {
  return layout.edges.flatMap(([a, b]) => (a === id ? [b] : b === id ? [a] : []));
}

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
  { id: "navigator", name: "Navigatør", ability: "Pejling", text: "Vælg en spiller. ORACLE fortæller, hvor vedkommende står denne uge.", pick: "En spiller", reply: "Peter står i Lastrum.", tag: "SIKKERHED" },
  { id: "sensor_tech", name: "Sensortekniker", ability: "Scan", text: "Vælg en zone. ORACLE fortæller, hvor mange der står der. Ingen navne.", pick: "En zone", reply: "Medlab: 3 personer.", tag: "OBSERVATION" },
  { id: "quartermaster", name: "Kvartermester", ability: "Adgangslog", text: "Vælg en zone. ORACLE fortæller, hvor mange der gik ind i den ved seneste mandags bevægelse. Ingen navne.", pick: "En zone", reply: "Broen: 2 gik ind.", tag: "OBSERVATION", isNew: true },
  { id: "radar_operator", name: "Radaroperatør", ability: "Afstand", text: "Vælg en spiller. ORACLE fortæller, hvor tæt på vedkommende står: samme zone, nabozone eller langt væk.", pick: "En spiller", reply: "Anna: nabozone.", tag: "OBSERVATION", isNew: true },
  { id: "medic", name: "Læge", ability: "Biometri", text: "Vælg en spiller i din zone. ORACLE fortæller, hvor vedkommende stod ugen før.", pick: "En spiller", reply: "Peter stod i Motorrum.", tag: "ANALYSE" },
  { id: "archivist", name: "Arkivar", ability: "Krydsreference", text: "Vælg to spillere. ORACLE fortæller, om de nogensinde har stået i samme zone.", pick: "To spillere", reply: "Anna og Peter: ja.", tag: "ANALYSE" },
  { id: "psychologist", name: "Psykolog", ability: "Afhøring", text: "Vælg en spiller i din zone. ORACLE fortæller, hvor mange andre der stod sammen med vedkommende ugen før.", pick: "En spiller", reply: "Sara stod med 2 andre.", tag: "ANALYSE", isNew: true },
  { id: "engineer", name: "Ingeniør", ability: "Reparér", text: "Din sektion får +2 integritet. ORACLE fortæller også, om en syntetiker saboterede sektionen denne uge.", pick: "Ingen — din sektion", reply: "Livsstøtte 1 → 3. Saboteret: ja.", tag: "URET", core: true },
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
  { id: "special_order", name: "Særordre", ability: "Ingen", from: 2, core: true, text: "Ingen rolleevne. Du har den basale sabotage og drabet, som alle syntetikere har.", pick: "—", reply: "—" },
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
  { players: 6, crew: 5, synths: 1 },
  { players: 7, crew: 5, synths: 2 },
  { players: 8, crew: 6, synths: 2 },
];

/** All seven zones are sections with integrity, Rygraden included. */
export type SectionId = ZoneId;
export const sectionIds: SectionId[] = ["A", "B", "C", "D", "E", "F", "R"];

/** Integrity: one value per section, public every Monday, 0–SYSTEM_MAX. */
export const SYSTEM_MAX = 5;
/** Start value for sections the scenario does not set. */
export const SYSTEM_START = 3;
/** From this week, integrity changes automatically every Friday. */
export const INTEGRITY_FROM_WEEK = 2;
/** At least one living human in the section. More humans give nothing extra. */
export const PRESENCE_GAIN = 1;
/** No living human in the section. Synthetics are neutral. */
export const NEGLECT_LOSS = 1;
/** Engineer's Reparér. */
export const REPAIR_GAIN = 2;
/** Motorrum's Ekstra reparation. */
export const EXTRA_REPAIR_GAIN = 1;
/** Basic synthetic sabotage is possible from this week. */
export const SABOTAGE_FROM_WEEK = 2;

/** Kills: a shared synthetic action, not a role ability. At most one per week for the whole team. */
export const KILL_FROM_WEEK = 3;

export interface Scenario {
  id: string;
  name: string;
  text: string;
  /** Start integrity. Sections not listed start at SYSTEM_START. Test values. */
  start: Partial<Record<SectionId, number>>;
  /** Week 5 archive release. Public with the scenario. The week 4 crisis is rolled (see crises.ts). */
  archive: { name: string; text: string };
}

/** One scenario per campaign. Public from week 1. Story and archive only: it does not decide the game. */
export const scenarios: Scenario[] = [
  { id: "distress", name: "Nødsignal", text: "Cassandra skal sende et nødsignal hjem fra Broen. Nogen om bord vil ikke have, at det når frem.", start: { E: 2, F: 2 }, archive: { name: "Sortboks", text: "ORACLE frigiver hele positionsloggen fra uge 1." } },
  { id: "quarantine", name: "Karantæne", text: "En smitte er brudt ud. Besætningen venter i karantæne på en redning, der måske aldrig kommer.", start: { B: 2, A: 2 }, archive: { name: "Dørlog", text: "ORACLE frigiver de 10 seneste bevægelser: navn, fra og til, uden uge. Skakter har ingen døre og logges ikke." } },
  { id: "homeward", name: "Hjemrejse", text: "Cassandra er på vej hjem med en last, firmaet vil have for enhver pris.", start: { D: 2, R: 2 }, archive: { name: "Arbejdslog", text: "ORACLE frigiver, hvem der stod i hvilken sektion i uge 3." } },
];
