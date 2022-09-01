import type { TransformedToken } from 'style-dictionary';

export const matchPx = (token: TransformedToken) =>
  !!token.value.match(/^[\d.]+px$/);

export const matchRem = (token: TransformedToken) =>
  typeof token.value === 'string' && !!token.value.match(/^-*[\d.]+rem$/);
