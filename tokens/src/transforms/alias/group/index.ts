// Stryker disable all
import type { Named, Transform } from 'style-dictionary';

import { transformer } from './transformer';

export const group: Named<Transform> = {
  name: 'name/token-group',
  type: 'name',
  transformer,
};
