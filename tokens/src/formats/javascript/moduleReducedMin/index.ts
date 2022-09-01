// Stryker disable all
import type { Format, Named } from 'style-dictionary';

import { formatter } from './formatter';

export const moduleReducedMin: Named<Format> = {
  name: 'javascript/module-reduced-min',
  formatter,
};
