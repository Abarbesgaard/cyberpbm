import { test } from "node:test";
import assert from "node:assert/strict";
import { activeAbilities, activeBreakdowns, rooms } from "../src/content/rooms.ts";
import { resolveSystems, startStatus } from "../src/content/systems.ts";
import { sectionIds } from "../src/content/game.ts";

test("hver sektion har præcis ét rum", () => {
  assert.deepEqual(rooms.map((r) => r.id).sort(), [...sectionIds].sort());
});

test("rumevner virker fra 3, nedbrud rammer ved 1 og derunder", () => {
  const status = { ...startStatus(), A: 1, B: 2, C: 0, E: 5 };
  assert.deepEqual(activeAbilities(status).sort(), ["D", "E", "F"]);
  assert.deepEqual(activeBreakdowns(status).sort(), ["A", "C"]);
});

test("Omdirigér flytter 1 fra Motorrum, Værktøj giver +1 ekstra", () => {
  const r = resolveSystems(startStatus(), { week: 3, rerouted: ["E"], tools: ["B"], workers: { B: 1 } });
  assert.equal(r.delta.F, -1);
  assert.equal(r.delta.E, 1);
  assert.equal(r.delta.B, 2);
});

test("reparation giver kun +1, mens Lastrum er nede", () => {
  assert.equal(resolveSystems(startStatus(), { week: 3, repairs: ["A"] }).delta.A, 2);
  assert.equal(resolveSystems({ ...startStatus(), D: 1 }, { week: 3, repairs: ["A"] }).delta.A, 1);
});
