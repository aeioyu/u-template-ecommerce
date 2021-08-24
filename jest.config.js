module.exports = {
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
  },
  transform: { '^.+\\.stories\\.tsx?$': '<rootDir>/storyshots.inject', '\\.[jt]sx?$': 'babel-jest' },
};
