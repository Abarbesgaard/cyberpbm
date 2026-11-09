import { SectionHeader } from "@/components/SectionHeader";
import { BLUFFS_PER_SYNTH, ROLE_TAG_CAP, balance, crewRoles } from "@/content/game";
import { rolePool } from "@/content/roleSetup";

const pools = balance.map((b) => rolePool(b.players));
const core = crewRoles.filter((r) => r.core).map((r) => r.name).join(", ");

const th = "border-b border-cp-border-bright px-4 py-3";
const td = "border-b border-cp-border px-4 py-3";

const setupSteps = [
  `${core} er altid i spil (systemerne skal kunne repareres).`,
  `Resten trækkes uden tilbagelægning fra kataloget — højst ${ROLE_TAG_CAP} roller med samme tag.`,
  "Rollerne fordeles hemmeligt. Ingen rolle må optræde to gange.",
  "Syntetikere: Særordre er altid i spil. En eventuel anden syntetiker trækker én af de øvrige syntetikerroller.",
  `Hver syntetiker får ${BLUFFS_PER_SYNTH} forskellige bluff-forslag, kun fra de ubrugte roller. Overlap mellem syntetikere er tilladt, men undgås, når puljen rækker.`,
];

export function Balance() {
  return (
    <section id="balance" className="hull px-8 py-24 md:px-16">
      <SectionHeader
        eyebrow="Sektion X // Balance"
        intro="Holdfordeling og rollepulje pr. spillerantal. Alle tal er offentlige — hvilke roller der faktisk er om bord, er ikke."
      >
        Role <span className="text-cp-red-bright">Pool</span>
      </SectionHeader>
      <div className="max-w-[960px] overflow-x-auto">
        <table className="w-full min-w-[640px] border-collapse font-mono text-[0.8rem]">
          <thead>
            <tr className="text-left text-[0.6rem] tracking-[0.15em] uppercase text-cp-yellow">
              {["Spillere", "Besætning", "Syntetikere", `Roller i spil / ${crewRoles.length}`, "Ubrugte roller", "Bluff-forslag"].map((h) => (
                <th key={h} className={th}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {pools.map((b) => (
              <tr key={b.players} className="text-cp-off hover:bg-cp-panel2">
                <td className={td}>{b.players}</td>
                <td className={td}>{b.crew}</td>
                <td className={`${td} text-cp-red-bright`}>{b.synths}</td>
                <td className={td}>{b.crew}</td>
                <td className={`${td} text-cp-cyan`}>{b.unused}</td>
                <td className={td}>
                  {b.synths} × {BLUFFS_PER_SYNTH} = {b.bluffsNeeded}
                  <span className="ml-2 text-cp-mid">{b.distinctBluffs ? "adskilte" : "overlap"}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <p className="mt-4 font-mono text-[0.65rem] tracking-[0.1em] uppercase text-cp-mid">
          Testværdier — ikke dokumenteret balance. Første test: 6 spillere, 1 syntetiker.
        </p>
      </div>

      <div className="mt-12 max-w-[960px] bezel p-6 md:p-8">
        <div className="mb-2 font-mono text-[0.6rem] tracking-[0.2em] uppercase text-cp-yellow">// ORACLE — rollepulje</div>
        <h3 className="mb-4 font-head text-[1rem] tracking-[0.08em] uppercase text-cp-white">Sådan trækkes rollerne</h3>
        <ol className="list-decimal space-y-2 pl-6 text-[0.9rem] leading-[1.6] text-cp-off">
          {setupSteps.map((s) => <li key={s}>{s}</li>)}
        </ol>
        <p className="mt-4 text-[0.85rem] leading-[1.6] text-cp-mid">
          Tabellen viser kun antal. Hvilke roller der er i spil i en given kampagne, offentliggøres aldrig.
        </p>
      </div>
    </section>
  );
}
