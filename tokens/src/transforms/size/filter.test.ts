import { describe, it, expect } from 'vitest';
import type { TransformedToken } from 'style-dictionary/types';

import { filterPx, filterRem } from './filter';

describe('transforms', () => {
  describe('size', () => {
    describe('matcher', () => {
      describe('matchPx', () => {
        const cases: [string, TransformedToken, boolean][] = [
          [
            '12px',
            {
              value: '12px',
              name: '',
              path: [],
              filePath: '',
              isSource: false,
              original: { value: '' },
            },
            true,
          ],
          [
            '12pxx',
            {
              value: '12pxx',
              name: '',
              path: [],
              filePath: '',
              isSource: false,
              original: { value: '' },
            },
            false,
          ],
          [
            'no12px',
            {
              value: 'no12px',
              name: '',
              path: [],
              filePath: '',
              isSource: false,
              original: { value: '' },
            },
            false,
          ],
          [
            '12em',
            {
              value: '12em',
              name: '',
              path: [],
              filePath: '',
              isSource: false,
              original: { value: '' },
            },
            false,
          ],
        ];

        it.each(cases)('%s', (_title, token, expected) => {
          expect(filterPx(token, {})).toEqual(expected);
        });
      });

      describe('matchRem', () => {
        const cases: [string, TransformedToken, boolean][] = [
          [
            '12rem',
            {
              value: '12rem',
              name: '',
              path: [],
              filePath: '',
              isSource: false,
              original: { value: '' },
            },
            true,
          ],
          [
            '12remm',
            {
              value: '12remm',
              name: '',
              path: [],
              filePath: '',
              isSource: false,
              original: { value: '' },
            },
            false,
          ],
          [
            'no12rem',
            {
              value: 'no12rem',
              name: '',
              path: [],
              filePath: '',
              isSource: false,
              original: { value: '' },
            },
            false,
          ],
          [
            '12px',
            {
              value: '12px',
              name: '',
              path: [],
              filePath: '',
              isSource: false,
              original: { value: '' },
            },
            false,
          ],
          [
            'not string',
            {
              value: null,
              name: '',
              path: [],
              filePath: '',
              isSource: false,
              original: { value: '' },
            },
            false,
          ],
        ];

        it.each(cases)('%s', (_title, token, expected) => {
          expect(filterRem(token, {})).toEqual(expected);
        });
      });
    });
  });
});
