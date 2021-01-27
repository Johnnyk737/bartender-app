import React, { useState } from 'react';
import { Controller } from 'react-hook-form';
import TextField from '@material-ui/core/TextField';
import Autocomplete from "@material-ui/lab/Autocomplete";

export const MultiSelectChip = ({ control, options, ...args}) => {
  // const [autoCompleteValue, setAutoCompleteValue] = useState(defaultOptions);

  return (
    <Controller
      name={args.name} 
      // label="Tags"
      // placeholder="Add tags"
      defaultValue={[]}
      render={(props) => (
        <Autocomplete
          multiple
          id={`${args.name}-outlined`}
          name={args.name}
          options={options}
          getOptionLabel={option => option}
          filterSelectedOptions
          onChange={(_, data) => props.onChange(data)}
          renderInput={(params) => (
            <TextField
              {...params}
              fullWidth
              variant="outlined"
              label={args.label}
              placeholder={args.placeholder}
            />
          )} />
      )} 
      control={control}
    />
  );
}

export const AutocompleteDropdown = ({control, options, ...args}) => {
  return (
    <Controller
      name={args.name} 
      // label="Tags"
      // placeholder="Add tags"
      defaultValue={[]}
      render={(props) => (
        <Autocomplete
          // multiple
          id={`${args.name}-outlined`}
          name={args.name}
          options={options}
          getOptionLabel={option => option}
          onChange={(_, data) => props.onChange(data)}
          renderInput={(params) => (
            <TextField
              {...params}
              fullWidth
              name={args.name}
              variant="outlined"
              label={args.label}
              placeholder={args.placeholder}
            />
          )} />
      )} 
      control={control}
    />
  );
}
