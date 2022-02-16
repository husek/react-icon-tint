module.exports = {
  globals: {
    'ts-jest': {
      tsConfig: 'tsconfig.json',
      ignoreCoverageForDecorators: true,
      ignoreCoverageForAllDecorators: true,
    },
  },
  coverageDirectory: './tests/coverage/',
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(tsx?)$',
  testPathIgnorePatterns: [
    '<rootDir>/.next/',
  ],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  transformIgnorePatterns: [
    'node_modules',
  ],
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
  },
  preset: 'ts-jest',
  testMatch: null,
};
