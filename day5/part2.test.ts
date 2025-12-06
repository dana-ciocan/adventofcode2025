import { describe, it, expect } from 'vitest';
import {
  getIdsFromRange,
  getNumFreshIngredients,
} from './getNumFreshIngredients';

describe('getIdsFromRange', () => {
  it('should return 3, 4, 5', () => {
    expect(getIdsFromRange([3, 5])).toEqual(new Set([3, 4, 5]));
  });

  it('should return 1 to 10', () => {
    expect(getIdsFromRange([1, 10])).toEqual(
      new Set([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]),
    );
  });
});

describe('getNumFreshIngredients', () => {
  it('should return 14', () => {
    expect(
      getNumFreshIngredients([
        [12, 18],
        [10, 14],
        [16, 20],
        [3, 5],
      ]),
    ).toEqual(14);
  });

  it('should return 14', () => {
    expect(
      getNumFreshIngredients([
        [12, 18],
        [10, 14],
        [16, 20],
        [3, 5],
        [10, 12],
      ]),
    ).toEqual(14);
  });

  it('should return 15', () => {
    expect(
      getNumFreshIngredients([
        [12, 18],
        [10, 14],
        [16, 20],
        [18, 21],
        [3, 5],
        [10, 12],
      ]),
    ).toEqual(15);
  });

  it('should return 16', () => {
    expect(
      getNumFreshIngredients([
        [12, 18], // 7
        [18, 22], // 4
        [10, 14], // 2
        [16, 20], // 0
        [18, 21], // 0
        [3, 5], // 3
        [10, 12], // 0
      ]),
    ).toEqual(16);
  });

  it('should return 16', () => {
    expect(
      getNumFreshIngredients([
        [1, 24],
        [12, 18],
        [18, 22],
        [10, 14],
        [16, 20],
        [18, 21],
        [3, 5],
        [10, 12],
      ]),
    ).toEqual(24);
  });
});
