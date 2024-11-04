import type { FormatFn } from 'style-dictionary/types';

import { addComment, stringify } from '../../serialization';

export const format: FormatFn = ({ dictionary }) =>
  dictionary.allTokens
    .map((prop) => addComment('short')(stringify('')(prop)))
    .join('\n');
