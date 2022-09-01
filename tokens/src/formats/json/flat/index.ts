// Stryker disable all
import type { Format, Named } from 'style-dictionary';

import { formatter } from './formatter';

export const flat: Named<Format> = {
  name: 'json/flat',
  formatter,
};
