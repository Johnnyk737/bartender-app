import React from 'react'
import { AdminHeader } from '../app/components/admin/AdminHeader'
import StoryRouter from 'storybook-react-router';

export default {
  title: 'Admin/AdminHeader',
  component: AdminHeader,
  decorators: [StoryRouter()]
};

const Template = (args) => <AdminHeader {...args} />;
export const Default = Template.bind({});
Default.args = {
  open: true
}

