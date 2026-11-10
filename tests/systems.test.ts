import { test } from "node:test";
import assert from "node:assert/strict";
import { SYSTEM_MAX } from "../src/content/game.ts";
import { resolveSystems, startStatus } from "../src/content/systems.ts";

test("alle i en sektion arbejder, og systemet stopper ved max", () => {
  const r = resolveSystems(startStatus(), { week: 1, workers: { B: 4 } });
  assert.equal(r.status.B, SYSTEM_MAX);
  assert.equal(r.delta.B, SYSTEM_MAX - 3);
});

test("forfald rammer alle systemer hver uge fra uge 2", () => {
  assert.deepEqual(resolveSystems(startStatus(), { week: 1 }).status, startStatus());
  const r = resolveSystems(startStatus(), { week: 3, workers: { A: 1, B: 2 }, repairs: ["C"] });
  assert.equal(r.status.A, 3);
  assert.equal(r.status.B, 4);
  assert.equal(r.status.C, 4);
  assert.equal(r.status.D, 2);
});

test("et system på 0 svigter med det samme", () => {
  const r = resolveSystems({ ...startStatus(), C: 1 }, { week: 3, workers: { C: 1 }, sabotage: ["C"] });
  assert.equal(r.status.C, 0);
  assert.deepEqual(r.failed, ["C"]);
  assert.deepEqual(resolveSystems(startStatus(), { week: 2 }).failed, []);
});

test("en syntetiker, der saboterer alene, sænker systemet 2", () => {
  const r = resolveSystems(startStatus(), { week: 2, workers: { D: 1 }, sabotage: ["D"] });
  assert.equal(r.delta.D, -2);
});
