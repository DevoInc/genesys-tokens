import type { Dictionary } from 'style-dictionary';

import { formatter } from './formatter';

describe('formats', () => {
  describe('json', () => {
    describe('flat', () => {
      describe('formatter', () => {
        const cases: [string, Dictionary, string][] = [
          [
            'two properties',
            {
              allProperties: [
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
              allTokens: [],
              properties: {},
              usesReference: () => false,
              getReferences: () => [],
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
            formatter({
              dictionary,
              file: { destination: '' },
              options: {},
              platform: {},
            })
          ).toEqual(expected);
        });
      });
    });
  });
});
