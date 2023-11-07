export function findWinners(matches: number[][]): number[][] {
  const lossMap: Map<number, number> = new Map();
  const result: [number[], number[]] = [[], []];
  for (let i = 0; i < matches.length; i++) {
    const [winner, loser] = matches[i];

    lossMap.set(winner, (lossMap.get(winner) ?? 0) + 0);
    lossMap.set(loser, (lossMap.get(loser) ?? 0) + 1);
  }

  lossMap.forEach((value, key) => {
    if (value === 0) {
      result[0].push(key);
    }

    if (value === 1) {
      result[1].push(key);
    }
  });

  result[0].sort((a, b) => a - b);
  result[1].sort((a, b) => a - b);
  return result;
}
