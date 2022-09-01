import type { TransformedToken } from 'style-dictionary';

import { transformer } from './transformer';

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
      '12dp',
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
    expect(transformer(token)).toEqual(expected);
  });
});
