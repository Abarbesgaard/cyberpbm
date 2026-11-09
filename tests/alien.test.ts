import { test } from "node:test";
import assert from "node:assert/strict";
import { resolveAlien } from "../src/content/alien.ts";

const teams = { Anna: "crew", Peter: "crew", Sara: "synth" } as const;

test("en ensom besætning dør på 4–6, ellers ikke", () => {
  const positions = { Anna: "D" as const, Peter: "B" as const };
  assert.deepEqual(resolveAlien({ zone: "D", positions, teams, roll: 4 }), { kind: "killed", victim: "Anna" });
  assert.deepEqual(resolveAlien({ zone: "D", positions, teams, roll: 3 }), { kind: "none" });
  assert.deepEqual(resolveAlien({ zone: "D", positions, teams, roll: 6, guarded: ["Anna"] }), { kind: "none" });
});

test("alien ignorerer syntetikere", () => {
  assert.deepEqual(resolveAlien({ zone: "D", positions: { Sara: "D" }, teams, roll: 6 }), { kind: "none" });
});

test("to, der bekæmper den, smider den ud; én er ikke nok", () => {
  const positions = { Anna: "D" as const, Sara: "D" as const };
  assert.deepEqual(resolveAlien({ zone: "D", positions, teams, roll: 6, fighters: ["Anna", "Sara"] }), { kind: "expelled" });
  assert.deepEqual(resolveAlien({ zone: "D", positions, teams, roll: 6, fighters: ["Anna"] }), { kind: "none" });
  assert.deepEqual(resolveAlien({ zone: "D", positions: { Anna: "D" }, teams, roll: 6, fighters: ["Anna"] }), { kind: "killed", victim: "Anna" });
});
