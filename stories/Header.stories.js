import React from 'react';
import { Header } from '../app/components/Header.js';
import StoryRouter from 'storybook-react-router';

export default {
  title: 'Components/Header',
  component: Header,
  decorators: [StoryRouter()]
};

const Template = (args) => <Header {...args} />;
export const Default = Template.bind({});
Default.args = {
  searchTerm: ''
};
