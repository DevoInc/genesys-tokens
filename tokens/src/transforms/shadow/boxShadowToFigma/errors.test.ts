import { describe, it, expect } from 'vitest';
import type { TransformedToken } from 'style-dictionary';

import { getValidFormatMessage } from './errors';

describe('errors', () => {
  describe('getValidFormatMessage', () => {
    const cases: [string, TransformedToken, string][] = [
      [
        'simple value',
        {
          name: 'test',
          path: ['a', 'b'],
          original: {
            value: 1,
            name: 'test',
          },
          value: 1,
          filePath: '',
          isSource: false,
        },
        `
There is an error on the next boxShadow format:

{
  "name": "test",
  "path": [
    "a",
    "b"
  ],
  "original": {
    "value": 1,
    "name": "test"
  },
  "value": 1,
  "filePath": "",
  "isSource": false
}

The accepted values are:
- 'inset? x y color',
- 'inset? x y blur color',
- 'inset? x y blur spread color',

Fix, drop and roll...
`,
      ],
    ];

    it.each(cases)('%s', (_title, token, expected) => {
      expect(getValidFormatMessage(token)).toBe(expected);
    });
  });
});
