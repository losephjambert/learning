export function minStartValue(nums: number[]): number {
  if (nums.length === 0) {
    return 1;
  }

  let runningSum = nums[0];
  let startValueBase = runningSum;

  for (let i = 1; i < nums.length; i++) {
    runningSum += nums[i];
    if (runningSum < startValueBase) {
      startValueBase = runningSum;
    }
  }

  return startValueBase >= 0 ? 1 : Math.abs(startValueBase) + 1;
}
