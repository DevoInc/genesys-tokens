import type { TransformedToken } from 'style-dictionary';

import { TOKENS_TIER } from '../../constants';
import { matcher } from './matcher';

describe('filters', () => {
  describe('isNotFigma', () => {
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
              tier: TOKENS_TIER.FIGMA,
            },
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
