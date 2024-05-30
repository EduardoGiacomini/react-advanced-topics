import { atom } from "recoil";
import { MatchScoreBoard } from "../models";

export const matchesScoreBoardState = atom<Map<number, MatchScoreBoard>>({
  key: "matches-scoreboard-state",
  default: new Map<number, MatchScoreBoard>(),
});
