import { useRecoilValue } from "recoil";
import { getMatchScoreByMatchId } from "./states/get-match-score-by-match-id";

interface Props {
  matchId: number;
}

export function MatchScore(props: Props): JSX.Element {
  const { matchId } = props;
  const matchScore = useRecoilValue(getMatchScoreByMatchId(matchId));
  return (
    <span>
      {matchScore?.homeTeamScore ?? 0} x {matchScore?.awayTeamScore ?? 0}
    </span>
  );
}
