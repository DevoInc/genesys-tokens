import { describe, it, expect } from 'vitest';
import type { Dictionary } from 'style-dictionary/types';

import { format } from './format';

describe('formats', () => {
  describe('typescript', () => {
    describe('moduleReducedDeclarations', () => {
      describe('formatter', () => {
        const cases: [string, Dictionary, string][] = [
          [
            'two properties',
            {
              allTokens: [],
              tokens: {
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
            },
            `export interface Brand {
    t1: string;
    t2: string;
}
`,
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
