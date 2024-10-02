import { describe, it, expect } from 'vitest';
import type { TransformedToken } from 'style-dictionary';
import { getPaths, parsePath } from './path';

describe('path', () => {
  describe('getPaths', () => {
    const cases: [string, TransformedToken, string[]][] = [
      [
        'cmp with element',
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
        'cmp without element',
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
      [
        'alias with element',
        {
          name: '',
          path: ['alias', 'fields', 'icon', 'color', 'text', 'base'],
          value: '',
          original: { value: '' },
          filePath: '',
          isSource: false,
        },
        [
          'tier', //alias
          'group', //fields
          'element', //icon
          'category', // color
          'property', // text
          'variant', // base
          'modifier',
        ],
      ],
      [
        'alias without element',
        {
          name: '',
          path: [
            'alias',
            'color',
            'background',
            'action',
            'accentHigh',
            'enabled',
          ],
          value: '',
          original: { value: '' },
          filePath: '',
          isSource: false,
        },
        [
          'tier', //alias
          'category', // color
          'property', // background
          'concept', // action
          'variant', // accentHigh
          'modifier', // enabled
        ],
      ],
      [
        'brand',
        {
          name: '',
          path: ['brand', 'color', 'background', 'surface', 'base', 'modifier'],
          value: '',
          original: { value: '' },
          filePath: '',
          isSource: false,
        },
        [
          'tier', //brand
          'category', // color
          'property', // background
          'variant', // surface
          'modifier', // base
        ],
      ],
      [
        'brand mainMenu',
        {
          name: '',
          path: ['brand', 'mainMenu', 'logoCustom', 'shape', 'backgroundSize'],
          value: '',
          original: { value: '' },
          filePath: '',
          isSource: false,
        },
        [
          'tier', //brand
          'category', // mainMenu
          'property', // logoCustom
          'variant', // shape
          'modifier', // backgroundSize
        ],
      ],
      [
        'global shape opacity',
        {
          name: '',
          path: ['global', 'shape', 'opacity', 'low'],
          value: '',
          original: { value: '' },
          filePath: '',
          isSource: false,
        },
        [
          'tier', //global
          'category', // shape
          'property', // opacity
          'variant', // low
          'modifier',
        ],
      ],
      [
        'alias opacity',
        {
          name: '',
          path: ['alias', 'mutation', 'transitionDuration', 'opacity', 'sm'],
          value: '',
          original: { value: '' },
          filePath: '',
          isSource: false,
        },
        [
          'tier', // alias
          'category', // mutation
          'property', // transitionDuration
          'concept', // opacity
          'variant', // sm
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
          figmaType: 'fontSizes',
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
          figmaType: 'color',
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
