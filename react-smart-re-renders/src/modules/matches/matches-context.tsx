import React, { useMemo } from "react";
import { Match, MatchScoreBoard } from "./models";
import { useSetRecoilState } from "recoil";
import { matchesScoreBoardState } from "./states/matches-scoreboard-state";

export interface State {
  matches: Match[];
}

interface API {
  onMatchesChanged: (matches: Match[]) => void;
}

const MatchesStateContext = React.createContext<State>({} as State);
const MatchesAPIContext = React.createContext<API>({} as API);

interface Props {
  children: React.ReactNode;
}

export function MatchesProvider(props: Props) {
  const { children } = props;
  const [state, setState] = React.useState<State>({ matches: [] });
  const setMatchesScoreBoardState = useSetRecoilState(matchesScoreBoardState);

  const api = useMemo(() => {
    const onMatchesChanged = (matches: Match[]): void => {
      const matchesScoreboard = new Map<number, MatchScoreBoard>();
      matches.forEach((match) => {
        matchesScoreboard.set(match.id, match.score);
      });
      setMatchesScoreBoardState(matchesScoreboard);
      setState({ matches });
    };

    return { onMatchesChanged };
  }, [setMatchesScoreBoardState]);

  return (
    <MatchesAPIContext.Provider value={api}>
      <MatchesStateContext.Provider value={state}>
        {children}
      </MatchesStateContext.Provider>
    </MatchesAPIContext.Provider>
  );
}

export const useMatchesState = () => React.useContext(MatchesStateContext);
export const useMatchesAPI = () => React.useContext(MatchesAPIContext);
