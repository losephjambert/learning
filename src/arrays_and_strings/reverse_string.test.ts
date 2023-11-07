import { Test } from '~/types/test';
import { reverseString } from './reverse_string';

describe(`reverse_string`, () => {
  const tests: Test<string[], string[]>[] = [
    {
      input: ['H', 'e', 'l', 'l', 'o'],
      expected: ['o', 'l', 'l', 'e', 'H'],
    },
    {
      input: ['H'],
      expected: ['H'],
    },
    {
      input: [],
      expected: [],
    },
    {
      input: ['T', 'h', 'e', ' ', 'O', 'l', 'd', ' ', 'm', 'a', 'n'],
      expected: ['n', 'a', 'm', ' ', 'd', 'l', 'O', ' ', 'e', 'h', 'T'],
    },
  ];
  tests.forEach(({ input, expected }) => {
    it(`reverses the string`, () => {
      reverseString(input);
      expect(input).toEqual(expected);
    });
  });
});
