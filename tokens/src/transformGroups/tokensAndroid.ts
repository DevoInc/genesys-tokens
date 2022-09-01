// Stryker disable all
export const tokensAndroid = {
  name: 'tokens-android',
  // to see the pre-defined "android" transformation use:
  // console.log(StyleDictionaryPackage.transformGroup['android']);
  transforms: ['attribute/cti', 'name/cti/camel', 'size/pxToDp'],
};
