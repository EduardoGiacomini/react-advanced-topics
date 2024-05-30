import { Team } from "./team";
import { MatchScoreBoard } from "./match-scoreboard";

export class Match {
  constructor(
    public readonly id: number,
    public readonly homeTeam: Team,
    public readonly awayTeam: Team,
    public readonly score: MatchScoreBoard
  ) {}
}
