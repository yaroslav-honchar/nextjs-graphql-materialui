import nextJest from "next/jest"

const createJestConfig = nextJest({
  dir: "./",
})

const customJestConfig = {
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  testEnvironment: "jsdom",
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
  },
  // testPathIgnorePatterns: [/node_modules/, /.next/, "**/*.d.ts"],
  clearMocks: true,
}

export default createJestConfig(customJestConfig)
