# USCSS Cassandra

Et seksugers social deduction-spil, der spilles asynkront i Slack. Besætningen skal holde skibets seks systemer i live og fuldføre kampagnens scenarie — mens skjulte syntetikere saboterer indefra. Tribunalet kan sende dem i kryo, men kun skibet afgør sejren.

- `docs/design.md` — fuldt design (v0.22)
- `docs/player-rules.md` — spillerregler
- `docs/gm-rules.md` — ORACLE-håndbog for spillederen
- `docs/scenarios.md` — scenariebog: scenarier, arkiver, krisetabel (d20) og sektionstabel (d6)
- `src/content/game.ts` — zoner, rollekatalog (stabile rolle-id'er), scenarier og balance, der bruges af websitet
- `src/content/roleSetup.ts` — ren TypeScript-modul til rolleopsætning og validering (unikke roller, bluff-forslag)
- `src/content/systems.ts` — ren afgørelse af skibssystemer (arbejde, reparation, sabotage, forfald, vedligehold) og scenarietjek
- `src/content/crises.ts` — krisetabel og rul (d20, d6, dobbeltkrise)
- `src/content/kills.ts` — ren afgørelse af drab (alene med offeret, én pr. syntetiker)

## Udvikling

```sh
npm ci
npm run dev
npm run build
npm test      # node --test, ingen ekstra afhængigheder (kræver Node 22.18+)
```

Deployes til GitHub Pages ved push til `main`.
