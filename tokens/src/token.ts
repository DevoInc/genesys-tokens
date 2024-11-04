import type { TransformedToken } from 'style-dictionary/types';

import { FIGMA_TOKENS_CAT, TOKENS_TIER, TOKENS_CAT_PROP } from './constants';

/**
 * Evaluate if the token is figma type
 */
export const isFigmaProp = (token: TransformedToken) =>
  (token.attributes?.tier === TOKENS_TIER.FIGMA ||
    token.attributes?.tier === TOKENS_TIER.ALIAS ||
    token.attributes?.tier === TOKENS_TIER.CMP) &&
  token.attributes.figmaType !== FIGMA_TOKENS_CAT.OTHER;

/**
 * Evaluate if the token has scheme (it depends on the dark or light scheme)
 */
export const evalHasScheme = (token: TransformedToken) =>
  token.attributes?.category === TOKENS_CAT_PROP.COLOR.NAME ||
  (token.attributes?.category === TOKENS_CAT_PROP.ELEVATION.NAME &&
    (token.attributes.property === TOKENS_CAT_PROP.ELEVATION.PROPS.BOX_SHADOW ||
      token.attributes.property ===
        TOKENS_CAT_PROP.ELEVATION.PROPS.TEXT_SHADOW));
