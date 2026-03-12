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
| FA | Fixer / Assault | Strike | Wheelman, demo, logistics. Stages vehicles, preps charges, runs interference on the ground. |
| CT | Contact | Anchor | Social operators. Bribe, distract, manage relationships. Keep external pressure off the crew. |

### Skill Rating Scale

| Rating | Tier | Cost | Notes |
|--------|------|------|-------|
| 1–2 | Green | Low | Cheap but unreliable. Filler slots. |
| 3 | Competent | Medium | Baseline professional. Can hold a column. |
| 4 | Elite | High | +1 bonus in dominant column. Worth protecting. |
| 5 | Legendary | Very High | Game-changing. Draws attention. Everyone wants them. |

A balanced crew covers all three columns. A specialised crew dominates one but bleeds in the others. There's no right answer — only the answer that matches how you want to play Night City.

> **FOCUS POINTS**
> - Starting budget — how many eddies, how many crew members, any constraints on composition (max legendaries, minimum crew size)?
> - Can you start with a Legendary (rating 5) crew member, or is that acquire-only?
> - What happens when a crew member is killed or captured? Permanently gone? Recovery possible?
> - Loyalty — mentioned on Transfer and Acquire but never explained to players. Can you discover your own crew's loyalty? Can loyalty shift over time?
> - Can a crew member be assigned to multiple cells in the same grid? The example OGM shows T-Bug across phases 1, 2, and 4 — but this is never stated as an explicit rule.
> - Crew assigned to a column that doesn't match their primary — do they contribute at full rating or reduced?

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

> **FOCUS POINTS**
> - Can the same crew member appear in multiple phases? The example shows T-Bug in Ghost across phases 1, 2, and 4 — state this as an explicit rule.
> - Can you spend eddies (ED) in a cell without a crew member? The example has `ED-3k · Bribe` in Extract/Strike — is this a general mechanic or special case? Define how resource expenditures work in cells.
> - What happens if you submit an OGM with zero crew in a phase? Auto-failed? Uncontested by the player but opposition still resolves?
> - Maximum crew per cell — can you stack multiple assets in the same cell?

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

> **FOCUS POINTS**
> - The rock-paper-scissors dynamic is described thematically but not mechanically from the player perspective. Does column advantage give a bonus? Nullify opposition? Players need to understand the weight of their column choices beyond "it's better."
> - Can a player deliberately mismatch (e.g. put a Solo in Ghost)? What's the penalty or reduced effectiveness?
> - How does column advantage interact with the score comparison? Even if resolution is GM-side, players should understand what they're betting on.

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

> **FOCUS POINTS**
> - Phase Affinity is referenced in the GM modifiers (+1 per phase for asset in its Phase Affinity) but never defined for players. Which roles have affinity for which phases? This directly affects grid planning.
> - Phase degradation — failure in an earlier phase "degrades" later phases. Is this narrative-only or does it carry a mechanical penalty (e.g. -1 carry-forward)?
> - Can a player intentionally skip a phase (leave an entire row empty) to conserve crew for later phases?

---

## Actions — Two Slots Per Round

Each round you have **two action slots**: one Core action and one Follow-up action. You can use these to engage in the city, negotiate with other players, or disappear entirely.

### ACT-01 — Engage (Core)

Run a full operation against a target. Fill the Operation Grid, assign crew to cells, declare contingencies. This is the primary action of the game.

- **Requires:** OGM submission
- **Tags:** PRIMARY

### ACT-02 — Protocol (Core or Follow-up)

Send an encrypted message to another player. Declare ICE level (1–5). Higher ICE = harder to intercept but costs more. The recipient decrypts next round. Depending on the type of message this can be a Core action or a Follow-up action.

- **Tags:** COMMS, ICE COST

### ACT-03 — Transfer (Follow-up)

Move a crew member or resource to another player. The transferred asset becomes theirs. Loyalty is hidden — the GM tracks it. Transfers can be poisoned.

- **Tags:** CREW MOVE, LOYALTY RISK

### ACT-04 — Ghost (Core — costs both slots)

Go completely dark. Costs **both action slots**. Heat drops by 1. You cannot be targeted by Leverage or Surveil. Your name vanishes from the Public Dispatch.

- **Tags:** 2 SLOTS, HEAT −1

### ACT-05 — Acquire (Follow-up)

Recruit a new crew member or upgrade an existing one. Declare type and budget. Higher-rated recruits cost more and take longer. All recruits carry hidden loyalty.

- **Tags:** INVESTMENT, CREW BUILD

### ACT-06 — Leverage (Follow-up)

Apply pressure to a faction, contact, or another player without running a full operation. If it fails, the target knows you tried.

