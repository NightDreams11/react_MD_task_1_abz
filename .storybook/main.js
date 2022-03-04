const webpack = require('webpack');
const merge = require('webpack-merge');



module.exports = {

    // optimization: {
    //     runtimeChunks: false,
    //     splitChunks: {
    //         cacheGroups: {
    //             vendor: {
    //                 test: /[\/]node_modules[\/]/,
    //                 priority: 1,
    //                 enforce: true,
    //                 chunks: chunk => chunk.name === 'iframe',
    //                 name: 'vendor',
    //             },
    //         },
    //     },
    // },
  // webpackFinal: async (config, { configType }) => {
  //
  //     config.optimization = {
  //         // minimize: false,
  //         // minimizer: [],
  //         splitChunks: {
  //             minSize: 10000,
  //             maxSize: 250000,
  //         },
  //     };
  //
  //     return config;
  // },
    // Немного уменьшил бандлы
    // features: {
    //     storyStoreV7: true,
    // },

  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-create-react-app",
    "@storybook/addon-viewport"
  ],
  "framework": "@storybook/react",
  "core": {
    "builder": "webpack5"
  }
}