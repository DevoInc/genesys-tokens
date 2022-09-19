// Stryker disable all
import type { Format, Named } from 'style-dictionary';

import { formatter } from './formatter';

export const preview: Named<Format> = {
  name: 'html/preview',
  formatter,
};
