export function longestOnes(nums: number[], k: number): number {
  let length = 0;
  let left = 0;
  let zeros = 0;

  for (let right = 0; right < nums.length; right++) {
    if (nums[right] === 0) {
      zeros++;
    }

    while (zeros <= k && right < nums.length) {
      length = Math.max(length, right - left + 1);
      right++;
      if (nums[right] === 0) {
        zeros++;
      }
    }

    // zeros === k + 1
    if (nums[left] === 0) {
      zeros--;
    }
    left++;
  }

  return length;
}

export function longestOnesRefactored(nums: number[], k: number): number {
  let left = 0;
  let right = 0;
  let zeros = k;

  for (right; right < nums.length; right++) {
    if (nums[right] === 0) {
      zeros--;
    }

    // no remaining zeros
    if (zeros < 0) {
      zeros += 1 - nums[left];
      left++;
    }
  }

  return right - left;
}
