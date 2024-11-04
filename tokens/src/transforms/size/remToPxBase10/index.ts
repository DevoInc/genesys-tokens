import type { Transform } from 'style-dictionary/types';

import { filterRem } from '../filter';
import { transform } from './transform';

// To transform the size values from rem to integer without units
export const remToPxBase10: Transform = {
  name: 'size/remToPxBase10',
  type: 'value',
  filter: filterRem,
  transform,
};
