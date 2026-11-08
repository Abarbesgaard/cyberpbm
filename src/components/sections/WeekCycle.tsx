import { useRole } from "@/context/RoleContext";
import { SectionHeader } from "@/components/SectionHeader";

const intro = {
  player: "Én ordre om ugen. Resten af tiden taler du — men kun med dem, der står i samme rum som dig, og alle på #shipwide.",
  gm: "Du åbner ugen med en rapport mandag, lukker ordrer fredag 18:00 og afgør i en fast rækkefølge over weekenden.",
  default: "Spillet kører asynkront i Slack. Én ordre om ugen, fire dage til at tale, lyve og planlægge.",
};

const steps = [
  { num: "01", when: "Mandag 09:00", title: "Rapport", body: "ORACLE broadcaster anomalier, pågribelser og kryo-ordrer. Privat får du din sektor-manifest og dit evneresultat." },
  { num: "02", when: "Man–Fre", title: "Tal", body: "#shipwide er offentlig. Sektorkanalen er kun for dem i din zone. Ingen DM'er — privat tale kræver, at I står samme sted." },
  { num: "03", when: "Fredag 18:00", title: "Ordre", body: "Bevægelse (bliv/ryk), evne, fasthold (ja/nej) og en tribunal-stemme." },
  { num: "04", when: "Weekend", title: "Afgørelse", body: "Bevægelse → forfalskning → evner → sabotage/reparation → pågribelse → tribunal → nye kanaler." },
];

const orderSheet = `UGE:        3
BEVÆGELSE:  Ryk → Livsstøtte
EVNE:       Pejling → Peter
FASTHOLD:   Ja
TRIBUNAL:   Anna`;

export function WeekCycle() {
  const { role } = useRole();
  return (
    <section id="week" className="bg-cp-panel px-8 py-24 md:px-16">
      <SectionHeader eyebrow="Sektion IV // Ugen" intro={intro[role ?? "default"]}>
        The <span className="text-cp-yellow">Cycle</span>
      </SectionHeader>
      <div className="grid grid-cols-1 gap-px border border-cp-border-bright bg-cp-border md:grid-cols-4">
        {steps.map((s) => (
          <div key={s.num} className="relative bg-cp-dark p-8">
            <div className="pointer-events-none absolute top-5 right-5 font-head text-[3.5rem] font-black leading-none text-cp-border-bright">
              {s.num}
            </div>
            <div className="mb-1.5 font-mono text-[0.55rem] tracking-[0.2em] uppercase text-cp-yellow">{s.when}</div>
            <h3 className="mb-4 font-head text-[1.8rem] font-extrabold uppercase leading-none">{s.title}</h3>
            <p className="text-[0.85rem] leading-[1.7] text-cp-off">{s.body}</p>
          </div>
        ))}
      </div>
      <div className="mt-10 max-w-[480px]">
        <div className="mb-2 font-mono text-[0.6rem] tracking-[0.2em] uppercase text-cp-mid">// Ordreark</div>
        <pre className="border border-cp-border-bright bg-cp-dark p-6 font-mono text-[0.8rem] leading-[1.8] text-cp-yellow">{orderSheet}</pre>
      </div>
    </section>
  );
}
