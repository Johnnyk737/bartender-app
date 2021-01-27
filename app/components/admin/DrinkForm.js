import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel'
import FormHelperText from '@material-ui/core/FormHelperText';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';

import { MultiSelectChip, AutocompleteDropdown } from './FormFields'

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      // width: '25ch',
    },
    width: 500
  },
  button: {
    margin: theme.spacing(1),
  },
  input: {
    display: 'none',
  },
}));

const glassList = [
  "Lowball",
  "Collins",
  "Highball",
  "Absinthe",
  "Chalice", 
  "Champagne coupe",
  "Champagne flute",
  "Cocktail",
  "Glencairn",
  "Hurricane",
  "Margarita",
  "Sherry",
  "Snifter",
  "Wine"
]

const mockData = {
  "id": 1,
  "drinkName": "Old Fashioned",
  "imageUrl": "https://cdn.liquor.com/wp-content/uploads/2018/05/08113350/bourbon-old-fashioned-720x720-recipe.jpg",
  "ingredientList": ["1.5 fl oz Bourbon Whiskey", 
                    "2 tsp simple syrup", 
                    "2 dashes Angostura bitters", 
                    "1 orange slice",
                    "1 Marachino cherry (Optional)", 
                    "Ice cubes"],
  "baseIngredients": ["bourbon whiskey", "simple syrup", "angostura bitters", "orange", "cherry"],
  "directions": ["Pour the simple syrup, water, and bitters into a mixing glass. Stir to combine",
                "Place the ice cubes in the glass.",
                "Pour bourbon over the ice.",
                "Garnish with the orange slice and maraschino cherry."],
  "tags": ["whiskey", "bourbon"],
  "glass": "",
  "alchohol": ["whiskey", "bourbon"],
  "flavors": ["sweet", "bitter"]
}

/**
 * buildOptions - Finds all existing values based on type from db.
 * Then returns an array of those values
 * @param {String} type 
 */
const buildOptions = (type) => {
  if (type == "glass") return glassList.sort();
  return [];
}

/**
 * DrinkForm class to handle adding and updating drinks. Takes a title,
 * action, and default values. If updating, must provide default values.
 * @param {String} title - title of form 
 * @param {String} action - allowable values: add, update
 * @param {String} defaultValues - object with default values for form
 */
export const DrinkForm = ({title="Add Drink", action="add", defaultValues={}}) => {
  const { register, control, handleSubmit } = useForm({
    defaultValues: mockData
  })
  // const { tag, setTags } = React.useState();
  const classes = useStyles();
  const submitForm = (e) => {
    // e.preventDefault()
    console.log(e)
  }

  return (
    <>
      <h2>{title}</h2>
      <form className={classes.root} onSubmit={handleSubmit(submitForm)}>
        <FormControl id="form-drink-name">
          <TextField 
            required
            fullWidth 
            variant="filled" 
            name="drinkName"
            label="Drink Name" 
            inputRef={register({required: true})} />
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
          <TextField
            fullWidth
            inputRef={register}
            variant="filled"
            name="ingredientList"
            label="Ingredient List"
            id="input-ingredient-list"
            placeholder="Add Ingredients with measurements, separated by spaces..." />
          <FormHelperText  />
        </FormControl>
        {/* <FormControl id="formBaseIngredients">
          <TextField 
            // InputProps={{
            //   readOnly: true,
            // }} 
            inputRef={register}
            variant="filled" 
            label="Base Ingredients" />
          <FormHelperText />
        </FormControl> */}
        <FormControl id="formDirections">
          <TextField
            fullWidth
            inputRef={register}
            variant="filled"
            name="directions"
            label="Directions" />
          <FormHelperText />
        </FormControl>
        <MultiSelectChip 
          name="tags"
          label="Tags"
          placeholder="Add tags"
          control={control}
          options={buildOptions("tags")} />
        {/* https://github.com/react-hook-form/react-hook-form/tree/master/examples */}
        {/* <FormControl id="formGlassUsed">
          <TextField
            fullWidth
            inputRef={register}
            variant="filled"
            name="glassUsed"
            label="Glass Used" />
          <FormHelperText />
        </FormControl> */}
        <AutocompleteDropdown 
          name="glass"
          label="Glass"
          placeholder="Add glass"
          control={control} 
          options={buildOptions("glass")} />
        <FormControl id="formAlcohol">
          <TextField
            fullWidth
            inputRef={register}
            variant="filled"
            name="alcohol"
            label="Alcohol" />
          <FormHelperText />
        </FormControl>
        <FormControl id="formFlavors">
          <TextField
            fullWidth
            inputRef={register}
            variant="filled"
            name="flavors"
            label="Flavors" />
          <FormHelperText />
        </FormControl>
        <Button color="primary" type="submit">
          Submit
        </Button>
      </form>
    </>
  );
}
