import { Coordinate } from "components/Graphs/types";

export function zipCoordinates(xVals: number[], yVals: number[]): Coordinate[] {
  return xVals.reduce((acc: Coordinate[], x, idx) => {
    const y = yVals[idx];
    acc.push({ x, y });
    return acc;
  }, []);
}
