import { Test } from '$src/types/test';
import { countElements } from './count_elements';

const tests: Test<number[], number>[] = [
  {
    input: [1, 2, 3],
    expected: 2,
  },
  {
    input: [1, 1, 3, 3, 5, 5, 7, 7],
    expected: 0,
  },
  {
    input: [9, 6, 4, 2, 3, 5, 7, 0, 1],
    expected: 7,
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

describe(`countElements`, () => {
  tests.forEach(({ input, expected }) => {
    it(`passes`, () => {
      expect(countElements(input)).toEqual(expected);
    });
  });
});
