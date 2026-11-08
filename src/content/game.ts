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

export interface RoleDef {
  name: string;
  ability: string;
  text: string;
  tag: "OBSERVATION" | "ANALYSE" | "JAGT" | "URET" | "SOCIAL";
}

export const crewRoles: RoleDef[] = [
  { name: "Sikkerhedschef", ability: "Autoritet (passiv)", text: "Dit fasthold tæller 2 point. Du kan pågribe alene.", tag: "JAGT" },
  { name: "Navigatør", ability: "Pejling", text: "Vælg en spiller. Lær vedkommendes zone efter bevægelse.", tag: "JAGT" },
  { name: "Sensortekniker", ability: "Scan", text: "Vælg en zone. Lær hvor mange der står der. Ingen navne.", tag: "OBSERVATION" },
  { name: "Læge", ability: "Biometri", text: "Vælg en spiller i din zone. Lær hvor vedkommende stod ugen før.", tag: "ANALYSE" },
  { name: "Ingeniør", ability: "Reparér", text: "Står du i sidste uges sabotagezone: +1 integritet, og du lærer, om sabotøren stadig er der.", tag: "URET" },
  { name: "Arkivar", ability: "Krydsreference", text: "Vælg to spillere. Lær om de nogensinde har stået i samme zone.", tag: "ANALYSE" },
  { name: "Kommunikationsofficer", ability: "Åben linje", text: "Vælg en spiller. I får en privat kanal i en uge, uanset placering.", tag: "SOCIAL" },
];

export const synthModes = [
  { name: "Skakt", from: 1, text: "Ryk op til to zoner gennem vedligeholdelsesskakterne." },
  { name: "Sabotage", from: 2, text: "Integritet −1. ORACLE broadcaster zonen — aldrig navnet." },
  { name: "Forfalskning", from: 3, text: "Vælg en spiller. Vedkommendes private resultat denne uge er falsk, men troværdigt." },
];

export const weeks = [
  { n: 1, name: "Awakening", text: "I vågner i tilfældige zoner. Informationsevner og Skakt er aktive. Intet tribunal." },
  { n: 2, name: "First Anomaly", text: "Sabotage låses op. Første tribunal fredag." },
  { n: 3, name: "Broken Trust", text: "Forfalskning låses op. Første pågribelse er mulig." },
  { n: 4, name: "Containment Failure", text: "ORACLE forsegler én zone hele ugen. Ingen ind, ingen ud." },
  { n: 5, name: "Last Transmission", text: "Positionsloggen fra uge 1 frigives. Gamle alibier kan tjekkes." },
  { n: 6, name: "Final Protocol", text: "Tribunalet sender direkte i kryo. Derefter afsløres alle roller." },
];

export const balance = [
  { players: 5, crew: 4, synths: 1, integrity: 4 },
  { players: 6, crew: 5, synths: 1, integrity: 4 },
  { players: 7, crew: 5, synths: 2, integrity: 7 },
  { players: 8, crew: 6, synths: 2, integrity: 7 },
];
