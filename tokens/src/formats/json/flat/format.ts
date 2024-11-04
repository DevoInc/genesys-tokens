import type { FormatFn } from 'style-dictionary/types';

export const format: FormatFn = ({ dictionary }) =>
  JSON.stringify(dictionary.allTokens, null, 2);
