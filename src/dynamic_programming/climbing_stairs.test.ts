import {
  climbingStairs,
  climbingStairsThreeSteps,
  climbingStairsOneToThreeSteps,
} from './climbing_stairs';

describe(`climbing stairs`, () => {
  describe(`climbingStairs`, () => {
    it(`should return 1 when n = 1`, () => {
      expect(climbingStairs(1)).toBe(1);
    });

    it(`should return 1 when n = 0`, () => {
      expect(climbingStairs(0)).toBe(1);
    });

    it(`should return 8 when n = 5`, () => {
      expect(climbingStairs(5)).toBe(8);
    });

    it(`should return 20365011074 when n = 50`, () => {
      expect(climbingStairs(50)).toBe(20365011074);
    });
  });

  describe(`climbingStairsThreeSteps`, () => {
    it(`should return 1 when n = 1`, () => {
      expect(climbingStairsThreeSteps(1)).toBe(1);
    });

    it(`should return 1 when n = 0`, () => {
      expect(climbingStairsThreeSteps(0)).toBe(1);
    });

    it(`should return 4 when n = 5`, () => {
      expect(climbingStairsThreeSteps(5)).toBe(4);
    });

    it(`should return 2 when n = 3`, () => {
      expect(climbingStairsThreeSteps(3)).toBe(2);
    });

    it(`should return 3 when n = 4`, () => {
      expect(climbingStairsThreeSteps(4)).toBe(3);
    });

    it(`should return 9 when n = 7`, () => {
      expect(climbingStairsThreeSteps(7)).toBe(9);
    });

    it(`should return 13 when n = 8`, () => {
      expect(climbingStairsThreeSteps(8)).toBe(13);
    });
  });

  describe(`climbingStairsOneToThreeSteps`, () => {
    it(`should return 4 when n = 3`, () => {
      expect(climbingStairsOneToThreeSteps(3)).toBe(4);
    });

    it(`should return 7 when n = 4`, () => {
      expect(climbingStairsOneToThreeSteps(4)).toBe(7);
    });

    it(`should return 13 when n = 5`, () => {
      expect(climbingStairsOneToThreeSteps(5)).toBe(13);
    });

    it(`should return 19 when n = 6`, () => {
      expect(climbingStairsOneToThreeSteps(6)).toBe(24);
    });
  });
});
