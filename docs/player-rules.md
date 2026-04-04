# CyberPBM — Player Operations Manual

> *"Night City does not care about your plan. It only cares about one thing."*

---

## Welcome, Operator

CyberPBM is a **play-by-mail tabletop game** set in Night City. You run a crew. You plan operations. You submit orders. The city responds.

There are no dice on your end. There is no real-time negotiation. You read a briefing, fill a grid, pick your actions, and send it all to the GM. Then you wait — and Night City decides what your commitment was worth.

This manual contains everything you need to play. Read it carefully — the rules won't repeat themselves, and neither will the city.

---

## The Core Loop

Every round follows the same rhythm:

1. **Receive the Briefing** — The GM posts missions and city events to the Public Channel.
2. **Choose Two Actions** — Pick one Core action and one Follow-up from your action slots.
3. **Build Your Grid** — Fill the Operation Grid Matrix (OGM) with your crew assignments.
4. **Submit Your Order Sheet** — Send your completed orders to the GM via email or the designated channel.
5. **Receive the Dispatch** — The GM resolves all players and publishes the results.

That's it. Every round is a bet. The best bets are specific, pre-contingencied, and honest about loss acceptance.

> **FOCUS POINTS**
> - What happens if a player doesn't submit orders by the deadline? Default behaviour (crew idles, repeats last round, GM decides).
> - Can you submit partial orders (e.g. only one action slot filled, OGM with empty rows)?
> - Round cadence expectations — how long does a round take in real time?

---

## Channels

All communication flows through two types of channels. Understanding what goes where is key — leak the wrong thing on the wrong channel and you might find a rival crew waiting at your extraction point.

### Public Channel — Open Broadcast

The main feed every player monitors. This is where the GM posts mission briefs, news, faction movements, and any public declarations. Everyone sees everything here. You can respond publicly, but remember: every other crew is watching.

### Private Channel — Encrypted Line

A secure line between you and the GM — no one else can see it. Use it to ask questions, report secret actions, or receive intel meant only for your eyes. What you share here stays between you and the GM.

### Protocol — Inter-Player Comms

Player-to-player encrypted messages. These are separate from the two channels above and are covered in their own section below. The GM sees all Protocol messages and handles interception.

> **FOCUS POINTS**
> - Can players post to the Public Channel, or is it strictly GM-only broadcast?
> - Private Channel timing — if a player asks the GM a question mid-round, when does the answer arrive? Same round? Next round?
> - Are there rules around what can/cannot be discussed on each channel type?

---

## Crew Creation

Your crew is your instrument. Each member has a **role** that determines their column affinity, and a **skill rating** (1–5) that determines how hard they hit in that column. You start with a budget and build from there. Choose carefully — a crew built for Ghost will struggle if the GM throws Strike-heavy opposition at you.

### Available Roles

| Code | Role | Primary Column | Description |
|------|------|----------------|-------------|
| SO | Solo | Strike | Combat specialists. High damage, breach capability, suppression. Fragile plans, strong fists. |
| NR | Netrunner | Ghost | Net operators. ICE cracking, camera loops, data extraction. Essential for stealth-heavy grids. |
| TE | Tech | Anchor | Engineers and medics. Fortify positions, patch crew, rig devices. Slow but durable. |
| FA | Fixer / Assault | Strike | Assault operations, demolitions, aggressive logistics. Stages breaches, runs interference, applies pressure. |
| CT | Contact | Anchor | Social operators. Bribe, distract, manage relationships. Keep external pressure off the crew. |

### Skill Rating Scale

| Rating | Tier | Recruit Cost | Upkeep/Round | Notes |
|--------|------|-------------|--------------|-------|
| 1 | Green | ED-500 | ED-100 | Cheap but unreliable. Filler slots. |
| 2 | Green | ED-1,500 | ED-300 | Cheap but unreliable. Filler slots. |
| 3 | Competent | ED-4,000 | ED-800 | Baseline professional. Can hold a column. |
| 4 | Elite | ED-10,000 | ED-2,000 | +1 bonus in dominant column. Worth protecting. |
| 5 | Legendary | ED-25,000 | ED-5,000 | Game-changing. Draws attention. Everyone wants them. |

