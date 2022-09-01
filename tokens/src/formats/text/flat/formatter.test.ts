import type { Dictionary } from 'style-dictionary';

import { formatter } from './formatter';

describe('formats', () => {
  describe('text', () => {
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
            `t1: v1; // t1: v1;
t2: v2; // t2: v2;`,
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
