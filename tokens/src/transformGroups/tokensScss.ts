export const tokensScss = {
  name: 'tokens-scss',
  // to see the pre-defined "scss" transformation use:
  // console.log(StyleDictionaryPackage.transformGroup['scss']);
  transforms: [
    'alias-cti',
    //'name/token-group',
    'time/seconds',
    'color/css',
    'name/cti/kebab',
  ],
};