Upgrading an existing crew member costs the **difference** between their current recruit cost and the target recruit cost (e.g. upgrading from 3 to 4 costs ED-6,000).

A balanced crew covers all three columns. A specialised crew dominates one but bleeds in the others. There's no right answer — only the answer that matches how you want to play Night City.

### Starting Crew

You begin with **4 crew members** and a total **rating budget of 12 points** to distribute among them. You may have at most **one crew member at rating 4** at start. Rating 5 (Legendary) cannot be recruited during crew creation — it must be earned through the Acquire action during play.

### Loyalty

Every crew member carries a hidden **loyalty score** tracked by the GM. You never see the number directly. Loyalty can shift based on how you treat your crew — using them well, paying them, keeping them alive. Neglect them or throw them into meat grinders, and they may become unreliable.

You can spend a Surveil action on your own crew to get a narrative read on their loyalty from the GM. Transferred crew members are inherently less loyal — they didn't choose you.

### Crew Loss

When a crew member is killed, they are **permanently gone**. When captured, recovery may be possible through a future Engage or Leverage action — but the GM determines the circumstances. Captured crew may be turned against you.

---

## Economy

Eddies (ED) are the universal currency of Night City. You earn them from missions and spend them on crew, actions, equipment, and survival.

### Starting Funds

Every player begins with **ED-10,000**. Combined with your starting crew (4 members, 12 rating points), this gives you a reserve for operations, Protocol costs, and early investments.

### Income

There is no passive income. All eddies come from **mission payouts** and **faction work**. Payouts scale with mission difficulty:

| Difficulty | Payout Range |
|------------|-------------|
| Easy | ED-2,000 – 4,000 |
| Moderate | ED-5,000 – 8,000 |
| Hard | ED-10,000 – 15,000 |
| Suicide | ED-20,000 – 30,000 |

A result of **Adequate** pays **50%** of the base payout. **Poor or below** pays nothing.

### Crew Upkeep

Each crew member costs upkeep per round (see Skill Rating Scale). Upkeep is deducted automatically at the start of each round. If you cannot pay upkeep, the GM may reduce crew loyalty or force a crew member to leave.

### Action Costs

| Action | Cost |
|--------|------|
| Protocol ICE-1 | Free |
| Protocol ICE-2 | ED-500 |
| Protocol ICE-3 | ED-1,000 |
| Protocol ICE-4 | ED-3,000 |
| Protocol ICE-5 | ED-5,000 |
| Heat Suppression | ED-3,000 |
| Uplink | ED-1,000 |
| Leverage (attempt) | ED-500 |
| Surveil | ED-500 |

Engage has no flat cost — you spend eddies through resource expenditures placed in OGM cells (bribes, equipment, diversions).

---

## Mission Briefings

Each round the GM presents missions and the state of the city through the Public Channel. Missions are available to all players — your job is to choose the best one for your crew.

A typical mission brief includes:

- **Operation Name** and client
- **Target** — location and context
- **Objective** — what you're being paid to do
- **Known Complications** — threats visible to everyone
- **Payout** — what you earn on success

That's all you get up front. Everything else — patrol routes, insider contacts, weak points, hidden twists — has to be **earned through legwork**. Use actions like Surveil, Leverage, or crew abilities to unlock additional intel before committing to the grid.

Be careful not to overcommit. Every other player is reading the same briefings, and some may choose the same target — or see you as one.

> **FOCUS POINTS**
> - Can a player skip the posted missions and run a freelance/self-directed operation? Or must all Engage actions target a GM-posted mission?
> - Can legwork actions (Surveil, Leverage) accumulate across multiple rounds before committing to Engage?
> - What if no missions appeal to you in a given round? Are you forced to Ghost or pick from non-mission actions?
> - Can multiple players pick the same mission? What do players know about rival interest in the same target?

---

## The Operation Grid Matrix (OGM)

The OGM is how you interact with the world. It is the core mechanic of the game.

Every grid starts with an **Intention** — what you're trying to accomplish and how you plan to pull it off. You can only attempt missions the GM has made available. The rows are **phases** of an operation in time. The columns are **modes of force**. You assign your crew to cells before the round resolves. The GM holds the opposition grid in secret — you never see it. You read the world and bet.

