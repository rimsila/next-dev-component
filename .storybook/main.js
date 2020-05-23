const path = require('path');
const fs = require('fs');
const lessToJs = require('less-vars-to-js');
const themeVariables = lessToJs(
  fs.readFileSync(
    path.join(__dirname, '../src/styles/ant-theme-override.less'),
    'utf8'
  )
);

module.exports = {
  stories: ['../src/**/*.stories(.tsx|md)'],
  // Add any Storybook addons you want here: https://storybook.js.org/addons/
  addons: [
    // '@storybook/addon-storysource',
    // '@storybook/addon-actions/register',
    // '@storybook/addon-links',
    // '@storybook/addon-knobs/register',
    // '@storybook/addon-notes/register',
    '@storybook/addon-viewport/register',
    // 'storybook-addon-performance/register',
    {
      name: '@storybook/addon-docs',
      options: {
        configureJSX: true,
      },
    },
    {
      name: '@storybook/preset-ant-design',
      options: {
        lessOptions: {
          modifyVars: themeVariables,
        },
      },
    },
  ],

  webpackFinal: async (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      src: path.resolve(__dirname, '../src/'),
      styles: path.resolve(__dirname, '../src/styles'),
    };
    config.module.rules.push({
      test: /\.md$/,
      use: [
        {
          loader: 'markdown-loader',
        },
      ],
    });
    config.module.rules.push({
      test: /\.stories\.tsx?$/,
      loaders: [
        {
          loader: require.resolve('@storybook/source-loader'),
          options: { parser: 'typescript' },
        },
      ],
      enforce: 'pre',
    });
    config.module.rules.push({
      test: /\.scss$/,
      use: ['style-loader', 'css-loader', 'sass-loader'],
      include: path.resolve(__dirname, '../'),
    });

    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      loader: require.resolve('babel-loader'),
      options: {
        presets: [['react-app', { flow: false, typescript: true }]],
      },
    });
    config.resolve.extensions.push('.ts', '.tsx', '.scss');

    return config;
  },
};
