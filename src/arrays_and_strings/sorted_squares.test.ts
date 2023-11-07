import { Test } from '~/types/test';
import {
  sortedSquares,
  sortedSquaresOnM,
  sortedSquaresOn,
} from './sorted_squares';

const tests: Test<number[], number[]>[] = [
  {
    input: [-4, -1, 0, 3, 10],
    expected: [0, 1, 9, 16, 100],
  },
  {
    input: [-7, -3, 2, 3, 11],
    expected: [4, 9, 9, 49, 121],
  },
  {
    input: [],
    expected: [],
  },
  {
    input: [-4, -1, 0, 1, 4],
    expected: [0, 1, 1, 16, 16],
  },
  {
    input: [-10, -6, -3, -1, 0],
    expected: [0, 1, 9, 36, 100],
  },
];

describe(`sortedSquares`, () => {
  tests.forEach(({ input, expected }) => {
    it(`${JSON.stringify(input)} => ${JSON.stringify(expected)}`, () => {
      const actual = sortedSquares(input);
      expect(actual).toEqual(expected);
    });
  });
});

describe(`sortedSquaresOnM`, () => {
  tests.forEach(({ input, expected }) => {
    it(`${JSON.stringify(input)} => ${JSON.stringify(expected)}`, () => {
      const actual = sortedSquaresOnM(input);
      expect(actual).toEqual(expected);
    });
  });
});

describe(`sortedSquaresOn`, () => {
  tests.forEach(({ input, expected }) => {
    it(`${JSON.stringify(input)} => ${JSON.stringify(expected)}`, () => {
      const actual = sortedSquaresOn(input);
      expect(actual).toEqual(expected);
    });
  });
});
