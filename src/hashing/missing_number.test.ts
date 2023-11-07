import { Test } from '$src/types/test';
import { missingNumber } from './missing_number';

const tests: Test<number[], number>[] = [
  {
    input: [3, 0, 1],
    expected: 2,
  },
  {
    input: [0, 1],
    expected: 2,
  },
  {
    input: [9, 6, 4, 2, 3, 5, 7, 0, 1],
    expected: 8,
  },
  {
    input: [],
    expected: 0,
  },
  {
    input: [1],
    expected: 0,
  },
];

describe(`missingNumber`, () => {
  tests.forEach(({ input, expected }) => {
    it(`passes`, () => {
      expect(missingNumber(input)).toEqual(expected);
    });
  });
});
