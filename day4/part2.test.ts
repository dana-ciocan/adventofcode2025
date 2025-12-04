import { describe, it, expect } from 'vitest';
import {
  findHighestNumber,
  sumHighestNumbers,
} from './findHighestNumberTwelveDigits';

describe('findHighestNumber', () => {
  it('should return 987654321111', () => {
    expect(findHighestNumber('987654321111111')).toEqual(987654321111);
  });

  it('should return 811111111119', () => {
    expect(findHighestNumber('811111111111119')).toEqual(811111111119);
  });

  it('should return 434234234278', () => {
    expect(findHighestNumber('234234234234278')).toEqual(434234234278);
  });

  it('should return 888911112111', () => {
    expect(findHighestNumber('818181911112111')).toEqual(888911112111);
  });

  it('should return 654222222422', () => {
    expect(
      findHighestNumber(
        '2411323321122342222312224225222113222113323212322221243612222112223322233231224121422335412222222422',
      ),
    ).toEqual(654222222422);
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
    ).toEqual(987654321111 + 811111111119 + 434234234278 + 888911112111);
  });
});
