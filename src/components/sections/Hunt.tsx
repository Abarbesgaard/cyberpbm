import { useRole } from "@/context/RoleContext";
import { SectionHeader } from "@/components/SectionHeader";

const intro = {
  player: "Det er ikke nok at vide, hvem det er. Tribunalet udsteder en kryo-ordre. Derefter skal mindst to af jer stå i samme rum som målet — og begge skal holde fast.",
  gm: "Pågribelse afgøres efter bevægelse og evner. Tæl fasthold-point blandt andre spillere i målets zone. Offentliggør antal, aldrig navne.",
  default: "Neutralisering kræver både en beslutning og fysisk tilstedeværelse. Man kan være sikker på, hvem syntetikeren er, og stadig ikke nå frem.",
};

const steps = [
  { label: "Tribunal", title: "Kryo-ordre", body: "Hver fredag stemmer alle aktive spillere. Flertal af aktive udsteder en kryo-ordre. Kun én ad gangen; en ny erstatter den gamle. ORACLE pejler målets zone én gang." },
  { label: "Jagt", title: "Find målet", body: "Målet ved, at jagten er gået ind. Det kan blive, flygte eller vente på at blive hentet. Ordren gælder, indtil målet er pågrebet eller erstattet." },
  { label: "To-mands-reglen", title: "Pågribelse", body: "Hver spiller i målets zone med Fasthold: ja giver 1 point. Sikkerhedschefen giver 2. To point = kryo." },
  { label: "Spor", title: "Den tavse hånd", body: "ORACLE oplyser, hvor mange der var til stede, og hvor mange point de gav. En manglende hånd er mistanke — aldrig bevis." },
];

export function Hunt() {
  const { role } = useRole();
  return (
    <section id="hunt" className="border-t border-cp-border px-8 py-24 md:px-16">
      <SectionHeader eyebrow="Sektion V // Neutralisering" intro={intro[role ?? "default"]}>
        The <span className="text-cp-red-bright">Hunt</span>
      </SectionHeader>

      <div className="grid grid-cols-1 gap-px border border-cp-border-bright bg-cp-border md:grid-cols-2 lg:grid-cols-4">
        {steps.map((s, i) => (
          <div key={s.title} className="bg-cp-dark p-8">
            <div className="mb-1.5 font-mono text-[0.55rem] tracking-[0.2em] uppercase text-cp-red-bright">
              {String(i + 1).padStart(2, "0")} // {s.label}
            </div>
            <h3 className="mb-4 font-head text-[1.6rem] font-extrabold uppercase leading-none">{s.title}</h3>
            <p className="text-[0.85rem] leading-[1.7] text-cp-off">{s.body}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
        <pre className="whitespace-pre-wrap border border-cp-red bg-cp-dark p-6 font-mono text-[0.8rem] leading-[1.8] text-cp-off">
{`ORACLE // SHIPWIDE // UGE 4
PÅGRIBELSE: Forsøgt i Livsstøtte.
1 til stede ud over målet.
0 fasthold-point. Mislykket.`}
        </pre>
        <div className="border border-cp-border-bright bg-cp-panel p-6">
          <div className="mb-2 font-mono text-[0.6rem] tracking-[0.2em] uppercase text-cp-yellow">// Kryo</div>
          <ul className="space-y-2 text-[0.9rem] leading-[1.6] text-cp-off">
            <li>Ingen ordre, ingen evne, ingen sektorkanal.</li>
            <li>Én besked om dagen i #shipwide som <strong className="text-cp-yellow">AI-ekko</strong> — uden at afsløre rolle eller hold.</li>
            <li>Én <strong className="text-cp-yellow">spøgelsesstemme</strong> til ét tribunal resten af spillet.</li>
            <li>Rollen afsløres først ved spillets afslutning.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
