import type { Scenario } from "./game.ts";
import { scenarioMet, type SystemStatus } from "./systems.ts";

export type Winner = "crew" | "synthetics";

export interface ProtocolVote {
  /** Votes per active player, including spent ghost votes. */
  votes: Record<string, number>;
  /** Active players in week 6. A majority is more than half of them. */
  activePlayers: number;
  /** Active players on the synthetic team. */
  synthetics: string[];
}

/** The player the majority entrusted with the protocol, or null without a majority. */
export function protocolHolder({ votes, activePlayers }: ProtocolVote): string | null {
  const winner = Object.entries(votes).find(([, n]) => n > activePlayers / 2);
  return winner ? winner[0] : null;
}

/**
 * Final Protocol after week 6. A synthetic holding the protocol wins outright.
 * A crew holder or no majority leaves it to the scenario. A failed system is checked first.
 */
export function finalOutcome(vote: ProtocolVote, scenario: Scenario, status: SystemStatus, failed: boolean): Winner {
  if (failed) return "synthetics";
  const holder = protocolHolder(vote);
  if (holder && vote.synthetics.includes(holder)) return "synthetics";
  return scenarioMet(scenario, status) ? "crew" : "synthetics";
}