### The Grid Structure

The OGM is a **4×3 matrix**: four phases (rows) by three columns (modes of force).

```
              GHOST              STRIKE             ANCHOR
              Stealth·Intel·Net  Force·Speed·Breach  Hold·Presence·Control
┌──────────┬──────────────────┬──────────────────┬──────────────────┐
│ INTENTION│ [Objective + Approach — spans all columns]             │
├──────────┼──────────────────┼──────────────────┼──────────────────┤
│ PHASE 1  │                  │                  │                  │
│ APPROACH │   [crew asset]   │   [crew asset]   │   [crew asset]   │
├──────────┼──────────────────┼──────────────────┼──────────────────┤
│ PHASE 2  │                  │                  │                  │
│ BREACH   │   [crew asset]   │   [crew asset]   │   [crew asset]   │
├──────────┼──────────────────┼──────────────────┼──────────────────┤
│ PHASE 3  │                  │                  │                  │
│ EXECUTE  │   [crew asset]   │   [crew asset]   │   [crew asset]   │
├──────────┼──────────────────┼──────────────────┼──────────────────┤
│ PHASE 4  │                  │                  │                  │
│ EXTRACT  │   [crew asset]   │   [crew asset]   │   [crew asset]   │
└──────────┴──────────────────┴──────────────────┴──────────────────┘
```

Assign crew members to cells by writing their **code, rating, and name** (e.g. `NR-4 · T-Bug`). Cells can also contain resource expenditures (e.g. `ED-3k · Bribe`). Empty cells are allowed — but uncontested columns are uncontested.

### Grid Assignment Rules

- **Crew reuse limit:** A crew member may be assigned to a **maximum of 2 phases** per OGM. You must choose where they matter most.
- **Cell stacking:** Multiple crew members may be assigned to the **same cell**. Their ratings are summed for that cell's score. Resource expenditures (ED) in a cell also stack.
- **Empty phases:** If you submit an OGM with zero crew in a phase, that phase is **uncontested** — the opposition's score stands unopposed. This is not an auto-failure; it simply means your phase score is 0.
- **Resource-only cells:** You may spend eddies in a cell without a crew member (e.g. `ED-3k · Bribe`). The GM interprets the expenditure contextually — bribes, equipment drops, diversions.

---

## The Three Columns

Every operation unfolds across three simultaneous lines of effort. These are not roles — they are modes of operating. When you assign crew to the grid, you're choosing which line to push.

### Ghost — The Invisible Line

Ghost encompasses everything that works by not being seen: electronic intrusion, social manipulation, surveillance, disguise, and the placement of assets before the opposition knows the job has started. A strong Ghost line means the target never fully understood what hit them.

**Ghost beats Anchor.** A defender who holds ground cannot hold what they cannot see coming.

### Strike — The Kinetic Line

Strike is speed, violence, and the direct application of overwhelming capability. It is the Solo kicking in the door at the exact right moment, the breaching charge on the server room wall. Strike does not win by being subtle. It wins by being faster and harder than the opposition can respond to.

**Strike beats Ghost.** Overwhelming force flushes concealment. You cannot stay invisible in a firefight.

### Anchor — The Weight Line

Anchor is presence, control, and sustained hold. It is the Tech hardwiring a back-door into the security system that will still work in three rounds. It is the fixer's standing arrangement with the local Valentinos that means this block stays quiet tonight. Anchor operations are slow, durable, and compound.

**Anchor beats Strike.** A prepared position bleeds an assault. Maelstrom knows this. Arasaka knows this better.

### Column Advantage — How It Works

The column dynamic is not just flavour — it's mechanical. When the GM resolves a phase, the column where your crew is strongest (your dominant column) is compared against the opposition's dominant column:

- If your dominant column **beats** the opposition's dominant column → your crew gets a **+1** bonus for that phase.
- If your dominant column **loses** to the opposition's dominant column → your crew takes a **−1** penalty for that phase.
- If both sides lead with the same column → no modifier.

This means reading the opposition matters. If intel suggests heavy Anchor defences, loading Ghost gives you an edge. Walking Strike into Anchor is walking into a wall.

### Column Mismatch