- **Requires:** FA-3+ or SO-3+
- **Tags:** SOCIAL, BLOWBACK RISK

### ACT-07 — Surveil (Follow-up)

Watch a target, faction, or player without committing. Intel feeds your next round's decisions. Mutual surveillance is noted but anonymous.

- **Requires:** NR or CT asset
- **Tags:** RECON, PASSIVE

### ACT-08 — Uplink (Follow-up)

Harden your defences for the round. Protocol ICE doubled. Surveil attempts return minimal intel. Leverage effectiveness reduced. Signals defensive posture to NR-4+ observers.

- **Requires:** NR asset
- **Tags:** DEFENSIVE

> **FOCUS POINTS**
> - Can you take two Follow-up actions instead of one Core + one Follow-up? Or is a Core action mandatory every round?
> - Action timing — do both actions resolve simultaneously or sequentially? If you Surveil and Engage in the same round, does the Surveil intel apply to this round's Engage or only next round's?
> - ACT-02 Protocol says "core or follow-up depending on the type of message." What determines which type? This needs a clear rule.
> - ACT-03 Transfer — "transfers can be poisoned." What does poisoned mean mechanically? Can you deliberately send a disloyal crew member?
> - ACT-05 Acquire — "higher-rated recruits take longer." How long? Available next round? Two rounds? Scaling by rating?
> - ACT-06 Leverage — "if it fails, the target knows you tried." What constitutes failure? Is there a roll, a threshold, or pure GM adjudication?
> - ACT-07 Surveil — "mutual surveillance is noted but anonymous." What exactly does the surveilling player receive as intel? How detailed?
> - ACT-08 Uplink — "signals defensive posture to NR-4+ observers." Does this mean other players with NR-4+ automatically know you're running Uplink?

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
> - Can you send a Protocol message to multiple recipients in one action slot, or is it strictly one message per action?
> - What happens if the recipient doesn't have the required NR to decrypt (NR-2+ for ICE-4, NR-3+ for ICE-5)? Message lost? Delayed? Returned to sender?
> - Can you send a Protocol to yourself (dead drop / narrative device)?
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

- Any Strike column result of Poor or below
- Any Flatlined or None phase outcome
- Crew member captured or killed (+2)
- Running a Strike-dominant grid (more Strike than Ghost + Anchor combined)

### Cooling Methods (−1 each)

- **Ghost action** — full dark, both slots committed
- **ED-3k+** spent on dedicated Heat suppression operation
- **FA-4+** deployed in relationship maintenance action

> **FOCUS POINTS**
> - Can Heat go below 0? If you're Cold and earn a Cooling event, does anything happen (banked credit, ignored)?
> - District-specific Heat vs global Heat — the Flatlined level mentions "affected district." Is Heat tracked per district or globally with district-level consequences?
> - How does the player learn their current Heat level? Communicated explicitly ("your Heat is 2") or narratively ("contacts are getting harder to reach")?
> - Can multiple Heat triggers fire in a single round? Can a player jump from 0 to 3+ in one bad operation?
> - Does Heat ever decay passively over time, or only through active Cooling methods?

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

### Writing Good Contingencies

Contingencies are IF/THEN statements that tell the GM how your crew reacts when things deviate from the plan. They are critical. Without them, the GM makes assumptions for you.

Examples:

> **Contingency 1:** IF T-Bug's ICE penetration in Phase 2 fails (POOR or worse), THEN Brick holds at extraction point — do not breach without net cover. PRIORITY: Crew survival over timeline.

> **Contingency 2:** IF any crew member is taken in Phase 3 or 4, THEN all remaining assets pivot to extraction regardless of objective status. PRIORITY: Get Brick out.

> **FOCUS POINTS**
> - Loss Acceptance, Heat Budget, and Priority Signal are listed but never explained mechanically. Are these binding constraints the GM enforces, or soft preferences the GM interprets?
> - What if a contingency contradicts the grid? (e.g. "if Phase 2 fails, abort" but crew is already assigned to Phase 3/4 — does the contingency override the grid?)
> - Maximum number of contingencies — is there a limit, or can players write as many as they want?
> - Private Note to GM — are there limits on what this can contain? Can it include conditional orders that aren't in the grid?
> - What constitutes a valid order sheet? Can the GM reject a submission and ask for revisions?

---

## The Manifesto

> *"Night City does not care about your plan. It cares about what you committed to."*

The grid is not a guarantee. It is a bet.

The best bets are specific, pre-contingencied, and honest about loss acceptance.

Vague bets produce vague outcomes. Greedy bets produce obituaries.

**Fill the grid. Lock the plan. Send the email.**
