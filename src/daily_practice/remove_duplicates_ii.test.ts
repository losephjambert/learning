import { Test } from '$src/types/test';
import { removeDuplicates } from './remove_duplicates_ii';

const tests: Test<number[], { k: number; input: number[] }>[] = [
  {
    input: [1, 1, 1, 2, 2, 2, 2, 3],
    expected: {
      k: 5,
      input: [1, 1, 2, 2, 3],
    },
  },
  {
    input: [1, 1, 1],
    expected: {
      k: 2,
      input: [1, 1],
    },
  },
  {
    input: [1, 2, 2, 2],
    expected: {
      k: 3,
      input: [1, 2, 2],
    },
  },
];

describe(`removeDuplicates`, () => {
  tests.forEach(({ input, expected }) => {
    it(JSON.stringify(input), () => {
      expect(removeDuplicates(input)).toEqual(expected.k);
      expect(input).toEqual(expected.input);
    });
  });
});
