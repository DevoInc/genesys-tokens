// Stryker disable all
import { Named, Transform } from 'style-dictionary';

import { transformer } from './transformer';

export const jsonComponent: Named<Transform> = {
  name: 'name/token-json-component',
  type: 'name',
  transformer,
};
