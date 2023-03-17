
// module.exports = {
//     preset: '@vue/cli-plugin-unit-jest'
// }
module.exports = {
    moduleFileExtensions: [
      'js',
      'jsx',
      'json',
      'vue'
    ],
    testEnvironment: 'jsdom',
    "bail": 1,
    "verbose": true,
    testMatch: [
        '**/tests/**/*.spec.js',
        '**/tests/**/*.test.js',
    ],
    transform: {
      '^.+\\.vue$': 'vue-jest',
      '.+\\.(css|styl|less|sass|scss|svg|png|jpg|ttf|woff|woff2)$': 'jest-transform-stub',
      '^.+\\.jsx?$': 'babel-jest',
      'vee-validate/dist/rules': 'babel-jest',
    },
    transformIgnorePatterns: [
      '/node_modules/(?!vee-validate/dist/rules)', 
      '<roodDir>/node_modules/(?!vee-validate/dist/rules)',
      'node_modules/(?!vue-router|@babel|vuetify)'],
    testPathIgnorePatterns: [
        "/node_modules/"
      ],
    moduleNameMapper: {
      '^@/(.*)$': '<rootDir>/src/$1',
      '^@/(.*)$': '<rootDir>/resources/js/$1',
    },
    snapshotSerializers: [
      'jest-serializer-vue'
    ],

  }
