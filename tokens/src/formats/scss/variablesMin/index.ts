// Stryker disable all
import type { Format, Named } from 'style-dictionary';

import { formatter } from './formatter';

export const variablesMin: Named<Format> = {
  name: 'scss/variables-min',
  formatter,
};
