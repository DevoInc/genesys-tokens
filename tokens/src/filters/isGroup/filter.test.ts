import { describe, it, expect } from 'vitest';
import type { TransformedToken } from 'style-dictionary/types';

import { filter } from './filter';

describe('filters', () => {
  describe('isGroup', () => {
    describe('matcher', () => {
      const cases: [string, TransformedToken, boolean][] = [
        [
          'true',
          {
            original: { value: '' },
            filePath: '',
            isSource: false,
            path: [],
            name: '',
            value: '',
            attributes: {
              group: true,
            },
          },
          true,
        ],
        [
          'false',
          {
            original: { value: '' },
            filePath: '',
            isSource: false,
            path: [],
            name: '',
            value: '',
            attributes: {
              group: false,
            },
          },
          false,
        ],
        [
          'no group',
          {
            original: { value: '' },
            filePath: '',
            isSource: false,
            path: [],
            name: '',
            value: '',
            attributes: {},
          },
          false,
        ],
        [
          'no attributes',
          {
            original: { value: '' },
            filePath: '',
            isSource: false,
            path: [],
            name: '',
            value: '',
          },
          false,
        ],
      ];

      it.each(cases)('%s', (_title, token, expected) => {
        expect(filter(token, {})).toEqual(expected);
      });
    });
  });
});
