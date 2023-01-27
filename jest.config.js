const NextJest = require("next/jest");
const createJestConfig = NextJest({ dir: './' })
const customJestConfig = {
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleDirectories: ['node_modules, <rootDir>/src'],
  testEnvironment: 'jsdom',
}

module.exports = createJestConfig(customJestConfig)
