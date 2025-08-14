module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    jest: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:react/jsx-runtime',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', 'jsx-a11y'],
  rules: {
    'react/prop-types': 'off',
    'react/no-unknown-property': [
      'error',
      {
        ignore: ['css'],
      },
    ],
    'no-unused-vars': ['warn', { varsIgnorePattern: 'React' }],
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  ignorePatterns: ['build/*'],
}
