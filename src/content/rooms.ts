import type { SectionId } from "./game.ts";
import type { SystemStatus } from "./systems.ts";

/** A room ability works while Monday's status is at least this. */
export const ROOM_ABILITY_MIN = 3;
/** A breakdown hits the whole ship while Monday's status is at most this. */
export const BREAKDOWN_AT = 1;

export interface Room {
  id: SectionId;
  ability: { name: string; target: string; text: string };
  breakdown: { name: string; text: string };
}

export const rooms: Room[] = [
  { id: "C", ability: { name: "Iltreserve", target: "Intet", text: "Livsstøtte kan ikke rammes af Uro, og du farer ikke vild denne uge." }, breakdown: { name: "Iltmangel", text: "Arbejde tæller kun i sektioner, hvor mindst to spillere står efter bevægelse." } },
  { id: "B", ability: { name: "Obduktion", target: "Et lig", text: "ORACLE fortæller, om liget var et syntetikerdrab eller et alienangreb. Informationsevne." }, breakdown: { name: "Lukket afdeling", text: "En Afløser kan ikke vågne. Slår et ekko 5, bliver det Ekko." } },
  { id: "E", ability: { name: "Sensorfeje", target: "En zone", text: "ORACLE fortæller, hvor mange spillere der står i zonen efter bevægelse. Informationsevne." }, breakdown: { name: "Højttaler død", text: "ORACLE læser ingen beskeder op i #shipwide. Ekkoer er tavse." } },
  { id: "F", ability: { name: "Omdirigér", target: "En sektion", text: "Motorrum −1, den valgte sektion +1." }, breakdown: { name: "Skakter lukket", text: "Skakt virker ikke. Skaktløberen rykker som alle andre." } },
  { id: "D", ability: { name: "Værktøj", target: "Intet", text: "Næste uge giver dit arbejde +2 i stedet for +1, uanset sektion." }, breakdown: { name: "Ingen reservedele", text: "Ingeniørens reparation giver +1 i stedet for +2." } },
  { id: "A", ability: { name: "Kapsel", target: "Intet", text: "Du kan ikke dræbes eller angribes af alienen denne uge." }, breakdown: { name: "Kryo svigter", text: "Tribunalet kan ikke sende nogen i kryo denne uge." } },
];

/** Sections whose room ability can be used this week, from Monday's status. */
export const activeAbilities = (status: SystemStatus): SectionId[] => rooms.filter((r) => status[r.id] >= ROOM_ABILITY_MIN).map((r) => r.id);

/** Sections whose breakdown is in force this week, from Monday's status. */
export const activeBreakdowns = (status: SystemStatus): SectionId[] => rooms.filter((r) => status[r.id] <= BREAKDOWN_AT).map((r) => r.id);
