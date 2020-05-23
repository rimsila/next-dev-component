import { addDecorator, addParameters,setAddon } from '@storybook/react';
import { withPaddings } from 'storybook-addon-paddings';
import { DocsPage, DocsContainer } from '@storybook/addon-docs/blocks';
// import { withKnobs } from '@storybook/addon-knobs';
import { addReadme } from 'storybook-readme';
// import { withPerformance } from 'storybook-addon-performance';
import JSXAddon from 'storybook-addon-jsx';


import {
  INITIAL_VIEWPORTS,
} from '@storybook/addon-viewport';

addParameters({
  // docs: {
  //   container: DocsContainer,
  //   page: DocsPage,
  // },
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
  paddings: [
    { name: 'Small', value: '16px' },
    { name: 'Medium', value: '32px', default: true },
    { name: 'Large', value: '70px' },
  ],
  darkMode: {
    darkMode: {
      darkClass: 'lights-out',
      lightClass: 'lights-on'
    }
  }
});

export default {
  title: 'Component',
};
// setAddon(JSXAddon)
// addDecorator(withPerformance);
addDecorator(addReadme);
addDecorator(withPaddings);
