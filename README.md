<p align="center">
  <a href="https://ant.design">
    <img width="200" src="https://raw.githubusercontent.com/rimsila/next-dev-component/master/src/asset/logo1.png">
  </a>
</p>

<h1 align="center">typescript-react-storybook-sass-library-starter</h1>

<div align="center">

A React UI library stater using Rollup, React Typescript, Storybook, Sass, Classnames and more!

## 🔗 Links And Demo

- [GitHub](https://github.com/rimsila/next-dev-component/tree/typescript-react-storybook-sass-library-starter)
- [Document Components](https://rimsila.github.io/next-dev-component)
- [Npm](https://www.npmjs.com/package/next-dev-component)

## ✨ Features

- 🌈 Enterprise-class UI designed for web applications.
- 🛡 Written in TypeScript with predictable static types.
- 🎨 Powerful theme customization in every detail.

## 📦 Install and build as your own library and publish to NPM

```bash
yarn add next-dev-component
```

Or

```bash
npm i --save next-dev-component
```

## 🔨 Usage

```jsx
// we can only one components to reduce bundle size
import  NextButton from 'next-dev-component/lib/components/NextButton';
const App = () => (
  <>
    <NextButton label="Round" isRound />
  </>
);
```

```jsx
// we can import all components from whole library but it will use big bundle size
import { NextButton } from 'next-dev-component';

const App = () => (
  <>
    <NextButton label="Round" isRound />
  </>
);
```

### TypeScript

`Next Component` is written in TypeScript with complete definitions, check [Use in TypeScript](https://www.typescriptlang.org/docs/handbook/react-&-webpack.html) to getting started.

## Development

Use Gitpod, a free online dev environment for GitHub.

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/rimsila/next-dev-component/tree/typescript-react-storybook-sass-library-starter)

Or clone locally:

```bash
$ git clone https://github.com/rimsila/next-dev-component/tree/typescript-react-storybook-sass-library-starter
$ cd next-dev-component
$ npm install or yarn
$ npm run dev or yarn dev
```

Open your browser and visit http://localhost:6006/ .

## Export static document for storybook

```bash
$ yarn storybook:export
```

## Publish to NPM

```bash
$ npm login (first time require)
$ npm publish
```

## Publish to NPM and deploy document to Github Page

```bash
$ npm login (first time require)
$ yarn pubploy
```


## ❤️ Support us by give a github star or donate a cup of coffee thanks ❤️ .

## ❤️ Collaborators & Maintain with love by:
[Sila](https://github.com/rimsila)

## ❤️ Sponsors with love by:

[![Next Dev Team](https://raw.githubusercontent.com/rimsila/next-dev-component/master/src/asset/logo1.png)](https://next-dev-tech.netlify.com)
