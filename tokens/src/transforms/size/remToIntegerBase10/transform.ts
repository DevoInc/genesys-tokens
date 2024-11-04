import type { TransformedToken } from 'style-dictionary/types';

export const transform = (token: TransformedToken) =>
  parseFloat((Number(token.value.replace(/rem$/, '')) * 10).toFixed(4));
