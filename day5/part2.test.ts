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
        [3, 5],
        [10, 14],
        [16, 20],
        [12, 18],
      ]),
    ).toEqual(14);
  });
});
