import {
  ScatterPlotCustomSvgLayer,
  ScatterPlotLayerId,
} from "@nivo/scatterplot";

export interface Coordinate {
  x: number;
  y: number;
}

export type NivoLayers =
  | (ScatterPlotLayerId | ScatterPlotCustomSvgLayer<Coordinate>)[]
  | undefined;
