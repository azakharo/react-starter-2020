module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  env: {
    browser: true,
    es2021: true,
  },
  plugins: [
    'prettier',
    '@typescript-eslint',
    'react-hooks'
  ],
  extends: [
    'airbnb',
    'plugin:prettier/recommended',
    "plugin:@typescript-eslint/recommended",
    'prettier'
  ],
  rules: {
    // we dont use jxs file extensions
    'react/jsx-filename-extension': [1, { extensions: ['.js'] }],

    // todo consider adding project agreement about default props
    'react/require-default-props': 0,
    'no-restricted-syntax': 0,
    'react/static-property-placement': 0,
    'react/state-in-constructor': [1, 'never'],
    'react/jsx-props-no-spreading': 0,

    // Hooks rules
    "react-hooks/rules-of-hooks": "error",
    'react-hooks/exhaustive-deps': 'warn',

    "import/extensions": [0, "never"],
    "import/prefer-default-export": 1,

    'react/destructuring-assignment': [0, 'always', { ignoreClassFields: true }],
    'react/prop-types': 'off'
  },
  settings: {
    "import/resolver": {
      webpack: {
        config: 'webpack.common.js'
      }
    },
    "react": {
      "pragma": "React",
      "version": "detect"
    }
  }
};
