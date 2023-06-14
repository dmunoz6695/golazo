module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'plugin:react/recommended',
    'standard'
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    'react'
  ],
  rules: {
    'global-require': 'off',
    'newline-per-chained-call': 'off',
    'import/no-dynamic-require': 'off',
    quotes: ['error', 'single', { allowTemplateLiterals: true }],
    'class-methods-use-this': 'off',
    indent: ['error', 2]
  }
}
