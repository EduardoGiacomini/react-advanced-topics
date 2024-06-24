import React from "react";
import { Match } from "./models";

interface Output {
  data: Match[];
  error?: string;
  loading: boolean;
}

export function useMatches(): Output {
  const [output, setOutput] = React.useState<Output>({
    data: [],
    error: undefined,
    loading: true,
  });

  React.useEffect(() => {
    async function fetchMatchesMock() {
      const matches = await new Promise<Match[]>((resolve) => {
        setTimeout(() => {
          resolve([
            {
              id: 1,
              homeTeam: { id: 1, name: "Real Madrid", logo: "" },
              awayTeam: { id: 2, name: "Barcelona", logo: "" },
              score: { id: 1, homeTeamScore: 99, awayTeamScore: 99 },
            },
            {
              id: 2,
              homeTeam: { id: 3, name: "Liverpool", logo: "" },
              awayTeam: { id: 4, name: "Manchester United", logo: "" },
              score: { id: 2, homeTeamScore: 99, awayTeamScore: 99 },
            },
          ]);
        }, 2000);
      });
      setOutput({ data: matches, loading: false });
    }

    fetchMatchesMock();
  }, []);

  return output;
}
