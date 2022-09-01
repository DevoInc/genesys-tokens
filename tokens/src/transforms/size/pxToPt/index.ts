// Stryker disable all
import type { Named, Transform } from 'style-dictionary';

import { matchPx } from '../matcher';
import { transformer } from './transformer';

export const pxToPt: Named<Transform> = {
  name: 'size/pxToPt',
  type: 'value',
  matcher: matchPx,
  transformer,
};
