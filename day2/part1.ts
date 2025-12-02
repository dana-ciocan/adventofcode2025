import { sumInvalidIds } from './findInvalidIds.ts';
import productIds from './product-ids.json' with { type: 'json' };

console.log(sumInvalidIds(productIds));
