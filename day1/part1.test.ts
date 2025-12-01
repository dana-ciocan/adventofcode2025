import { describe, it, expect } from 'vitest';
import { calculateRotations } from './calculateRotations';
import rotations from './part1-rotations.json' with { type: 'json' };

describe('calculateRotations()', () => {
  it('should return 3 from the test input', () => {
    const testInput = [
      'L68',
      'L30',
      'R48',
      'L5',
      'R60',
      'L55',
      'L1',
      'L99',
      'R14',
      'L82',
    ];

    expect(calculateRotations(testInput)).toEqual(3);
  });

  it('should return 1150 from the actual input', () => {
    expect(calculateRotations(rotations)).toEqual(1150);
  });

  it('should return 1 from the test input', () => {
    const testInput = ['L50'];

    expect(calculateRotations(testInput)).toEqual(1);
  });

  it('should return 1 from the test input', () => {
    const testInput = ['R50'];

    expect(calculateRotations(testInput)).toEqual(1);
  });

  it('should return 1 from the test input', () => {
    expect(calculateRotations(['R150'])).toEqual(1);
  });

  it('should return 1 from the test input', () => {
    expect(calculateRotations(['L150'])).toEqual(1);
  });
});
