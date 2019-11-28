import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';
import size from 'rollup-plugin-size';

const production = !process.env.ROLLUP_WATCH;

export default {
	input: 'src/main.js',
	output: {
		sourcemap: true,
		format: 'iife',
		file: 'dist/main.js',
	},
	plugins: [
		size(),
		babel({
      exclude: 'node_modules/**',
      plugins: ['sinuous/babel-plugin-htm']
    }),
    resolve(),
		production && terser()
  ]
};
