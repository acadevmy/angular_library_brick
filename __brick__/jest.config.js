module.exports = {
  // Required for ESM support
  preset: "jest-preset-angular/presets/defaults-esm",
  testMatch: ["<rootDir>/src/**/*.(spec|jest).ts"],
  setupFilesAfterEnv: ["<rootDir>/src/setup-jest.ts"],
  moduleNameMapper: {
    "^rxjs(/operators$)?$":
      "<rootDir>/node_modules/rxjs/dist/bundles/rxjs.umd.js",
    tslib: "<rootDir>/node_modules/tslib/tslib.es6.mjs",
  },
  transform: {
    '^.+\\.(ts)$': [
      'ts-jest',
      {
        tsconfig: './tsconfig.lib.spec.json',
        useESM: true,
      },
    ],
  },
  extensionsToTreatAsEsm: [".ts"]
};
