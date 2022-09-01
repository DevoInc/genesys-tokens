import type { TransformedToken } from 'style-dictionary';

export const getValidFormatMessage = (token: TransformedToken) => `
There is an error on the next boxShadow format:

${JSON.stringify(token, null, 2)}

The accepted values are:
- 'inset? x y color',
- 'inset? x y blur color',
- 'inset? x y blur spread color',

Fix, drop and roll...
`;
