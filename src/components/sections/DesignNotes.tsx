import { SectionHeader } from "@/components/SectionHeader";

const changes = [
  { from: "Alle ekkoer er ens", to: "Ekkoer får en skæbne: Jorden, Spøgelse eller Afløser", why: "Hver skæbne findes én gang pr. kampagne. Flere døde bliver til forskellige ting, og ingen sidder passivt i fire uger." },
  { from: "Hunt Protocol", to: "USCSS Cassandra", why: "Der er ingen jagt længere. Spillet hedder bare skibets navn." },
  { from: "#shipwide er en åben chatkanal", to: "#shipwide er en anonym højttaler", why: "Spillere skriver til ORACLE, som læser beskeden op uden afsender. Ingen afsløres af at tale, og en underskrift beviser intet." },
  { from: "Fast krise pr. scenarie i uge 4", to: "Krisen rulles på d20", why: "Tyve mulige kriser gør hver kampagne forskellig. Rulles i uge 3, så spillerne kan planlægge." },
  { from: "Uge 4 og 5 er ens i alle kampagner", to: "Hvert scenarie har sin egen krise og sit eget arkiv", why: "Forsegling og logfrigivelse varierer, så hver kampagne spilles forskelligt. Begge kendes fra uge 1." },
  { from: "Besætningen vinder ved kryo eller scenarie", to: "Besætningen vinder kun ved scenariet", why: "Skibet skal hjem. Tribunalet stopper sabotagen, men er ikke et mål i sig selv." },
  { from: "Kryo-ordre, jagt og fasthold", to: "Tribunalet sender direkte i kryo", why: "Ingen kan fysisk holde en anden fast i Slack. Neutralisering er nu kun en fælles beslutning." },
  { from: "Sikkerhedschef: fasthold tæller 2 point", to: "Sikkerhedschef: Vagt", why: "Vælg en spiller, som ikke kan dræbes denne uge. En evne som de andre: vælg et mål, ORACLE svarer." },
  { from: "Evner beskrevet som regler", to: "Hver evne viser, hvad du vælger, og hvad ORACLE svarer", why: "Spilleren skal kun vælge. ORACLE holder styr på resten og fortæller i mandagsrapporten, hvad du kan." },
  { from: "System på 0 = syntetikerne vinder straks", to: "0 = KRITISK, én uge til nedbrud", why: "Sabotage i en tom sektion i uge 2 kunne vinde spillet, før nogen kunne reagere." },
  { from: "Forfald hver uge", to: "Forfald i uge 2, 4 og 6 — aldrig oveni sabotage", why: "Fire besætningsmedlemmer kan ikke dække seks sektioner hver uge, når hver flytning koster arbejde." },
  { from: "Uge 4 forsegler den mest saboterede zone", to: "Uge 4 forsegler Rygraden", why: "At forsegle et svækket system dømte det. Nu presses bevægelsen i stedet." },
  { from: "Ingen drab", to: "Hver syntetiker kan dræbe én gang", why: "Fra uge 3, kun alene med offeret. Liget broadcastes med zone — et nyt spor, ikke et bevis." },
  { from: "AI-ekko: én besked om dagen", to: "Ekko: frit ord + vedligehold", why: "Døde og frosne spillere har en ugentlig beslutning og en grund til at blive ved skærmen." },
  { from: "Ét fælles integritetsur", to: "Seks skibssystemer, ét pr. sektion", why: "Status offentliggøres hver uge. Arbejde, forfald og sabotage gør hvert rum til et spor." },
  { from: "Besætningen kan kun vinde ved jagt", to: "Ét scenarie pr. kampagne", why: "Besætningen har et mål ud over jagten. At blive og arbejde konkurrerer med at rykke og jage." },
  { from: "Alle syntetikere har Særordre med tre tilstande", to: "Én unik syntetikerrolle pr. syntetiker", why: "Samme princip som besætningen: én evne pr. spiller, hver rolle højst én gang." },
  { from: "Sabotage er en tilstand", to: "Særordre er altid i spil og saboterer", why: "Systemerne skal altid have en syntetiker, der kan trække dem ned. Spejler Ingeniøren." },
  { from: "Skakt: op til to zoner", to: "Skaktløber: vilkårlig zone", why: "To zoner via Rygraden nåede allerede alle zoner. Nu siger reglen det ærligt." },
  { from: "Forfalskning fra uge 3", to: "Forfalsker fra uge 2", why: "En rolle med kun én evne må ikke stå stille i to uger." },
  { from: "—", to: "Ny: Støjsender", why: "Blokerer information i én zone. Synligt — besætningen ved, at nogen forstyrrer, men ikke hvem." },
];

const questions = [
  "Er ét drab pr. syntetiker for meget ved 5 spillere, hvor besætningen kun er fire?",
  "Bliver spillere bange for at stå alene — og er det dårligt for arbejdet?",
  "Gør ekko-vedligehold forfald for let, når flere er døde?",
  "Er Særordre alene for svag ved 5–6 spillere, hvor der kun er én syntetiker?",
  "Afslører \"Signal forstyrret\", at Støjsender er i spil, og er det et problem?",
  "Er 11 roller for mange at holde styr på for nye spillere?",
  "Er Revisor (stemmerevision) for stærk mod syntetikere, der koordinerer stemmer?",
  "Gør det, at Ingeniør altid er i spil, rollen for let at bekræfte via reparationer?",
  "Har Skaktløber nok at bruge Skakt til?",
  "Er forfald for hårdt ved 5 spillere, hvor fire besætningsmedlemmer skal dække seks systemer?",
  "Er scenarierne lige svære? Hjemrejse kræver alle seks systemer.",
  "Bliver sabotage syntetikernes eneste strategi?",
  "Er et tribunal hver uge fra uge 2 for stærkt for besætningen ved 5–6 spillere?",
  "Er spøgelsesstemmen sjov, eller en formalitet?",
  "Gør Afløseren drab for svage?",
  "Er Vagt for stærk mod syntetikere, der kun har ét drab hver?",
];

export function DesignNotes() {
  return (
    <section id="notes" className="hull px-8 py-24 md:px-16">
      <SectionHeader eyebrow="Sektion XI // Designnoter">
        v0.7 → <span className="text-cp-yellow">v0.20</span>
      </SectionHeader>
      <div className="grid grid-cols-1 gap-4">
        {changes.map((c) => (
          <div key={c.to} className="bezel grid grid-cols-1 gap-2 p-5 md:grid-cols-[1fr_1fr_1.4fr] md:gap-6">
            <span className="font-mono text-[0.75rem] text-cp-mid line-through">{c.from}</span>
            <span className="font-head tracking-[0.08em] text-[0.85rem] uppercase text-cp-yellow">{c.to}</span>
            <span className="text-[0.9rem] text-cp-off">{c.why}</span>
          </div>
        ))}
      </div>
      <h3 className="mt-12 mb-4 font-head tracking-[0.08em] text-[1.05rem] uppercase">Åbne testspørgsmål</h3>
      <ol className="list-decimal space-y-2 pl-6 text-[0.95rem] text-cp-off">
        {questions.map((q) => <li key={q}>{q}</li>)}
      </ol>
    </section>
  );
}
