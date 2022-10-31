import React from 'react';
import { Footer } from './Footer';

export default {
  title: 'Example/Footer',
  component: Footer,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
  };

const Template = (args) => <Footer {...args} />;

export const Display = Template.bind({});
Display.args = {
  Address: {},
  Contact: {},
  OfficeHours: {},
 };
