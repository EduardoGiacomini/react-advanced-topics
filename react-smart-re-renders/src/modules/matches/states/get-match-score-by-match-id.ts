import { selectorFamily } from "recoil";
import { MatchScoreBoard } from "../models";
import { matchesScoreBoardState } from "./matches-scoreboard-state";

export const getMatchScoreByMatchId = selectorFamily<
  MatchScoreBoard | undefined,
  number
>({
  key: "get-match-score-by-match-id",
  get:
    (matchId: number) =>
    ({ get }) => {
      const matchesScoreBoard = get(matchesScoreBoardState);
      return matchesScoreBoard.get(matchId);
    },
});
