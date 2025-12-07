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

export const getInputs = (input: string[][], index: number): string[] => {
  const numbers = input
    .map((row) => row[index])
    .map((item) => item.split(''))
    .slice(0, input.length - 1);

  console.log('numbers: ', numbers);
  const operator = input[input.length - 1][index];

  const rotatedNumbers = [[], [], []];

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      const row = j;
      const column = numbers[0].length - 1 - i;
      if (numbers[row][column] !== ' ') {
        rotatedNumbers[i].push(numbers[row][column]);
      }
    }
  }

  const joinedRotatedNumbers = rotatedNumbers.map((num) => num.join(''));

  joinedRotatedNumbers[joinedRotatedNumbers.length] = operator;

  return joinedRotatedNumbers;
};

export const formatNumInput = (input: string) => {
  return input.matchAll(/[\d\s]+/g);
};

export const formatOperationInput = (input: string) => {
  return input.split(/\s+/).filter((item) => item !== '') || [];
};

export const formatInput = (input: string[]) => {
  const formattedInput = [];

  for (let i = 0; i < input.length - 1; i++) {
    formattedInput.push(formatNumInput(input[i]));
  }

  formattedInput.push(formatOperationInput(input[input.length - 1]));

  return formattedInput;
};

export const getSolution = (input: string[]) => {
  let total = 0;

  const formattedInput = formatInput(input);
  // console.log('formattedInput: ', formattedInput);

  const rowLength = formattedInput[0]?.length || 0;

  const equations = [];
  for (let i = 0; i < rowLength; i++) {
    const equation = getInputs(formattedInput, i);
    // console.log(equation);
    equations.push(equation);
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
