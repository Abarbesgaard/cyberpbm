import { test } from "node:test";
import assert from "node:assert/strict";
import { layouts, sectionIds } from "../src/content/game.ts";
import { archive, camera, checkActivation, motionSensors, oneActivationEach, reachable, rooms, sabotagedIn, SABOTAGED_REPLY, type ActivationCheck } from "../src/content/rooms.ts";
import { integrityReport, startStatus } from "../src/content/systems.ts";

const base: ActivationCheck = { week: 3, team: "crew", zone: "E", activation: { kind: "room", room: "E" }, sabotaged: [] };

test("hver af de syv sektioner har præcis én evne", () => {
  assert.deepEqual(rooms.map((r) => r.id).sort(), [...sectionIds].sort());
  assert.equal(new Set(rooms.map((r) => r.ability.id)).size, 7);
});

test("en sektionsevne kan kun bruges fra sektionen", () => {
  assert.equal(checkActivation(base).ok, true);
  assert.equal(checkActivation({ ...base, zone: "B" }).ok, false);
});

test("sabotage virker først ugen efter og udløber af sig selv", () => {
  const log = [{ week: 3, section: "E" as const }];
  assert.deepEqual(sabotagedIn(3, log), []);
  assert.deepEqual(sabotagedIn(4, log), ["E"]);
  assert.deepEqual(sabotagedIn(5, log), []);
});

test("sabotage opdages kun ved forsøg og kun privat", () => {
  const sabotaged = ["E" as const];
  const tried = checkActivation({ ...base, sabotaged });
  assert.deepEqual(tried, { ok: false, reply: SABOTAGED_REPLY, reason: "Sektionen er saboteret." });
  assert.equal(SABOTAGED_REPLY, "Systemet er saboteret.");
  // Andre aktiveringer afslører intet, og mandagsrapporten nævner det ikke.
  assert.deepEqual(checkActivation({ ...base, activation: { kind: "role" }, sabotaged }), { ok: true });
  assert.doesNotMatch(integrityReport(4, startStatus()), /sabot/i);
});

test("kun syntetikere saboterer, fra uge 2, i egen sektion", () => {
  const sab = { ...base, team: "synth" as const, activation: { kind: "sabotage" as const, section: "E" as const } };
  assert.equal(checkActivation(sab).ok, true);
  assert.equal(checkActivation({ ...sab, team: "crew" }).ok, false);
  assert.equal(checkActivation({ ...sab, week: 1 }).ok, false);
  assert.equal(checkActivation({ ...sab, activation: { kind: "sabotage", section: "B" } }).ok, false);
});

test("hver spiller har én aktivering: den første tæller", () => {
  const orders = [
    { player: "Anna", activation: { kind: "role" } },
    { player: "Peter", activation: { kind: "none" } },
    { player: "Anna", activation: { kind: "room", room: "E" } },
  ];
  assert.deepEqual(oneActivationEach(orders).map((o) => o.activation.kind), ["role", "none"]);
});

test("Kamera viser navne i en anden sektion, intet om roller", () => {
  const positions = { Anna: "E", Peter: "B", Sara: "B" } as const;
  assert.equal(camera("Anna", "B", positions), "Medlab: Peter, Sara.");
  assert.equal(camera("Anna", "C", positions), "Livsstøtte: ingen.");
  assert.throws(() => camera("Anna", "E", positions));
});

test("Arkiv og Bevægelsessensorer giver kun antal, aldrig navne", () => {
  const history = { 1: { Anna: "B", Peter: "B" }, 2: { Anna: "C", Peter: "B" } } as const;
  const a = archive("B", 1, 3, history);
  assert.equal(a, "Medlab, uge 1: 2 personer.");
  assert.throws(() => archive("B", 3, 3, history));
  const s = motionSensors("B", { Anna: "B", Peter: "C", Sara: "C" }, { Anna: "C", Peter: "B", Sara: "B" }, ["Sara"]);
  assert.equal(s, "Medlab: 1 ankom, 1 forlod.");
  for (const out of [a, s]) assert.doesNotMatch(out, /Anna|Peter|Sara/);
});

test("Transport rækker to zoner ad gangene", () => {
  const hub = layouts.find((l) => l.id === "hub")!;
  assert.deepEqual(reachable(hub, "A", 1), ["R"]);
  assert.deepEqual(reachable(hub, "A", 2).sort(), ["B", "C", "D", "E", "F", "R"]);
});
