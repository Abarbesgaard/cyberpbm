import { test } from "node:test";
import assert from "node:assert/strict";
import { SYSTEM_MAX, scenarios } from "../src/content/game.ts";
import { resolveSystems, scenarioMet, startStatus } from "../src/content/systems.ts";

test("arbejde løfter systemet og stopper ved max", () => {
  const r = resolveSystems(startStatus(), { week: 1, workers: { B: 4 } });
  assert.equal(r.status.B, SYSTEM_MAX);
  assert.equal(r.delta.B, SYSTEM_MAX - 3);
});

test("forfald rammer kun systemer uden arbejde, og først fra uge 2", () => {
  assert.deepEqual(resolveSystems(startStatus(), { week: 1 }).status, startStatus());
  const r = resolveSystems(startStatus(), { week: 2, workers: { A: 1 }, repairs: ["C"] });
  assert.equal(r.status.A, 4);
  assert.equal(r.status.C, 5);
  assert.equal(r.status.B, 2);
});

test("sabotage og forfald kan nå 0, og det giver et fejlet system", () => {
  const r = resolveSystems(startStatus(), { week: 3, sabotage: ["C"] });
  assert.equal(r.status.C, 0);
  assert.deepEqual(r.failed, ["C"]);
});

test("arbejde i samme sektion kan opveje sabotage, og manglende arbejde kan ses", () => {
  const r = resolveSystems(startStatus(), { week: 2, workers: { D: 2 }, sabotage: ["D"] });
  assert.equal(r.delta.D, 0);
});

test("scenarier tjekkes mod minimumsværdier", () => {
  const distress = scenarios.find((s) => s.id === "distress")!;
  const s = startStatus();
  assert.equal(scenarioMet(distress, s), false);
  assert.equal(scenarioMet(distress, { ...s, E: 5, F: 5 }), true);
  const homeward = scenarios.find((s) => s.id === "homeward")!;
  const all4 = { A: 4, B: 4, C: 4, D: 4, E: 4, F: 4 };
  assert.equal(scenarioMet(homeward, s), false);
  assert.equal(scenarioMet(homeward, all4), true);
  assert.equal(scenarioMet(homeward, { ...all4, D: 3 }), false);
});
