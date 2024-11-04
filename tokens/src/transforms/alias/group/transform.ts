import type { TransformedToken } from 'style-dictionary/types';

export const transform = (token: TransformedToken) =>
  String(token.path.shift());
