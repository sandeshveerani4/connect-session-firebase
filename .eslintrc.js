'use strict';

module.exports = {
  'extends': 'airbnb',
  'env': {
    'es6': true,
    'node': true
  },
  'rules': {
    'key-spacing': [
      1,
      {
        'beforeColon': false,
        'afterColon': true
      }
    ],
    'no-console': 1,
    'no-debugger': 2,
    'no-dupe-args': 2,
    'no-dupe-keys': 2,
    'no-empty': 1,
    'no-mixed-spaces-and-tabs': 2,
    'no-undefined': 1,
    'no-unused-vars': [
      1,
      {
        'vars': 'all',
        'args': 'none'
      }
    ],
    'quotes': [1, 'single'],
    'semi': [1, 'always'],
    'strict': [1, 'global']
  }
};
