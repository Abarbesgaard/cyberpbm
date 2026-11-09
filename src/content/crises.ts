export interface Crisis {
  roll: number;
  name: string;
  text: string;
  /** Roll a d6 on the section table to find the affected section. */
  section?: boolean;
}

/** Week 4 crisis. ORACLE rolls a d20 on Monday of week 3 and announces the result. */
export const crises: Crisis[] = [
  { roll: 1, name: "Strømudfald", text: "Rygraden forsegles. Ingen kan rykke ind eller ud, heller ikke via Skakt." },
  { roll: 2, name: "Karantænezone", text: "Ingen kan rykke ind i sektionen, heller ikke via Skakt. Ud er tilladt.", section: true },
  { roll: 3, name: "Kommunikationsnedbrud", text: "Sektorkanalerne er lukket. Kun højttaleren i #shipwide virker." },
  { roll: 4, name: "Radiotavshed", text: "Højttaleren er slukket. ORACLE læser ingen beskeder op. Kun sektorkanalerne virker. Ekkoer er tavse." },
  { roll: 5, name: "Sensorblackout", text: "Alle informationsevner giver \"Signal forstyrret.\"" },
  { roll: 6, name: "Trykfald", text: "Sektionen mister 1 ekstra ved afgørelsen.", section: true },
  { roll: 7, name: "Brand", text: "Arbejde i sektionen tæller ikke. Reparation og vedligehold virker.", section: true },
  { roll: 8, name: "Skotter låst", text: "Dørene mellem sektioner er låst. Man kan kun rykke til og fra Rygraden. Skakt virker." },
  { roll: 9, name: "Skakter oversvømmet", text: "Skakt virker ikke. Skaktløberen rykker som alle andre." },
  { roll: 10, name: "Overbelastning", text: "Arbejde giver +2 i stedet for +1. Sabotage giver −3 i stedet for −2." },
  { roll: 11, name: "Optælling", text: "ORACLE oplyser i mandagsbroadcasten, hvor mange syntetikere der stadig er aktive." },
  { roll: 12, name: "Tribunal suspenderet", text: "Intet tribunal i uge 4." },
  { roll: 13, name: "Åben afstemning", text: "ORACLE offentliggør, hvem der stemte på hvem i uge 4's tribunal." },
  { roll: 14, name: "Nødbelysning", text: "Ingen drab kan lykkes i uge 4. Et forsøgt drab er ikke brugt." },
  { roll: 15, name: "Mørkelægning", text: "Lig broadcastes kun med navn, uden zone." },
  { roll: 16, name: "Lækket log", text: "ORACLE frigiver positionsloggen fra uge 2 i mandagsbroadcasten." },
  { roll: 17, name: "Ekkostorm", text: "Alle ekkoer får en ny spøgelsesstemme." },
  { roll: 18, name: "Selvreparation", text: "Sektionen får +2 ved afgørelsen.", section: true },
  { roll: 19, name: "Kaskadefejl", text: "Det laveste system mister 1 ekstra. Ved lighed: rul d6, indtil det rammer et af de laveste." },
  { roll: 20, name: "Dobbeltkrise", text: "Rul to gange mere, og brug begge. Ignorér nye 20'ere." },
];

export const DOUBLE_CRISIS = 20;

export const sectionTable = ["Hypersøvn", "Medlab", "Livsstøtte", "Lastrum", "Broen", "Motorrum"] as const;

const die = (sides: number, rand: () => number) => Math.floor(rand() * sides) + 1;

export interface CrisisRoll {
  roll: number;
  crisis: Crisis;
  section?: string;
}

/** Rolls the week 4 crisis. A 20 yields two further crises; repeated 20s are rerolled. */
export function rollCrisis(rand: () => number = Math.random): CrisisRoll[] {
  const resolve = (roll: number): CrisisRoll => {
    const crisis = crises[roll - 1];
    return { roll, crisis, section: crisis.section ? sectionTable[die(6, rand) - 1] : undefined };
  };
  const reroll = () => {
    let roll = die(20, rand);
    while (roll === DOUBLE_CRISIS) roll = die(20, rand);
    return resolve(roll);
  };
  const first = die(20, rand);
  return first === DOUBLE_CRISIS ? [reroll(), reroll()] : [resolve(first)];
}
