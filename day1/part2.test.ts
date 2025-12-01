import { describe, it, expect } from 'vitest';
import { calculateRotations } from './calculateRotationsFancyAlgo';
import rotations from './part1-rotations.json' with { type: 'json' };

describe('calculateRotations()', () => {
  it('should return 6 from the test input', () => {
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

    expect(calculateRotations(testInput)).toEqual(6);
  });

  it('should not return 1150 from the actual input', () => {
    expect(calculateRotations(rotations)).not.toEqual(1150);
  });

  it('should return 1 from the test input', () => {
    const testInput = ['L50'];

    expect(calculateRotations(testInput)).toEqual(1);
  });

  it('should return 1 from the test input', () => {
    const testInput = ['R50'];

    expect(calculateRotations(testInput)).toEqual(1);
  });

  it('should return 0 from the test input', () => {
    expect(calculateRotations(['R30'])).toEqual(0);
  });

  it('should return 2 from the test input', () => {
    expect(calculateRotations(['R150'])).toEqual(2);
  });

  it('should return 2 from the test input', () => {
    expect(calculateRotations(['L150'])).toEqual(2);
  });

  it('should return 2 from the test input', () => {
    expect(calculateRotations(['L251'])).toEqual(3);
  });

  it('should return 3 from the test input', () => {
    expect(calculateRotations(['R251'])).toEqual(3);
  });
});
