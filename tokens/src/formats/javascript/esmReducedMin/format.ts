import type { FormatFn } from 'style-dictionary/types';

import { evalNode } from '../../eval';

export const format: FormatFn = ({ dictionary }) =>
  `export default ${JSON.stringify(
    evalNode<string>(dictionary.tokens, (node) => node.value),
  )};`;
