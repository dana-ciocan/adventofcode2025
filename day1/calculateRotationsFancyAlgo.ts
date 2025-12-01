export const calculateRotations = (input: string[]) => {
  let numberOfZeros = 0;
  let dialPosition = 50;

  input.forEach((rotation) => {
    const direction = rotation[0];
    const amount = parseInt(rotation.slice(1), 10);

    if (direction === 'R') {
      const amountHundreds = Math.floor(amount / 100);

      const amountNonHundreds = amount % 100;

      numberOfZeros += amountHundreds;

      if (dialPosition + amountNonHundreds >= 100) {
        numberOfZeros++;
      }

      const sum = dialPosition + amountNonHundreds;

      dialPosition = sum < 100 ? sum : sum % 100;
    } else {
      const amountHundreds = Math.abs(Math.floor(amount / 100));

      const amountNonHundreds = Math.abs(amount % 100);

      numberOfZeros += amountHundreds;

      if (dialPosition > 0 && dialPosition - amountNonHundreds <= 0) {
        numberOfZeros++;
      }

      const delta = dialPosition - amountNonHundreds;

      dialPosition = delta >= 0 ? delta : 100 - Math.abs(delta % 100);
    }

    console.log(
      `going ${direction === 'R' ? 'right' : 'left'} by ${amount} for a final position of ${dialPosition}`,
    );

    console.log(`the dial has been on zero ${numberOfZeros} times`);
  });

  return numberOfZeros;
};
