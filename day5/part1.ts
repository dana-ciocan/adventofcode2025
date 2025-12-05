import ranges from './ranges.json' with { type: 'json' };
import ingredientIds from './ingredient-ids.json' with { type: 'json' };
import { isIngredientFresh } from './isIngredientFresh.ts';

const freshIngredientList: number[] = [];
let numFreshIngredients = 0;
const formattedRanges = ranges
  .map((range) => range.split('-'))
  .map(([bottom, top]) => [parseInt(bottom, 10), parseInt(top, 10)]);

ingredientIds.forEach((ingredientId) => {
  if (
    isIngredientFresh(
      formattedRanges,
      freshIngredientList,
      parseInt(ingredientId, 10),
    )
  ) {
    freshIngredientList.push(parseInt(ingredientId, 10));
    numFreshIngredients++;
  }
});

console.log(numFreshIngredients);
