export const findInvalidId = (input: string): number[] => {
  const numInput: number[] = input.split('-').map((item) => parseInt(item, 10));
  const fullRangeArray = [];
  for (let i: number = numInput[0]; i <= numInput[1]; i++) {
    fullRangeArray[i - numInput[0]] = i;
  }
  const evenNumbers = fullRangeArray.reduce((acc: number[], cur: number) => {
    const stringCur = cur.toString();

    const digitSum = stringCur
      .split('')
      .map(Number)
      .reduce(function (a, b) {
        return a + b;
      }, 0);

    if (digitSum % 2 === 0 && stringCur.length % 2 === 0) {
      const firstHalf = stringCur.slice(0, stringCur.length / 2);
      const secondHalf = stringCur.slice(stringCur.length / 2);

      if (firstHalf === secondHalf) {
        acc.push(cur);
      }
    }
    return acc;
  }, []);

  return evenNumbers;
};

export const sumInvalidIds = (input: string[]) => {
  const invalidIds: number[][] = input.map((range) => {
    return findInvalidId(range);
  });

  return invalidIds.flat().reduce((acc: number, cur: number) => {
    return acc + cur;
  }, 0);
};
