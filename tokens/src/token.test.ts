import { describe, it, expect } from 'vitest';
import type { TransformedToken } from 'style-dictionary/types';

import { FIGMA_TOKENS_CAT, TOKENS_CAT_PROP, TOKENS_TIER } from './constants';
import { evalHasScheme, isFigmaProp } from './token';

describe('token', () => {
  describe('isFigmaProp', () => {
    const cases: [string, TransformedToken, boolean][] = [
      [
        'tier figma',
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
        'tier alias',
        {
          original: { value: '' },
          filePath: '',
          isSource: false,
          path: [],
          name: '',
          value: '',
          attributes: {
            tier: TOKENS_TIER.ALIAS,
            figmaType: FIGMA_TOKENS_CAT.SIZE,
          },
        },
        true,
      ],
      [
        'tier cmp',
        {
          original: { value: '' },
          filePath: '',
          isSource: false,
          path: [],
          name: '',
          value: '',
          attributes: {
            tier: TOKENS_TIER.CMP,
            figmaType: FIGMA_TOKENS_CAT.SIZE,
          },
        },
        true,
      ],
      [
        'tier global',
        {
          original: { value: '' },
          filePath: '',
          isSource: false,
          path: [],
          name: '',
          value: '',
          attributes: {
            tier: TOKENS_TIER.GLOBAL,
            figmaType: FIGMA_TOKENS_CAT.SIZE,
          },
        },
        false,
      ],
      [
        'figmaType other',
        {
          original: { value: '' },
          filePath: '',
          isSource: false,
          path: [],
          name: '',
          value: '',
          attributes: {
            tier: TOKENS_TIER.CMP,
            figmaType: FIGMA_TOKENS_CAT.OTHER,
          },
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
          attributes: {},
        },
        false,
      ],
      [
        'missing attributes property',
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
      expect(isFigmaProp(token)).toEqual(expected);
    });
  });
  describe('evalHasScheme', () => {
    const cases: [string, TransformedToken, boolean][] = [
      [
        'category color name',
        {
          original: { value: '' },
          filePath: '',
          isSource: false,
          path: [],
          name: '',
          value: '',
          attributes: {
            category: TOKENS_CAT_PROP.COLOR.NAME,
          },
        },
        true,
      ],
      [
        'category elevation name and property box shadow',
        {
          original: { value: '' },
          filePath: '',
          isSource: false,
          path: [],
          name: '',
          value: '',
          attributes: {
            category: TOKENS_CAT_PROP.ELEVATION.NAME,
            property: TOKENS_CAT_PROP.ELEVATION.PROPS.BOX_SHADOW,
          },
        },
        true,
      ],
      [
        'category elevation name and property text shadow',
        {
          original: { value: '' },
          filePath: '',
          isSource: false,
          path: [],
          name: '',
          value: '',
          attributes: {
            category: TOKENS_CAT_PROP.ELEVATION.NAME,
            property: TOKENS_CAT_PROP.ELEVATION.PROPS.TEXT_SHADOW,
          },
        },
        true,
      ],
      [
        'category size name',
        {
          original: { value: '' },
          filePath: '',
          isSource: false,
          path: [],
          name: '',
          value: '',
          attributes: {
            category: TOKENS_CAT_PROP.SIZE.NAME,
          },
        },
        false,
      ],
      [
        'category elevation name and property z index',
        {
          original: { value: '' },
          filePath: '',
          isSource: false,
          path: [],
          name: '',
          value: '',
          attributes: {
            category: TOKENS_CAT_PROP.ELEVATION.NAME,
            property: TOKENS_CAT_PROP.ELEVATION.PROPS.Z_INDEX,
          },
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
          attributes: {},
        },
        false,
      ],
      [
        'missing attributes property',
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
      expect(evalHasScheme(token)).toEqual(expected);
    });
  });
});
