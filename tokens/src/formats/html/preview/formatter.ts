import type { Formatter } from 'style-dictionary';
import { flattenObject } from './flatten';
import template from './template';

export const formatter: Formatter = ({ dictionary }) => {
  const tokens = flattenObject(dictionary.properties);
  const types = Object.keys(dictionary.properties);
  const html = template({ tokens: JSON.stringify(tokens, null, 2), types });
  return html;
};
