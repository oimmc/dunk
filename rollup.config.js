import typescript from 'rollup-plugin-typescript2'
import rollupFileSize from 'rollup-plugin-filesize'
import babel from '@rollup/plugin-babel'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import json from '@rollup/plugin-json'
// import { uglify } from 'rollup-plugin-uglify'
// import { terser } from "rollup-plugin-terser"
 
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
			file: 'dist/dunk.esm.js',
			format: 'esm',
			banner: '/** dunk.esm.js */'
		},
		{
			file: 'dist/dunk.cjs.js',
			banner: '/** dunk.cjs.js */'
		}
	],
    plugins: [
		resolve(),
		commonjs(),
		json(),
		typescript({
        	tsconfig: './tsconfig.json',
		}),
		rollupFileSize(),
		babel({
			extensions: ['.js', '.ts'],
			babelHelpers: 'runtime',
			exclude: ['node_modules/**']
		}),
		// uglify()
		// terser()
    ]
}