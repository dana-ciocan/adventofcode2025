export const findHighestNumber = (input: string) => {
  const inputNumbers = input.split('').map((digit) => parseInt(digit, 10));

  let highestTens = 0;
  let highestTensIndex = 0;
  inputNumbers.forEach((num, index) => {
    if (num > highestTens && index < inputNumbers.length - 1) {
      highestTens = num;
      highestTensIndex = index;
    }
  });

  const highestOnes = inputNumbers
    .slice(highestTensIndex + 1, inputNumbers.length)
    .sort((a, b) => b - a)[0];

  return parseInt(String(highestTens) + String(highestOnes), 10);
};

export const sumHighestNumbers = (input: string[]) => {
  return input
    .map((bank) => findHighestNumber(bank))
    .reduce((cur, acc) => cur + acc, 0);
};
