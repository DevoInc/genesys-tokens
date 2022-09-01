// Stryker disable all
import type { Filter, Named } from 'style-dictionary';

import { matcher } from './matcher';

export const isAlias: Named<Filter> = {
  name: 'isAlias',
  matcher,
};
