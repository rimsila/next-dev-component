import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import copy from "rollup-plugin-copy";
import replace from '@rollup/plugin-replace';
import commonjs from '@rollup/plugin-commonjs';
import babel from 'rollup-plugin-babel';
import sass from 'rollup-plugin-sass';
import { terser } from 'rollup-plugin-terser';
import serve from 'rollup-plugin-serve';
import livereload from 'rollup-plugin-livereload';
import typescript from 'rollup-plugin-typescript2';
const isProd = process.env.NODE_ENV === 'production';
import autoprefixer from 'autoprefixer';
import postcss from 'postcss';
const purgecss = require('@fullhuman/postcss-purgecss')
import packageJson from "./package.json";

export default {
  input: "src/index.ts",
  output: [
    {
      file: packageJson.main,
      format: "cjs",
      sourcemap: true
    },
    {
      file: packageJson.module,
      format: "esm",
      sourcemap: true
    }
  ],
  plugins: [
    peerDepsExternal(),
    resolve(),
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
    typescript({ useTsconfigDeclarationDir: true }),
    sass({
      insert: true
      // output: packageJson.main_css,
      // outputStyle: 'compressed',
      // processor: (css) =>
      //   postcss([autoprefixer])
      //     .process(css)
      //     .then((result) => result.css),
    }),
    copy({
      targets: [
        {
          src: "src/variables.scss",
          dest: "dist",
          rename: "variables.scss"
        },
        {
          src: "src/typography.scss",
          dest: "dist",
          rename: "typography.scss"
        }
      ]
    })
  ],
  external: [
    ...Object.keys(packageJson.dependencies || {}),
  ],
};