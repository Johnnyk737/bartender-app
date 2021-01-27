import React from 'react';
import { AdminHome } from '../app/components/admin/AdminHome';
import StoryRouter from 'storybook-react-router';

export default {
  title: 'Admin/Main',
  component: AdminHome,
  decorators: [StoryRouter()]
};

const Template = (args) => <AdminHome {...args} />;
export const Default = Template.bind({});
Default.args = {
};
