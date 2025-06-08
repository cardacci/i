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
			'@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],

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

			// React rules.
			'react/prop-types': 'off',
			'react/react-in-jsx-scope': 'off'
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
			'react/prop-types': 'off',
			'react/react-in-jsx-scope': 'off'
		}
	},

	// Prettier integration (must be last).
	prettierConfig,

	// Global settings.
	{
		languageOptions: {
			globals: {
				browser: true,
				es2021: true,
				node: true
			}
		}
	}
];
