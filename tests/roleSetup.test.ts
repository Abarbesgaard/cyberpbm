import { test } from "node:test";
import assert from "node:assert/strict";
import { BLUFFS_PER_SYNTH, ROLE_TAG_CAP, crewRoles, synthRoles } from "../src/content/game.ts";
import {
  RoleSetupError,
  assignBluffs,
  createRoleSetup,
  rolePool,
  seededRng,
  selectActiveCrewRoles,
  validateRoleSetup,
  type RoleSetup,
} from "../src/content/roleSetup.ts";

const names = (n: number) => ["Anna", "Peter", "Sara", "Jonas", "Mia", "Ole", "Ida", "Emil", "Liv"].slice(0, n);
const expected: Record<number, [number, number]> = { 5: [4, 1], 6: [5, 1], 7: [5, 2], 8: [6, 2] };

for (const n of [5, 6, 7, 8]) {
  test(`${n} spillere: korrekte hold, unikke roller og gyldige bluffs over 200 seeds`, () => {
    const [crewCount, synthCount] = expected[n];
    for (let seed = 1; seed <= 200; seed++) {
      const s = createRoleSetup(names(n), seededRng(seed));
      const crew = s.players.filter((p) => p.team === "crew");
      const synths = s.players.filter((p) => p.team === "synth");
      assert.equal(crew.length, crewCount);
      assert.equal(synths.length, synthCount);

      const roles = crew.map((p) => p.roleId);
      assert.equal(new Set(roles).size, roles.length, "dubleret rolle");
      assert.ok(roles.includes("engineer"), "kernerollen mangler");
      const synthIds = synths.map((p) => p.roleId);
      assert.equal(new Set(synthIds).size, synthIds.length, "dubleret syntetikerrolle");
      assert.ok(synthIds.includes("special_order"), "Særordre mangler");
      assert.ok(synthIds.every((id) => synthRoles.some((r) => r.id === id)));
      assert.equal(s.activeCrewRoles.length + s.unusedCrewRoles.length, crewRoles.length);

      for (const p of synths) {
        const b = s.bluffs[p.name];
        assert.equal(b.length, BLUFFS_PER_SYNTH);
        assert.equal(new Set(b).size, BLUFFS_PER_SYNTH);
        for (const id of b) {
          assert.ok(!s.activeCrewRoles.includes(id), `bluff ${id} er i spil`);
          assert.ok(s.unusedCrewRoles.includes(id));
        }
      }
      assert.deepEqual(validateRoleSetup(s), []);
    }
  });
}

test("samme seed giver samme opsætning", () => {
  assert.deepEqual(createRoleSetup(names(7), seededRng(42)), createRoleSetup(names(7), seededRng(42)));
});

test("to syntetikere får adskilte forslag, når puljen tillader det", () => {
  for (const n of [7, 8]) {
    for (let seed = 1; seed <= 100; seed++) {
      const s = createRoleSetup(names(n), seededRng(seed));
      const all = Object.values(s.bluffs).flat();
      assert.equal(new Set(all).size, all.length);
    }
  }
});

test("bluffs må overlappe, når puljen er for lille til adskilte forslag", () => {
  const b = assignBluffs(["archivist", "auditor", "medic"], ["A", "B"], seededRng(1));
  for (const key of ["A", "B"]) {
    assert.equal(b[key].length, 2);
    assert.equal(new Set(b[key]).size, 2);
  }
});

test("for få ubrugte roller giver en forståelig fejl", () => {
  assert.throws(() => assignBluffs(["archivist"], ["A"], seededRng(1)), /Kun 1 ubrugte roller/);
});

test("alle tilladte rollekombinationer ved 5–8 spillere efterlader nok bluffs", () => {
  const optional = crewRoles.filter((r) => !r.core);
  const core = crewRoles.filter((r) => r.core);
  for (const n of [5, 6, 7, 8]) {
    const pool = rolePool(n);
    const need = pool.crew - core.length;
    let valid = 0;
    const walk = (start: number, picked: typeof optional) => {
      if (picked.length === need) {
        const tags = new Map<string, number>();
        for (const r of [...core, ...picked]) tags.set(r.tag, (tags.get(r.tag) ?? 0) + 1);
        if ([...tags.values()].every((c) => c <= ROLE_TAG_CAP)) valid++;
        return;
      }
      for (let i = start; i < optional.length; i++) walk(i + 1, [...picked, optional[i]]);
    };
    walk(0, []);
    assert.ok(valid > 0, `${n} spillere har ingen gyldig rollekombination`);
    assert.ok(pool.unused >= pool.bluffsNeeded, `${n} spillere: for få ubrugte roller`);
    assert.ok(pool.distinctBluffs);
  }
});

