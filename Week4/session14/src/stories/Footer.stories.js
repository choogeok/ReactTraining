import React from 'react';
import { Footer } from './Footer';

export default {
  title: 'Example/Footer',
  component: Footer,
  parameters: {
    layout: 'fullscreen',
  },
  };

const Template = (args) => <Footer {...args} />;

export const Display = Template.bind({});
Display.args = {
  reminder:{} ,
  outstanding:{},
  };
