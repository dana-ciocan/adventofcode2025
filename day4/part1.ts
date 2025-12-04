import { findPositions } from './findPositions.ts';
import map from './map.json' with { type: 'json' };

const formattedMap = map.map((row) => Array.from(row));

console.log(findPositions(formattedMap).length);
