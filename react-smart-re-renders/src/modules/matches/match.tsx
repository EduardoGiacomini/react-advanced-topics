import { Match as MatchModel } from "./models";
import { MatchScore } from "./match-score";

interface Props {
  match: MatchModel;
}

export function Match(props: Props): JSX.Element {
  const { match } = props;

  return (
    <div>
      <p>
        {match.homeTeam.name} <MatchScore matchId={match.id} />{" "}
        {match.awayTeam.name}
      </p>
    </div>
  );
}
