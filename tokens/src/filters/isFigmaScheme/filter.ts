import type { Filter } from 'style-dictionary/types';

import { isFigmaProp, evalHasScheme } from '../../token';

export const filter: Filter['filter'] = (token) =>
  isFigmaProp(token) && evalHasScheme(token);
