import { describe, it, expect } from 'vitest';
import type { TransformedToken } from 'style-dictionary/types';

import { transform } from './transform';

describe('size', () => {
  describe('transforms', () => {
    describe('remToPxBase10', () => {
      describe('transformer', () => {
        const cases: [string, TransformedToken, string][] = [
          [
            '10rem',
            {
              value: '10rem',
              name: '',
              path: [],
              filePath: '',
              isSource: false,
              original: { value: '' },
            },
            '100px',
          ],
          [
            '10rem20',
            {
              value: '10rem20',
              name: '',
              path: [],
              filePath: '',
              isSource: false,
              original: { value: '' },
            },
            'NaNpx',
          ],
          [
            '10',
            {
              value: '10',
              name: '',
              path: [],
              filePath: '',
              isSource: false,
              original: { value: '' },
            },
            '100px',
          ],
          [
            'nonum',
            {
              value: 'nonum',
              name: '',
              path: [],
              filePath: '',
              isSource: false,
              original: { value: '' },
            },
            'NaNpx',
          ],
        ];

        it.each(cases)('%s', (_title, token, expected) => {
          expect(transform(token)).toEqual(expected);
        });
      });
    });
  });
});
