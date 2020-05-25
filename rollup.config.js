import replace from '@rollup/plugin-replace';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from 'rollup-plugin-babel';
import scss from 'rollup-plugin-scss';
import { terser } from 'rollup-plugin-terser';
import serve from 'rollup-plugin-serve';
import livereload from 'rollup-plugin-livereload';
import packageJson from './package.json';
import typescript from 'rollup-plugin-typescript2';
const isProd = process.env.NODE_ENV === 'production';
import autoprefixer from 'autoprefixer';
import postcss from 'postcss';
const purgecss = require('@fullhuman/postcss-purgecss')

const extensions = ['.js', '.ts', '.tsx'];

export default {
  input: 'src/index.ts',
  output: [
    {
      file: packageJson.main,
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: packageJson.module,
      format: 'esm',
      sourcemap: true,
    },
  ],
  plugins: [
    replace({
      'process.env.NODE_ENV': JSON.stringify(
        isProd ? 'production' : 'development'
      ),
    }),
    typescript({ useTsconfigDeclarationDir: true }),
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
      runtimeHelpers: true,
      comments: false,
      presets: [
        '@babel/preset-env',
        '@babel/preset-react',
        '@babel/preset-typescript',
      ],
      plugins: [
        'react-require',
        '@babel/plugin-syntax-dynamic-import',
        '@babel/plugin-proposal-class-properties',
        [
          '@babel/plugin-proposal-object-rest-spread',
          {
            useBuiltIns: true,
          },
        ],

        [
          '@babel/plugin-transform-runtime',
          {
            corejs: 3,
            helpers: true,
            regenerator: true,
            useESModules: false,
          },
        ],
      ],
    }),

    scss({
      output: packageJson.main_css,
      outputStyle: 'compressed',
      processor: (css) =>
        postcss([autoprefixer])
          .process(css)
          .then((result) => result.css),
    }),

    postcss([
      purgecss({
        content: ['src/**/*.html', 'src/**/*.tsx', 'src/**/*.ts'],
      }),
    ]),
    isProd && terser(),
    !isProd &&
      serve({
        host: 'localhost',
        port: 3000,
        open: true,
        contentBase: ['build'],
      }),
    !isProd &&
      livereload({
        watch: 'build',
      }),
  ],
  external: [
    ...Object.keys(packageJson.dependencies || {}),
    ...Object.keys(packageJson.peerDependencies || {}),
  ],
};
