'use strict';

module.exports = {
  light: {
    ...require('./light/js/tokens.module.reduced.cmp.min.js'),
    ...require('./light/js/tokens.module.reduced.alias.min.js'),
  },
  dark: {
    ...require('./dark/js/tokens.module.reduced.cmp.min.js'),
    ...require('./dark/js/tokens.module.reduced.alias.min.js'),
  },
};
