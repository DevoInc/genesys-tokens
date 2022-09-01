// Stryker disable all
import type { Format, Named } from 'style-dictionary';

import { formatter } from './formatter';

export const figmaReduced: Named<Format> = {
  name: 'json/figma-reduced',
  formatter,
};
