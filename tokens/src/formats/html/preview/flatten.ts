import { TransformedTokens } from 'style-dictionary';

export interface FlatTokens {
  [key: string]: string | number;
}

export const flattenObject = (obj: TransformedTokens, prefix = '') =>
  Object.keys(obj).reduce((acc, k) => {
    const pre = prefix.length ? prefix + '-' : '';
    if (!('value' in obj[k])) {
      Object.assign(acc, flattenObject(obj[k], pre + k));
    } else {
      acc[pre + k] = obj[k].value;
    }
    return acc;
  }, {} as FlatTokens);
