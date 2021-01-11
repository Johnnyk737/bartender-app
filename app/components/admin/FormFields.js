import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Autocomplete from "@material-ui/lab/Autocomplete";

export const MultiSelectChip = ({label, defaultOptions=[], placeholder}) => {
  const [autoCompleteValue, setAutoCompleteValue] = useState(defaultOptions);
  return (
    <>
      <Autocomplete
        multiple
        id="tags-outlined"
        options={autoCompleteValue}
        value={autoCompleteValue}
        onChange={(e, newval, reason) => {
          setAutoCompleteValue(newval);
        }}
        renderInput={(params) => (
          <TextField
            {...params}
            variant="outlined"
            label={label}
            placeholder={placeholder}
            onKeyDown={(e) => {
              if (e.keyCode === 13 && e.target.value) {
                setAutoCompleteValue(autoCompleteValue.concat(e.target.value));
              }
            }}
          />
        )}
      />
    </>
  );
}
