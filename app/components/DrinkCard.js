import React from 'react'
import { Link } from 'react-router-dom'
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid'

export const DrinkCard = ({drink}) => {
    return (
      <Grid item md xs>
        
      {/* <div className="col-lg-3 col-md-4 col-sm-6"> */}
        <Link to={{
          pathname: `/drink/${drink.id}`,
          state: {
            drink: drink
          }}}>
          <Card style={{ width: '14rem' }}>
            <CardMedia 
              component="img"
              variant="top" 
              image={drink.imageUrl} />
            <CardContent>
              <Typography align="center">
                {drink.drinkName}
              </Typography>
            </CardContent>
          </Card>
        </Link>
      {/* </div> */}
      </Grid>
    )
}
