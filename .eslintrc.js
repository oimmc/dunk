module.exports = {
	env: {
		browser: true,
		es6: true,
		node: true
	},
	extends: ['eslint:recommended'],
	globals: {
		Atomics: 'readonly',
		SharedArrayBuffer: 'readonly'
	},
	parserOptions: {
		ecmaFeatures: {
			jsx: true
		},
		ecmaVersion: 2018,
		sourceType: 'module'
	},
	parser: 'babel-eslint',
	// plugins: ['prettier'],
	rules: {
		indent: ['error', 'tab'],
		quotes: ['error', 'single'],
		semi: ['error', 'never'],
		'no-var': 'error',
		'function-paren-newline': ['error', 'multiline'],
		'space-infix-ops': 'error',
		'array-bracket-spacing': ['error', 'never'],
		'object-curly-spacing': ['error', 'always'],
		'newline-per-chained-call': ['error', { ignoreChainWithDepth: 4 }],
		'object-property-newline': ['error', { allowAllPropertiesOnSameLine: true }],
		'linebreak-style': ['off', 'windows'],
		'comma-dangle': ['error', 'never'],
		'comma-spacing': 'error'
	}
}
