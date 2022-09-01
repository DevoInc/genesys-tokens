import type { TransformedToken } from 'style-dictionary';

import { isFigmaProp, evalHasScheme } from '../../token';

export const matcher = (token: TransformedToken) =>
  isFigmaProp(token) && evalHasScheme(token);
