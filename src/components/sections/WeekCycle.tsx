import { useRole } from "@/context/RoleContext";
import { SectionHeader } from "@/components/SectionHeader";

const intro = {
  player: "Én ordre om ugen. Resten af tiden taler du — men kun med dem, der står i samme rum som dig, og alle på #shipwide.",
  gm: "Du åbner ugen med en rapport mandag, lukker ordrer fredag 18:00 og afgør i en fast rækkefølge over weekenden.",
  default: "Spillet kører asynkront i Slack. Én ordre om ugen, fire dage til at tale, lyve og planlægge.",
};

const steps = [
  { num: "01", when: "Mandag 09:00", title: "Rapport", body: "ORACLE broadcaster systemstatus, anomalier, pågribelser og kryo-ordrer. Privat får du din sektor-manifest og dit evneresultat." },
  { num: "02", when: "Man–Fre", title: "Tal", body: "#shipwide er offentlig. Sektorkanalen er kun for dem i din zone. Ingen DM'er — privat tale kræver, at I står samme sted." },
  { num: "03", when: "Fredag 18:00", title: "Ordre", body: "Bevægelse (bliv/ryk), evne, arbejde (ja/nej), fasthold (ja/nej) og en tribunal-stemme." },
  { num: "04", when: "Weekend", title: "Afgørelse", body: "Bevægelse → støj/forfalskning → evner → systemer → pågribelse → tribunal → nye kanaler." },
];

const orderSheet = `UGE:        3
BEVÆGELSE:  Ryk → Livsstøtte
EVNE:       Pejling → Peter
ARBEJDE:    Nej (kun ved Bliv)
FASTHOLD:   Ja
TRIBUNAL:   Anna`;

export function WeekCycle() {
  const { role } = useRole();
  return (
    <section id="week" className="hull-alt px-8 py-24 md:px-16">
      <SectionHeader eyebrow="Sektion V // Ugen" intro={intro[role ?? "default"]}>
        The <span className="text-cp-yellow">Cycle</span>
      </SectionHeader>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
        {steps.map((s) => (
          <div key={s.num} className="bezel bezel-screws relative p-8">
            <div className="pointer-events-none absolute top-5 right-5 font-crt text-[3.5rem] leading-none text-cp-border-bright">
              {s.num}
            </div>
            <div className="mb-1.5 font-mono text-[0.55rem] tracking-[0.2em] uppercase text-cp-yellow">{s.when}</div>
            <h3 className="mb-4 font-head tracking-[0.08em] text-[1.1rem] uppercase leading-snug">{s.title}</h3>
            <p className="text-[0.85rem] leading-[1.7] text-cp-off">{s.body}</p>
          </div>
        ))}
      </div>
      <div className="console mt-10 max-w-[520px] p-4 sm:p-5 [--chamfer:16px]">
        <div className="mb-3 flex items-center justify-between gap-3"><span className="plate">Ordreark // Privat DM</span><span className="flex gap-2" aria-hidden><span className="lamp lamp-amber" /><span className="lamp lamp-off" /></span></div>
        <pre className="crt crt-amber m-[10px] p-6 text-[1.25rem] leading-[1.4]">{orderSheet}</pre>
      </div>
    </section>
  );
}
