module.exports = {
  env: {
    es2021: true
  },
  extends: ['plugin:vue/essential', 'airbnb-base'],
  parserOptions: {
    ecmaVersion: 12,
    parser: '@typescript-eslint/parser',
    sourceType: 'module'
  },
  plugins: ['vue', '@typescript-eslint'],
  rules: {
    'vue/multi-word-component-names': 'off',
    'import/no-unresolved': 'off',
    'comma-dangle': 'off',
    'vue/valid-v-model': 'off',
    quotes: 'off',
    'implicit-arrow-linebreak': 'off',
    'function-paren-newline': 'off',
    'operator-linebreak': 'off',
    'no-plusplus': 'off',
    'vue/no-reserved-component-names': 'off',
    'import/extensions': 'off',
    'no-unused-vars': 'off',
    'no-param-reassign': 'off',
    'no-shadow': 'off',
    'import/prefer-default-export': 'off',
    'no-undef': 'off'
  }
};
