import type { TransformedToken } from 'style-dictionary';

import { TOKENS_TIER } from '../../../constants';
import { getPaths, parsePath } from './path';

describe('path', () => {
  describe('getPaths', () => {
    const cases: [string, TransformedToken, string[]][] = [
      [
        'cmp & hasElement',
        {
          name: '',
          path: [TOKENS_TIER.CMP],
          value: '',
          original: { value: '' },
          filePath: '',
          isSource: false,
        },
        [
          'tier',
          'component',
          'element',
          'category',
          'property',
          'variant',
          'modifier',
        ],
      ],
    ];

    it.each(cases)('%s', (_title, args, expected) => {
      expect(getPaths(args)).toEqual(expected);
    });
  });

  describe('parsePath', () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const cases: [string, TransformedToken, string[], any][] = [
      [
        'Case 1',
        {
          name: '',
          path: [TOKENS_TIER.CMP],
          value: '',
          original: { value: '' },
          filePath: '',
          isSource: false,
        },
        [
          'tier',
          'component',
          'element',
          'category',
          'property',
          'variant',
          'modifier',
        ],
        {
          category: undefined,
          component: undefined,
          element: undefined,
          figmatType: 'other',
          modifier: undefined,
          property: undefined,
          tier: 'cmp',
          variant: undefined,
        },
      ],
    ];

    it.each(cases)('%s', (_title, token, paths, expected) => {
      expect(parsePath(token, paths)).toEqual(expected);
    });
  });
});
