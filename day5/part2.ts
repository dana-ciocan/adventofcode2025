import { getNumFreshIngredients } from './getNumFreshIngredients.ts';
import ranges from './ranges.json' with { type: 'json' };

const formattedRanges = [...new Set(ranges)]
  .map((range) => range.split('-'))
  .map(([bottom, top]) => [parseInt(bottom, 10), parseInt(top, 10)]);

const sortedRanges = formattedRanges.sort(
  ([bottomA, topA], [bottomB, topB]) => topB - bottomB - (topA - bottomA),
);

// console.log(sortedRanges);

console.log(getNumFreshIngredients(formattedRanges));
