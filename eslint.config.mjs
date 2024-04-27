import globals from 'globals';
import js from '@eslint/js';
import react from 'eslint-plugin-react';

export default [
  js.configs.recommended,
  {
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      globals: {
        ...globals.browser
      },
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      }
    },
    plugins: {
      react: react
    },
    rules: {
      'react/prop-types': 'off',
      'react/jsx-uses-vars': 'error'
    },
  }
];