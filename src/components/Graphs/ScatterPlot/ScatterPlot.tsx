import React, { useCallback } from "react";
import { linearRegression } from "helpers/math.helpers";
import { useMemo } from "react";
import { line as d3line } from "d3-shape";
import { Coordinate, NivoLayers } from "components/Graphs/types";
import {
  ScatterPlot as Plot,
  ScatterPlotLayerProps,
  ScatterPlotRawSerie,
} from "@nivo/scatterplot";

const TrendLine = ({ nodes }: ScatterPlotLayerProps<Coordinate>) => {
  const { line, intercept } = linearRegression(nodes);
  const start = Math.min(...nodes.map((x) => x.x));
  const trendLine = d3line<Coordinate>()
    .x((_, i) => i)
    .y((v) => v.y);

  console.log(line, intercept);
  return <path d={trendLine(nodes) || ""} className="fill-blue-500" />;
};

export interface ScatterPlotProps {
  data: Coordinate[];
  showTrend?: boolean;
}

const ScatterPlot = ({
  data: rawData,
  showTrend = false,
}: ScatterPlotProps) => {
  const wrapped: ScatterPlotRawSerie<Coordinate> = useMemo(
    () => ({
      id: "test",
      data: rawData,
    }),
    [rawData]
  );

  const layers = useMemo(() => {
    let vals: NivoLayers = [
      "grid",
      "axes",
      "nodes",
      "markers",
      "mesh",
      "legends",
    ];
    if (showTrend) {
      vals = [...vals.slice(0, 2), TrendLine, ...vals.slice(2)];
    }

    return vals;
  }, [showTrend, rawData]);

  const { xVals, yVals } = useMemo(() => {
    const xVals = [];
    const yVals = [];
    for (const val of rawData) {
      xVals.push(val.x);
      yVals.push(val.y);
    }

    return { xVals, yVals };
  }, [rawData]);

  const findGap = useCallback((vals: number[]) => {
    let max = -1;
    for (let i = 0; i < vals.length - 1; i++) {
      const diff = Math.abs(vals[i] - vals[i + 1]);
      max = Math.max(diff, max);
    }

    return max;
  }, []);

  const { xMin, xMax } = useMemo(() => {
    const gap = findGap(xVals);
    return {
      xMin: Math.min(...xVals) - gap,
      xMax: Math.max(...xVals) + gap,
    };
  }, [findGap, xVals]);
  const { yMin, yMax } = useMemo(() => {
    const gap = findGap(yVals);
    return {
      yMin: Math.min(...yVals) - gap,
      yMax: Math.max(...yVals) + gap,
    };
  }, [findGap, yVals]);

  return (
    <Plot<Coordinate>
      data={[wrapped]}
      width={500}
      height={400}
      yScale={{
        type: "linear",
        max: yMax,
        min: yMin,
      }}
      xScale={{
        type: "linear",
        max: xMax,
        min: xMin,
      }}
      colors={["#0095ff"]}
      layers={layers}
    />
  );
};

export default ScatterPlot;
