// @ts-check

import eslintConfigPrettier from "eslint-config-prettier";
import pluginReactConfig from "eslint-plugin-react/configs/recommended.js";
import tseslint from "typescript-eslint";

// Dynamically import globals to work around potential module resolution issues.
const globals = (await import("globals")).default;

export default [
	{
		languageOptions: {
			globals: { ...globals.browser, ...globals.node, es2020: true },
		},
	},
	...tseslint.configs.recommended,
	{
		...pluginReactConfig,
		settings: {
			react: {
				version: "detect",
			},
		},
	},
	eslintConfigPrettier,
	{
		rules: {
			"prettier/prettier": "error", // Assuming eslint-plugin-prettier is still desired
			"@typescript-eslint/no-explicit-any": "warn",
		},
	},
	{
		// Ensure eslint-plugin-prettier is correctly configured if used with flat config
		// This might require `eslint-plugin-prettier/recommended` if available for flat config
		// or manually configuring its rules if `eslintConfigPrettier` isn't enough.
		// For now, relying on eslintConfigPrettier to disable conflicting rules
		// and "prettier/prettier": "error" to report prettier differences as ESLint errors.
		// If eslint-plugin-prettier is used, it should be in devDependencies.
	},
];
