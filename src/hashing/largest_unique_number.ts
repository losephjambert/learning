export function largestUniqueNumber(nums: number[]): number {
  let ans = -1;
  const m: Map<number, number> = new Map();
  for (const n of nums) {
    m.set(n, (m.get(n) ?? 0) + 1);
  }

  m.forEach((value, key) => {
    if (value === 1) {
      ans = Math.max(ans, key);
    }
  });

  return ans;
}
