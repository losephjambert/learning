/*
Problem: Given an integer array nums sorted in non-decreasing order,
return an array of the squares of each number sorted in non-decreasing order.

Step1: square each number in the array (return an array of the squares of each number)
Step2: sort the resulting array of squares (sorted in non-decreasing order)
*/
export function sortedSquares(nums: number[]): number[] {
  // step 1 - square each number in the input and add to new array result
  const result: number[] = [];
  nums.forEach((number) => result.push(number * number));

  // step 2 - sort resulting array
  return result.sort((a, b) => a - b);
}

/*
Problem: Given an integer array nums sorted in non-decreasing order,
return an array of the squares of each number sorted in non-decreasing order.

Step1: create map of absolute value of each number to frequency of said number
Step2: iterate from 0 -> Math.max(nums[i]) and push in squares of each number in map


Space: O(n)
Time: O(n*m)
*/
export function sortedSquaresOnM(nums: number[]): number[] {
  const numsMap: Map<number, number> = new Map();
  nums.forEach((n) => {
    const abs = Math.abs(n);
    const frequency = numsMap.get(abs);
    numsMap.set(abs, frequency == null ? 1 : frequency + 1);
  });

  let max = 0;
  nums.forEach((n) => {
    const abs = Math.abs(n);
    if (abs > max) {
      max = abs;
    }
  });

  const result: number[] = [];
  for (let i = 0; i <= max; i++) {
    const mapValue = numsMap.get(i);
    if (mapValue) {
      for (let j = 0; j < mapValue; j++) {
        result.push(i * i);
      }
    }
  }

  return result;
}

/*
Problem: Given an integer array nums sorted in non-decreasing order,
return an array of the squares of each number sorted in non-decreasing order.

Starting from the left and the right, compare absolute values and sort numbers one at a time

Time: O(n)
Space: O(n)
*/
export function sortedSquaresOn(nums: number[]): number[] {
  const result: number[] = new Array(nums.length);
  let left = 0; // points to start of nums
  let right = nums.length - 1; // points to end of nums
  let ri = result.length - 1; // points to end of result

  // while we have not exhausted the result array
  while (ri >= 0) {
    // if the left absolute value is larger than the right number
    if (Math.abs(nums[left]) > Math.abs(nums[right])) {
      // set the right-most place of result to the square of left number
      // and increment the left pointer
      result[ri] = nums[left] * nums[left];
      left++;
    } else {
      // else set the right-most place of result to the square of right number
      // and decrement the right pointer
      result[ri] = nums[right] * nums[right];
      right--;
    }

    // always decrement the result pointer
    // so that we don't overwrite any values
    // or wind up in an infinite loop
    // could be rewritten as a for-loop
    ri--;
  }

  return result;
}
