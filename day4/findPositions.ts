import { getSurroundingPaper } from './getSurroundingPaper.ts';

export const findPositions = (input: string[][]) => {
  const positions: number[][] = [];
  input.forEach((row, rowIndex) => {
    row.forEach((_, colIndex) => {
      if (input[rowIndex][colIndex] === '@') {
        const surroundingPaper = getSurroundingPaper(input, rowIndex, colIndex);

        if (surroundingPaper < 4) {
          positions.push([rowIndex, colIndex]);
        }
      }
    });
  });

  return positions;
};

export const removePaper = (input: string[][]) => {
  let accessiblePaper = findPositions(input);
  let paperRemoved = 0;

  while (accessiblePaper.length > 0) {
    accessiblePaper.forEach(([row, col]) => {
      input[row][col] = 'x';
    });
    paperRemoved += accessiblePaper.length;
    accessiblePaper = findPositions(input);
  }

  return paperRemoved;
};
