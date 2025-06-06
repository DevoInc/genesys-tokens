import type { TransformedToken } from 'style-dictionary/types';

export const transform = (token: TransformedToken) =>
  token.value.replace(/px$/, 'pt');
