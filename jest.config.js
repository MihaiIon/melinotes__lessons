module.exports = {
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  reporters: [
    'default',
    ["jest-html-reporters", {
      "publicPath": "./html-report",
      "filename": "report.html"
    }]
  ],
  watchPlugins: [
    'jest-watch-typeahead/filename',
    'jest-watch-typeahead/testname',
  ],
  transform: {
    "^.+\\.js$": "babel-jest"
  }
};
