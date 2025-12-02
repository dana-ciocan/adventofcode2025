import { sumInvalidIds } from './findMoreInvalidIds.ts';
import productIds from './product-ids.json' with { type: 'json' };

console.log(sumInvalidIds(productIds));
