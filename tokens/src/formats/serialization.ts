import type { TransformedToken } from 'style-dictionary';

export const stringify = (prefix: string) => (token: TransformedToken) =>
  `${prefix}${token.name}: ${
    token.attributes?.category === 'asset'
      ? '"' + token.value + '"'
      : token.value
  };`;

export const addComment =
  (commentStyle: 'short' | 'normal') => (comment: string) =>
    comment
      ? comment.concat(
          commentStyle === 'short' ? ' // ' + comment : ' /* ' + comment + ' */'
        )
      : comment;
