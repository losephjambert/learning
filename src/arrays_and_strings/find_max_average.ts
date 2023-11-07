export function findMaxAverage(nums: number[], k: number): number {
  let total = 0;
  let maxAverage = 0,
    left = 0,
    right = 0;

  for (right; right < k; right++) {
    total += nums[right];
  }

  maxAverage = total / k;

  for (right = k; right < nums.length; right++) {
    // chop off the left
    total = removeNumberFromTotal(total, nums[left]);
    // increment the left side of the window
    left++;
    // add the new right
    total += nums[right];
    // create a new max avg
    maxAverage = Math.max(maxAverage, total / k);

    let currentWindow = [];
    for (let i = left; i <= right; i++) {
      currentWindow.push(nums[i]);
    }
  }

  return Number(maxAverage.toFixed(5));
}

function removeNumberFromTotal(total: number, numberToRemove: number): number {
  let newTotal = total;
  if (newTotal < 0) {
    if (numberToRemove < 0) {
      newTotal -= numberToRemove;
    } else {
      newTotal += numberToRemove;
    }
  } else {
    newTotal -= numberToRemove;
  }

  return newTotal;
}
