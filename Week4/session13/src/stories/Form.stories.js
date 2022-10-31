import React from 'react';
import { Form } from './Form';

export default {
  title: 'Example/Form',
  component: Form,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    handleClick: {action:'handleClick'}
  }
};
const Template = (args) => <Form {...args} />;

export const Text = Template.bind({});
Text.args = {
  type:"text",
  label:"label",
  };

export const Number = Template.bind({});
  Number.args = {
    type:"number",
    label:"label"
    };

export const Email = Template.bind({});
  Email.args = {
    type:"email",
    label:"label"
    };