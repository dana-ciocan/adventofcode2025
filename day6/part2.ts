import equations from './equations.json' with { type: 'json' };
import { getSolution } from './getsSolutionWeirdMaths.ts';

console.log(getSolution(equations));
