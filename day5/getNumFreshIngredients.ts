export const getIdsFromRange = (range: number[]) => {
  const ids = new Set();
  for (let i = range[0]; i <= range[1]; i++) {
    ids.add(i);
  }
  return ids;
};

export const getNumFreshIngredients = (ranges: number[][]) => {
  let numFreshIngredients = 0;
  ranges.forEach(([bottom, top], index) => {
    const adjustedRange = [bottom, top];
    const rangeSubset = ranges.slice(0, index);
    let rangeAlreadyAdded = false;

    console.log(`range: ${bottom} to ${top}`);

    for (let i = 0; i < rangeSubset.length; i++) {
      if (
        bottom >= rangeSubset[i][0] &&
        bottom <= rangeSubset[i][1] &&
        top >= rangeSubset[i][0] &&
        top <= rangeSubset[i][1]
      ) {
        rangeAlreadyAdded = true;
        break;
      }
      if (bottom >= rangeSubset[i][0] && bottom <= rangeSubset[i][1]) {
        if (adjustedRange[0] < rangeSubset[i][1] + 1) {
          adjustedRange[0] = rangeSubset[i][1] + 1;
        }
      }
      if (top >= rangeSubset[i][0] && top <= rangeSubset[i][1]) {
        if (adjustedRange[1] > rangeSubset[i][0] - 1) {
          adjustedRange[1] = rangeSubset[i][0] - 1;
        }
      }

      console.log(`adjusted range: ${adjustedRange[0]} to ${adjustedRange[1]}`);
    }
    if (adjustedRange[1] - adjustedRange[0] + 1 > 0) {
      numFreshIngredients += rangeAlreadyAdded
        ? 0
        : adjustedRange[1] - adjustedRange[0] + 1;
    }

    console.log(
      `Added ${
        rangeAlreadyAdded ? 0 : adjustedRange[1] - adjustedRange[0] + 1
      } ingredients`,
    );
  });

  return numFreshIngredients;
};
