module.exports = {
  env: {
    node: true,
    es6: true,
  },
  extends: [
    'eslint:recommended',
    '@0x1461a0/eslint-config/typescript',
  ],
  ignorePatterns: ['lib'],
}
