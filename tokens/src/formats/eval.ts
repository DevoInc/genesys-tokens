import type { TransformedToken, TransformedTokens } from 'style-dictionary';

export type Formatter<S> = (token: TransformedToken) => S;

export type EvaluatedNode<T> =
  | T
  | {
      [key: string]: EvaluatedNode<T>;
    };

/**
 * Flat the last tree node based on value props
 */
export const evalNode = <T>(
  token: TransformedTokens,
  formatter: Formatter<T>
): EvaluatedNode<T> =>
  token.hasOwnProperty('value')
    ? formatter(token as TransformedToken)
    : Object.entries(token)
        .map(([key, value]) => ({ [key]: evalNode(value, formatter) }))
        .reduce((acc, cur) => ({ ...acc, ...cur }), {});
