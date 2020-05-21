import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';
import sass from 'rollup-plugin-sass';
import copy from 'rollup-plugin-copy';

import packageJson from './package.json';

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
    peerDepsExternal(),
    resolve(),
    commonjs({
      include: '/node_modules/',
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
      insert: true,
    }),

    copy({
      targets: [
        {
          src: 'src/styles/variables.scss',
          dest: 'build',
          rename: 'variables.scss',
        },
        {
          src: 'src/styles/typography.scss',
          dest: 'build',
          rename: 'typography.scss',
        },
      ],
    }),
  ],
  external: ['react', 'react-dom', 'prop-types', 'antd','react-router','classnames'],
};
