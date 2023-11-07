import { Test } from '$src/types/test';
import { snakeGame, Result } from './snake_game';

const tests: Test<string[][], Result>[] = [
  {
    input: [[]],
    expected: {
      cols: [],
      rows: [],
    },
  },
  {
    input: [],
    expected: {
      cols: [],
      rows: [],
    },
  },
  {
    input: [['+']],
    expected: {
      cols: [],
      rows: [],
    },
  },
  {
    input: [['0']],
    expected: {
      cols: [0],
      rows: [0],
    },
  },
  {
    input: [['0', '+']],
    expected: {
      cols: [0],
      rows: [],
    },
  },
  {
    input: [
      ['0', '+', '0', '+', '0', '0'],
      ['0', '+', '0', '+', '+', '0'],
      ['+', '+', '0', '+', '0', '0'],
      ['0', '0', '0', '0', '0', '0'],
      ['+', '+', '0', '+', '+', '0'],
      ['0', '+', '0', '+', '0', '0'],
    ],
    expected: {
      cols: [2, 5],
      rows: [3],
    },
  },
  {
    input: [
      ['0', '+', '0', '+', '0', '0'],
      ['0', '+', '+', '+', '+', '0'],
      ['0', '+', '0', '+', '0', '0'],
      ['0', '0', '0'],
      ['0', '+', '0'],
      ['0', '0', '0'],
    ],
    expected: {
      cols: [0, 5],
      rows: [3, 5],
    },
  },
];

describe(`snakeGame`, () => {
  tests.forEach(({ input, expected }) => {
    it(JSON.stringify(input), () => {
      expect(snakeGame(input)).toEqual(expected);
    });
  });
});
