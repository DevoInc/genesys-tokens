import { describe, it, expect } from 'vitest';
import type { TransformedToken } from 'style-dictionary/types';

import { transform } from './transform';

describe('matcher', () => {
  const cases: [string, TransformedToken, string][] = [
    [
      'px at the end',
      {
        value: '12px',
        name: '',
        path: [],
        filePath: '',
        isSource: false,
        original: { value: '' },
      },
      '12pt',
    ],
    [
      'px in the middle',
      {
        value: '12 px test',
        name: '',
        path: [],
        filePath: '',
        isSource: false,
        original: { value: '' },
      },
      '12 px test',
    ],
    [
      'no px',
      {
        value: '12 em',
        name: '',
        path: [],
        filePath: '',
        isSource: false,
        original: { value: '' },
      },
      '12 em',
    ],
  ];

  it.each(cases)('%s', (_title, token, expected) => {
    expect(transform(token)).toEqual(expected);
  });
});
