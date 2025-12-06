import equations from './equations.json' with { type: 'json' };
import { getSolution } from './getsSolution.ts';

console.log(getSolution(equations));
