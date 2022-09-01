import type { Formatter } from 'style-dictionary';

export const formatter: Formatter = ({ dictionary }) =>
  JSON.stringify(dictionary.allProperties, null, 2);
