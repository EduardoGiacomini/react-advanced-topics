import { useSetRecoilState } from "recoil";
import { useMatchesState } from "./matches-context";
import { matchesScoreBoardState } from "./states/matches-scoreboard-state";

export function MatchesScoreBoardManager(): JSX.Element {
  const { matches } = useMatchesState();
  const setMatchesScoreBoardState = useSetRecoilState(matchesScoreBoardState);

  const incrementScore = (
    matchId: number,
    team: "homeTeamScore" | "awayTeamScore"
  ): void => {
    setMatchesScoreBoardState((prev) => {
      if (!prev.has(matchId)) return prev;
      const matchScore = prev.get(matchId)!;
      const updatedMatchScore = { ...matchScore };
      updatedMatchScore[team] += 1;
      return new Map(prev).set(matchId, updatedMatchScore);
    });
  };

  return (
    <div>
      {matches.map((match) => (
        <div key={match.id}>
          <p>
            {match.homeTeam.name}
            <button onClick={() => incrementScore(match.id, "homeTeamScore")}>
              +
            </button>{" "}
            x{" "}
            <button onClick={() => incrementScore(match.id, "awayTeamScore")}>
              +
            </button>
            {match.awayTeam.name}
          </p>
        </div>
      ))}
    </div>
  );
}
