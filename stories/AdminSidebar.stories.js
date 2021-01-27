import React from 'react'
import { AdminSidebar } from '../app/components/admin/AdminSidebar'
import StoryRouter from 'storybook-react-router';

export default {
  title: 'Admin/AdminSidebar',
  component: AdminSidebar,
  decorators: [StoryRouter()]
};

const Template = (args) => <AdminSidebar {...args} />;
export const Default = Template.bind({});
Default.args = {
  open: true
}
