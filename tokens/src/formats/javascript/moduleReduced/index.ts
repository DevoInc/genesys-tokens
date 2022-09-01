// Stryker disable all
import type { Format, Named } from 'style-dictionary';

import { formatter } from './formatter';

export const moduleReduced: Named<Format> = {
  name: 'javascript/module-reduced',
  formatter,
};
