import { Test } from '$src/types/test';
import { findWinners } from './find_players_with_zero_or_one_losses';

const tests: Test<number[][], number[][]>[] = [
  {
    input: [
      [1, 3],
      [2, 3],
      [3, 6],
      [5, 6],
      [5, 7],
      [4, 5],
      [4, 8],
      [4, 9],
      [10, 4],
      [10, 9],
    ],
    expected: [
      [1, 2, 10],
      [4, 5, 7, 8],
    ],
  },
  {
    input: [
      [2, 3],
      [1, 3],
      [5, 4],
      [6, 4],
    ],
    expected: [[1, 2, 5, 6], []],
  },
  {
    input: [
      [2, 3],
      [3, 2],
      [1, 4],
      [3, 1],
    ],
    expected: [[], [1, 2, 3, 4]],
  },
  {
    input: [
      [2, 3],
      [3, 2],
      [1, 4],
      [3, 1],
      [4, 3],
      [1, 2],
      [2, 1],
      [3, 4],
    ],
    expected: [[], []],
  },
];

describe(`findWinners`, () => {
  tests.forEach(({ input, expected }) => {
    it(JSON.stringify(input), () => {
      expect(findWinners(input)).toEqual(expected);
    });
  });
});
