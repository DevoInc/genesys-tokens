import { describe, it, expect } from 'vitest';
import type { Dictionary } from 'style-dictionary/types';

import { format } from './format';

describe('formats', () => {
  describe('json', () => {
    describe('flat', () => {
      describe('formatter', () => {
        const cases: [string, Dictionary, string][] = [
          [
            'two properties',
            {
              allTokens: [
                {
                  name: 't1',
                  path: [],
                  value: 'v1',
                  original: { value: '' },
                  filePath: '',
                  isSource: false,
                },
                {
                  name: 't2',
                  path: [],
                  value: 'v2',
                  original: { value: '' },
                  filePath: '',
                  isSource: false,
                },
              ],
              tokens: {},
            },
            `[
  {
    "name": "t1",
    "path": [],
    "value": "v1",
    "original": {
      "value": ""
    },
    "filePath": "",
    "isSource": false
  },
  {
    "name": "t2",
    "path": [],
    "value": "v2",
    "original": {
      "value": ""
    },
    "filePath": "",
    "isSource": false
  }
]`,
          ],
        ];

        it.each(cases)('%s', (_title, dictionary, expected) => {
          expect(
            format({
              dictionary,
              file: { destination: '' },
              options: {},
              platform: {},
            }),
          ).toEqual(expected);
        });
      });
    });
  });
});
