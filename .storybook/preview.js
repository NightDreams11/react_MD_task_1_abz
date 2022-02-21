export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

// .storybook/preview.js

import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

export const params = {
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
};