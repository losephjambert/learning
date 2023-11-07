import { Test } from '$src/types/test';
import { longestOnes, longestOnesRefactored } from './longest_ones';

type Input = {
  nums: number[];
  k: number;
};
const tests: Test<Input, number>[] = [
  {
    input: {
      nums: [],
      k: 2,
    },
    expected: 0,
  },
  {
    input: {
      nums: [0],
      k: 2,
    },
    expected: 1,
  },
  {
    input: {
      nums: [1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0],
      k: 2,
    },
    expected: 6,
  },
  {
    input: {
      nums: [0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1],
      k: 3,
    },
    expected: 10,
  },
];

describe(`longestOnes`, () => {
  tests.forEach(({ input: { nums, k }, expected }) => {
    it(`passes`, () => {
      expect(longestOnes(nums, k)).toEqual(expected);
    });
  });
});

describe(`longestOnesRefactored`, () => {
  tests.forEach(({ input: { nums, k }, expected }) => {
    it(`passes`, () => {
      expect(longestOnesRefactored(nums, k)).toEqual(expected);
    });
  });
});
