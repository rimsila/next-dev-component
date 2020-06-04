import copy from 'rollup-plugin-copy';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from 'rollup-plugin-babel';
import { terser } from 'rollup-plugin-terser';
import packageJson from './package.json';
import typescript from 'rollup-plugin-typescript2';
import postcss from 'postcss';
import sass from 'rollup-plugin-sass';
const purgecss = require('@fullhuman/postcss-purgecss');
const extensions = ['.js', '.ts', '.tsx'];

export default {
  input: [
    'src/index.ts',
  ],
  output: [
    {
      dir: packageJson.main,
      format: 'cjs',
      sourcemap: 'inline',
      exports: 'named' /** Disable warning for default imports */,
    },
  ],
  preserveModules: true,
  plugins: [
    resolve(),
    typescript({ useTsconfigDeclarationDir: true }),
    peerDepsExternal(),
    resolve({
      extensions,
    }),
    commonjs({
      include: /node_modules/,
      namedExports: {
        'node_modules/react-is/index.js': ['isFragment', 'ForwardRef'],
        'node_modules/react/index.js': [
          'cloneElement',
          'createRef',
          'Component',
          'PureComponent',
          'Fragment',
          'Children',
          'createElement',
          'forwardRef',
        ],
        'node_modules/react-dom/index.js': [
          'findDOMNode',
          'unstable_batchedUpdates',
          'render',
        ],
      },
    }),
    babel({
      extensions,
      exclude: /node_modules/,
      babelrc: false,
      comments: false,
     
    }),

    sass({
      insert: true,
      outputStyle: 'compressed',
    }),

    postcss([
      purgecss({
        content: ['src/**/*.html', 'src/**/*.tsx', 'src/**/*.ts'],
      }),
    ]),
    terser(),
    copy({
      //auto copy to use in lib 
      targets: [
        {
          src: 'src/styles',
          dest: 'lib',
          rename: 'styles',
        },
        {
          src: 'src',
          dest: 'lib/view-dev-code',
        },
      ],
    }),
  ],
  external: [...Object.keys(packageJson.dependencies || {})],
};
