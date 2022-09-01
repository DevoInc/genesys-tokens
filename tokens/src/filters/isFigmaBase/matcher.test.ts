import type { TransformedToken } from 'style-dictionary';

import { FIGMA_TOKENS_CAT, TOKENS_TIER } from '../../constants';
import { matcher } from './matcher';

describe('filters', () => {
  describe('isFigmaBase', () => {
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
              tier: TOKENS_TIER.FIGMA,
              figmaType: FIGMA_TOKENS_CAT.SIZE,
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
              tier: TOKENS_TIER.BRAND,
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