test("rollevalget overholder tag-grænsen", () => {
  for (let seed = 1; seed <= 200; seed++) {
    const tags = new Map<string, number>();
    for (const id of selectActiveCrewRoles(6, seededRng(seed))) {
      const tag = crewRoles.find((r) => r.id === id)!.tag;
      tags.set(tag, (tags.get(tag) ?? 0) + 1);
    }
    assert.ok([...tags.values()].every((c) => c <= ROLE_TAG_CAP));
  }
});

test("rolle-id'er og navne er unikke", () => {
  assert.equal(new Set(crewRoles.map((r) => r.id)).size, crewRoles.length);
  assert.equal(new Set(crewRoles.map((r) => r.name)).size, crewRoles.length);
});

test("ugyldigt spillerantal og navne giver forståelige fejl", () => {
  assert.throws(
    () => createRoleSetup(names(4)),
    (e: unknown) => e instanceof RoleSetupError && /4 spillere understøttes ikke\. Vælg 5–8/.test(e.message),
  );
  assert.throws(() => createRoleSetup(names(9)), /9 spillere understøttes ikke/);
  assert.throws(() => createRoleSetup(["A", "A", "B", "C", "D"]), /Spillernavne skal være unikke/);
});

const base = (): RoleSetup => createRoleSetup(names(7), seededRng(7));

test("validering fanger dublerede roller", () => {
  const s = base();
  const crew = s.players.filter((p) => p.team === "crew");
  crew[1].roleId = crew[0].roleId;
  const problems = validateRoleSetup(s);
  assert.ok(problems.some((p) => /er tildelt både .+ og .+\. Hver rolle må kun bruges én gang/.test(p)), problems.join("\n"));
});

test("validering fanger bluff-forslag, der er i spil", () => {
  const s = base();
  const synth = s.players.find((p) => p.team === "synth")!;
  s.bluffs[synth.name] = [s.activeCrewRoles[0], s.unusedCrewRoles[0]];
  assert.ok(validateRoleSetup(s).some((p) => /som bluff-forslag, men rollen er i spil/.test(p)));
});

test("validering fanger forkerte holdstørrelser og manglende kernerolle", () => {
  const s = base();
  const synth = s.players.find((p) => p.team === "synth")!;
  synth.team = "crew";
  synth.roleId = s.unusedCrewRoles[0];
  delete s.bluffs[synth.name];
  s.players.find((p) => p.roleId === "engineer")!.roleId = s.unusedCrewRoles[1];
  const problems = validateRoleSetup(s);
  assert.ok(problems.some((p) => /7 spillere kræver 5 besætning og 2 syntetiker/.test(p)), problems.join("\n"));
  assert.ok(problems.some((p) => /Ingeniør er en kernerolle/.test(p)), problems.join("\n"));
});

test("validering fanger syntetiker med besætningsrolle og forkert antal bluffs", () => {
  const s = base();
  const synth = s.players.find((p) => p.team === "synth")!;
  synth.roleId = s.unusedCrewRoles[0];
  s.bluffs[synth.name] = [s.unusedCrewRoles[1]];
  const problems = validateRoleSetup(s);
  assert.ok(problems.some((p) => /må ikke have en besætningsrolle/.test(p)));
  assert.ok(problems.some((p) => /skal have præcis 2 bluff-forslag, fik 1/.test(p)));
});

test("syntetikerroller: Særordre altid, anden rolle varierer ved to syntetikere", () => {
  const second = new Set<string>();
  for (let seed = 1; seed <= 200; seed++) {
    const s = createRoleSetup(names(8), seededRng(seed));
    assert.equal(s.activeSynthRoles[0], "special_order");
    second.add(s.activeSynthRoles[1]);
  }
  assert.deepEqual([...second].sort(), synthRoles.filter((r) => !r.core).map((r) => r.id).sort());
});

test("validering fanger dublerede syntetikerroller og syntetikerrolle hos besætning", () => {
  const s = base();
  const [a, b] = s.players.filter((p) => p.team === "synth");
  b.roleId = a.roleId;
  s.players.find((p) => p.team === "crew")!.roleId = "jammer";
  const problems = validateRoleSetup(s);
  assert.ok(problems.some((p) => /er tildelt både .+ og .+\. Hver rolle må kun bruges én gang/.test(p)), problems.join("\n"));
  assert.ok(problems.some((p) => /må ikke have en syntetikerrolle \(Støjsender\)/.test(p)), problems.join("\n"));
});

test("validering fanger manglende Særordre", () => {
  const s = createRoleSetup(names(6), seededRng(3));
  const synth = s.players.find((p) => p.team === "synth")!;
  synth.roleId = "forger";
  s.activeSynthRoles = ["forger"];
  assert.ok(validateRoleSetup(s).some((p) => /Særordre er syntetikernes kernerolle/.test(p)));
});
