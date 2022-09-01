import { breakExpressions } from './split';

describe('split', () => {
  describe('breakExpressions', () => {
    const cases: [string, string, string[]][] = [
      ['all external', 'a, b,c', ['a', 'b', 'c']],
      ['all internal', '(a, b,c)', ['(a, b,c)']],
      ['mixed', '(a,b), c', ['(a,b)', 'c']],
      ['no split', '(a,b)', ['(a,b)']],
    ];

    it.each(cases)('%s', (_title, text, expected) => {
      expect(breakExpressions(text)).toEqual(expected);
    });
  });
});
