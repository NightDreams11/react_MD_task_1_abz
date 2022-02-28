const webpack = require('webpack');
const merge = require('webpack-merge');
module.exports = {

  webpackFinal: async (config, { configType }) => {

      config.optimization = {
          // minimize: false,
          // minimizer: [],
          splitChunks: {
              minSize: 10000,
              maxSize: 250000,
          },
      };

      return config;
  },
    // Немного уменьшил бандлы
    features: {
        storyStoreV7: true,
    },

  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-create-react-app",
    "@storybook/addon-knobs",
    "@storybook/addon-viewport"
  ],
  "framework": "@storybook/react",
  "core": {
    "builder": "webpack5"
  }
}