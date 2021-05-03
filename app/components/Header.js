import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
// import Button from '@material-ui/core/Button';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import { NavLinks } from './navigation/NavLinks'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    'font-family': '"Muli",Roboto, Helvetica, sans-serif'
  },
  header: {
    'padding-left': '50px',
    'padding-right': '50px'
  },
  title: {
    width: '12rem',
    'font-family': 'inherit',
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  navlinks: {
    flexGrow: 1
  },
  menuButton: {
    fontWeight: 400
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: '20px',
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

export const Header = () => {
  const classes = useStyles();
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (e) => {
    setSearchTerm(e.target.value)

    console.log(this.state)
    this.doSearch()
  }

  const doSearch = () => {
    let str = "["
    for (let i = 1; i<100000; i++) {
      str += `${i},`
    }
    str+=']'
    console.log(str)
    
  }

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className={classes.header}>
          <Typography id="title" variant="h6" component="h1" className={classes.title}>
            Dranks
          </Typography>
          {/* TODO: at smaller widths, turn this into a hamburger icon */}
          <NavLinks direction="horizontal" />
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  )
}
