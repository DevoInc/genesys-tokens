import { describe, it, expect } from 'vitest';
import type { TransformedToken } from 'style-dictionary';

import { matcher } from './matcher';
import { TOKENS_TIER } from '../../constants';

describe('filters', () => {
  describe('isCmp', () => {
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
              tier: TOKENS_TIER.CMP,
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
              tier: TOKENS_TIER.ALIAS,
            },
          },
          false,
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
            attributes: {},
          },
          false,
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
          },
          false,
        ],
      ];

      it.each(cases)('%s', (_title, token, expected) => {
        expect(matcher(token)).toEqual(expected);
      });
    });
  });
});
