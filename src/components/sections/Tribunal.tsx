import { useRole } from "@/context/RoleContext";
import { SectionHeader } from "@/components/SectionHeader";
import { fates } from "@/content/fates";

const intro = {
  player: "Hver fredag stemmer I. Får én et flertal af de aktive spillere, sendes vedkommende i kryo. Vælger I forkert, mister I en af jeres egne.",
  gm: "Tæl stemmerne fra ordrerne, plus brugte spøgelsesstemmer. Har ét navn flertal af de aktive spillere, sendes vedkommende i kryo. Broadcast navn og antal stemmer — aldrig hvem der stemte.",
  default: "Neutralisering er en fælles beslutning. Ingen kan bevise noget. I kan kun overbevise hinanden.",
};

const steps = [
  { label: "Man–Fre", title: "Debat", body: "Fremlæg mistanke via højttaleren — anonymt — eller med navn i sektorkanalen. Sammenhold påstande, alibier og systemtal. Ingen kan bevise sin rolle." },
  { label: "Fre 18:00", title: "Stemme", body: "Din stemme står i ordren: et navn eller Ingen. Stemmerne er hemmelige. Du må sige, hvad du stemte — og lyve om det." },
  { label: "Weekend", title: "Dom", body: "Får ét navn flertal af de aktive spillere, sendes vedkommende i kryo. Stemmelighed eller intet flertal: ingen dom." },
  { label: "Man 09:00", title: "Udfald", body: "ORACLE broadcaster navn og antal stemmer. Aldrig rollen og aldrig hvem der stemte. Den frosne bliver et ekko." },
];

export function Tribunal() {
  const { role } = useRole();
  return (
    <section id="tribunal" className="hull px-8 py-24 md:px-16">
      <SectionHeader eyebrow="Sektion VI // Neutralisering" intro={intro[role ?? "default"]}>
        The <span className="text-cp-red-bright">Tribunal</span>
      </SectionHeader>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        {steps.map((s, i) => (
          <div key={s.title} className="bezel bezel-screws p-8">
            <div className="mb-1.5 font-mono text-[0.55rem] tracking-[0.2em] uppercase text-cp-red-bright">
              {String(i + 1).padStart(2, "0")} // {s.label}
            </div>
            <h3 className="mb-4 font-head tracking-[0.08em] text-[1.05rem] uppercase leading-snug">{s.title}</h3>
            <p className="text-[0.85rem] leading-[1.7] text-cp-off">{s.body}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="console p-4 sm:p-5 [--chamfer:16px]">
        <div className="mb-3 flex items-center justify-between gap-3"><span className="plate">#shipwide // Broadcast</span><span className="flex gap-2" aria-hidden><span className="lamp lamp-red blink-slow" /><span className="lamp lamp-off" /></span></div>
        <pre className="crt crt-red m-[10px] whitespace-pre-wrap p-4 text-[1.1rem] leading-[1.4] sm:p-6 sm:text-[1.25rem]">
{`ORACLE // SHIPWIDE // UGE 4
TRIBUNAL: 4 af 6 stemmer mod Anna.
Anna er overført til kryo.

LIG FUNDET: Sara, Lastrum.`}
        </pre>
        </div>
        <div className="bezel bezel-screws p-6">
          <div className="mb-2 font-mono text-[0.6rem] tracking-[0.2em] uppercase text-cp-red-bright">// Drab</div>
          <ul className="space-y-2 text-[0.9rem] leading-[1.6] text-cp-off">
            <li>Hver syntetiker kan dræbe <strong className="text-cp-red-bright">én gang</strong> pr. kampagne, fra uge 3 — i stedet for sin evne den uge.</li>
            <li>Kun når drabsmand og mål står <strong className="text-cp-red-bright">alene</strong> i zonen efter bevægelse, og målet ikke er under vagt. Ellers sker intet, og drabet er ikke brugt.</li>
            <li>Offeret dør på vej ind og ser aldrig, hvem der kom. ORACLE broadcaster navn og zone — aldrig rolle.</li>
          </ul>
        </div>
        <div className="bezel bezel-screws p-6">
          <div className="mb-2 font-mono text-[0.6rem] tracking-[0.2em] uppercase text-cp-yellow">// Ekko — døde og frosne</div>
          <ul className="space-y-2 text-[0.9rem] leading-[1.6] text-cp-off">
            <li>Ingen bevægelse, evne eller sektorkanal. Rollen afsløres først ved spillets afslutning.</li>
            <li>Taler <strong className="text-cp-yellow">kun gennem ORACLE</strong> — via højttaleren, som alle andre. Alt, et ekko siger, er vidneudsagn.</li>
            <li><strong className="text-cp-yellow">Vedligehold:</strong> vælg hver uge én sektion. Den får intet forfald.</li>
            <li>Én <strong className="text-cp-yellow">spøgelsesstemme</strong> til ét tribunal resten af spillet.</li>
          </ul>
        </div>
      </div>

      <div className="mt-12">
        <div className="mb-2 font-mono text-[0.6rem] tracking-[0.2em] uppercase text-cp-yellow">// Skæbne — hver findes én gang pr. kampagne</div>
        <p className="mb-6 max-w-[720px] text-[0.9rem] leading-[1.6] text-cp-off">
          Når du bliver ekko, ruller ORACLE en d6 i hemmelighed. Er skæbnen taget, eller gælder den ikke for dig, bliver du Ekko. Hvem der har hvilken, er hemmeligt — undtagen Afløseren.
        </p>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {fates.map((f) => (
            <div key={f.id} className="bezel bezel-screws p-6">
              <div className="mb-1.5 font-mono text-[0.55rem] tracking-[0.2em] uppercase text-cp-yellow">
                d6: {f.roll} // {f.unique ? "Én gang" : "Ubegrænset"} // {f.who}
              </div>
              <h3 className="mb-3 font-head tracking-[0.08em] text-[1.05rem] uppercase">{f.name}</h3>
              <p className="text-[0.85rem] leading-[1.7] text-cp-off">{f.text}</p>
              {f.reply !== "—" && (
                <p className="mt-3 font-mono text-[0.75rem] text-cp-mid">ORACLE: “{f.reply}”</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
