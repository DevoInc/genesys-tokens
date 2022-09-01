import { unitToIntegerBase10 } from './normalization';

describe('normalization', () => {
  describe('unitToIntegerBase10', () => {
    const cases: [string, string, number][] = [
      ['px', '4px', 4],
      ['pxx', '4pxx', NaN],
      ['rem', '5rem', 50],
      ['remm', '5remm', NaN],
      ['direct', '5', 5],
    ];

    it.each(cases)('%s', (_title, value, expected) => {
      expect(unitToIntegerBase10(value)).toBe(expected);
    });
  });
});
