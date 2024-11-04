import type { Transform } from 'style-dictionary/types';

import { filterPx } from '../filter';
import { transform } from './transform';

export const pxToDp: Transform = {
  name: 'size/pxToDp',
  type: 'value',
  filter: filterPx,
  transform,
};