A crew member assigned to a column that is **not** their Primary Column operates at **−1 to their effective rating** (minimum 1). A SO-4 placed in Ghost functions as rating 3 in that cell. Build your grid around your crew's strengths — mismatches cost you.

### Phase Score Aggregation

The GM calculates your phase score using weighted dominance: your strongest column in that phase counts at full value, while the other two columns contribute half their score (rounded down). The same applies to the opposition. The difference determines the outcome. Concentrate your strength where it counts — spreading thin dilutes your dominant column.

---

## The Four Phases

Every operation resolves across four phases. These are not separate scenes — they are simultaneous pressure points the GM evaluates in sequence. A failure in Phase 1 does not abort Phase 2 automatically. It degrades it. Plan for each one, because the opposition will.

### Phase 1 — Approach

Everything before the point of no return. Surveillance, cover identity construction, bribery of perimeter assets, Netrunner preparation, route scouting. This is the phase where intelligence becomes operational. Most Approach work is **Ghost-dominant**: the team that arrives invisible arrives ready.

### Phase 2 — Breach

The moment the operation becomes irreversible. Physical entry, ICE penetration, hostile contact suppression, access acquisition. This is the phase most sensitive to opposition grid collision — if a rival crew is running the same target, the Breach phase is where they collide.

### Phase 3 — Execute

The primary objective. The data pull. The extraction of the target. The deletion of the asset. The thing you were paid to do. A crew that bleeds through Breach arrives at Execute wounded, loud, and running out of time. The opposition's Execute defence is almost always **Anchor-dominant**.

### Phase 4 — Extract

Getting out. This phase is more dangerous than most crews plan for. Night City's factions do not always respond during Breach — sometimes they wait. Ghost in Extract means you exit without a signature. Anchor in Extract means you had a fallback position prepared before the job started.

### Phase Affinity

Each role has a phase where they perform at peak effectiveness. Placing an asset in its Phase Affinity phase grants **+1** to its contribution. This stacks with the rating 4+ bonus.

| Role | Phase Affinity |
|------|---------------|
| NR (Netrunner) | Approach |
| SO (Solo) | Breach |
| FA (Fixer/Assault) | Breach |
| TE (Tech) | Execute |
| CT (Contact) | Extract |

Plan around these affinities. A NR-3 in Approach operates effectively as a 4 in that cell. A NR-3 in Extract is just a 3.

### Phase Degradation

Failure carries forward. If a phase resolves poorly, the next phase takes a mechanical penalty:

- **Poor** result → **−1** to the next phase
- **None** result → **−2** to the next phase
- **Flatlined** result → **−3** to the next phase
- **Adequate or better** → no carry-forward penalty

Degradation stacks. A crew that stumbles through Approach and Breach arrives at Execute bleeding momentum. Plan your strongest crew for the phases where failure would cascade hardest.

---

## Actions — Two Slots Per Round

Each round you have **two action slots**: one Core action and one Follow-up action. You **must** use at least one Core action per round. If you have no Core action to take, declare **Idle** for your Core slot (no action, no effect, no cost). You cannot take two Follow-up actions.

Both actions resolve **simultaneously** within the same round. Surveil intel gathered this round applies to **next round only** — it does not inform an Engage submitted in the same round.

### ACT-01 — Engage (Core)

Run a full operation against a target. Fill the Operation Grid, assign crew to cells, declare contingencies. This is the primary action of the game.

- **Requires:** OGM submission
- **Tags:** PRIMARY

### ACT-02 — Protocol (Core or Follow-up)

Send an encrypted message to another player. Declare ICE level (1–5). Higher ICE = harder to intercept but costs more. The recipient decrypts next round.

- **Core:** Operational coordination — joint ops, target sharing, binding agreements. One recipient only.
- **Follow-up:** Informational or social — threats, questions, offers, misdirection. Up to 2 recipients.
- **Tags:** COMMS, ICE COST

### ACT-03 — Transfer (Follow-up)

Move a crew member or resource to another player. The transferred asset becomes theirs. Loyalty is hidden — the GM tracks it. You may deliberately send a crew member with low loyalty (a "poisoned" transfer) — the recipient has no way to verify loyalty before accepting.

