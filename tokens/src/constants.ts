// Stryker disable all
export enum TOKENS_TIER {
  ALIAS = 'alias',
  BRAND = 'brand',
  CMP = 'cmp',
  FIGMA = 'figma',
  GLOBAL = 'global',
}

export enum TOKENS_CAT {
  BREAKPOINTS = 'breakpoints',
  COLOR = 'color',
  ELEVATION = 'elevation',
  MUTATION = 'mutation',
  SHAPE = 'shape',
  SIZE = 'size',
  SPACE = 'space',
  TYPO = 'typo',
}

// export const TOKENS_CAT_VALUES = Object.values(TOKENS_CAT);[
export const TOKENS_CAT_VALUES = [
  'breakpoints',
  'color',
  'elevation',
  'mutation',
  'shape',
  'size',
  'space',
  'typo',
];

export const TOKENS_CAT_PROP = {
  BREAKPOINTS: {
    NAME: TOKENS_CAT.BREAKPOINTS,
    PROPS: {
      MEDIA_QUERY: 'mediaQuery',
    },
  },
  COLOR: {
    NAME: TOKENS_CAT.COLOR,
    PROPS: {
      BACKGROUND: 'background',
      TEXT: 'text',
      BORDER: 'border',
      FILL: 'fill',
      SHADOW: 'shadow',
    },
  },
  ELEVATION: {
    NAME: TOKENS_CAT.ELEVATION,
    PROPS: {
      BOX_SHADOW: 'boxShadow',
      TEXT_SHADOW: 'textShadow',
      Z_INDEX: 'zIndex',
    },
  },
  MUTATION: {
    NAME: TOKENS_CAT.MUTATION,
    PROPS: {
      TRANSITION: 'transition',
      TRANSITION_PROPERTY: 'transitionProperty',
      TRANSITION_DURATION: 'transitionDuration',
      TRANSITION_TIMING_FUNCTION: 'transitionTimingFunction',
      TRANSITION_TYPE: 'transitionType',
      TRANSITION_DELAY: 'transitionDelay',
      TRANSFORM: 'transform',
    },
  },
  SHAPE: {
    NAME: TOKENS_CAT.SHAPE,
    PROPS: {
      BORDER_RADIUS: 'borderRadius',
      BORDER: 'border',
      BORDER_SIZE: 'borderSize',
      BORDER_STYLE: 'borderStyle',
      STROKE: 'stroke',
      OUTLINE: 'outline',
      OPACITY: 'opacity',
      CONTENT: 'content',
    },
  },
  SIZE: {
    NAME: TOKENS_CAT.SIZE,
    PROPS: {
      WIDTH: 'width',
      MIN_WIDTH: 'minWidth',
      MAX_WIDTH: 'maxWidth',
      HEIGHT: 'height',
      MIN_HEIGHT: 'minHeight',
      MAX_HEIGHT: 'maxHeight',
      SQUARE: 'square',
    },
  },
  TYPO: {
    NAME: TOKENS_CAT.TYPO,
    PROPS: {
      FONT_SIZE: 'fontSize',
      FONT_WEIGHT: 'fontWeight',
      FONT_FAMILY: 'fontFamily',
      LINE_HEIGHT: 'lineHeight',
      LETTER_SPACING: 'letterSpacing',
      TEXT_TRANSFORM: 'textTransform',
      TEXT_DECORATION: 'textDecoration',
    },
  },
  SPACE: {
    NAME: TOKENS_CAT.SPACE,
    PROPS: {
      PADDING: 'padding',
      PADDING_TOP: 'paddingTop',
      PADDING_RIGHT: 'paddingRight',
      PADDING_BOTTOM: 'paddingBottom',
      PADDING_LEFT: 'paddingLeft',
      PADDING_VER: 'paddingVer',
      PADDING_HOR: 'paddingHor',
      MARGIN: 'margin',
      MARGIN_TOP: 'marginTop',
      MARGIN_RIGHT: 'marginRight',
      MARGIN_BOTTOM: 'marginBottom',
      MARGIN_LEFT: 'marginLeft',
      MARGIN_VER: 'marginVer',
      MARGIN_HOR: 'marginHor',
      GAP: 'gap',
      ROW_GAP: 'rowGap',
      COLUMN_GAP: 'columnGap',
    },
  },
};

export enum FIGMA_TOKENS_CAT {
  COLOR = 'color',
  BORDER_RADIUS = 'borderRadius',
  SIZE = 'sizing',
  SPACE = 'spacing',
  BORDER_SIZE = 'borderWidth',
  BOX_SHADOW = 'boxShadow',
  OPACITY = 'opacity',
  TYPO = 'typography',
  FONT_SIZE = 'fontSizes',
  FONT_WEIGHT = 'fontWeights',
  FONT_FAMILY = 'fontFamilies',
  LINE_HEIGHT = 'lineHeights',
  LETTER_SPACING = 'letterSpacing',
  TEXT_TRANSFORM = 'case',
  OTHER = 'other',
}
