export function getAverages(nums: number[], k: number): number[] {
  const sumArray: number[] = [];
  const result: number[] = [];
  for (let i = 0; i < nums.length; i++) {
    sumArray.push(nums[i] + (sumArray[i - 1] ?? 0));
    result.push(i - k < 0 || i + k >= nums.length ? -1 : 0);
  }

  let left = k * 2 + 1;
  let right = k * 2;
  let start = k;
  while (start + k < nums.length) {
    const r = sumArray[right];
    const subtraction = sumArray[right - left] ?? 0;
    result[start] = Math.floor((r - subtraction) / left);
    start++;
    right++;
  }

  return result;
}
