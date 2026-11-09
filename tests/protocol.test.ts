import { test } from "node:test";
import assert from "node:assert/strict";
import { finalOutcome, protocolHolder } from "../src/content/protocol.ts";
import { scenarios } from "../src/content/game.ts";
import { startStatus } from "../src/content/systems.ts";

const homeward = scenarios.find((s) => s.id === "homeward")!;
const met = { ...startStatus(), A: 4, B: 4, C: 4, D: 4, E: 4, F: 4 };

test("protokollen kræver flertal af de aktive spillere", () => {
  assert.equal(protocolHolder({ votes: { Anna: 3 }, activePlayers: 6, synthetics: [] }), null);
  assert.equal(protocolHolder({ votes: { Anna: 4 }, activePlayers: 6, synthetics: [] }), "Anna");
});

test("en syntetiker med protokollen vinder, selv om scenariet er opfyldt", () => {
  const vote = { votes: { Peter: 4 }, activePlayers: 6, synthetics: ["Peter"] };
  assert.equal(finalOutcome(vote, homeward, met, false), "synthetics");
});

test("besætning med protokollen eller intet flertal: scenariet afgør", () => {
  const crew = { votes: { Anna: 4 }, activePlayers: 6, synthetics: ["Peter"] };
  const none = { votes: { Peter: 3, Anna: 3 }, activePlayers: 6, synthetics: ["Peter"] };
  assert.equal(finalOutcome(crew, homeward, met, false), "crew");
  assert.equal(finalOutcome(none, homeward, met, false), "crew");
  assert.equal(finalOutcome(none, homeward, startStatus(), false), "synthetics");
  assert.equal(finalOutcome(crew, homeward, met, true), "synthetics");
});
