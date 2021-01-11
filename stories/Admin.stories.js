import React from 'react';
import { Admin } from '../app/components/admin/Admin';
import StoryRouter from 'storybook-react-router';

export default {
  title: 'Admin',
  component: Admin,
  decorators: [StoryRouter()]
};

const Template = (args) => <Admin {...args} />;
export const Default = Template.bind({});
Default.args = {
};
