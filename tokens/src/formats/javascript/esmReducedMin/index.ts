// Stryker disable all
import type { Format, Named } from 'style-dictionary';

import { formatter } from './formatter';

export const esmReducedMin: Named<Format> = {
  name: 'javascript/esm-reduced-min',
  formatter,
};
