import type { Formatter } from 'style-dictionary';

import { stringify } from '../../serialization';

export const formatter: Formatter = ({ dictionary }) =>
  dictionary.allProperties.map(stringify('$')).join('');
