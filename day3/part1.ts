import { sumHighestNumbers } from './findHighestNumber.ts';
import batteryBanks from './battery-banks.json' with { type: 'json' };

console.log(sumHighestNumbers(batteryBanks));
