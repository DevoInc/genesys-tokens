import lightCmp from "./light/js/tokens.esm.cmp.js";
import lightAlias from "./light/js/tokens.esm.alias.js";
import lightMeta from "./light/js/tokens.esm.meta.js";

import darkCmp from "./dark/js/tokens.esm.cmp.js";
import darkAlias from "./dark/js/tokens.esm.alias.js";
import darkMeta from "./dark/js/tokens.esm.meta.js";

export const light = {
  ...lightCmp,
  ...lightAlias,
  ...lightMeta,
};

export const dark = {
  ...darkCmp,
  ...darkAlias,
  ...darkMeta,
};
