import React, { createContext, useContext, useEffect, useState } from "react";
import Papa from "papaparse";
import { graphql, useStaticQuery } from "gatsby";

export interface StatsContextType {
  data?: any[];
}

export const StatsContext = createContext<StatsContextType>({});
const useStatsContext = () => useContext(StatsContext);

interface StatsProviderProps {
  children?: React.ReactNode;
}
export const StatsProvider = ({ children }: StatsProviderProps) => {
  const [state, setState] = useState<StatsContextType>({});
  const csv = useStaticQuery(graphql`
    query {
      allFile {
        edges {
          node {
            internal {
              content
            }
          }
        }
      }
    }
  `);

  useEffect(() => {
    const val = Papa.parse(csv.allFile.edges[0].node.internal.content, {
      header: true,
      skipEmptyLines: true,
    });

    setState({
      data: val.data,
    });
  }, [csv]);
  return (
    <StatsContext.Provider value={{ ...state }}>
      {children}
    </StatsContext.Provider>
  );
};

export default useStatsContext;
