import { describe, it, expect } from 'vitest';
import type { Dictionary } from 'style-dictionary';

import { formatter } from './formatter';

describe('formats', () => {
  describe('javascript', () => {
    describe('moduleReducedMin', () => {
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
            'module.exports = {"t1":"v1","t2":"v2"};',
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
