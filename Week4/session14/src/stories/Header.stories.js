import React from 'react';
import { Header } from './Header';
export default {
  title: 'Example/Header',
  component: Header,
  parameters: {
    layout: 'fullscreen',
  },
};
const Template = (args) => <Header {...args} />;

export const Name = Template.bind({});
Name.args = {
  Name : {},
  };

