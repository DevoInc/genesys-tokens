import type { TransformedTokens } from 'style-dictionary';
import { flattenObject } from './flatten';

describe('formats', () => {
  describe('html', () => {
    describe('flatten', () => {
      const cases: [
        string,
        TransformedTokens,
        { [key: string]: string | number }
      ][] = [
        [
          'two properties',
          {
            alias: {
              breakpoints: {
                mediaQuery: {
                  xs: {
                    value: '575px',
                    filePath: '',
                    isSource: true,
                    original: { value: '575px' },
                    name: 'ALIAS_BREAKPOINTS_MEDIA_QUERY_XS',
                    attributes: {
                      figmaType: 'other',
                      tier: 'alias',
                      element: 'breakpoints',
                      category: 'mediaQuery',
                      property: 'xs',
                    },
                    path: ['alias', 'breakpoints', 'mediaQuery', 'xs'],
                  },
                  sm: {
                    value: '576px',
                    filePath: '',
                    isSource: true,
                    original: { value: '576px' },
                    name: 'ALIAS_BREAKPOINTS_MEDIA_QUERY_SM',
                    attributes: {
                      figmaType: 'other',
                      tier: 'alias',
                      element: 'breakpoints',
                      category: 'mediaQuery',
                      property: 'sm',
                    },
                    path: ['alias', 'breakpoints', 'mediaQuery', 'sm'],
                  },
                },
              },
            },
          },
          {
            'alias-breakpoints-mediaQuery-xs': '575px',
            'alias-breakpoints-mediaQuery-sm': '576px',
          },
        ],
      ];

      it.each(cases)('%s', (_title, properties, expected) => {
        expect(flattenObject(properties)).toEqual(expected);
      });
    });
  });
});
