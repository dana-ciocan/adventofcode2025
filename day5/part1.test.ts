import { describe, it, expect } from 'vitest';
import { isIngredientFresh } from './isIngredientFresh';

describe('getFreshIngredientList', () => {
  it('should return true', () => {
    expect(isIngredientFresh([[3, 5]], [], 4)).toEqual(true);
  });

  it('should return false', () => {
    expect(isIngredientFresh([[3, 5]], [], 6)).toEqual(false);
  });

  it('should return false', () => {
    expect(isIngredientFresh([[3, 5]], [3], 3)).toEqual(true);
  });

  it('should return false', () => {
    expect(
      isIngredientFresh(
        [
          [3, 5],
          [10, 14],
          [16, 20],
          [12, 18],
        ],
        [],
        1,
      ),
    ).toEqual(false);
  });

  it('should return true', () => {
    expect(
      isIngredientFresh(
        [
          [3, 5],
          [10, 14],
          [16, 20],
          [12, 18],
        ],
        [],
        5,
      ),
    ).toEqual(true);
  });

  it('should return false', () => {
    expect(
      isIngredientFresh(
        [
          [3, 5],
          [10, 14],
          [16, 20],
          [12, 18],
        ],
        [],
        8,
      ),
    ).toEqual(false);
  });

  it('should return true', () => {
    expect(
      isIngredientFresh(
        [
          [3, 5],
          [10, 14],
          [16, 20],
          [12, 18],
        ],
        [],
        11,
      ),
    ).toEqual(true);
  });

  it('should return true', () => {
    expect(
      isIngredientFresh(
        [
          [3, 5],
          [10, 14],
          [16, 20],
          [12, 18],
        ],
        [],
        17,
      ),
    ).toEqual(true);
  });

  it('should return true', () => {
    expect(
      isIngredientFresh(
        [
          [3, 5],
          [10, 14],
          [16, 20],
          [12, 18],
        ],
        [],
        32,
      ),
    ).toEqual(false);
  });
});
