// Stryker disable all
import type { Filter, Named } from 'style-dictionary';

import { matcher } from './matcher';

export const isFigmaScheme: Named<Filter> = {
  name: 'isFigmaScheme',
  matcher,
};
