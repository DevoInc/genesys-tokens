/**
 * Normalize the unit to base10
 *
 * @param value The value to normalize
 * @return The value normalized
 */
export const unitToIntegerBase10 = (value: string) => {
  const mult = value.endsWith('rem') ? 10 : 1;
  const numberValue = Number(value.replace(/rem/, '').replace(/px/, ''));
  return parseFloat((numberValue * mult).toFixed(4));
};
