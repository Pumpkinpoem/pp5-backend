module.exports = {
  testEnvironment: 'jest-environment-jsdom-sixteen', // or 'jest-environment-jsdom'
  transformIgnorePatterns: [
    "/node_modules/(?!(@bundled-es-modules|other-module-name)/)"
  ],
  transform: {
    "^.+\\.[t|j]sx?$": "babel-jest",
  },
};
