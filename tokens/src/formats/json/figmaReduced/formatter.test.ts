import type { Dictionary } from 'style-dictionary';

import { formatter } from './formatter';

describe('formats', () => {
  describe('json', () => {
    describe('figmaReduced', () => {
      describe('formatter', () => {
        const cases: [string, Dictionary, string][] = [
          [
            'two properties',
            {
              allProperties: [],
              tokens: {},
              allTokens: [],
              properties: {
                t1: {
                  name: 't1',
                  path: [],
                  value: 'v1',
                  original: { value: '' },
                  filePath: '',
                  isSource: false,
                },
                t2: {
                  name: 't2',
                  path: [],
                  value: 'v2',
                  original: { value: '' },
                  filePath: '',
                  isSource: false,
                },
              },
              usesReference: () => false,
              getReferences: () => [],
            },
            `{
  "t1": {
    "value": "v1"
  },
  "t2": {
    "value": "v2"
  }
}`,
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
