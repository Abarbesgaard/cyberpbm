# USCSS Cassandra — Hunt Protocol

Et seksugers social deduction-spil, der spilles asynkront i Slack. Besætningen skal finde de skjulte syntetikere — og fysisk nå frem til dem på skibet — før det er for sent. Inspireret af Among Us og Blood on the Clocktower.

- `docs/design.md` — fuldt design (v0.6)
- `docs/player-rules.md` — spillerregler
- `docs/gm-rules.md` — ORACLE-håndbog for spillederen
- `src/content/game.ts` — zoner, roller, uger og balance, der bruges af websitet

## Udvikling

```sh
npm ci
npm run dev
npm run build
```

Deployes til GitHub Pages ved push til `main`.
