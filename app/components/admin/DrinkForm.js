import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel'
import FormHelperText from '@material-ui/core/FormHelperText';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';

import { MultiSelectChip } from './FormFields'

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
  button: {
    margin: theme.spacing(1),
  },
  input: {
    display: 'none',
  },
}));

export const DrinkForm = ({title="New Form"}) => {
  const classes = useStyles();
  const submitForm = (e) => {
    e.preventDefault()
    console.log(e)
  }

  return (
    <>
      <h2>{title}</h2>
      <form className={classes.root}>
        <FormControl required id="form-drink-name">
          <TextField required variant="filled" label="Drink Name" />
          <FormHelperText />
        </FormControl>
        <FormControl id="formImage">
          {/* <InputLabel>Add Image</InputLabel> */}
          <input
            accept="image/*"
            className={classes.input}
            id="contained-button-file"
            multiple
            type="file"
          />
          <label htmlFor="contained-button-file">
            <Button 
                variant="contained" 
                color="primary" 
                component="span"
                className={classes.button}
                startIcon={<CloudUploadIcon />}>
              Upload
            </Button>
          </label>
        </FormControl>
        <FormControl id="formIngredientList">
          <TextField variant="filled" label="Ingredient List" id="input-ingredient-list"/>
          <FormHelperText placeholder="Add Ingredients with measurements, separated by spaces. " />
        </FormControl>
        <FormControl id="formBaseIngredients">
          <TextField 
            InputProps={{
              readOnly: true,
            }} 
            variant="filled" 
            label="Base Ingredients" />
          <FormHelperText />
        </FormControl>
        <FormControl id="formDirections">
          <TextField variant="filled" label="Directions" />
          <FormHelperText />
        </FormControl>
        <FormControl id="formTags">
          <MultiSelectChip label="Tags" placeholder="Add tags" />
        </FormControl>
        <FormControl id="formGlassUsed">
          <TextField variant="filled" label="Glass Used" />
          <FormHelperText />
        </FormControl>
        <FormControl id="formAlcohol">
          <TextField variant="filled" label="Alcohol" />
          <FormHelperText />
        </FormControl>
        <FormControl id="formFlavors">
          <TextField variant="filled" label="Flavors" />
          <FormHelperText />
        </FormControl>
        <Button color="primary" type="submit" onClick={(event) =>submitForm(event)}>
          Submit
        </Button>
      </form>
    </>
  );
}
