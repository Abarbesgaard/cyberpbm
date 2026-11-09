/** What an eliminated player becomes. Special fates exist once per campaign; Ekko is unlimited. */
export interface Fate {
  id: string;
  name: string;
  /** Who may choose it. */
  who: string;
  text: string;
  pick: string;
  reply: string;
  unique: boolean;
}

export const fates: Fate[] = [
  { id: "earth", name: "Jorden", who: "Døde og frosne", text: "Du er Kessler-Tanakas kontrolcenter. Rumlog: vælg en zone. ORACLE sender ugens fulde log for den: hvem der stod der, hvem der gik ind og ud, hvem der arbejdede, og hvad der skete med systemet — aldrig hvem der saboterede. Du taler kun gennem ORACLE.", pick: "En zone", reply: "Lastrum: Peter (fra Rygraden), Sara (blev). Ud: Anna → Broen. Arbejde: Sara. Lastrum 3 → 2 (sabotage −2, arbejde +1).", unique: true },
  { id: "ghost", name: "Spøgelse", who: "Døde og frosne", text: "Du hjemsøger skibet. Hjemsøg: vælg en spiller. ORACLE fortæller, hvor vedkommende står efter bevægelse.", pick: "En spiller", reply: "Sara står i Lastrum.", unique: true },
  { id: "relief", name: "Afløser", who: "Kun dræbte", text: "En reservekapsel åbner. Du vågner i Hypersøvn som aktiv spiller uden evne: bevægelse, arbejde og stemme. ORACLE broadcaster, at du er vågen.", pick: "Intet", reply: "KAPSEL ÅBNET: Sara er vågen i Hypersøvn.", unique: true },
  { id: "echo", name: "Ekko", who: "Alle", text: "Standard, når de andre er taget, eller du ikke vælger. Kun det, alle ekkoer kan.", pick: "Intet", reply: "—", unique: false },
];
