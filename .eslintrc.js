module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false,
  },
  extends: ['prettier'],
  // add your custom rules here
  rules: {
    semi: [2, 'never'],
    'no-unused-vars': 'off',
    'no-console': 'off',
    'no-sparse-arrays': 'off',
    'array-callback-return': 0,
    'import/no-named-as-default': 0,
  },
}
