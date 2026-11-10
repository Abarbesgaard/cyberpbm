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
            Frys dem alle
          </h3>
          <p className="text-[0.95rem] leading-[1.7] text-cp-off">
            I vinder, så snart alle syntetikere er sendt i kryo af tribunalet. Systemerne er
            ikke målet, men uret: rammer ét 0, har I tabt. En forkert dom sender en uskyldig i
            kryo, og I mister en, der kunne arbejde og bruge en evne.
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
            Er mindst én af jer stadig aktiv efter tribunalet i uge 6, vinder I. Rammer et
            system 0, vinder I med det samme. Jeres våben er
            løgn, mistillid og et vel­placeret hul i livsstøtten.
          </p>
        </div>
      </div>
    </section>
  );
}
