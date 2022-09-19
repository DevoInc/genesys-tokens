// Stryker disable all
import type { Format, Named } from 'style-dictionary';

import { formatter } from './formatter';

export const figmatokens: Named<Format> = {
  name: 'figma/figmatokens',
  formatter,
};
