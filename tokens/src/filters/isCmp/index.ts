// Stryker disable all
import type { Filter, Named } from 'style-dictionary';

import { TOKENS_TIER } from '../../constants';

export const isCmp: Named<Filter> = {
  name: 'isCmp',
  matcher: (token) => token?.attributes?.tier === TOKENS_TIER.CMP,
};
