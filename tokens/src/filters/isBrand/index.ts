// Stryker disable all
import type { Filter, Named } from 'style-dictionary';

import { TOKENS_TIER } from '../../constants';

export const isBrand: Named<Filter> = {
  name: 'isBrand',
  matcher: (token) => token?.attributes?.tier === TOKENS_TIER.BRAND,
};
