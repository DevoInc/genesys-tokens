import { describe, it, expect } from 'vitest';

import { TokenTestable, validate } from './json';

describe('validations', () => {
  describe('json', () => {
    describe('validate', () => {
      const cases: [string, TokenTestable[], string[]][] = [
        [
          'one invalid',
          [
            { value: 'valid', name: 'valid string' },
            { value: 42, name: 'valid number' },
            { value: { test: 'test' }, name: 'valid object' },
            { value: false, name: 'invalid' },
          ],
          ['invalid'],
        ],
      ];

      it.each(cases)('%s', (_title, tokens, expected) => {
        expect(validate(tokens)).toEqual(expected);
      });
    });
  });
});
