import React from 'react';
import { CardDisplay } from './CardDisplay';

export default {
  title: 'Example/Card',
  component: CardDisplay,
  parameters: {
    layout: 'fullscreen',
  },
 };
const Template = (args) => <CardDisplay {...args} />;

export const CardImg = Template.bind({});
CardImg.args = {
  Name: {},
  Title: {},
  Description: {},
  Contact: {},
};

