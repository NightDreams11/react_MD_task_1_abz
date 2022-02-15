module.exports = {
  webpackFinal: async (config, { configType }) => {
      config.optimization = {
          minimize: false,
          minimizer: [],
      };

      return config;
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