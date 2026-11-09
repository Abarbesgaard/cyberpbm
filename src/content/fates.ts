/** What an eliminated player becomes. Special fates exist once per campaign; Ekko is unlimited. */
export interface Fate {
  id: string;
  /** d6 result(s) that give this fate. */
  roll: string;
  name: string;
  /** Who may get it. */
  who: string;
  text: string;
  pick: string;
  reply: string;
  unique: boolean;
}

export const fates: Fate[] = [
  { id: "earth", roll: "1", name: "Jorden", who: "Døde og frosne", text: "Du er Kessler-Tanakas kontrolcenter. Rumlog: vælg en zone. ORACLE sender ugens fulde log for den: hvem der stod der, hvem der gik ind og ud, hvem der arbejdede, og hvad der skete med systemet — aldrig hvem der saboterede.", pick: "En zone", reply: "Lastrum: Peter (fra Rygraden), Sara (blev). Ud: Anna → Broen. Arbejde: Sara. Lastrum 3 → 2 (sabotage −2, arbejde +1).", unique: true },
  { id: "ghost", roll: "2", name: "Spøgelse", who: "Døde og frosne", text: "Du hjemsøger skibet. Hjemsøg: vælg en spiller. ORACLE fortæller, hvor vedkommende står efter bevægelse.", pick: "En spiller", reply: "Sara står i Lastrum.", unique: true },
  { id: "alien", roll: "3–4", name: "Alien", who: "Døde og frosne", text: "Du skifter side og spiller nu for syntetikerne. Du lever i skakterne, og ingen ved hvor. Ryk én zone om ugen, og vælg Angreb (en ensom besætning dør på 4–6, syntetikere ignoreres) eller Uro (den, der rykker ind i en zone, farer vild). To med Bekæmp i din zone smider dig ud.", pick: "Ryk + Angreb eller Uro", reply: "Angreb: Anna var alene. Intet sker.", unique: true },
  { id: "relief", roll: "5", name: "Afløser", who: "Kun dræbte", text: "En reservekapsel åbner. Du vågner i Hypersøvn som aktiv spiller uden evne: bevægelse, arbejde og stemme. ORACLE broadcaster, at du er vågen.", pick: "Intet", reply: "KAPSEL ÅBNET: Sara er vågen i Hypersøvn.", unique: true },
  { id: "echo", roll: "6", name: "Ekko", who: "Alle", text: "Også resultatet, når skæbnen er taget eller ikke gælder for dig. Kun det, alle ekkoer kan.", pick: "Intet", reply: "—", unique: false },
];
