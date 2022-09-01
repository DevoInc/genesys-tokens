// Stryker disable all
import type { Named, Transform } from 'style-dictionary';

import { matchRem } from '../matcher';
import { transformRemToNum } from '../transformers';

// To transform the size values from rem to integer without units
export const remToIntegerBase10: Named<Transform> = {
  name: 'size/remToIntegerBase10',
  type: 'value',
  matcher: matchRem,
  transformer: transformRemToNum,
};
