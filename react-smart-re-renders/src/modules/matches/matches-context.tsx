import React, { useMemo } from "react";
import { Match } from "./models";
import { useSetRecoilState } from "recoil";
import { matchesScoreBoardState } from "./states/matches-scoreboard-state";
import { WebSocket } from "../../websocket";

export interface State {
  matches: Match[];
}

interface API {
  onMatchesChanged: (matches: Match[]) => void;
}

const MatchesAPIContext = React.createContext<API>({} as API);

interface Props {
  children: React.ReactNode;
}

export function MatchesProvider(props: Props) {
  const { children } = props;
  const setMatchesScoreBoardState = useSetRecoilState(matchesScoreBoardState);

  const api = useMemo(() => {
    const onMatchesChanged = (matches: Match[]): void => {
      for (const match of matches) {
        setMatchesScoreBoardState((prev) => {
          return new Map(prev).set(match.id, match.score);
        });
      }
    };

    return { onMatchesChanged };
  }, [setMatchesScoreBoardState]);

  React.useEffect(() => {
    const webSocket = WebSocket.getInstance();
    webSocket.connect();
    webSocket.subscribe("scoreboard", (data) => {
      console.log(JSON.parse(data as string));
      api.onMatchesChanged(JSON.parse(data as string));
      // Websocket should return only updated matches
    });

    return () => {
      webSocket.unsubscribe("scoreboard");
      webSocket.disconnect();
    };
  }, [api]);

  return (
    <MatchesAPIContext.Provider value={api}>
      {children}
    </MatchesAPIContext.Provider>
  );
}

export const useMatchesAPI = () => React.useContext(MatchesAPIContext);
