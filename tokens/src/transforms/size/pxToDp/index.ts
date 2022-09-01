// Stryker disable all
import type { Named, Transform } from 'style-dictionary';

import { matchPx } from '../matcher';
import { transformer } from './transformer';

export const pxToDp: Named<Transform> = {
  name: 'size/pxToDp',
  type: 'value',
  matcher: matchPx,
  transformer,
};
