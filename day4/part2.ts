import map from './map.json' with { type: 'json' };
import { removePaper } from './findPositions.ts';

const formattedMap = map.map((row) => Array.from(row));

console.log(removePaper(formattedMap));
