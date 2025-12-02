export const splitIntoChunks = (input: string, chunkLength: number) => {
  var chunks = [];

  for (
    let i = 0, charsLength = input.length;
    i < charsLength;
    i += chunkLength
  ) {
    chunks.push(input.substring(i, i + chunkLength));
  }

  return chunks;
};

export const findInvalidId = (input: string): number[] => {
  const numInput: number[] = input.split('-').map((item) => parseInt(item, 10));
  const matches: number[] = [];

  const fullRangeArray = Array.from(
    { length: numInput[1] - numInput[0] + 1 },
    (e, i) => {
      return String(i + numInput[0]);
    },
  );

  fullRangeArray.forEach((item) => {
    for (let i: number = 1; i <= Math.floor(String(item).length / 2); i++) {
      if (item.length % i === 0) {
        const splitArray = splitIntoChunks(item, i);
        if ([...new Set(splitArray)].length === 1) {
          const numItem = parseInt(item, 10);
          if (!matches.includes(numItem)) {
            matches.push(numItem);
          }
        }
      }
    }
  });

  return matches;
};

export const sumInvalidIds = (input: string[]) => {
  const invalidIds: number[][] = input.map((range) => {
    return findInvalidId(range);
  });

  return invalidIds.flat().reduce((acc: number, cur: number) => {
    return acc + cur;
  }, 0);
};
