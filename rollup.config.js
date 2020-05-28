import path from 'path'

import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import { eslint } from 'rollup-plugin-eslint'
import rollupTypescript from 'rollup-plugin-typescript2'
import commonjs from 'rollup-plugin-commonjs'
import { DEFAULT_EXTENSIONS } from '@babel/core'

import postcss from 'rollup-plugin-postcss';

import simpleVars from 'postcss-simple-vars';

import nested from 'postcss-nested';
import cssnext from 'postcss-cssnext';
import cssnano from 'cssnano';


import pkg from './package.json'

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
    postcss({
      plugins: [
        simpleVars(),
        nested(),
        cssnext({ warnForDuplicates: false, }),
        cssnano(),
      ],
      extensions: ['.scss', '.css']
    }),

    eslint({
      throwOnError: true,
      throwOnWarning: true,
      include: ['src/**/*.ts', 'src/**/*.tsx'],
      exclude: ['node_modules/**', '*.js', '*.scss', '*.css'],
    }),
    commonjs({
      include: [
        'node_modules/**'
      ],
      namedExports: {
        'node_modules/react/index.js': ['Component', 'PureComponent', 'Fragment', 'Children', 'createElement'],
        'node_modules/react-dom/index.js': ['render']
      }
    }),
    rollupTypescript(),
    resolve({
      mainFields: ["jsnext", "preferBuiltins", "browser"],
    }),
    babel({
      exclude: 'node_modules/**',
      extensions: [
        ...DEFAULT_EXTENSIONS,
        '.tsx',
      ],
    })
  ]
};

