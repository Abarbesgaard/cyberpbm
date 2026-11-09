import { test } from "node:test";
import assert from "node:assert/strict";
import { resolveKill, type KillAttempt } from "../src/content/kills.ts";
import { resolveSystems, startStatus } from "../src/content/systems.ts";

const base: KillAttempt = {
  week: 3,
  killer: "Peter",
  target: "Anna",
  positions: { Peter: "C", Anna: "C", Sara: "B" },
  teams: { Peter: "synth", Anna: "crew", Sara: "crew" },
};

test("drab lykkes, når drabsmand og mål er alene i zonen", () => {
  assert.deepEqual(resolveKill(base), { ok: true, zone: "C" });
});

test("drab mislykkes med vidner, i andre zoner og før uge 3", () => {
  assert.equal(resolveKill({ ...base, positions: { ...base.positions, Sara: "C" } }).ok, false);
  assert.equal(resolveKill({ ...base, positions: { ...base.positions, Anna: "D" } }).ok, false);
  assert.equal(resolveKill({ ...base, week: 2 }).ok, false);
});

test("hver syntetiker dræber højst én gang og kun besætning", () => {
  const spent = resolveKill({ ...base, used: { Peter: 1 } });
  assert.equal(spent.ok, false);
  assert.match(spent.ok ? "" : spent.reason, /allerede/);
  assert.equal(resolveKill({ ...base, teams: { ...base.teams, Anna: "synth" } }).ok, false);
  assert.equal(resolveKill({ ...base, killer: "Sara" }).ok, false);
});

test("ekko-vedligehold stopper forfald men giver intet", () => {
  const r = resolveSystems(startStatus(), { week: 3, maintained: ["E"] });
  assert.equal(r.delta.E, 0);
  assert.equal(r.delta.F, -1);
});
