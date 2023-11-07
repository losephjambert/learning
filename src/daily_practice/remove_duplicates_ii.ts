export function removeDuplicates(nums: number[]): number {
  let left = 0;
  for (let right = 0; right < nums.length; right++) {
    while (right - left >= 2 && left < right) {
      if (nums[left] === nums[right]) {
        nums[left] = '_' as any;
      }
      left++;
    }
  }

  let i = 0;
  while (i < nums.length) {
    if (nums[i] === ('_' as any)) {
      nums.splice(i, 1);
      continue;
    }
    i++;
  }

  return nums.length;
}
