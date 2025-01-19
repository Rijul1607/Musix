import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

// Resolve the directory name and filename
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Initialize FlatCompat for compatibility with legacy ESLint configurations
const compat = new FlatCompat({
  baseDirectory: __dirname,
});

// Define the ESLint configuration
const eslintConfig = [
  ...compat.extends(
    "next/core-web-vitals",
    "next/typescript"
  ),
  {
    rules: {
      // Disable all ESLint rules
      "no-unused-vars": "off",
      "react/prop-types": "off",
      "react/no-unescaped-entities": "off",
      "@next/next/no-page-custom-font": "off",
      // Add more rules here as necessary
      "no-console": "off",  // Disable console warnings/errors
      "no-debugger": "off", // Disable debugger warnings/errors
      "no-alert": "off",    // Disable alert warnings/errors
      "indent": "off",      // Disable indentation errors
      "semi": "off",        // Disable semi-colon warnings/errors
      "quotes": "off",      // Disable quotes warnings/errors
      "react/jsx-uses-react": "off", // Disable React-specific rules
      "react/jsx-uses-vars": "off",
      "no-redeclare": "off", // Disable redeclaration errors
      "no-undef": "off",     // Disable undefined variable errors
      "eqeqeq": "off",       // Disable eqeqeq errors
      // Continue adding any other rules you want to skip
    },
  },
];

export default eslintConfig;
