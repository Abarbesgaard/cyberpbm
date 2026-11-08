import { SectionHeader } from "@/components/SectionHeader";
import { balance } from "@/content/game";

export function Balance() {
  return (
    <section id="balance" className="border-t border-cp-border px-8 py-24 md:px-16">
      <SectionHeader
        eyebrow="Sektion IX // Balance"
        intro="Integritet er syntetikernes ur. Hver sabotage trækker én; Ingeniøren kan reparere op til startværdien. Når uret når 0, vinder syntetikerne. Det tvinger dem til at handle — og handlinger efterlader spor."
      >
        Integrity <span className="text-cp-red-bright">Clock</span>
      </SectionHeader>
      <div className="max-w-[720px] overflow-x-auto">
        <table className="w-full border-collapse font-mono text-[0.8rem]">
          <thead>
            <tr className="text-left text-[0.6rem] tracking-[0.15em] uppercase text-cp-yellow">
              {["Spillere", "Besætning", "Syntetikere", "Integritet"].map((h) => (
                <th key={h} className="border-b border-cp-border-bright px-4 py-3">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {balance.map((b) => (
              <tr key={b.players} className="text-cp-off hover:bg-cp-panel2">
                <td className="border-b border-cp-border px-4 py-3">{b.players}</td>
                <td className="border-b border-cp-border px-4 py-3">{b.crew}</td>
                <td className="border-b border-cp-border px-4 py-3 text-cp-red-bright">{b.synths}</td>
                <td className="border-b border-cp-border px-4 py-3">{b.integrity}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p className="mt-4 font-mono text-[0.65rem] tracking-[0.1em] uppercase text-cp-mid">
          Testværdier — ikke dokumenteret balance. Første test: 6 spillere, 1 syntetiker.
        </p>
      </div>
    </section>
  );
}
