// Stryker disable all
import type { Filter, Named } from 'style-dictionary';

import { matcher } from './matcher';

export const isNotFigma: Named<Filter> = {
  name: 'isNotFigma',
  matcher,
};
