// jest.config.js

export default {
  // ... other configs
  testEnvironment: "jsdom",
  // Add this block to fix the "Vue is not defined" error
  testEnvironmentOptions: {
    customExportConditions: ["node", "node-addons"],
  },
  transform: {
    "^.+\\.ts$": "ts-jest",
    "^.+\\.vue$": "@vue/vue3-jest",
    "^.+\\.js$": "babel-jest",
  },
  moduleFileExtensions: ["js", "ts", "json", "vue"],
  // ... other configs
};
