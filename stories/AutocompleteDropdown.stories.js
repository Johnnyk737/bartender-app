import React from 'react';
import { AutocompleteDropdown } from '../app/components/admin/FormFields';
import { useForm } from 'react-hook-form';

export default {
  title: 'FormFields/AutocompleteDropdown',
  // component: MultiSelectChip
};

const options = ["Tag1", "Tag2", "Tag3", "Tag4", "Tag5", "Tag6"];
const templateArgs = {
  options: options,
  name: "tags",
  label: "Tags"
}

const Template = (args) => {
  const { control } = useForm();

  return <AutocompleteDropdown control={control} {...args} />
}

export const Default = Template.bind({});
Default.args = {
  ...templateArgs
};


export const WithDefaultValues = Template.bind({})
WithDefaultValues.args = {
  ...templateArgs,
  defaultValues: ["Tag1"],
}
