import { Test } from '$src/types/test';
import { runningSum } from './running_sum';
const tests: Test<number[], number[]>[] = [
  {
    input: [],
    expected: [],
  },
  {
    input: [1, 2, 3, 4],
    expected: [1, 3, 6, 10],
  },
  {
    input: [1, 1, 1, 1, 1],
    expected: [1, 2, 3, 4, 5],
  },
  {
    input: [3, 1, 2, 10, 1],
    expected: [3, 4, 6, 16, 17],
  },
  {
    input: [5],
    expected: [5],
  },
];

describe(`runningSum`, () => {
  tests.forEach(({ input, expected }) => {
    it(`passes`, () => {
      expect(runningSum(input)).toEqual(expected);
    });
  });
});
