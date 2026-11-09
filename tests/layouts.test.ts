import { test } from "node:test";
import assert from "node:assert/strict";
import { layouts, neighbours, zones, type ZoneId } from "../src/content/game.ts";

test("hver skibsplan forbinder alle syv zoner og har et punkt for hver", () => {
  for (const l of layouts) {
    const seen = new Set<ZoneId>(["R"]);
    const queue: ZoneId[] = ["R"];
    while (queue.length) for (const n of neighbours(l, queue.shift()!)) if (!seen.has(n)) { seen.add(n); queue.push(n); }
    assert.equal(seen.size, zones.length, l.name);
    for (const z of zones) assert.ok(l.pos[z.id], `${l.name}: ${z.id}`);
  }
});

test("skibsplanerne dækker d4 og har ingen dobbelte gange", () => {
  assert.deepEqual(layouts.map((l) => l.roll), [1, 2, 3, 4]);
  for (const l of layouts) {
    const keys = l.edges.map(([a, b]) => [a, b].sort().join());
    assert.equal(new Set(keys).size, keys.length, l.name);
  }
});

test("ingen zone er mere end fire ryk fra en anden", () => {
  for (const l of layouts)
    for (const start of zones) {
      const dist = new Map<ZoneId, number>([[start.id, 0]]);
      const queue: ZoneId[] = [start.id];
      while (queue.length) {
        const z = queue.shift()!;
        for (const n of neighbours(l, z)) if (!dist.has(n)) { dist.set(n, dist.get(z)! + 1); queue.push(n); }
      }
      assert.ok(Math.max(...dist.values()) <= 4, `${l.name} fra ${start.id}`);
    }
});

test("naboer er symmetriske", () => {
  const ring = layouts[0];
  assert.deepEqual(neighbours(ring, "R").sort(), ["A", "B", "C", "D", "E", "F"]);
  assert.deepEqual(neighbours(layouts[2], "E").sort(), ["A", "B"]);
});
