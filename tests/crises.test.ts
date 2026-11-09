import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { crises, rollCrisis, DOUBLE_CRISIS } from "../src/content/crises.ts";

const seq = (...values: number[]) => {
  let i = 0;
  return () => values[i++];
};
const d20 = (n: number) => (n - 1) / 20;
const d6 = (n: number) => (n - 1) / 6;

test("the scenario book lists the same d20 crises as the data", () => {
  const full = readFileSync(new URL("../docs/scenarios.md", import.meta.url), "utf8");
  const book = full.slice(full.indexOf("## Krisetabel"), full.indexOf("## Sektionstabel"));
  const rows = [...book.matchAll(/^\| (\d+) \| \*\*(.+?)\*\*( \*\(d6\)\*)? \|/gm)].map((m) => [Number(m[1]), m[2], Boolean(m[3])]);
  assert.deepEqual(rows, crises.map((c) => [c.roll, c.name, Boolean(c.section)]));
});

test("a section crisis also rolls a d6 section", () => {
  const [r] = rollCrisis(seq(d20(7), d6(4)));
  assert.equal(r.crisis.name, "Brand");
  assert.equal(r.section, "Lastrum");
});

test("a 20 yields two crises and rerolls further 20s", () => {
  const result = rollCrisis(seq(d20(DOUBLE_CRISIS), d20(20), d20(3), d20(18), d6(1)));
  assert.deepEqual(result.map((r) => [r.roll, r.section]), [[3, undefined], [18, "Hypersøvn"]]);
});
