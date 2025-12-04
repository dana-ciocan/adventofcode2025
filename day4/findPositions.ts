import { getSurroundingPaper } from './getSurroundingPaper';

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
