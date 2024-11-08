/* eslint-env node */
// require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:vue/vue3-recommended',
    'eslint:recommended',
    '@vue/typescript/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'airbnb-base',
    'prettier',
    '@vue/eslint-config-airbnb-with-typescript',
    '@vue/eslint-config-prettier',
  ],
  ignorePatterns: [
    '.eslintrc.cjs',
    'vite.config.build.mts',
    'vite.config.mts',
    'dist',
  ],
  rules: {
    'vue/multi-word-component-names': 'off',
    'import/no-named-as-default': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'vue/prop-name-casing': 'off',
    'vue/dot-notation': 'off',
  },
	globals: {
		Entry: true,
	},
	parserOptions: {
		parser: '@typescript-eslint/parser',
	},
}
