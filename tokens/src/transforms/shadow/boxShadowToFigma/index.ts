// Stryker disable all
import { Named, Transform } from 'style-dictionary';

import { transformer } from './transformer';

// To transform boxShadow to Figma format
export const boxShadowToFigma: Named<Transform> = {
  name: 'shadow/boxShadowToFigma',
  transitive: true,
  type: 'value',
  matcher: (token) => token.path.includes('boxShadow'),
  transformer,
};
