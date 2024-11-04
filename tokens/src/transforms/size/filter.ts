import type { Filter } from 'style-dictionary/types';

export const filterPx: Filter['filter'] = (token) =>
  !!token.value.match(/^[\d.]+px$/);

export const filterRem: Filter['filter'] = (token) =>
  typeof token.value === 'string' && !!token.value.match(/^-*[\d.]+rem$/);
