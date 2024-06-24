import globals from "globals";
import pluginJs from "@eslint/js";

export default [
  {
    files: ["**/*.js"], // Include all JS files
    ignores: ["node_modules/**", "dist/**", "build/**", "public/**"], // Ignore patterns
    languageOptions: {
      sourceType: "commonjs",
      globals: {
        ...globals.node, // Node.js globals
      },
    },
    rules: {
      "eqeqeq": "error", // Enforce the use of === and !==
      "no-console": "warn", // Warn about console usage
      "no-debugger": "error", // Disallow debugger
      "curly": ["error", "all"], // Require braces for all control statements
      "semi": ["error", "always"], // Require semicolons at the end of statements
      "quotes": ["error", "double", { "avoidEscape": true }], // Enforce the use of double quotes
    },
  },
  {
    languageOptions: {
      globals: globals.browser,
    },
  },
  pluginJs.configs.recommended,
];
