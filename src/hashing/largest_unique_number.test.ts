import { Test } from '$src/types/test';
import { largestUniqueNumber } from './largest_unique_number';

const tests: Test<number[], number>[] = [
  {
    input: [1, 1, 1, 2, 2, 2, 2, 3],
    expected: 3,
  },
  {
    input: [1, 2, 3, 4, 5, 9, 7, 8, 9],
    expected: 8,
  },
  {
    input: [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 9, 7, 7, 8, 8, 9],
    expected: -1,
  },
];

describe(`largestUniqueNumber`, () => {
  tests.forEach(({ input, expected }) => {
    it(JSON.stringify(input), () => {
      expect(largestUniqueNumber(input)).toEqual(expected);
    });
  });
});
