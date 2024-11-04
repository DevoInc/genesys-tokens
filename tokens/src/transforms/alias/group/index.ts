import type { Transform } from 'style-dictionary/types';

import { transform } from './transform';

export const group: Transform = {
  name: 'name/token-group',
  type: 'name',
  transform,
};
