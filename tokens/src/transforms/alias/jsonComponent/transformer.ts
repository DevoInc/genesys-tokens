import type { TransformedToken } from 'style-dictionary';

export const transformer = (token: TransformedToken) => token.path.join('-');
