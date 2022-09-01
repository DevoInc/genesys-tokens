// Stryker disable all
import { Named, Transform } from 'style-dictionary';

import { parsePath, getPaths } from './path';

export const cti: Named<Transform> = {
  name: 'alias-cti',
  type: 'attribute',
  transformer: (token) => parsePath(token, getPaths(token)),
};
