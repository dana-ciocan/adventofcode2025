import { getNumFreshIngredients } from './getNumFreshIngredients.ts';
import ranges from './ranges.json' with { type: 'json' };

const formattedRanges = ranges
  .map((range) => range.split('-'))
  .map(([bottom, top]) => [parseInt(bottom, 10), parseInt(top, 10)]);

console.log(getNumFreshIngredients(formattedRanges));
