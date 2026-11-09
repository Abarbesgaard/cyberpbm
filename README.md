# USCSS Cassandra — Hunt Protocol

Et seksugers social deduction-spil, der spilles asynkront i Slack. Besætningen skal finde de skjulte syntetikere — og fysisk nå frem til dem på skibet — før det er for sent. Hver kampagne har ét scenarie, og skibets seks systemer skal holdes i live.

- `docs/design.md` — fuldt design (v0.12)
- `docs/player-rules.md` — spillerregler
- `docs/gm-rules.md` — ORACLE-håndbog for spillederen
- `src/content/game.ts` — zoner, rollekatalog (stabile rolle-id'er), uger og balance, der bruges af websitet
- `src/content/roleSetup.ts` — ren TypeScript-modul til rolleopsætning og validering (unikke roller, bluff-forslag)
- `src/content/systems.ts` — ren afgørelse af skibssystemer (arbejde, reparation, sabotage, forfald, vedligehold) og scenarietjek
- `src/content/kills.ts` — ren afgørelse af drab (alene med offeret, én pr. syntetiker)

## Udvikling

```sh
npm ci
npm run dev
npm run build
npm test      # node --test, ingen ekstra afhængigheder (kræver Node 22.18+)
```

Deployes til GitHub Pages ved push til `main`.