- **Tags:** CREW MOVE, LOYALTY RISK

### ACT-04 — Ghost (Core — costs both slots)

Go completely dark. Costs **both action slots**. Heat drops by 1. You cannot be targeted by Leverage or Surveil. Your name vanishes from the Public Dispatch.

- **Tags:** 2 SLOTS, HEAT −1

### ACT-05 — Acquire (Follow-up)

Recruit a new crew member or upgrade an existing one. Declare type and budget. Pay the recruit cost from the Skill Rating Scale. Recruits at rating 1–3 are available **next round**. Rating 4 takes **2 rounds**. Rating 5 takes **3 rounds**. All recruits carry hidden loyalty (starting at 3).

- **Tags:** INVESTMENT, CREW BUILD

### ACT-06 — Leverage (Follow-up)

Apply pressure to a faction, contact, or another player without running a full operation. The GM evaluates success based on the rating of the crew member used and the difficulty of the target. If the attempt fails, the target knows you tried. Costs ED-500.

- **Requires:** FA-3+ or SO-3+
- **Tags:** SOCIAL, BLOWBACK RISK

### ACT-07 — Surveil (Follow-up)

Watch a target, faction, or player without committing. The GM provides intel proportional to the rating of the crew member used — higher ratings yield more detailed and reliable information. Mutual surveillance is noted but anonymous (you learn someone is watching, but not who). Intel applies to **next round only**. Costs ED-500.

- **Requires:** NR or CT asset
- **Tags:** RECON, PASSIVE

### ACT-08 — Uplink (Follow-up)

Harden your defences for the round. Protocol ICE doubled. Surveil attempts return minimal intel. Leverage effectiveness reduced. Players with NR-4+ who are actively surveilling you will detect that you are running a defensive posture (but not the details). Costs ED-1,000.

- **Requires:** NR asset
- **Tags:** DEFENSIVE

---

## Protocol — Encrypted Player Comms

Night City rewards coordination and punishes trust. Protocol messages are sent between players — encrypted, deniable, and interceptable. Every message has an ICE level. The higher the ICE, the harder to crack.

Use Protocol to build alliances, set traps, or just see who bites.

### ICE Levels

| ICE Level | Description |
|-----------|-------------|
| ICE-1 | Plaintext. Any Netrunner can intercept. Free. |
| ICE-2 | Basic encryption. NR-2+ to intercept. Costs ED-500. |
| ICE-3 | Hardened channel. NR-3+ to intercept. Costs ED-1k. Standard for operational comms. |
| ICE-4 | Military-grade. NR-4+ to intercept. Costs ED-3k. Recipient needs NR-2+ to decrypt. |
| ICE-5 | Black ICE wrapper. NR-5 to intercept (and takes damage on failure). Costs ED-5k. Recipient needs NR-3+. |

### Example Protocol Message

```
> TO: PLAYER_02
> ICE: 3
> ROUND: 08
> ---
> I am running Corpo Plaza this round.
> Stay clear or coordinate. Your call.
> Reply at ICE-3 or higher if interested.
```

Remember: the GM sees **every** Protocol message regardless of ICE level. ICE only protects against other players intercepting.

> **FOCUS POINTS**
> - What happens if the recipient doesn't have the required NR to decrypt (NR-2+ for ICE-4, NR-3+ for ICE-5)? Message lost? Delayed? Returned to sender?
> - Protocol says "recipient decrypts next round" — does this mean there's always a one-round delay on all Protocol, or only on higher ICE?
> - Can a player decline to decrypt a received Protocol message?

---

## Heat — The City's Memory

Heat is persistent. It represents how visible and targeted you are across Night City's overlapping power structures. It degrades every column score globally. It doesn't reset between rounds. It compounds. Managing your Heat is as important as running jobs — ignore it and the city will bury you.

### Heat Levels

| Level | Name | Modifier | Effect |
|-------|------|----------|--------|
| 0 | Cold | — | No column penalties. Factions are not tracking you. Enjoy it while it lasts. |
| 1 | Warm | −1 | Someone has your description. Not your name. All column scores degraded. |
| 2 | Hot | −2 | NCPD has an open file. Corporate intel is comparing notes. Contacts become unreliable. |
| 3 | Burning | −3 | You appear in the Public Dispatch anonymised as a "person of interest." Contacts go cold. |
| 4+ | Flatlined | −4 | Active bounty. Cannot take jobs in affected district without Ghost/Approach rated 4+. |

