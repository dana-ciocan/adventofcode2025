export const calculateRotations = (input: string[]) => {
  let numberOfZeros = 0;
  let dialPosition = 50;

  input.forEach((rotation) => {
    const direction = rotation[0];
    const amount = parseInt(rotation.slice(1), 10);

    if (direction === 'R') {
      if (dialPosition + amount > 99) {
        dialPosition = (dialPosition + amount) % 100;
      } else {
        dialPosition += amount;
      }
    } else {
      // Subtracting the amount from the dial position to see where we end up
      const delta = dialPosition - amount;

      if (delta < 0) {
        // Mod 100 to deal with numbers > 100
        const modDelta = delta % 100;

        // To deal with negative numbers
        const absModDelta = Math.abs(modDelta);

        dialPosition = absModDelta === 0 ? absModDelta : 100 - absModDelta;
      } else {
        dialPosition -= amount;
      }
    }

    console.log(
      `going ${direction === 'R' ? 'right' : 'left'} by ${amount} for a final position of ${dialPosition}`,
    );

    if (dialPosition === 0) {
      numberOfZeros++;
    }

    console.log(`the dial has stopped on zero ${numberOfZeros} times`);
  });

  return numberOfZeros;
};
