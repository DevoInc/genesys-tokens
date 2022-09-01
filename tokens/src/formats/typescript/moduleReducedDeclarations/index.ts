// Stryker disable all
import type { Format, Named } from 'style-dictionary';

import { formatter } from './formatter';

export const moduleReducedDeclarations: Named<Format> = {
  name: 'typescript/module-reduced-declarations',
  formatter,
};
