// process.env.NODE_ENV = 'development'

import typescript from 'rollup-plugin-typescript2'
import rollupFileSize from 'rollup-plugin-filesize'
import babel from '@rollup/plugin-babel'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import json from '@rollup/plugin-json'
import { terser } from 'rollup-plugin-terser'
 
export default {
	input: './src/shoot/index.ts',
	output: [
		{
			file: 'build/shoot.umd.js',
			format: 'umd',
			name: 'Shoot'
		},
		{
			file: 'build/shoot.esm.js',
			format: 'esm'
		},
		{
			file: 'build/shoot.cjs.js'
		}
	],
	plugins: [
		resolve(),
		commonjs(),
		json(),
		typescript({
			tsconfig: './tsconfig.json'
		}),
		rollupFileSize(),
		babel({
			extensions: ['.js', '.ts'],
			babelHelpers: 'runtime',
			exclude: ['node_modules/**']
		}),
		terser()
	]
}