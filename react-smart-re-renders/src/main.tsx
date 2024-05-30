import React from "react";
import ReactDOM from "react-dom/client";
import { RecoilRoot } from "recoil";
import {
  MatchesScreen,
  MatchesProvider,
  MatchesScoreBoardManager,
} from "./modules";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RecoilRoot>
      <MatchesProvider>
        <MatchesScreen />
        <hr />
        <MatchesScoreBoardManager />
      </MatchesProvider>
    </RecoilRoot>
  </React.StrictMode>
);
