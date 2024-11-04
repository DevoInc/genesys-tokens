import type { Filter } from 'style-dictionary/types';

import { TOKENS_TIER } from '../../constants';

export const filter: Filter['filter'] = (token) =>
  token.attributes?.tier === TOKENS_TIER.ALIAS;
