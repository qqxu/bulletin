import path from 'path';
import resolve from '@rollup/plugin-node-resolve';
import babel from 'rollup-plugin-babel';

import typescript from 'rollup-plugin-typescript2';
import commonjs from 'rollup-plugin-commonjs';


import tslint from "rollup-plugin-tslint";
import stylelint from 'rollup-plugin-stylelint';
import postcss from 'rollup-plugin-postcss';

import pkg from './package.json';

const paths = {
  input: path.join(__dirname, '/src/index.tsx'),
  output: path.join(__dirname, '/dist'),
};

export default {
  input: paths.input,
  output: [
    // 输出 commonjs 规范的代码
    {
      file: path.join(paths.output, 'index.js'),
      format: 'cjs',
      name: pkg.name,
    },
    // 输出 es 规范的代码
    {
      file: path.join(paths.output, 'index.esm.js'),
      format: 'es',
      name: pkg.name,
    },
  ],
  plugins: [
    stylelint(),
    postcss(),
    tslint({
      throwOnError: true,
      throwOnWarning: true,
      include: ['src/**/*.ts', 'src/**/*.tsx'],
      exclude: ['node_modules/**', '*.js', '*.scss', '*.css'],
    }),
    typescript(),
    babel(),
    commonjs({ include: /node_modules/ }),
    resolve(),
  ],
  external: ['react', 'react-dom'],
};
