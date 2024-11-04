import type { Transform } from 'style-dictionary/types';

import { filterPx } from '../filter';
import { transform } from './transform';

export const pxToPt: Transform = {
  name: 'size/pxToPt',
  type: 'value',
  filter: filterPx,
  transform,
};
