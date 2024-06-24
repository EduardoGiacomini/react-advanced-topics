import { useRecoilValue } from "recoil";
import { getMatchScoreByMatchId } from "./states/get-match-score-by-match-id";
import { MatchScoreBoard } from "./models";

interface Props {
  matchId: number;
  scoreDefault: MatchScoreBoard;
}

export function MatchScore(props: Props): JSX.Element {
  const { matchId, scoreDefault } = props;
  const matchScore = useRecoilValue(getMatchScoreByMatchId(matchId));
  // key composta por placar + matchId
  return (
    <span key={123}>
      {matchScore?.homeTeamScore ?? scoreDefault.homeTeamScore} x{" "}
      {matchScore?.awayTeamScore ?? scoreDefault.awayTeamScore}
    </span>
  );
}
