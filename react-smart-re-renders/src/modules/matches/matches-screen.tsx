import React from "react";
import { useMatchesAPI } from "./matches-context";
import { useMatches } from "./use-matches";
import { Match } from "./match";

export function MatchesScreen(): JSX.Element {
  const { data, loading } = useMatches();
  const { onMatchesChanged } = useMatchesAPI();

  React.useEffect(() => {
    onMatchesChanged(data);
  }, [data, onMatchesChanged]);

  if (loading) {
    return <h1>Carregando...</h1>;
  }

  return (
    <div>
      <h1>Partidas de futebol</h1>
      <div>
        {data.map((match) => (
          <Match key={match.id} match={match} />
        ))}
      </div>
    </div>
  );
}
