/**
 * Gets the standard deviation of the given values
 * @param vals Values
 * @param mean Mean of the values
 */
export function stdDev(vals: number[], mean?: number): number {
  if (!mean) {
    mean = vals.reduce((acc, x) => x + acc, 0) / vals.length;
  }

  const sqdMean =
    vals.reduce((acc, x) => {
      return Math.pow(x - mean!, 2) + acc;
    }, 0) / vals.length;

  return Math.sqrt(sqdMean);
}

/**
 * Gets the number of standard deviations value is from the mean
 * @param val Value to determine deviations of
 * @param mean Mean of the data set `val` belongs to
 * @param std Standard deviation of data set `val` belongs to
 */
export function devFromMean(val: number, mean: number, std: number): number {
  return (val - mean) / std;
}

/**
 * Converts data to a normal distribution, with each number representing
 * it's number of standard deviations from the mean
 * @param data Data to convert
 */
export function toNormalDist(data: number[]): number[] {
  const mean = data.reduce((acc, x) => x + acc, 0) / data.length;
  const std = stdDev(data, mean);
  return data.map((x) => devFromMean(x, mean, std));
}

/**
 * Gets the line best representing the data set
 * @param data Data to run linear regression against
 * @returns Values of the trend line, with formula of: `line*x + intercept`
 */
export function linearRegression(data: { x: number; y: number }[]): {
  line: number;
  intercept: number;
} {
  const xSum = data.reduce((acc, val) => val.x + acc, 0);
  const ySum = data.reduce((acc, val) => val.y + acc, 0);
  const xySum = data.reduce((acc, val) => val.x * val.y + acc, 0);
  const xSqSum = data.reduce((acc, val) => Math.pow(val.x, 2) + acc, 0);
  const line =
    (data.length * xySum - xSum * ySum) / (data.length * xSqSum - xSum * xSum);
  const intercept =
    (xSqSum * ySum - xSum * xySum) / (data.length * xSqSum - xSum * xSum);

  return {
    line,
    intercept,
  };
}
