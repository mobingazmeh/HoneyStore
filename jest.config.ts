import type { Config } from 'jest';
import nextJest from 'next/jest';

const createJestConfig = nextJest({
  dir: './',
});

const config: Config = {
  coverageProvider: 'v8',
  moduleFileExtensions: ['js', 'ts', 'tsx', 'json'],
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '^@/public/(.*)$': '<rootDir>/public/$1',
    '^@/app/(.*)$': '<rootDir>/src/app/$1',
    '^@/models/(.*)$': '<rootDir>/src/components/models/$1',
    '^@/utils/(.*)$': '<rootDir>/src/utils/$1',
    '^@/Layout/(.*)$': '<rootDir>/src/components/layout/$1',
    '^@/module/(.*)$': '<rootDir>/src/components/module/$1',
    '^@/template/(.*)$': '<rootDir>/src/components/template/$1',
    '^@/lottie/(.*)$': '<rootDir>/src/lottie/$1',
    '^@/3DModels/(.*)$': '<rootDir>/src/3DModels/$1',
    '^@/Slider/(.*)$': '<rootDir>/src/components/module/Slider/$1',
    '^@/providers/(.*)$': '<rootDir>/src/providers/$1',
    '^@/elements/(.*)$': '<rootDir>/src/elements/$1',
    '^@/types/(.*)$': '<rootDir>/src/types/$1',
    '^@/validation/(.*)$': '<rootDir>/src/validation/$1',
    '^@/components/(.*)$': '<rootDir>/src/components/$1',
  },
  extensionsToTreatAsEsm: ['.ts', '.tsx'],
};

export default createJestConfig(config);
