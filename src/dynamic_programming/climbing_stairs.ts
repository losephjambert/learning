/*
You are climbing a staircase. It takes n steps to reach the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

O(n) time
O(1) space
*/
export function climbingStairs(numberOfStairs: number): number {
  let a = 1;
  let b = a;
  let c = b;
  for (let i = 2; i <= numberOfStairs; i++) {
    c = a + b;
    a = b;
    b = c;
  }

  return c;
}

/*

You are climbing a staircase. It takes n steps to reach the top.

Each time you can either climb 1 or 3 steps. In how many distinct ways can you climb to the top?

f(n) = n - 1 + n - 3;

*/
export function climbingStairsThreeSteps(numberOfStairs: number): number {
  const result: number[] = [1, 1, 1];

  for (let i = 3; i <= numberOfStairs; i++) {
    result.push(result[i - 1] + result[i - 3]);
  }

  return result[numberOfStairs];
}

/*

You are climbing a staircase. It takes n steps to reach the top.

Each time you can either climb 1, 2, or 3 steps. In how many distinct ways can you climb to the top?

f(n) = n - 1 + n - 2 + n - 3;
*/
export function climbingStairsOneToThreeSteps(numberOfStairs: number): number {
  const result: number[] = [1, 1, 2];

  for (let i = 3; i <= numberOfStairs; i++) {
    result.push(result[i - 1] + result[i - 2] + result[i - 3]);
  }

  return result[numberOfStairs];
}
