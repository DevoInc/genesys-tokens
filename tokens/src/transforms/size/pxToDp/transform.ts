import type { TransformedTokens } from 'style-dictionary/types';

export const transform = (token: TransformedTokens) =>
  token.value.replace(/px$/, 'dp');
