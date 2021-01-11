import React from 'react'
import { Link } from 'react-router-dom'
// import Card from 'react-bootstrap/Card'
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


// export default class DrinkCard extends React.Component {
//   render() {
//     const { drink } = this.props;
export const DrinkCard = ({drink}) => {
    return (
      <div className="col-lg-3 col-md-4 col-sm-6">
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
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>
              <IconButton aria-label="share">
                <ShareIcon />
              </IconButton>
              <IconButton
                className=""
                aria-expanded="false"
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </IconButton>
            </CardActions>
          </Card>
        </Link>
      </div>
    )
  
}
