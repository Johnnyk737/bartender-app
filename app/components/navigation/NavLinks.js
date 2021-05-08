import React from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import routes from './navRoutes.json'

const useStyles = makeStyles((theme) => ({
  navlinks: {
    flexGrow: 1
  },
  menuButton: {
    fontWeight: 400,
  },
  noLeftPadding: {
    paddingLeft: 0
  },
  vertical: {
    display: 'flex',
    flexDirection: "column",
    alignItems: "flex-start"
  }
}));


export const NavLinks = ({direction}) => {
  const classes = useStyles();

  const makeButton = (name, path) => {
    return (
      <Button 
        className={`${direction == "vertical" ? classes.noLeftPadding : ''}`}
        {...{
          key: name,
          color: "inherit",
          to: path,
          component: Link,
        }}
      >
        <Typography>

          {name}
        </Typography>
      </Button>
    )
  }

  return (
    <div className={`${classes.navlinks} ${direction == "vertical" ? classes.vertical : ''}`}>
      {routes.map((route) => makeButton(route.name, route.path))}  
    </div>
  );
}
