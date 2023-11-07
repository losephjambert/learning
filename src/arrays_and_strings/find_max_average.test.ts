import { Test } from '$src/types/test';
import { findMaxAverage } from './find_max_average';

type Input = {
  nums: number[];
  k: number;
};
const tests: Test<Input, number>[] = [
  {
    input: {
      nums: [1, 12, -5, -6, 50, 3],
      k: 4,
    },
    expected: 12.75,
  },
  {
    input: {
      nums: [1, 12, -5, -6, 50, 3],
      k: 2,
    },
    expected: 26.5,
  },
  {
    input: {
      nums: [1, 12, -5, -6, 50, 3, 5, 34, -20, 6, 72, 8, 19, 13, -9, 2, 12],
      k: 6,
    },
    expected: 19.83333,
  },
  {
    input: {
      nums: [5],
      k: 1,
    },
    expected: 5,
  },
  {
    input: {
      nums: [-1],
      k: 1,
    },
    expected: -1,
  },
  {
    input: {
      nums: [
        493, 593, 1446, -6013, 2163, 8450, 3008, -1328, 6195, 4102, -6242,
        -9971, -8327, 4480, -4972, -8305, -1644, 2320, 331, 2465, 2955, -8386,
        -7580, 1759, -9576, -8088, -9446, -2916, -3600, 923, 1412, -5390, 4492,
        9458, -9336, -4754, -3455, 9597, -324, -5628, 4242, 4076, 8159, -2423,
        -3449, 6744, 9029, -9231, 2283, 6118, -200, 3610, -7566, -6976, 2519,
        9532, 2221, -5167, -2370, 1861, -1558, -9815, -1186, 2021, 7050, -4504,
        4926, 8362, 7805, -8274, -351, 5826, 7623, -5520, -2395, -8466, -8461,
        3261, -3197,
      ],
      k: 7,
    },
    expected: 3768.28571,
  },
];

describe.skip(`findMaxAverage`, () => {
  tests.forEach(({ input: { nums, k }, expected }) => {
    it(`passes`, () => {
      expect(findMaxAverage(nums, k)).toEqual(expected);
    });
  });
});
