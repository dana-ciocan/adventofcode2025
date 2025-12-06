export const solveEquation = (nums: number[], operator: string): number => {
  if (nums.length === 1) {
    return nums[0];
  }
  if (operator === '*') {
    return nums[0] * solveEquation(nums.slice(1), operator);
  } else {
    return nums[0] + solveEquation(nums.slice(1), operator);
  }
};

export const getInputs = (input: string[][], index: number) => {
  return input.map((row) => row[index]);
};

export const formatInput = (input: string[]) => {
  return input
    .map((row) => row.split(/\s+/))
    .map((row) => row.filter((item) => item !== ''));
};

export const getSolution = (input: string[]) => {
  let total = 0;

  const formattedInput = formatInput(input);

  const rowLength = formattedInput[0].length;

  const equations = [];
  for (let i = 0; i < rowLength; i++) {
    equations.push(getInputs(formattedInput, i));
  }

  equations.forEach((equation) => {
    const nums = equation
      .slice(0, equation.length - 1)
      .map((num) => parseInt(num, 10));
    const operator = equation[equation.length - 1];

    total += solveEquation(nums, operator);
  });

  return total;
};
