import { SectionHeader } from "@/components/SectionHeader";

export function Victory() {
  return (
    <section id="victory" className="hull-alt px-8 py-24 md:px-16">
      <SectionHeader eyebrow="Sektion II // Sejrsbetingelser">
        To hold. <span className="text-cp-red-bright">Ét skib.</span>
      </SectionHeader>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div className="bezel bezel-screws border-t-[6px] border-cp-yellow p-8">
          <div className="mb-2 font-mono text-[0.6rem] tracking-[0.2em] uppercase text-cp-yellow">
            Besætningen
          </div>
          <h3 className="mb-4 font-head tracking-[0.08em] text-[1.25rem] uppercase leading-snug">
            Kryo — eller fuldfør scenariet
          </h3>
          <p className="text-[0.95rem] leading-[1.7] text-cp-off">
            Efter uge 6 vinder I, hvis alle syntetikere er i kryo, <strong>eller</strong> hvis
            kampagnens scenarie er opfyldt. En fejl sender en uskyldig i kryo, og I mister en, der kunne arbejde og bruge en evne.
          </p>
        </div>
        <div className="bezel bezel-screws border-t-[6px] border-cp-red p-8">
          <div className="mb-2 font-mono text-[0.6rem] tracking-[0.2em] uppercase text-cp-red-bright">
            Syntetikerne
          </div>
          <h3 className="mb-4 font-head tracking-[0.08em] text-[1.25rem] uppercase leading-snug">
            Overlev — eller sluk lyset
          </h3>
          <p className="text-[0.95rem] leading-[1.7] text-cp-off">
            Et system står på 0 to uger i træk — så vinder I. Ellers skal mindst én af jer
            være aktiv efter Final Protocol, og scenariet må ikke være opfyldt. Jeres våben er
            løgn, mistillid og et vel­placeret hul i livsstøtten.
          </p>
        </div>
      </div>
    </section>
  );
}
