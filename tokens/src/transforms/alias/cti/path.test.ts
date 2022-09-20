import type { TransformedToken } from 'style-dictionary';
import { TOKENS_CAT_PROP, TOKENS_TIER } from '../../../constants';
import { getPaths, parsePath } from './path';

describe('path', () => {
  describe('getPaths', () => {
    const cases: [string, TransformedToken, string[]][] = [
      [
        'with element',
        {
          name: '',
          path: ['cmp', 'button', 'icon', 'typo', 'fontSize', 'xxs'],
          value: '',
          original: { value: '' },
          filePath: '',
          isSource: false,
        },
        [
          'tier', //cmp
          'component', //button
          'element', //icon
          'category', // typo
          'property', // fontSize
          'variant', // xxs
          'modifier',
        ],
      ],
      [
        'without element',
        {
          name: '',
          path: ['cmp', 'button', 'typo', 'fontSize', 'xxs'],
          value: '',
          original: { value: '' },
          filePath: '',
          isSource: false,
        },
        [
          'tier', //cmp
          'component', //button
          'category', // typo
          'property', // fontSize
          'variant', // xxs
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
        'with element',
        {
          name: '',
          path: ['cmp', 'button', 'icon', 'typo', 'fontSize', 'xxs'],
          value: '',
          original: { value: 'value' },
          filePath: '',
          isSource: false,
        },
        [
          'tier', //cmp
          'component', //button
          'element', //icon
          'category', // typo
          'property', // fontSize
          'variant', // xxs
          'modifier',
        ],
        {
          tier: 'cmp',
          component: 'button',
          element: 'icon',
          figmatType: 'fontSizes',
          category: 'typo',
          property: 'fontSize',
          variant: 'xxs',
          modifier: undefined,
        },
      ],
      [
        'without element',
        {
          name: '',
          path: ['cmp', 'button', 'color', 'background', 'accent', 'expanded'],
          value: '',
          original: { value: 'value' },
          filePath: '',
          isSource: false,
        },
        [
          'tier', //cmp
          'component', //button
          'category', // color
          'property', // background
          'variant', // accent
          'modifier', // expanded
        ],
        {
          tier: 'cmp',
          component: 'button',
          figmatType: 'color',
          category: 'color',
          property: 'background',
          variant: 'accent',
          modifier: 'expanded',
        },
      ],
    ];

    it.each(cases)('%s', (_title, token, paths, expected) => {
      expect(parsePath(token, paths)).toEqual(expected);
    });
  });
});
