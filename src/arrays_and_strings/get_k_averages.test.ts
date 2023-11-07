import { Test } from '$src/types/test';
import { getAverages } from './get_k_averages';

const tests: Test<
  {
    nums: number[];
    k: number;
  },
  number[]
>[] = [
  {
    input: {
      nums: [7, 4, 3, 9, 1, 8, 5, 2, 6],
      k: 3,
    },
    expected: [-1, -1, -1, 5, 4, 4, -1, -1, -1],
  },
  {
    input: {
      nums: [100000],
      k: 0,
    },
    expected: [100000],
  },
  {
    input: {
      nums: [8],
      k: 1000000,
    },
    expected: [-1],
  },
];

describe(`getAverages`, () => {
  tests.forEach(({ input, expected }) => {
    it(`passes`, () => {
      expect(getAverages(input.nums, input.k)).toEqual(expected);
    });
  });
});
