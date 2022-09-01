import type { Formatter } from 'style-dictionary';
import jsonToTS from 'json-to-ts';

import { evalNode } from '../../eval';

export const formatter: Formatter = ({ dictionary }) =>
  jsonToTS(
    evalNode<string>(dictionary.properties, (token) => token.value),
    {
      rootName: 'Brand',
    }
  )
    .map((x) => `export ${x}`)
    .join('\n');
