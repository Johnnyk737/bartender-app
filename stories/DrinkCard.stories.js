import React from 'react';
import { DrinkCard } from '../app/components/DrinkCard.js';
import StoryRouter from 'storybook-react-router';

export default {
  title: 'Components/DrinkCard',
  component: DrinkCard,
  decorators: [StoryRouter()]
};

const Template = (args) => <DrinkCard {...args} />;
export const Default = Template.bind({});
Default.args = {
  drink: {
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
    "tags": "",
    "glass": "",
    "alchohol": ["whiskey", "bourbon"],
    "flavors": ["sweet", "bitter"]
  }
};
