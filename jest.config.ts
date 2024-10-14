import type { Config } from "jest"

const config: Config = {
  preset: "ts-jest",
  transform: {
    "^.+\\.(ts|tsx|js|jsx)$": [
      "babel-jest",
      {
        configFile: "./jest.babel.config.js",
      },
    ],
  },
  testEnvironment: "jsdom",
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
  },
  coverageProvider: "babel",
  clearMocks: true,
}

export default config
