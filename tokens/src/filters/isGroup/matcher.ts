import type { TransformedToken } from 'style-dictionary';

export const matcher = (token: TransformedToken) => token.attributes?.group;
