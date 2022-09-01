// Stryker disable all
import type { Named, Transform } from 'style-dictionary';

import { matchRem } from '../matcher';
import { transformer } from './transformer';

// To transform the size values from rem to integer without units
export const remToPxBase10: Named<Transform> = {
  name: 'size/remToPxBase10',
  type: 'value',
  matcher: matchRem,
  transformer,
};
