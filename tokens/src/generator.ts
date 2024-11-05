import StyleDictionary from 'style-dictionary';

import { Scheme } from './Scheme';
import * as formats from './formats';
import * as transforms from './transforms';
import * as filters from './filters';
import * as transformGroups from './transformGroups';

import { getStyleDictionaryConfig } from './styleDictionary';

StyleDictionary.registerFormat(formats.json.flat);
StyleDictionary.registerFormat(formats.figma.figmatokens);
StyleDictionary.registerFormat(formats.text.flat);
StyleDictionary.registerFormat(formats.javascript.moduleReduced);
StyleDictionary.registerFormat(formats.javascript.moduleReducedMin);
StyleDictionary.registerFormat(formats.javascript.esmReducedMin);
StyleDictionary.registerFormat(formats.typescript.moduleReducedDeclarations);

StyleDictionary.registerTransform(transforms.size.pxToPt);

StyleDictionary.registerTransform(transforms.alias.cti);
StyleDictionary.registerTransform(transforms.alias.group);
StyleDictionary.registerTransform(transforms.alias.jsonComponent);
StyleDictionary.registerTransform(transforms.size.pxToDp);
StyleDictionary.registerTransform(transforms.size.remToPxBase10);
StyleDictionary.registerTransform(transforms.size.remToIntegerBase10);
StyleDictionary.registerTransform(transforms.shadow.boxShadowToFigma);

StyleDictionary.registerFilter(filters.isGlobal);
StyleDictionary.registerFilter(filters.isAlias);
StyleDictionary.registerFilter(filters.isFigmaBase);
StyleDictionary.registerFilter(filters.isFigmaScheme);
StyleDictionary.registerFilter(filters.isBrand);
StyleDictionary.registerFilter(filters.isCmp);
StyleDictionary.registerFilter(filters.isGroup);
StyleDictionary.registerFilter(filters.isNotFigma);
StyleDictionary.registerFilter(filters.isCmpAlias);

StyleDictionary.registerTransformGroup(transformGroups.figma);
StyleDictionary.registerTransformGroup(transformGroups.styleguide);
StyleDictionary.registerTransformGroup(transformGroups.styleguidejs);
StyleDictionary.registerTransformGroup(transformGroups.tokensJs);
StyleDictionary.registerTransformGroup(transformGroups.tokensJson);
StyleDictionary.registerTransformGroup(transformGroups.tokensScss);
StyleDictionary.registerTransformGroup(transformGroups.tokensCss);
StyleDictionary.registerTransformGroup(transformGroups.tokensAndroid);

export interface GenerateParams {
  scheme?: Scheme;
  menuScheme?: Scheme;
  source: string;
  output: string;
}

export interface GenerateTypesParams {
  output: string;
}

export const generate = async ({
  scheme = Scheme.Light,
  menuScheme = Scheme.Light,
  source,
  output,
}: GenerateParams) => {
  const config = getStyleDictionaryConfig(scheme, menuScheme, source, output);
  const sd = new StyleDictionary(config);
  await sd.hasInitialized;

  sd.buildPlatform('web/js');
  sd.buildPlatform('web/json');
  sd.buildPlatform('web/scss');
  sd.buildPlatform('web/css');
  sd.buildPlatform('figma');

  return true;
};

export const generateTypes = async ({ output }: GenerateTypesParams) => {
  const config = getStyleDictionaryConfig(
    Scheme.Light,
    Scheme.Light,
    null,
    output,
  );
  const sd = new StyleDictionary(config);
  await sd.hasInitialized;

  sd.buildPlatform('web/ts');

  return true;
};
