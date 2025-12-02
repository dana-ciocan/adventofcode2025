import { describe, it, expect } from 'vitest';
import { findInvalidId, sumInvalidIds } from './findInvalidIds';

describe('findInvalidId', () => {
  it('should return 11 and 22', () => {
    expect(findInvalidId('11-22')).toEqual([11, 22]);
  });

  it('should return 99', () => {
    expect(findInvalidId('95-115')).toEqual([99]);
  });

  it('should return 1010', () => {
    expect(findInvalidId('998-1012')).toEqual([1010]);
  });

  it('should return 1188511885', () => {
    expect(findInvalidId('1188511880-1188511890')).toEqual([1188511885]);
  });

  it('should return 222222', () => {
    expect(findInvalidId('222220-222224')).toEqual([222222]);
  });

  it('should return no valid IDs', () => {
    expect(findInvalidId('1698522-1698528')).toEqual([]);
  });

  it('should return 446446', () => {
    expect(findInvalidId('446443-446449')).toEqual([446446]);
  });

  it('should return 38593859', () => {
    expect(findInvalidId('38593856-38593862')).toEqual([38593859]);
  });
});

describe('sumInvalidIds', () => {
  it('should return 33', () => {
    expect(sumInvalidIds(['11-22'])).toEqual(33);
  });

  it('should return 33', () => {
    expect(sumInvalidIds(['11-22', '1698522-1698528'])).toEqual(33);
  });

  it('should return 446479', () => {
    expect(
      sumInvalidIds(['11-22', '1698522-1698528', '446443-446449']),
    ).toEqual(446479);
  });
});
