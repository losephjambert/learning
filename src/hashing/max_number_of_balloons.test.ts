import { Test } from '$src/types/test';
import {
  maxNumberOfBalloons,
  maxNumberOfBalloons2,
} from './max_number_of_balloons';

const tests: Test<string, number>[] = [
  { input: '', expected: 0 },
  { input: 'nlaebolko', expected: 1 },
  { input: 'loonbalxballpoon', expected: 2 },
  { input: 'leetcode', expected: 0 },
  { input: 'baaaaaalllllllllllllloooooooooooooonnnnnnn', expected: 1 },
];

describe(`maxNumberOfBalloons`, () => {
  tests.forEach(({ input, expected }) => {
    it(JSON.stringify(input), () => {
      expect(maxNumberOfBalloons(input)).toEqual(expected);
    });
  });
});

const tests2: Test<[string, string], number>[] = [
  { input: ['', 'balloon'], expected: 0 },
  { input: ['nlaebolko', 'balloon'], expected: 1 },
  { input: ['loonbalxballpoon', 'balloon'], expected: 2 },
  { input: ['leetcode', 'balloon'], expected: 0 },
  {
    input: ['baaaaaalllllllllllllloooooooooooooonnnnnnn', 'balloon'],
    expected: 1,
  },
  { input: ['bbfoobarbarfoobazgoofoobarrr', 'bar'], expected: 4 },
  { input: ['oblonggggnnnlllbbbooo', 'oblong'], expected: 2 },
];

describe(`maxNumberOfBalloons2`, () => {
  tests2.forEach(({ input, expected }) => {
    it(JSON.stringify(input), () => {
      expect(maxNumberOfBalloons2(input[0], input[1])).toEqual(expected);
    });
  });
});
