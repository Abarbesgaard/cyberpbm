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

export type RoleTag = "OBSERVATION" | "ANALYSE" | "JAGT" | "URET" | "SOCIAL";

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
  tag: RoleTag;
  /** Always in play. Publicly known to be active. */
  core?: boolean;
  /** Added in this version. */
  isNew?: boolean;
}

export const crewRoles: RoleDef[] = [
  { id: "security_chief", name: "Sikkerhedschef", ability: "Autoritet (passiv)", text: "Dit fasthold tæller 2 point. Du kan pågribe alene.", tag: "JAGT" },
  { id: "navigator", name: "Navigatør", ability: "Pejling", text: "Vælg en spiller. Lær vedkommendes zone efter bevægelse.", tag: "JAGT" },
  { id: "sensor_tech", name: "Sensortekniker", ability: "Scan", text: "Vælg en zone. Lær hvor mange der står der. Ingen navne.", tag: "OBSERVATION" },
  { id: "quartermaster", name: "Kvartermester", ability: "Adgangslog", text: "Vælg en zone. Lær hvor mange der gik ind i zonen denne uge. Ingen navne.", tag: "OBSERVATION", isNew: true },
  { id: "radar_operator", name: "Radaroperatør", ability: "Afstand", text: "Vælg en spiller. Lær hvor mange zoner der er mellem jer efter bevægelse: 0, 1 eller 2.", tag: "OBSERVATION", isNew: true },
  { id: "medic", name: "Læge", ability: "Biometri", text: "Vælg en spiller i din zone. Lær hvor vedkommende stod ugen før.", tag: "ANALYSE" },
  { id: "archivist", name: "Arkivar", ability: "Krydsreference", text: "Vælg to spillere. Lær om de nogensinde har stået i samme zone.", tag: "ANALYSE" },
  { id: "psychologist", name: "Psykolog", ability: "Afhøring", text: "Vælg en spiller i din zone. Lær hvor mange andre der stod sammen med vedkommende ugen før.", tag: "ANALYSE", isNew: true },
  { id: "engineer", name: "Ingeniør", ability: "Reparér", text: "Står du i sidste uges sabotagezone: +1 integritet, og du lærer, om sabotøren stadig er der.", tag: "URET", core: true },
  { id: "comms_officer", name: "Kommunikationsofficer", ability: "Åben linje", text: "Vælg en spiller. I får en privat kanal i en uge, uanset placering.", tag: "SOCIAL" },
  { id: "auditor", name: "Revisor", ability: "Stemmerevision", text: "Vælg en spiller. Lær hvem vedkommende stemte på ved denne uges tribunal.", tag: "SOCIAL", isNew: true },
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
  /** Always in play: the lead synthetic. */
  core?: boolean;
}

/** One ability per synthetic. Drawn without replacement, like crew roles. */
export const synthRoles: SynthRoleDef[] = [
  { id: "special_order", name: "Særordre", ability: "Sabotage", from: 2, core: true, text: "Integritet −1 i din zone. ORACLE broadcaster zonen — aldrig navnet." },
  { id: "forger", name: "Forfalsker", ability: "Forfalskning", from: 2, text: "Vælg en spiller. Vedkommendes private resultat denne uge er falsk, men troværdigt." },
  { id: "crawler", name: "Skaktløber", ability: "Skakt", from: 1, text: "Ryk til en vilkårlig zone gennem vedligeholdelsesskakterne." },
  { id: "jammer", name: "Støjsender", ability: "Støj", from: 2, text: "Vælg en zone. Alle informationsevner brugt i eller på zonen giver: \"Signal forstyrret.\"" },
];

export type RoleId = CrewRoleId | SynthRoleId;

export const weeks = [
  { n: 1, name: "Awakening", text: "I vågner i tilfældige zoner. Informationsevner og Skakt er aktive. Intet tribunal." },
  { n: 2, name: "First Anomaly", text: "Sabotage og de øvrige syntetiker-evner låses op. Første tribunal fredag." },
  { n: 3, name: "Broken Trust", text: "Første pågribelse er mulig." },
  { n: 4, name: "Containment Failure", text: "ORACLE forsegler én zone hele ugen. Ingen ind, ingen ud." },
  { n: 5, name: "Last Transmission", text: "Positionsloggen fra uge 1 frigives. Gamle alibier kan tjekkes." },
  { n: 6, name: "Final Protocol", text: "Tribunalet sender direkte i kryo. Derefter afsløres alle roller." },
];

export interface BalanceRow {
  players: number;
  crew: number;
  synths: number;
  integrity: number;
}

export const balance: BalanceRow[] = [
  { players: 5, crew: 4, synths: 1, integrity: 4 },
  { players: 6, crew: 5, synths: 1, integrity: 4 },
  { players: 7, crew: 5, synths: 2, integrity: 7 },
  { players: 8, crew: 6, synths: 2, integrity: 7 },
];
