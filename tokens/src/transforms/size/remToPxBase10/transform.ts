import type { TransformedToken } from 'style-dictionary';

import { transform as transformToNum } from '../remToIntegerBase10/transform';

export const transform = (token: TransformedToken) =>
  `${transformToNum(token)}px`;
