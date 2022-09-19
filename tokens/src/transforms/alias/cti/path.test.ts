import type { TransformedToken } from 'style-dictionary';

import { TOKENS_CAT_PROP, TOKENS_TIER } from '../../../constants';
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
          'tier', //cmp
          'component', //button
          'element', // icon
          'category', // color
          'property', // background
          'variant', // accent
          'modifier', // hovered
        ],
      ],
      [
        'alias & hasElement',
        {
          name: '',
          path: [TOKENS_TIER.ALIAS],
          value: '',
          original: { value: '' },
          filePath: '',
          isSource: false,
        },
        [
          'tier',
          'group',
          'element',
          'category',
          'property',
          'concept',
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
      [
        'Case 2',
        {
          name: '',
          path: [TOKENS_CAT_PROP.SHAPE.NAME],
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
          tier: 'shape',
          variant: undefined,
        },
      ],
      [
        'Case 3',
        {
          name: '',
          path: [
            TOKENS_CAT_PROP.SHAPE.NAME,
            TOKENS_CAT_PROP.SHAPE.PROPS.OPACITY,
          ],
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
          component: 'opacity',
          element: undefined,
          figmatType: 'opacity',
          modifier: undefined,
          property: undefined,
          tier: 'shape',
          variant: undefined,
        },
      ],
    ];

    it.each(cases)('%s', (_title, token, paths, expected) => {
      expect(parsePath(token, paths)).toEqual(expected);
    });
  });
});
