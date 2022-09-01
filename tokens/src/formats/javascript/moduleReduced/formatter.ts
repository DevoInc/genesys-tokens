import type { Formatter } from 'style-dictionary';

import { evalNode } from '../../eval';

export const formatter: Formatter = ({ dictionary }) =>
  `module.exports = ${JSON.stringify(
    evalNode<string>(dictionary.properties, (token) => token.value),
    null,
    2
  )};`;
