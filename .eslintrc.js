const path = require('path');

module.exports = {
  parser: 'babel-eslint',

  env: {
    browser: true,
    es6: true,
    jest: true,
    node: true,
  },

  globals: {
    beforeAll: true,
    afterAll: true,
  },

  extends: [
    'airbnb',
    'plugin:flowtype/recommended',
    'prettier',
    'prettier/react',
    'prettier/flowtype',
  ],

  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },

  settings: {
    'import/resolver': {
      node: {
        paths: [path.resolve(__dirname, 'src')],
      },
    },
    flowtype: {
      onlyFilesWithFlowAnnotation: true,
    },
  },

  plugins: ['flowtype', 'jsx-a11y', 'import', 'react', 'react-hooks'],

  rules: {
    'no-underscore-dangle': [
      'error',
      {
        allow: ['__REDUX_DEVTOOLS_EXTENSION__'],
        allowAfterThis: false,
        allowAfterSuper: false,
        enforceInMethodNames: true,
      },
    ],
    camelcase: ['off', { properties: 'never' }],
    'global-require': 'off',
    'no-console': 0,
    'prefer-destructuring': [
      'error',
      {
        array: false,
        object: true,
      },
    ],
    'prefer-object-spread': 0,
    'jsx-a11y/label-has-for': 0,
    'jsx-a11y/no-autofocus': 0,
    'jsx-a11y/label-has-associated-control': 0,
    'flowtype/no-weak-types': [
      2,
      {
        any: true,
        Object: true,
        Function: true,
      },
    ],
    'import/no-cycle': 0,
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'react/default-props-match-prop-types': [
      2,
      { allowRequiredDefaults: true },
    ],
    'react/forbid-component-props': 2,
    'react/forbid-prop-types': 0,
    'react/jsx-curly-brace-presence': [
      2,
      {
        props: 'never',
        children: 'ignore',
      },
    ],
    'react/jsx-fragments': [2, 'element'],
    'react/jsx-props-no-spreading': 0,
    'react/no-did-update-set-state': 0,
    'react/prefer-stateless-function': [2, { ignorePureComponents: true }],
    'react/require-default-props': [2, { forbidDefaultForRequired: false }],
    'react/sort-comp': [
      1,
      {
        order: ['statics', 'everything-else'],
      },
    ],
    'react/state-in-constructor': 0,
    'react/static-property-placement': [2, 'static public field'],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
  },
};
