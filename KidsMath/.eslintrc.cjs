module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "airbnb",
    "airbnb/hooks",
    "airbnb-typescript",
    "plugin:prettier/recommended",
  ],
  "prettier/prettier": [
    "error",
    {
      endOfLine: "auto"
    },
  ],
  overrides: [
    {
      env: {
        node: true,
      },
      files: [".eslintrc.{js,cjs,ts}"],
      parserOptions: {
        sourceType: "script",
      },
    },
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "tsconfig.json",
    tsconfigRootDir: __dirname,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
  },
  plugins: ["@typescript-eslint", "react", "prettier"],
  rules: {
    "@typescript-eslint/no-explicit-any": "error",
    "no-underscore-dangle": "off",
    "no-extraneous-dependencies": "off",
    "@typescript-eslint/explicit-module-boundary-types": "error",
    "import/no-cycle": "off",
    "react/jsx-props-no-spreading": "off",
    "@typescript-eslint/typedef": [
      "error",
      {
        variableDeclaration: true,
        arrowParameter: false,
        propertyDeclaration: true,
        variableDeclarationIgnoreFunction: true, // Если хотите игнорировать функции
        parameter: false, // Если хотите требовать типы у параметров функций
      },
    ],
    "no-param-reassign": [
      "error",
      { props: true, ignorePropertyModificationsFor: ["state"] },
    ],
  },
};
