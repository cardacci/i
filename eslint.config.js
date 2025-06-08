import js from '@eslint/js';
import tseslint from '@typescript-eslint/eslint-plugin';
import tsparser from '@typescript-eslint/parser';
import prettierConfig from 'eslint-config-prettier';
import importPlugin from 'eslint-plugin-import';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';

export default [
	// Base configuration.
	js.configs.recommended,

	// Global settings.
	{
		languageOptions: {
			globals: {
				__dirname: 'readonly',
				__filename: 'readonly',
				Buffer: 'readonly',
				clearInterval: 'readonly',
				clearTimeout: 'readonly',
				console: 'readonly',
				document: 'readonly',
				fetch: 'readonly',
				global: 'readonly',
				localStorage: 'readonly',
				navigator: 'readonly',
				process: 'readonly',
				sessionStorage: 'readonly',
				setInterval: 'readonly',
				setTimeout: 'readonly',
				window: 'readonly'
			}
		}
	},

	// TypeScript configuration.
	{
		files: ['**/*.{ts,tsx}'],
		languageOptions: {
			parser: tsparser,
			parserOptions: {
				ecmaFeatures: {
					jsx: true
				},
				ecmaVersion: 'latest',
				sourceType: 'module'
			}
		},
		plugins: {
			'@typescript-eslint': tseslint,
			import: importPlugin,
			react,
			'react-hooks': reactHooks
		},
		rules: {
			// TypeScript rules.
			'@typescript-eslint/no-explicit-any': 'warn',
			'@typescript-eslint/no-unused-vars': [
				'warn',
				{
					argsIgnorePattern: '^_',
					destructuredArrayIgnorePattern: '^_',
					ignoreRestSiblings: true,
					varsIgnorePattern: '^_'
				}
			],

			// Import rules.
			'import/first': 'error',
			'import/newline-after-import': 'error',
			'import/no-duplicates': 'error',
			'import/order': [
				'error',
				{
					alphabetize: {
						caseInsensitive: true,
						order: 'asc'
					},
					groups: ['builtin', 'external', 'internal', ['parent', 'sibling'], 'index', 'object', 'type'],
					'newlines-between': 'always',
					pathGroups: [
						{
							group: 'external',
							pattern: 'react',
							position: 'before'
						},
						{
							group: 'external',
							pattern: 'react-*',
							position: 'before'
						},
						{
							group: 'internal',
							pattern: '@/**',
							position: 'before'
						}
					],
					pathGroupsExcludedImportTypes: ['react', 'builtin']
				}
			],

			// Disable problematic rules for TypeScript.
			'no-undef': 'off',
			'no-unused-vars': 'off',

			// React rules.
			'react/jsx-sort-props': [
				'error',
				{
					callbacksLast: false,
					ignoreCase: true,
					noSortAlphabetically: false,
					reservedFirst: false,
					shorthandFirst: false,
					shorthandLast: false
				}
			],
			'react/prop-types': 'off',
			'react/react-in-jsx-scope': 'off',

			// Object properties sorting.
			'sort-keys': [
				'error',
				'asc',
				{
					caseSensitive: false,
					minKeys: 2,
					natural: true
				}
			]
		},
		settings: {
			'import/resolver': {
				node: {
					extensions: ['.js', '.jsx', '.ts', '.tsx']
				},
				typescript: {
					alwaysTryTypes: true,
					project: './tsconfig.json'
				}
			},
			react: {
				version: 'detect'
			}
		}
	},

	// Configuration for constants/enums files - disable unused vars and sorting.
	{
		files: ['**/constants/**/*.{ts,tsx}', '**/enums/**/*.{ts,tsx}'],
		rules: {
			'@typescript-eslint/no-unused-vars': 'off',
			'no-unused-vars': 'off',
			'sort-keys': 'off' // Disable object sorting for constants
		}
	},

	// JavaScript configuration.
	{
		files: ['**/*.{js,jsx}'],
		languageOptions: {
			ecmaVersion: 'latest',
			parserOptions: {
				ecmaFeatures: {
					jsx: true
				}
			},
			sourceType: 'module'
		},
		plugins: {
			import: importPlugin,
			react,
			'react-hooks': reactHooks
		},
		rules: {
			// React JSX props sorting.
			'react/jsx-sort-props': [
				'error',
				{
					callbacksLast: false,
					ignoreCase: true,
					noSortAlphabetically: false,
					reservedFirst: false,
					shorthandFirst: false,
					shorthandLast: false
				}
			],
			'react/prop-types': 'off',
			'react/react-in-jsx-scope': 'off',

			// Object properties sorting.
			'sort-keys': [
				'error',
				'asc',
				{
					caseSensitive: false,
					minKeys: 2,
					natural: true
				}
			]
		}
	},

	// Prettier integration (must be last).
	prettierConfig
];
