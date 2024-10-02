import { describe, it, expect } from 'vitest';
import type { TransformedTokens } from 'style-dictionary';

import { evalNode, EvaluatedNode, Formatter } from './eval';

describe('formats', () => {
  describe('eval', () => {
    describe('evalNode', () => {
      const cases: [
        string,
        TransformedTokens,
        Formatter<string>,
        EvaluatedNode<string>
      ][] = [
        [
          'simple case',
          {
            test: {
              value: 'test',
              name: '',
              path: [],
              filePath: '',
              isSource: false,
              original: { value: 'test' },
            },
          },
          (token) => token.value,
          {
            test: 'test',
          },
        ],
      ];

      it.each(cases)('%s', (_title, token, formatter, expected) => {
        expect(evalNode<string>(token, formatter)).toEqual(expected);
      });
    });
  });
});
