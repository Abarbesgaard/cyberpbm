import { useRole } from "@/context/RoleContext";
import { SectionHeader } from "@/components/SectionHeader";

const intro = {
  player: "Samme ritual hver uge. Mandag læser du, hele ugen taler du, fredag sender du én ordre. Resten klarer ORACLE.",
  gm: "Samme ritual hver uge. Du sender rapporter mandag, lukker ordrer fredag 18:00 og afgør alt i fast rækkefølge i weekenden.",
  default: "Spillet kører asynkront i Slack. Hver uge følger det samme ritual: rapport, samtale, ordre, afgørelse.",
};

type Entry = { time: string; channel: string; title: string; body: string; actor: "oracle" | "crew" };

const log: Entry[] = [
  { time: "Man 09:00", channel: "#shipwide", actor: "oracle", title: "Broadcast", body: "ORACLE poster integriteten for alle syv sektioner — kun tallene, ingen ændringer —, hvem der er død, og tribunalets dom. Sabotage nævnes aldrig." },
  { time: "Man 09:00", channel: "Privat", actor: "oracle", title: "Din rapport", body: "Din zone, hvem der står der med dig, og svaret på din evne. Sidste linje fortæller, hvad du kan i den kommende uge." },
  { time: "Man 09:00", channel: "Sektorkanal", actor: "oracle", title: "Nye rum", body: "Din bevægelse sker nu. Du flyttes til kanalen for din nye zone. Dem, du møder dér, er de eneste, du kan tale privat med denne uge." },
  { time: "Man–Fre", channel: "Højttaler + sektor", actor: "crew", title: "Samtale", body: "Skriv privat til ORACLE, og den læser beskeden op i #shipwide via højttaleren — uden afsender. I sektorkanalen taler du med navn til dem i samme zone. Ingen DM'er mellem spillere." },
  { time: "Fre 18:00", channel: "Ordre", actor: "crew", title: "Ordre og stemme", body: "Én besked til ORACLE: bevægelse, én aktivering (rolleevne, sektionens evne, Bekæmp — eller sabotage, hvis du er syntetiker) og din tribunal-stemme. Du vedligeholder automatisk, der hvor du står. Ekkoer sender evt. Rumlog eller Hjemsøg. Ingen ordre = bliv." },
  { time: "Weekend", channel: "Radiotavshed", actor: "oracle", title: "Afgørelse", body: "ORACLE afgør i fast rækkefølge ud fra, hvor alle stod i ugen: drab, støj og forfalskning, evner, integritet, tribunal. Rammer en sektion 0, slutter spillet straks. Bevægelsen sker mandag." },
];

const orderSheet = `UGE:        3
BEVÆGELSE:  Ryk → Livsstøtte
EVNE:       Pejling → Peter
TRIBUNAL:   Anna`;

export function WeekCycle() {
  const { role } = useRole();
  return (
    <section id="week" className="hull-alt px-8 py-24 md:px-16">
      <SectionHeader eyebrow="Sektion V // Ugen" intro={intro[role ?? "default"]}>
        Flight <span className="text-cp-yellow">Log</span>
      </SectionHeader>
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)]">
        <ol className="relative border-l border-cp-border-bright">
          {log.map((e) => (
            <li key={e.title} className="relative mb-8 pl-8 last:mb-0">
              <span
                className={`absolute top-1 -left-[7px] block h-3 w-3 border ${
                  e.actor === "oracle" ? "border-cp-cyan bg-cp-dark" : "border-cp-yellow bg-cp-yellow"
                }`}
              />
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-[0.6rem] tracking-[0.2em] uppercase">
                <span className="text-cp-yellow">{e.time}</span>
                <span className="border border-cp-border-bright px-1.5 py-0.5 text-cp-mid">{e.channel}</span>
                <span className={e.actor === "oracle" ? "text-cp-cyan" : "text-cp-off"}>
                  {e.actor === "oracle" ? "ORACLE" : "Spillerne"}
                </span>
              </div>
              <h3 className="mt-1.5 font-head tracking-[0.08em] text-[1.05rem] uppercase leading-tight">{e.title}</h3>
              <p className="mt-1 max-w-[640px] text-[0.95rem] leading-[1.6] text-cp-off">{e.body}</p>
            </li>
          ))}
        </ol>
        <div className="self-start lg:sticky lg:top-28">
          <div className="console p-4 sm:p-5 [--chamfer:16px]">
            <div className="mb-3 flex items-center justify-between gap-3"><span className="plate">Ordreark // Fredag</span><span className="flex gap-2" aria-hidden><span className="lamp lamp-amber" /><span className="lamp lamp-off" /></span></div>
            <pre className="crt crt-amber m-[10px] overflow-x-auto p-5 text-[1.1rem] leading-[1.4] sm:p-6 sm:text-[1.25rem]">{orderSheet}</pre>
          </div>
        </div>
      </div>
    </section>
  );
}
