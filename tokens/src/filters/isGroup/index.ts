// Stryker disable all
import type { Filter, Named } from 'style-dictionary';

import { matcher } from './matcher';

export const isGroup: Named<Filter> = {
  name: 'isGroup',
  matcher,
};
