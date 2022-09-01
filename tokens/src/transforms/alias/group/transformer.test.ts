import type { TransformedToken } from 'style-dictionary';

import { transformer } from './transformer';

describe('transformer', () => {
  const cases: [string, TransformedToken, string][] = [
    [
      'simple case',
      {
        name: '',
        path: ['a', 'b', 'c'],
        value: '',
        original: { value: '' },
        filePath: '',
        isSource: false,
      },
      'a',
    ],
  ];

  it.each(cases)('%s', (_title, token, expected) => {
    expect(transformer(token)).toEqual(expected);
  });
});
