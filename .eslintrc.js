module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:eslint-plugin-jest/recommended',
    'plugin:github/recommended',
    'eslint-config-prettier',
  ],

  parser: '@typescript-eslint/parser',
  
  plugins: [
    '@typescript-eslint',
    'eslint-plugin-jest',
  ],

  rules: {
    '@typescript-eslint/no-require-imports': 'error',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-empty-function': 'error',
    '@typescript-eslint/consistent-type-assertions': 'error',
    '@typescript-eslint/explicit-function-return-type': ['error', {'allowExpressions': true}],
    '@typescript-eslint/func-call-spacing': ['error', 'never'],
    '@typescript-eslint/no-array-constructor': 'error',
    '@typescript-eslint/no-empty-interface': 'error',
    '@typescript-eslint/no-extraneous-class': 'error',
    '@typescript-eslint/no-for-in-array': 'error',
    '@typescript-eslint/no-inferrable-types': 'error',
    '@typescript-eslint/no-misused-new': 'error',
    '@typescript-eslint/no-namespace': 'error',
    '@typescript-eslint/no-useless-constructor': 'error',
    '@typescript-eslint/no-var-requires': 'error',
    '@typescript-eslint/prefer-for-of': 'warn',
    '@typescript-eslint/prefer-function-type': 'warn',
    '@typescript-eslint/semi': ['error', 'never'],
    '@typescript-eslint/type-annotation-spacing': 'error',
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/explicit-member-accessibility': ['error', {'accessibility': 'no-public'}],
    '@typescript-eslint/array-type': 'error',
    '@typescript-eslint/no-shadow': ['error'],
    '@typescript-eslint/ban-ts-comment': [
      'error',
      {
        'ts-ignore': 'allow-with-description',
      },
    ],
    'eslint-comments/no-use': 'off',
    'no-console': 'error',
    'yoda': 'error',
    'prefer-const': [
      'error',
      {
        destructuring: 'all'
      },
    ],
    'no-control-regex': 'off',
    'no-constant-condition': ['error', {checkLoops: false}],
    'i18n-text/no-en': 'off',
    'import/no-namespace': 'off',
    'no-unused-vars': 'off',
    'camelcase': 'off',
    'no-shadow': 'off',
  },

  overrides: [
    {
      files: ['**/*{test,spec}.ts'],
      rules: {
        '@typescript-eslint/no-unused-vars': 'off',
        'jest/no-standalone-expect': 'off',
        'jest/no-conditional-expect': 'off',
        'no-console': 'off',

      }
    }
  ],

  env: {
    node: true,
    es6: true,
    'jest/globals': true
  }
};
