import React from 'react';
import { MultiSelectChip } from '../app/components/admin/FormFields';
import StoryRouter from 'storybook-react-router';

export default {
  title: 'FormFields/MultiSelectChip',
};

const Template = (args) => <MultiSelectChip {...args} />;
export const Default = Template.bind({});
Default.args = {
  label: "Tags",
  placeholder: "Add tags",
  defaultOptions: ["tag1", "tag2"]
};
