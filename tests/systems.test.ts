import { test } from "node:test";
import assert from "node:assert/strict";
import { scenarios, SYSTEM_MAX } from "../src/content/game.ts";
import { humansBySection, integrityReport, resolveSystems, startStatus } from "../src/content/systems.ts";

const start = { ...startStatus(), A: 2 };

test("ét levende menneske giver +1, ingen giver −1, flere giver ikke mere", () => {
  assert.equal(resolveSystems(start, { week: 2, humans: {} }).status.A, 1);
  assert.equal(resolveSystems(start, { week: 2, humans: { A: 1 } }).status.A, 3);
  assert.equal(resolveSystems(start, { week: 2, humans: { A: 3 } }).status.A, 3);
});

test("syntetikere er neutrale, døde og frosne tæller ikke", () => {
  const teams = { Anna: "crew", Peter: "crew", Sara: "synth" } as const;
  assert.deepEqual(humansBySection({ Anna: "A", Peter: "A", Sara: "B" }, teams), { A: 2 });
  const synthOnly = humansBySection({ Sara: "A" }, teams);
  assert.equal(resolveSystems(start, { week: 2, humans: synthOnly }).status.A, 1);
  // Dead and frozen players are not active, so they are not in positions.
  assert.equal(resolveSystems(start, { week: 2, humans: humansBySection({}, teams) }).status.A, 1);
});

test("integriteten overstiger aldrig 5", () => {
  const top = { ...startStatus(), A: SYSTEM_MAX };
  const r = resolveSystems(top, { week: 3, humans: { A: 1 }, repairs: ["A"], extraRepairs: ["A"] });
  assert.equal(r.status.A, SYSTEM_MAX);
});

test("0 afslutter spillet med det samme", () => {
  const r = resolveSystems({ ...startStatus(), C: 1 }, { week: 3, humans: { A: 1, B: 1, D: 1, E: 1, F: 1, R: 1 } });
  assert.deepEqual(r.failed, ["C"]);
});

test("intet ændrer sig automatisk i uge 1", () => {
  assert.deepEqual(resolveSystems(start, { week: 1 }).status, start);
});

test("ekstra reparation og Ingeniørens reparation lægges oven i", () => {
  const r = resolveSystems(start, { week: 2, repairs: ["A"], extraRepairs: ["A", "B"] });
  assert.equal(r.status.A, 2 - 1 + 2 + 1);
  assert.equal(r.status.B, 3);
});

test("Nødstrøm stopper tab, men giver intet ekstra", () => {
  assert.equal(resolveSystems(start, { week: 2, stabilized: ["A"] }).status.A, 2);
  assert.equal(resolveSystems(start, { week: 2, humans: { A: 1 }, stabilized: ["A"] }).status.A, 3);
});

test("bevægelse virker først på vedligeholdet ugen efter", () => {
  const teams = { Sara: "crew" } as const;
  // Uge 3: Sara står i A og har bestilt Ryk → B. Fredag tæller hun i A.
  const week3 = resolveSystems(startStatus(), { week: 3, humans: humansBySection({ Sara: "A" }, teams) });
  assert.equal(week3.delta.A, 1);
  assert.equal(week3.delta.B, -1);
  // Mandag ankommer hun til B. Fredagen efter tæller hun dér.
  const week4 = resolveSystems(week3.status, { week: 4, humans: humansBySection({ Sara: "B" }, teams) });
  assert.equal(week4.delta.B, 1);
  assert.equal(week4.delta.A, -1);
});

test("scenariet bestemmer startværdierne", () => {
  const s = startStatus(scenarios[0]);
  assert.equal(s.E, 2);
  assert.equal(s.A, 3);
});

test("mandagsrapporten viser kun værdier for alle syv sektioner", () => {
  const report = integrityReport(4, start);
  const lines = report.split("\n").slice(1);
  assert.equal(lines.length, 7);
  assert.match(lines[0], /^Hypersøvn +██░░░ 2$/);
  assert.doesNotMatch(report, /[+−-]\d|sabot/i);
});
