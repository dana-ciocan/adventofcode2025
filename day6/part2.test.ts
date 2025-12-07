import { describe, it, expect } from 'vitest';
import {
  formatInput,
  formatNumInput,
  formatOperationInput,
  getInputs,
  getSolution,
} from './getsSolutionWeirdMaths';

describe('formatInput', () => {
  it('should return 123 328  51 64 input formatted correctly', () => {
    expect(formatNumInput('123 328  51 64 ')).toEqual([
      '123',
      '328',
      ' 51',
      '64 ',
    ]);
  });

  it('should return  45 64  387 23  input formatted correctly', () => {
    expect(formatNumInput(' 45 64  387 23 ')).toEqual([
      ' 45',
      '64 ',
      '387',
      '23 ',
    ]);
  });

  it('should return the input formatted correctly', () => {
    expect(formatInput('  6  8 99   58 62')).toEqual([
      '  6',
      ' 8',
      '99  ',
      '58',
      '62',
    ]);
  });
});

describe('formatOperationInput', () => {
  it('should return *   +   *   +  input formatted correctly', () => {
    expect(formatOperationInput('*   +   *   +  ')).toEqual([
      '*',
      '+',
      '*',
      '+',
    ]);
  });
});

describe('formatInput', () => {
  it('should return the test input formatted correctly', () => {
    expect(
      formatInput([
        '123 328  51 64 ',
        ' 45 64  387 23 ',
        '  6 98  215 314',
        '*   +   *   +  ',
      ]),
    ).toEqual([
      ['123', '328', ' 51', '64 '],
      [' 45', '64 ', '387', '23 '],
      ['  6', '98 ', '215', '314'],
      ['*', '+', '*', '+'],
    ]);
  });
});

describe('getInputs', () => {
  it('should return inputs in the correct format', () => {
    expect(
      getInputs(
        [
          ['123', '328', ' 51', '64 '],
          [' 45', '64 ', '387', '23 '],
          ['  6', '98 ', '215', '314'],
          ['*', '+', '*', '+'],
        ],
        0,
      ),
    ).toEqual(['356', '24', '1', '*']);
  });

  it('should return inputs in the correct format', () => {
    expect(
      getInputs(
        [
          ['123', '328', ' 51', '64 '],
          [' 45', '64 ', '387', '23 '],
          ['  6', '98 ', '215', '314'],
          ['*', '+', '*', '+'],
        ],
        1,
      ),
    ).toEqual(['8', '248', '369', '+']);
  });

  it('should return inputs in the correct format', () => {
    expect(
      getInputs(
        [
          ['123', '328', ' 51', '64 '],
          [' 45', '64 ', '387', '23 '],
          ['  6', '98 ', '215', '314'],
          ['*', '+', '*', '+'],
        ],
        2,
      ),
    ).toEqual(['175', '581', '32', '*']);
  });

  it('should return inputs in the correct format', () => {
    expect(
      getInputs(
        [
          ['123', '328', ' 51', '64 '],
          [' 45', '64 ', '387', '23 '],
          ['  6', '98 ', '215', '314'],
          ['*', '+', '*', '+'],
        ],
        3,
      ),
    ).toEqual(['4', '431', '623', '+']);
  });

  it('should return inputs in the correct format', () => {
    expect(
      getInputs(
        [
          ['123', '328', ' 51', '64 '],
          [' 45', '64 ', '387', '23 '],
          ['  6', '98 ', '215', '314'],
          ['*', '+', '*', '+'],
        ],
        3,
      ),
    ).toEqual(['4', '431', '623', '+']);
  });
});

describe('getSolution', () => {
  it('should return 3263827', () => {
    expect(
      getSolution([
        '123 328  51 64 ',
        ' 45 64  387 23 ',
        '  6 98  215 314',
        '*   +   *   +',
      ]),
    ).toEqual(3263827);
  });
});
