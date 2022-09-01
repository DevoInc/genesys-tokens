import type { TransformedToken } from 'style-dictionary';

import { TOKENS_TIER } from '../../constants';

export const matcher = (token: TransformedToken) =>
  token?.attributes?.tier === TOKENS_TIER.BRAND;
