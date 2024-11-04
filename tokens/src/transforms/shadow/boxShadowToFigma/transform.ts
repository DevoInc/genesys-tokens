import type { TransformedToken } from 'style-dictionary/types';

import { getValidFormatMessage } from './errors';
import { unitToIntegerBase10 } from './normalization';
import { breakExpressions } from './split';
import {
  InsetXYColor,
  InsetXYBlurColor,
  InsetXYBlurSpreadColor,
} from './variations';

export interface FigmaBoxShadow {
  type: 'dropShadow' | 'innerShadow';
  x: number;
  y: number;
  blur: number;
  spread: number;
  color: string;
}

export const transform = (token: TransformedToken) =>
  Array.isArray(token.value)
    ? token.value
    : breakExpressions(token.value).map((item) => {
        let captured;
        if (
          [
            'none',
            'inherit',
            'initial',
            'revert',
            'revert-layer',
            'unset',
          ].includes(item)
        ) {
          return {
            type: 'dropShadow',
            x: 0,
            y: 0,
            blur: 0,
            spread: 0,
            color: 'rgba(0,0,0,0)',
          };
        } else if ((captured = InsetXYBlurSpreadColor.exec(item))) {
          return {
            type: captured[1] ? 'innerShadow' : 'dropShadow',
            x: unitToIntegerBase10(captured[2]),
            y: unitToIntegerBase10(captured[3]),
            blur: unitToIntegerBase10(captured[4]),
            spread: unitToIntegerBase10(captured[5]),
            color: captured[6],
          };
        } else if ((captured = InsetXYBlurColor.exec(item))) {
          return {
            type: captured[1] ? 'innerShadow' : 'dropShadow',
            x: unitToIntegerBase10(captured[2]),
            y: unitToIntegerBase10(captured[3]),
            blur: unitToIntegerBase10(captured[4]),
            spread: 0,
            color: captured[5],
          };
        } else if ((captured = InsetXYColor.exec(item))) {
          return {
            type: captured[1] ? 'innerShadow' : 'dropShadow',
            x: unitToIntegerBase10(captured[2]),
            y: unitToIntegerBase10(captured[3]),
            blur: 0,
            spread: 0,
            color: captured[4],
          };
        } else {
          throw new Error(getValidFormatMessage(token));
        }
      });
