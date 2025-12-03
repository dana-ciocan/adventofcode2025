import { describe, it, expect } from 'vitest';
import { findHighestNumber, sumHighestNumbers } from './findHighestNumber';

describe('findHighestNumber', () => {
  it('should return 98', () => {
    expect(findHighestNumber('987654321111111')).toEqual(98);
  });

  it('should return 89', () => {
    expect(findHighestNumber('811111111111119')).toEqual(89);
  });

  it('should return 78', () => {
    expect(findHighestNumber('234234234234278')).toEqual(78);
  });

  it('should return 92', () => {
    expect(findHighestNumber('818181911112111')).toEqual(92);
  });
});

describe('sumHighestNumbers', () => {
  it('should sum the numbers up correctly', () => {
    expect(
      sumHighestNumbers([
        '987654321111111',
        '811111111111119',
        '234234234234278',
        '818181911112111',
      ]),
    ).toEqual(98 + 89 + 78 + 92);
  });
});
