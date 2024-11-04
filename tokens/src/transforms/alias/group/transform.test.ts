import { describe, it, expect } from 'vitest';
import type { TransformedToken } from 'style-dictionary/types';

import { transform } from './transform';

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
    expect(transform(token)).toEqual(expected);
  });
});
