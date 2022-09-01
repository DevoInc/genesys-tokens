import type { TransformedToken } from 'style-dictionary';

import { transformRemToNum } from '../transformers';

export const transformer = (token: TransformedToken) =>
  `${transformRemToNum(token)}px`;
