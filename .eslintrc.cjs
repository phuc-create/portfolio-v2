module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'plugin:jest/recommended',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  rules: {
    semi: ['error', 'never'],
    'template-curly-spacing': 'off',
    'no-template-curly-in-string': 'off',
    indent: 'off',
    camelcase: 'off',
    'no-return-assign': 'off',
    'one-var': 'off',
    'no-prototype-builtins': 'warn',
    'prefer-promise-reject-errors': 'off',
    'standard/object-curly-even-spacing': 'off',
    'react/prop-types': 'off',
    'react/no-unused-prop-types': 'off',
    'react/self-closing-comp': 'off',
    'react/jsx-boolean-value': 'off',
    'react/jsx-pascal-case': 'off',
    'react/jsx-handler-names': 'off',
    // 'react-hooks/exhaustive-deps': 'off',
    'react/jsx-indent-props': [2, 2],
    'jest/no-conditional-expect': 'warn',
    'jest/expect-expect': 'off',
    'jsx-quotes': ['error', 'prefer-double'],
    'no-unused-vars': 'warn',
    'space-before-function-paren': [
      'error',
      {
        anonymous: 'always',
        named: 'never',
        asyncArrow: 'always',
      },
    ],
    'prettier/prettier': [
      'warn',
      {
        arrowParens: 'avoid',
        trailingComma: 'all',
        semi: false,
        endOfLine: 'auto',
        tabWidth: 2,
        printWidth: 80,
        useTabs: false,
        singleQuote: true,
        jsxSingleQuote: false,
      },
    ],
    'no-empty-function': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
  },
}
