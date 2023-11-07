import { Test } from '$src/types/test';
import { checkIfPangram } from './check_if_pangram';

const tests: Test<string, boolean>[] = [
  {
    input: '',
    expected: false,
  },
  {
    input: 'thequickbrownfoxjumpsoverthelazydog',
    expected: true,
  },
  {
    input: 't',
    expected: false,
  },
  {
    input: 'tthequickbrownfoxjumpsoverthelazydo',
    expected: false,
  },
];

describe(`checkIfPangram`, () => {
  tests.forEach(({ input, expected }) => {
    it(`passes`, () => {
      expect(checkIfPangram(input)).toEqual(expected);
    });
  });
});
