import { Transform } from 'style-dictionary/types';

import { transform } from './transform';

// To transform boxShadow to Figma format
export const boxShadowToFigma: Transform = {
  name: 'shadow/boxShadowToFigma',
  transitive: true,
  type: 'value',
  filter: (token) => token.path.includes('boxShadow'),
  transform,
};
