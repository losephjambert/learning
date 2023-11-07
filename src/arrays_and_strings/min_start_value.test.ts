import { Test } from '$src/types/test';
import { minStartValue } from './min_start_value';
const tests: Test<number[], number>[] = [
  {
    input: [],
    expected: 1,
  },
  {
    input: [1, 2],
    expected: 1,
  },
  {
    input: [-3, 2, -3, 4, 2],
    expected: 5,
  },
  {
    input: [1, -2, -3],
    expected: 5,
  },
];

describe(`runningSum`, () => {
  tests.forEach(({ input, expected }) => {
    it(`passes`, () => {
      expect(minStartValue(input)).toEqual(expected);
    });
  });
});
