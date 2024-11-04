import type { Transform } from 'style-dictionary/types';

import { parsePath, getPaths } from './path';

export const cti: Transform = {
  name: 'alias-cti',
  type: 'attribute',
  transform: (token) => parsePath(token, getPaths(token)),
};
