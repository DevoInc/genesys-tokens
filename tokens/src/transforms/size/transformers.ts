import type { TransformedToken } from 'style-dictionary';

export const transformRemToNum = (token: TransformedToken) =>
  parseFloat((Number(token.value.replace(/rem$/, '')) * 10).toFixed(4));
