export const figma = {
  name: 'figma-alias',
  transforms: [
    'alias-cti',
    'name/kebab',
    'time/seconds',
    'color/css',
    'size/remToIntegerBase10',
    'shadow/boxShadowToFigma',
  ],
};
