process.env.NODE_ENV = 'development'

const path = require('path')
import typescript from 'rollup-plugin-typescript2'
const serve = require('rollup-plugin-serve')
import livereload from 'rollup-plugin-livereload'
const replace = require('@rollup/plugin-replace')
import nodeResolve from 'rollup-plugin-node-resolve'

const resolveFile = function(filePath) {
	return path.join(__dirname, '.', filePath)
}

export default {
	input: './src/shoot/index.ts',
	output: [
		{
			file: 'dist/shoot.umd.js',
			format: 'umd',
			name: 'Shoot'
		},
		{
			file: 'dist/shoot.iife.js',
			format: 'iife',
			name: 'Shoot'
		},
		{
			file: 'dist/shoot.esm.js',
			format: 'esm'
		},
		{
			file: 'dist/shoot.cjs.js'
		}
	],
	watch: {
		exclude: 'node_modules/**'
	},
	plugins: [
		nodeResolve(),
		typescript({
			tsconfig: './tsconfig.json'
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
