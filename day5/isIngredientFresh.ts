export const isIngredientFresh = (
  ingredientList: number[][],
  freshIngredientList: number[],
  ingredientId: number,
) => {
  let ingredientFresh = false;
  if (freshIngredientList.includes(ingredientId)) {
    ingredientFresh = true;
  }
  ingredientList.forEach(([bottom, top]) => {
    if (ingredientId >= bottom && ingredientId <= top) {
      ingredientFresh = true;
    }
  });
  return ingredientFresh;
};
