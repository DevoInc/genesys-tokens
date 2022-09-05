// Stryker disable all
import type { Filter, Named } from 'style-dictionary';

import { matcher } from './matcher';

export const isCmp: Named<Filter> = {
  name: 'isCmp',
  matcher: matcher,
};
