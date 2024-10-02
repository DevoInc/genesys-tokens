import { describe, it, expect } from 'vitest';
import type { TransformedToken } from 'style-dictionary';

import { stringify, addComment } from './serialization';

describe('formats', () => {
  describe('serialization', () => {
    describe('stringify', () => {
      const cases: [string, string, TransformedToken, string][] = [
        [
          'category non asset',
          'prefix-',
          {
            name: 'name',
            path: [],
            value: 'value',
            original: { value: '' },
            filePath: '',
            isSource: false,
            attributes: { category: 'other' },
          },
          'prefix-name: value;',
        ],
        [
          'without category',
          'prefix-',
          {
            name: 'name',
            path: [],
            value: 'value',
            original: { value: '' },
            filePath: '',
            isSource: false,
            attributes: {},
          },
          'prefix-name: value;',
        ],
        [
          'without attributes',
          'prefix-',
          {
            name: 'name',
            path: [],
            value: 'value',
            original: { value: '' },
            filePath: '',
            isSource: false,
          },
          'prefix-name: value;',
        ],
        [
          'category asset',
          'p-',
          {
            name: 'n',
            path: [],
            value: 'v',
            original: { value: '' },
            filePath: '',
            isSource: false,
            attributes: { category: 'asset' },
          },
          'p-n: "v";',
        ],
      ];

      it.each(cases)('%s', (_title, prefix, token, expected) => {
        expect(stringify(prefix)(token)).toEqual(expected);
      });
    });

    describe('addComment', () => {
      const cases: [string, 'short' | 'normal', string, string][] = [
        ['short', 'short', 'test', 'test // test'],
        ['normal', 'normal', 'test', 'test /* test */'],
      ];

      it.each(cases)('%s', (_title, commentStyle, comment, expected) => {
        expect(addComment(commentStyle)(comment)).toEqual(expected);
      });
    });
  });
});
