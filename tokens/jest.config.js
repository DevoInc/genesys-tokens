module.exports = {
  preset: 'ts-jest',
  roots: ['src'],
  coverageDirectory: 'coverage',
  testResultsProcessor: 'jest-sonar-reporter',
};
