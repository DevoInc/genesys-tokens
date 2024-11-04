import type { FormatFn } from 'style-dictionary/types';

import { evalNode } from '../../eval';

export const format: FormatFn = ({ dictionary }) =>
  `module.exports = ${JSON.stringify(
    evalNode<string>(dictionary.tokens, (token) => token.value),
    null,
    2,
  )};`;
