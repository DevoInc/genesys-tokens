import type { TransformedToken } from 'style-dictionary';

import { TOKENS_TIER } from '../../constants';

export const matcher = (token: TransformedToken) =>
  [TOKENS_TIER.CMP, TOKENS_TIER.ALIAS, TOKENS_TIER.META].includes(token.attributes?.tier);
