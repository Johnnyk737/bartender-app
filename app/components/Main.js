import React, { useState } from 'react'
// import Container from 'react-bootstrap/Container'
// import Row from 'react-bootstrap/Row'
import { Header } from './Header'
import { Footer } from './Footer'
import { DrinkCard } from './DrinkCard'
// import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid'
import { makeStyles, ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import theme from '../styles/theme'

import json from '../../data.json'

/**
 * Home page
 * Show the most recently added drinks
 * Each page has header and footer
 * Home page has 'How to use'
 * Explain 'Find your Drink'
 * Explain what site offers
 * Link to Google Play/Apple App store for app
 */

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing(2),
  },
}));

export const Main = () => {
  const [drinkList, setDrinkList] = useState(json)
  const classes = useStyles();

  const generateDrinkList = () => {
    console.log(drinkList)
  };

  // generateDrinkList();

  let drinkListMap = drinkList.map(drink=>{
    return (
      <DrinkCard key={drink.id} drink={drink} />
    )
  });

  console.log(theme)

  return (
    <ThemeProvider theme={theme}>
      <Header />
      {/* <section> */}
        {/* TODO: we'll put a big picture of a bar in the background */}
        <Grid
          container
          className={classes.root}
          // justify="center"
          spacing={3}
          direction="row">
          { drinkListMap || null}
        </Grid>
      {/* </section> */}
      <Footer />
    </ThemeProvider>
  )
}
