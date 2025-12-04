export const findHighestNumber = (input: string) => {
  const inputNumbers = input.split('').map((digit) => parseInt(digit, 10));

  let highestNumbers = new Array(12).fill(0);
  let highestIndices = new Array(12).fill(0);

  highestNumbers.forEach((resultNum, index) => {
    const offset = index === 0 ? 0 : 1;
    const subsetStartIndex = (highestIndices?.[index - 1] || 0) + offset;
    const subset = inputNumbers.slice(
      subsetStartIndex,
      inputNumbers.length + index - 11,
    );
    subset.forEach((subsetNum, subsetIndex) => {
      if (subsetNum > highestNumbers[index]) {
        highestNumbers[index] = subsetNum;
        highestIndices[index] = subsetStartIndex + subsetIndex;
      }
    });
  });

  return parseInt(highestNumbers.join(''), 10);
};

export const sumHighestNumbers = (input: string[]) => {
  return input
    .map((bank) => {
      console.log(`${bank} becomes ${findHighestNumber(bank)}`);
      return findHighestNumber(bank);
    })
    .reduce((cur, acc) => cur + acc, 0);
};
