import type { TransformedToken } from 'style-dictionary';

export const transformer = (token: TransformedToken) =>
  String(token.path.shift());
