export interface TokenTestable {
  value: unknown;
  name: string;
}

export const validate = (tokens: TokenTestable[]) =>
  tokens.reduce(
    (acc: string[], cur: TokenTestable) =>
      typeof cur.value !== 'string' &&
      typeof cur.value !== 'number' &&
      typeof cur.value !== 'object'
        ? [...acc, cur.name]
        : acc,
    []
  );