### Heat Triggers (+1 each unless noted)

- Any column result of Poor or below (Ghost, Strike, or Anchor — all equally)
- Any Flatlined or None phase outcome
- Crew member captured or killed (+2)

Triggers are additive. A single catastrophic round can spike your Heat significantly.

### Cooling Methods (−1 each)

- **Ghost action** — full dark, both slots committed
- **ED-3k+** spent on dedicated Heat suppression operation
- **FA-4+** deployed in relationship maintenance action
- **Passive decay** — if you earn **zero new Heat** in a round, your Heat decreases by 1 at end of round

Heat cannot go below 0. Cooling at Cold has no effect and cannot be banked.

Heat is a single global number. The GM communicates your current Heat level explicitly on your Private Channel each round.

---

## Submitting Orders — The Order Sheet

Submit this each round to the GM. The grid is the core. Everything else is context and commitment. Be specific. Vague orders produce vague outcomes — and in Night City, vague outcomes have teeth.

### Order Sheet Structure

Your order sheet should include:

1. **Operation Name** — name the job
2. **Target** — location and objective
3. **Player Handle** — your identifier
4. **The OGM** — your completed 4×3 grid with crew assignments
5. **Action Slot 1** — your Core action (with details)
6. **Action Slot 2** — your Follow-up action (with details)
7. **Contingencies** — IF/THEN statements for when things go wrong
8. **Loss Acceptance** — how much are you willing to lose?
9. **Heat Budget** — maximum Heat you'll tolerate
10. **Priority Signal** — what matters more: the objective or the crew?
11. **Private Note to GM** — anything else: suspicions, plans, context

### Loss Acceptance

A **binding constraint** that tells the GM how far to push before your crew pulls out. The GM will not sacrifice crew beyond your stated tolerance unless no alternative exists. Choose one:

- **None** — abort the operation if crew survival is at risk. Objective is secondary.
- **Acceptable** — one crew member is expendable if it means completing the objective.
- **Mission Priority** — the objective matters more than the crew. Everyone is expendable.

### Heat Budget

**Soft guidance** for the GM. State the maximum Heat you're willing to accept this round (e.g. "Heat Budget: 2"). If the operation would push you above your budget, the GM applies your contingencies to limit exposure. This is not mechanically binding — the world doesn't negotiate — but it tells the GM your risk tolerance.

### Priority Signal

A **tiebreaker** for ambiguous resolution moments. When the GM must choose between achieving the objective or preserving the crew, your Priority Signal determines which way the outcome leans:

- **Objective** — complete the mission, accept crew costs.
- **Crew** — protect the team, accept mission costs.

### Writing Good Contingencies

Contingencies are IF/THEN statements that tell the GM how your crew reacts when things deviate from the plan. They are critical. Without them, the GM makes assumptions for you. Maximum **3 contingencies** per order sheet.

Contingencies resolve at **phase boundaries** — between phases, not mid-phase. A triggered contingency can **override grid assignments** for subsequent phases, redirecting or withdrawing crew as specified.

Examples:

> **Contingency 1:** IF T-Bug's ICE penetration in Phase 2 fails (POOR or worse), THEN Brick holds at extraction point — do not breach without net cover. PRIORITY: Crew survival over timeline.

> **Contingency 2:** IF any crew member is taken in Phase 3 or 4, THEN all remaining assets pivot to extraction regardless of objective status. PRIORITY: Get Brick out.

### Private Note to GM

Free-form. Use this for suspicions, long-term plans, questions, or context that doesn't fit the grid. The GM may respond on your Private Channel. This cannot contain additional mechanical orders — all actions must go through the grid and action slots.

---

## The Manifesto

> *"Night City does not care about your plan. It cares about what you committed to."*

The grid is not a guarantee. It is a bet.

The best bets are specific, pre-contingencied, and honest about loss acceptance.

Vague bets produce vague outcomes. Greedy bets produce obituaries.

**Fill the grid. Lock the plan. Send the email.**
