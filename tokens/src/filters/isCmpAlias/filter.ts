import type { Filter } from 'style-dictionary/types';

import { TOKENS_TIER } from '../../constants';

export const filter: Filter['filter'] = (token) =>
  [TOKENS_TIER.CMP, TOKENS_TIER.ALIAS, TOKENS_TIER.META].includes(
    token.attributes?.tier as string,
  );
