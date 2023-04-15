module.exports = {
  moduleFileExtensions: ['js', 'vue'],
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
  testEnvironment: "jsdom",
  testEnvironmentOptions: {
    customExportConditions: ["node", "node-addons"],
  },
  transform: {
    "^.+\\.js$": "babel-jest",
    '^.+\\.vue$': '@vue/vue3-jest',
  },
  watchPlugins: [
    'jest-watch-typeahead/filename',
    'jest-watch-typeahead/testname',
  ],
};
