process.env.NODE_ENV = 'development'

const path = require('path')
import typescript from 'rollup-plugin-typescript2'
const serve = require('rollup-plugin-serve')
import livereload from 'rollup-plugin-livereload'
const replace = require('@rollup/plugin-replace')
// import { eslint } from 'rollup-plugin-eslint'
import nodeResolve from 'rollup-plugin-node-resolve'

const resolveFile = function(filePath) {
	return path.join(__dirname, '.', filePath)
}

export default {
	input: './src/dunk/index.ts',
	output: [
		{
			file: 'dist/dunk.umd.js',
			format: 'umd',
			name: 'Dunk',
			banner: '/** dunk.umd.js */'
		},
		{
			file: 'dist/dunk.iife.js',
			format: 'iife',
			name: 'Dunk',
			banner: '/** dunk.iife.js */'
		},
		{
			file: 'dist/dunk.esm.js',
			format: 'esm',
			banner: '/** dunk.esm.js */'
		},
		{
			file: 'dist/dunk.cjs.js',
			banner: '/** dunk.cjs.js */'
		}
	],
	watch: {
		exclude: 'node_modules/**'
	},
	plugins: [
		nodeResolve(),
		typescript({
        	tsconfig: './tsconfig.json',
		}),
		replace({
			'process.env.NODE_ENV': JSON.stringify( 'development' )
		}),
		serve({
			port: 10003,
			historyApiFallback: true,
			contentBase: [resolveFile('example'), resolveFile('dist'), '.']
		}),
		livereload()
	]
}
