/**
 * Split a text by commas that are not inside of a parenthesys
 *
 * @param text Text for split
 * @return Array splited of expressions
 */
export const breakExpressions = (text: string) =>
  text.split(/\s*,(?![^(]*\))\s*/);
