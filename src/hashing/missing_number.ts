export function missingNumber(nums: number[]): number {
  let numsSum = 0;
  let expectedSum = 0;
  for (let i = 0; i < nums.length; i++) {
    numsSum += nums[i];
  }
  for (let i = 0; i <= nums.length; i++) {
    expectedSum += i;
  }

  return expectedSum - numsSum;
}
