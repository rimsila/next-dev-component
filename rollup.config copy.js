import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "rollup-plugin-typescript2";
import sass from "rollup-plugin-sass";
import copy from "rollup-plugin-copy";
import scss from 'rollup-plugin-scss';
import autoprefixer from 'autoprefixer';
import postcss from 'postcss';

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
    commonjs(),
    typescript({ useTsconfigDeclarationDir: true }),
    sass({
      insert: true,
      outputStyle: 'compressed',
      processor: (css) =>
      postcss([autoprefixer])
        .process(css)
        .then((result) => result.css),
    }),
    // scss({
    //   output: packageJson.main_css,
    //   outputStyle: 'compressed',
    //   insert: true,
    //   processor: (css) =>
    //     postcss([autoprefixer])
    //       .process(css)
    //       .then((result) => result.css),
    // }),
    // copy({
    //   targets: [
    //     {
    //       src: "src/variables.scss",
    //       dest: "build",
    //       rename: "variables.scss"
    //     },
    //     {
    //       src: "src/typography.scss",
    //       dest: "build",
    //       rename: "typography.scss"
    //     }
    //   ]
    // })
  ]
};

