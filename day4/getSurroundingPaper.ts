export const getSurroundingPaper = (input: string[][], row: number, col: number) => {
  const surroundingLocations = [
    input?.[row - 1]?.[col - 1], // top-left
    input?.[row - 1]?.[col], // top
    input?.[row - 1]?.[col + 1], // top-right
    input?.[row]?.[col + 1], // right
    input?.[row + 1]?.[col + 1], // bottom-right
    input?.[row + 1]?.[col], // bottom
    input?.[row + 1]?.[col - 1], // bottom-left
    input?.[row]?.[col - 1] // left
  ].filter(Boolean);

  return surroundingLocations.filter((location) => location === '@').length;
}
