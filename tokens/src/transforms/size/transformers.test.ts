import { describe, it, expect } from 'vitest';
import type { TransformedToken } from 'style-dictionary';

import { transformRemToNum } from './transformers';

describe('size', () => {
  describe('transforms', () => {
    describe('transform', () => {
      describe('transformRemToNum', () => {
        const cases: [string, TransformedToken, number][] = [
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
            100,
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
            NaN,
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
            100,
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
            NaN,
          ],
        ];

        it.each(cases)('%s', (_title, token, expected) => {
          expect(transformRemToNum(token)).toEqual(expected);
        });
      });
    });
  });
});
