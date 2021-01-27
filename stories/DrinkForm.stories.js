import React from 'react';
import { DrinkForm } from '../app/components/admin/DrinkForm';
import StoryRouter from 'storybook-react-router';

export default {
  title: 'Admin/DrinkForm',
  component: DrinkForm,
  decorators: [StoryRouter()]
};

const Template = (args) => <DrinkForm {...args} />;
export const Default = Template.bind({});
Default.args = {
  title: "Add/Update Drink Form"
};
