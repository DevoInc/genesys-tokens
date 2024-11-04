import type { Transform } from 'style-dictionary/types';

import { transform } from './transform';

export const jsonComponent: Transform = {
  name: 'name/token-json-component',
  type: 'name',
  transform,
};
