import type { Transform } from 'style-dictionary/types';

import { filterRem } from '../filter';
import { transform } from './transform';

// To transform the size values from rem to integer without units
export const remToIntegerBase10: Transform = {
  name: 'size/remToIntegerBase10',
  type: 'value',
  filter: filterRem,
  transform,
};
