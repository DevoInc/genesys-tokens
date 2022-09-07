// Stryker disable all
import type { Filter, Named } from 'style-dictionary';

import { matcher } from './matcher';

export const isCmpAlias: Named<Filter> = {
  name: 'isCmpAlias',
  matcher: matcher,
};
