import type { Formatter } from 'style-dictionary';

import { addComment, stringify } from '../../serialization';

export const formatter: Formatter = ({ dictionary }) =>
  dictionary.allProperties
    .map((prop) => addComment('short')(stringify('')(prop)))
    .join('\n');
